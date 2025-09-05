import { graphql, Link, PageProps } from 'gatsby'
import styled from 'styled-components'

import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'

const BlogPostTemplate = (props: PageProps<Queries.BlogPostBySlugQuery>) => {
  const post = props.data.markdownRemark
  const { previous, next } = props.data

  return (
    <Page
      {...props}
      seo={{
        title: post?.frontmatter?.title || '',
        description: post?.frontmatter?.description || post?.excerpt || ''
      }}
      content={
        <SubpageSection narrow>
          <BackToBlog>
            <span>← </span>
            <StyledGatsbyLink to="/blog">Back to blog</StyledGatsbyLink>
          </BackToBlog>
          <DateAndTimeToRead>
            {post?.frontmatter?.date && (
              <>
                <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                <span> · </span>
              </>
            )}
            {post?.timeToRead && `${post.timeToRead} min read`}
          </DateAndTimeToRead>

          <SectionDivider />

          <ArticleStyled itemScope itemType="http://schema.org/Article">
            <TextElement isSmall dangerouslySetInnerHTML={{ __html: post?.html || '' }} itemProp="articleBody" />
          </ArticleStyled>

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
        </SubpageSection>
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
        featuredImage {
          childImageSharp {
            gatsbyImageData(quality: 100)
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
  color: ${({ theme }) => theme.textPrimary};
`

const BackToBlog = styled.div``

const DateAndTimeToRead = styled.p`
  color: ${({ theme }) => theme.textSecondary};
`

const ArticleStyled = styled.article`
  * {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  h3:first-child {
    font-size: var(--fontSize-36);
    margin-bottom: var(--spacing-4);
    line-height: 1.2;
  }

  p {
    margin: var(--spacing-6) auto !important;
  }

  figcaption {
    color: ${({ theme }) => theme.textTertiary};
    margin-top: var(--spacing-2);
  }

  .gatsby-resp-image-wrapper {
    max-width: 700px !important;
  }
`
