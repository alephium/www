import { graphql, PageProps } from 'gatsby'

import ArrowedLink from '../components/ArrowedLink'
import Page from '../components/customPageComponents/Page'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import SectionDivider from '../components/SectionDivider'
import { updateSrcSet } from '../images/utils'
// import Image from 'gatsby-image'

const BlogPostTemplate = (props: PageProps<Queries.BlogPostBySlugQuery>) => {
  const post = props.data.markdownRemark
  const { previous, next } = props.data
  const mobileFeaturedImage = post?.frontmatter?.featuredImage?.mobile?.fluid
  const desktopFeaturedImage = post?.frontmatter?.featuredImage?.desktop?.fluid
  const seoFeaturedImage = post?.frontmatter?.featuredImage?.seo?.resize
  const authors = post?.frontmatter?.authors

  if (desktopFeaturedImage) {
    desktopFeaturedImage.srcSet = updateSrcSet(desktopFeaturedImage.srcSet, 1920)
  }
  const sources = [
    mobileFeaturedImage,
    {
      ...desktopFeaturedImage,
      media: `(min-width: 768px)`
    }
  ]
  const tags = post?.frontmatter?.tags

  const subtitle = (
    <div>
      <time dateTime={post?.frontmatter?.date}>{post?.frontmatter?.date}</time>
      <span> · </span>
      {/* <span>{post.fields.readingTime.text}</span> */}
      {/* {authors && <Authors authors={authors} />} */}
    </div>
  )

  return (
    <Page
      {...props}
      seo={{
        title: post?.frontmatter?.seo?.title || post?.frontmatter?.title,
        description: post?.frontmatter?.seo?.description || post?.frontmatter?.description || post?.excerpt,
        image: seoFeaturedImage
      }}
      content={
        <>
          {/* {desktopFeaturedImage && <Image fluid={sources} alt={`${post.frontmatter.title} featured image`} />} */}
          <SubpageHeroSection>
            <h1>{post?.frontmatter?.title}</h1>
            <hr />
            <p>{post?.frontmatter?.description}</p>
          </SubpageHeroSection>

          <SectionDivider />

          <SubpageSection>
            <article className="blog-post" itemScope itemType="http://schema.org/Article">
              <section dangerouslySetInnerHTML={{ __html: post?.html || '' }} itemProp="articleBody" />
            </article>

            {/* {tags && <TagsList tags={tags} />} */}
          </SubpageSection>

          <hr />

          <SubpageSection>
            <nav className="blog-post-nav">
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0
                }}
              >
                <li>
                  {previous && (
                    <ArrowedLink to={previous.fields.slug} rel="prev" direction="left">
                      {previous.frontmatter.title}
                    </ArrowedLink>
                  )}
                </li>
                <li>
                  {next && (
                    <ArrowedLink to={next.fields.slug} rel="next" direction="right">
                      {next.frontmatter.title}
                    </ArrowedLink>
                  )}
                </li>
              </ul>
            </nav>
          </SubpageSection>
        </>
      }
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      # fields {
      #   readingTime {
      #     text
      #   }
      # }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        authors {
          name
          page
          externalLink
          externalName
        }
        seo {
          title
          description
        }
        featuredImage {
          desktop: childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 600, fit: COVER, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
          mobile: childImageSharp {
            fluid(maxWidth: 768, maxHeight: 600, fit: COVER, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
          seo: childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
