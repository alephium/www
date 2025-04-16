module.exports = {
  graphqlTypegen: true,
  siteMetadata: {
    siteUrl: 'https://alephium.org',
    title: 'Alephium: A new paradigm',
    description:
      "Alephium is a sharded L1 blockchain scaling and improving on Bitcoin's PoW  & UTXO. A highly performant, secure, and energy efficient network for DeFi & dApps.",
    social: {
      twitter: 'alephium'
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alephium`,
        short_name: `Alephium`,
        start_url: `/`,
        icon: 'src/images/favicon.ico',
        icons: []
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              //...
            }
          }
        ]
      }
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './src/content'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/svgs/
        }
      }
    },
    // TODO: Re-enable when CMS is correctly set up
    // {
    //   resolve: 'gatsby-plugin-netlify-cms',
    //   options: {
    //     manualInit: true,
    //     modulePath: './cms/index.ts',
    //     enableIdentityWidget: false
    //   }
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map((node) =>
                Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }]
                })
              ),
            query: `{
              allMarkdownRemark(
                filter: {fields: {contentType: {eq: "blog"}}}
                sort: {frontmatter: {date: DESC}}
              ) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: '/rss.xml',
            title: "Alephium's Blog RSS Feed"
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-csp',
      options: {
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        directives: {
          'style-src': "'self' 'unsafe-inline' https://www.gstatic.com",
          'script-src':
            "'self' 'unsafe-inline' 'unsafe-eval' https://gc.zgo.at https://prod.spline.design https://translate.googleapis.com https://translate.google.com https://translate-pa.googleapis.com https://cdn.usefathom.com",
          'default-src': "'none'",
          'manifest-src': "'self'",
          'connect-src':
            "'self' backend.mainnet.alephium.org api.github.com alephium.goatcounter.com https://prod.spline.design https://api.coingecko.com https://alph-richlist.vercel.app https://api.llama.fi https://translate.googleapis.com https://translate-pa.googleapis.com https://*.usefathom.com",
          'img-src':
            "'self' https://cdn-images-1.medium.com https://prod.spline.design https://pbs.twimg.com/ https://media.licdn.com https://assets.coingecko.com https://fonts.gstatic.com https://www.gstatic.com https://www.google.com https://translate.googleapis.com https://translate.google.com data: https://alephium.goatcounter.com blob: https://www2.alephium.org blob: https://www.alephium.org",
          'frame-ancestors': "'none'"
        }
      }
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'CHLDDGXF',
        includedDomains: ['alephium.org']
      }
    }
  ]
}
