import { colord } from 'colord'
import { graphql, Link, PageProps } from 'gatsby'
import styled from 'styled-components'

import Badge from '../components/Badge'
import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import GatsbyImageWrapper from '../components/GatsbyImageWrapper'
import TableOfContents from '../components/pages/news/TableOfContents'
import RelatedPost from '../components/RelatedNewsPost'
import SectionDivider from '../components/SectionDivider'
import { deviceBreakPoints } from '../styles/global-style'

const NewsPostTemplate = (props: PageProps<Queries.NewsPostBySlugQuery>) => {
  const post = props.data.markdownRemark
  const { previous, next } = props.data

  const relatedPosts = post?.frontmatter?.relatedPosts

  return (
    <Page
      {...props}
      seo={{
        title: post?.frontmatter?.title || '',
        description: post?.frontmatter?.seoDescription || post?.frontmatter?.description || post?.excerpt || '',
        ogDescription: post?.frontmatter?.description || post?.frontmatter?.seoDescription || post?.excerpt || '',
        ogImage: post?.frontmatter?.featuredImage?.childImageSharp?.ogImage?.src || undefined
      }}
      content={
        <ArticleWrapper>
          <SubpageSection narrow noTopPadding>
            <BackToHome>
              <span>← </span>
              <BackLink to="/news">Back to all news</BackLink>
            </BackToHome>

            <SectionDivider />

            <DateAndTimeToRead>
              {post?.frontmatter?.date && (
                <>
                  <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                  <span> · </span>
                </>
              )}
              {post?.timeToRead && `${post.timeToRead} min read`}
              {post?.frontmatter?.spotlight && (
                <>
                  <span> · </span>
                  <Badge color="palette2" compact>
                    Spotlight
                  </Badge>
                </>
              )}
            </DateAndTimeToRead>
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

            {relatedPosts && relatedPosts.length > 0 && (
              <RelatedPosts>
                {relatedPosts?.map((postSlug) => postSlug && <RelatedPost slug={postSlug} key={postSlug} />)}
              </RelatedPosts>
            )}

            <NewsPostNav>
              <NavigationList>
                <NavigationItem>
                  {previous && (
                    <>
                      <div>←</div>
                      <StyledGatsbyLink to={previous.fields?.slug ?? ''} rel="prev">
                        {previous.frontmatter?.title}
                      </StyledGatsbyLink>
                    </>
                  )}
                </NavigationItem>
                <NavigationItem>
                  {next && (
                    <>
                      <div>→</div>
                      <StyledGatsbyLink to={next.fields?.slug ?? ''} rel="next">
                        {next.frontmatter?.title}
                      </StyledGatsbyLink>
                    </>
                  )}
                </NavigationItem>
              </NavigationList>
            </NewsPostNav>
          </SubpageSection>
          <TableOfContents htmlContent={post?.html || ''} />
        </ArticleWrapper>
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
        seoDescription
        spotlight
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 100, width: 700)
            ogImage: resize(width: 1200, quality: 80) {
              src
            }
          }
        }
        relatedPosts
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

const ArticleWrapper = styled.div`
  position: relative;
`

const StyledGatsbyLink = styled(Link)`
  color: ${({ theme }) => theme.textPrimary};
`

const BackLink = styled(Link)`
  color: ${({ theme }) => theme.textPrimary};
  text-decoration: underline;
  font-size: inherit;
  font-family: inherit;

  &:hover {
    opacity: 0.8;
  }
`

const BackToHome = styled.div``

const DateAndTimeToRead = styled.p`
  display: flex;
  gap: var(--spacing-1);
  align-items: center;
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
    margin-bottom: var(--spacing-3);
  }

  h3 {
    font-size: var(--fontSize-24);
    margin-top: var(--spacing-6);
    line-height: 1.2;
  }

  h2,
  h3 {
    transition: color 1s ease;
  }

  a {
    color: ${({ theme }) => theme.textPrimary} !important;
    text-underline-offset: 3px !important;
    text-decoration-style: dotted;
    &:hover {
      text-decoration-style: solid;
    }
  }

  p,
  ul,
  ol {
    margin-top: var(--spacing-3);
    color: ${({ theme }) => theme.textPrimaryVariation};
    line-height: 1.7;
    font-family: 'Source Serif';
    font-weight: 350;
    font-size: 1.25rem;

    @media ${deviceBreakPoints.mobile} {
      font-size: 1.5rem;
    }

    &:first-child {
      margin-top: 0;
    }
  }

  strong {
    color: ${({ theme }) => colord(theme.textPrimaryVariation).alpha(0.9).toHex()};
  }

  ul {
    font-family: 'Source Serif';
    font-weight: 350;
  }

  ol {
    li + li {
      margin-top: var(--spacing-2);
    }
  }

  figcaption {
    color: ${({ theme }) => theme.textTertiary};
    margin-top: var(--spacing-2);
  }

  .gatsby-resp-image-wrapper {
    max-width: 700px !important;
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.borderPrimary};
    margin: var(--spacing-6) auto;
    line-height: 1.6;
    font-family: 'Source Serif';
    font-weight: 350;
    background-color: ${({ theme }) => theme.surface2};
    padding: var(--spacing-1);
    padding-left: var(--spacing-2);

    p {
      margin: 0;
      color: ${({ theme }) => theme.textPrimary};
    }

    em {
      opacity: 0.8;
    }
  }
`

const NewsPostNav = styled.nav``

const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-4);
  list-style: none;
  padding: 0;
`

const NavigationItem = styled.li`
  line-height: 1.5;

  &:last-child {
    text-align: right;
  }
`

const RelatedPosts = styled.div`
  margin-top: var(--spacing-6);
`
