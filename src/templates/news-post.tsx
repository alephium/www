import { graphql, Link, PageProps } from 'gatsby'
import styled from 'styled-components'

import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import GatsbyImageWrapper from '../components/GatsbyImageWrapper'
import TableOfContents from '../components/pages/news/TableOfContents'
import SectionDivider from '../components/SectionDivider'

const NewsPostTemplate = (props: PageProps<Queries.NewsPostBySlugQuery>) => {
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
        <>
          <SubpageSection narrow>
            <BackToHome>
              <span>← </span>
              <StyledGatsbyLink to="/news">Back to homepage</StyledGatsbyLink>
            </BackToHome>
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
              <TextElement isSmall>
                <h1>{post?.frontmatter?.title}</h1>
              </TextElement>

              <GatsbyImageWrapper
                image={post?.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData}
                alt={post?.frontmatter?.title ?? ''}
                style={{ width: '100%', height: 'auto', marginBottom: 'var(--spacing-6)' }}
              />
              <TextElement isSmall dangerouslySetInnerHTML={{ __html: post?.html || '' }} itemProp="articleBody" />
            </ArticleStyled>

            <SectionDivider />

            <nav className="news-post-nav">
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
          <TableOfContents htmlContent={post?.html || ''} />
        </>
      }
    />
  )
}

export default NewsPostTemplate

export const pageQuery = graphql`
  query NewsPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
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
            gatsbyImageData(quality: 100, width: 700)
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

const BackToHome = styled.div``

const DateAndTimeToRead = styled.p`
  color: ${({ theme }) => theme.textSecondary};
`

const ArticleStyled = styled.article`
  * {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    font-size: var(--fontSize-36);
    margin-bottom: var(--spacing-6);
    line-height: 1.2;
  }

  h2 {
    font-size: var(--fontSize-28);
    margin-top: var(--spacing-8);
    margin-bottom: var(--spacing-4);
  }

  h3 {
    font-size: var(--fontSize-24);
    margin-top: var(--spacing-6);
    margin-bottom: var(--spacing-4);
    line-height: 1.2;
  }

  h2,
  h3 {
    transition: color 0.3s ease;
  }

  p {
    margin: var(--spacing-4) auto;
    line-height: 1.7;
    font-family: 'Source Serif';
    font-weight: 350;

    &:first-child {
      margin-top: 0;
    }
  }

  ul {
    font-family: 'Source Serif';
    font-weight: 350;
  }

  figcaption {
    color: ${({ theme }) => theme.textTertiary};
    margin-top: var(--spacing-2);
  }

  .gatsby-resp-image-wrapper {
    max-width: 700px !important;
  }
`
