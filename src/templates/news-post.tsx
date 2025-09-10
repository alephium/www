import { graphql, Link, PageProps } from 'gatsby'
import styled from 'styled-components'

import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import GatsbyImageWrapper from '../components/GatsbyImageWrapper'
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

          <TextElement isSmall>
            <h1>{post?.frontmatter?.title}</h1>
          </TextElement>

          <GatsbyImageWrapper
            image={post?.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData}
            alt={post?.frontmatter?.title ?? ''}
            style={{ width: '100%', height: 'auto' }}
          />

          <ArticleStyled itemScope itemType="http://schema.org/Article">
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
  margin-top: var(--spacing-12);

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
