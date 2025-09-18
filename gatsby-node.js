const webpack = require('webpack')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
        fs: false
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^netlify-identity-widget$/
      })
    ]
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for news posts
  const newsPost = path.resolve(`./src/templates/news-post.tsx`)

  // Get all markdown news posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fields: { contentType: { eq: "news" } } }
          sort: { frontmatter: { date: DESC } }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your news posts`, result.errors)
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create news posts pages
  // But only if there's at least one markdown file found at "content/news" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: newsPost,
        context: {
          id: post.id,
          slug: post.fields.slug,
          previousPostId,
          nextPostId
        }
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const type = getNode(node.parent).sourceInstanceName

    let slugPrefix = ''

    if (type !== 'page') {
      slugPrefix = `/${type}`
    }

    if (type === 'news') {
      slugPrefix = `${slugPrefix}/post`
    }

    createNodeField({
      name: `slug`,
      node,
      value: `${slugPrefix}${value}`
    })
    createNodeField({
      name: `contentType`,
      node,
      value: type
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // news posts are stored inside "content/news" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
      spotify: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      published: Boolean
    }

    type Fields {
      slug: String
      contentType: String
    }
  `)
}
