import { graphql, Link, PageProps } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Page from '../components/customPageComponents/Page'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import styled from 'styled-components'

const BlogPostTemplate = (props: PageProps<Queries.BlogPostBySlugQuery>) => {
  const post = props.data.markdownRemark
  const { previous, next } = props.data
  const desktopImage = post?.frontmatter?.featuredImage?.desktop
  const seoImage = post?.frontmatter?.featuredImage?.seo

  const featuredImage = desktopImage ? getImage(desktopImage) : null

  const subtitle = (
    <div>
      {post?.frontmatter?.date && <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>}
      <span> · </span>
      <span>{post?.timeToRead} min read</span>
    </div>
  )

  return (
    <Page
      {...props}
      seo={{
        title: post?.frontmatter?.title || '',
        description: post?.frontmatter?.description || post?.excerpt || '',
        image: seoImage
      }}
      content={
        <>
          <SubpageHeroSection
            backgroundImage={featuredImage || undefined}
            backgroundImageAlt={post?.frontmatter?.title || 'Blog post featured image'}
          >
            <h1>{post?.frontmatter?.title}</h1>
            <hr />
            <p>{post?.frontmatter?.description}</p>
            <p>{subtitle}</p>
          </SubpageHeroSection>

          <SectionDivider />

          <SubpageSection narrow>
            <article itemScope itemType="http://schema.org/Article">
              <TextElement isSmall dangerouslySetInnerHTML={{ __html: post?.html || '' }} itemProp="articleBody" />
            </article>
          </SubpageSection>

          <SectionDivider />

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
                    <>
                      <span>← </span>
                      <StyledGatsbyLink to={previous.fields?.slug ?? ''} rel="prev">
                        {previous.frontmatter?.title}
                      </StyledGatsbyLink>
                    </>
                  )}
                </li>
                <li>
                  {next && (
                    <>
                      <StyledGatsbyLink to={next.fields?.slug ?? ''} rel="next">
                        {next.frontmatter?.title}
                      </StyledGatsbyLink>
                      <span> →</span>
                    </>
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
      timeToRead
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        # seo {
        #   title
        #   description
        # }
        featuredImage {
          desktop: childImageSharp {
            gatsbyImageData(
              width: 1920
              height: 600
              layout: CONSTRAINED
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
          seo: childImageSharp {
            gatsbyImageData(width: 1200, layout: FIXED)
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

const StyledGatsbyLink = styled(Link)`
  color: ${({ theme }) => theme.link};
`
