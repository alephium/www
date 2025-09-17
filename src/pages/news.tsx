import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import GatsbyImageWrapper from '../components/GatsbyImageWrapper'
import Search from '../components/Search'
import SimpleLink from '../components/SimpleLink'
import SimpleLoader from '../components/SimpleLoader'

export const query = graphql`
  query NewsPosts {
    heroImage: file(relativePath: { eq: "alephium-hackathon-lake.png" }) {
      ...HeroImage
    }
    spotlightPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "news" } }, frontmatter: { spotlight: { eq: true } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
    remainingPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "news" } }, frontmatter: { spotlight: { ne: true } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`

let visibleCount = 9

const CustomPage = (props: PageProps) => {
  const data = useStaticQuery<Queries.NewsPostsQuery>(query)

  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const spotlightPosts = data.spotlightPosts.nodes
  const remainingPosts = data.remainingPosts.nodes

  const posts = useMemo(() => [...spotlightPosts, ...remainingPosts], [spotlightPosts, remainingPosts])

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) => {
        const title = post.frontmatter?.title?.toLowerCase() || ''
        const description = post.frontmatter?.description?.toLowerCase() || ''
        const query = searchQuery.toLowerCase()

        return title.includes(query) || description.includes(query)
      }),
    [posts, searchQuery]
  )

  const visiblePosts = filteredPosts.slice(0, visibleCount)
  const hasMorePosts = visibleCount < filteredPosts.length

  const loadMorePosts = useCallback(() => {
    if (isLoading || !hasMorePosts) return

    setIsLoading(true)
    // Simulate loading delay for better UX
    setTimeout(() => {
      visibleCount = Math.min(visibleCount + 6, filteredPosts.length)
      setIsLoading(false)
    }, 800)
  }, [isLoading, hasMorePosts, filteredPosts.length])

  return (
    <Page
      {...props}
      seo={{
        title: '',
        description: ''
      }}
      content={
        <>
          <SubpageSectionStyled edgeGradient gradientPosition="bottom">
            <TextElement isCentered>
              <h1>Alephium News</h1>
              <p>News, updates, and insights from the Alephium ecosystem.</p>
            </TextElement>
            <SearchContainer>
              <Search value={searchQuery} onChange={setSearchQuery} placeholder="Search articles..." />
            </SearchContainer>
          </SubpageSectionStyled>

          <SubpageSection>
            {filteredPosts.length === 0 ? (
              <NoResults>
                <h3>No articles found</h3>
                <p>Try adjusting your search query</p>
              </NoResults>
            ) : (
              <>
                <Grid columns={3} gap="large">
                  {visiblePosts.map((post) => (
                    <NewsCard key={post.fields?.slug} post={post} />
                  ))}
                </Grid>

                {hasMorePosts && (
                  <LoadMoreContainer>
                    <Button onClick={loadMorePosts} disabled={isLoading} squared secondary>
                      {isLoading ? (
                        <>
                          <SimpleLoader />
                        </>
                      ) : (
                        'See more posts'
                      )}
                    </Button>
                  </LoadMoreContainer>
                )}
              </>
            )}
          </SubpageSection>
        </>
      }
    />
  )
}

// TODO: Extract to separate file if used in other places
interface NewsCardProps {
  post: Queries.NewsPostsQuery['allMarkdownRemark']['nodes'][number]
}

const NewsCard = ({ post }: NewsCardProps) => {
  if (!post.frontmatter?.featuredImage) {
    return null
  }

  return (
    <SimpleLink url={post.fields?.slug}>
      <NewsCardContainer>
        <ArticleDate>{post.frontmatter.date}</ArticleDate>
        <ImageContainer>
          <GatsbyImageWrapper
            image={post.frontmatter.featuredImage.childImageSharp?.gatsbyImageData}
            alt={post.frontmatter.title ?? ''}
            style={{ width: '100%', height: '200px' }}
          />
        </ImageContainer>
        <TextElement isBodySmall>
          <h4 style={{ marginBottom: '10px' }}>{post.frontmatter.title}</h4>
          <ArticleDescription style={{ opacity: 0.6 }}>{post.frontmatter.description}</ArticleDescription>
        </TextElement>
      </NewsCardContainer>
    </SimpleLink>
  )
}

export default CustomPage

const SubpageSectionStyled = styled(SubpageSection)`
  width: calc(var(--page-width) + 30px);
`

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
`

const SearchContainer = styled.div`
  margin-bottom: var(--spacing-8);
  margin-top: var(--spacing-8);
`

const NoResults = styled.div`
  text-align: center;
  padding: var(--spacing-12) 0;
  color: ${({ theme }) => theme.textSecondary};

  h3 {
    margin-bottom: var(--spacing-4);
  }
`

const NewsCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  padding: 10px;

  &:hover {
    p {
      opacity: 0.9 !important;
    }

    img {
      filter: brightness(1.1);
    }
  }
`

const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-8);
  padding: var(--spacing-4);
`

const ArticleDate = styled.p`
  color: ${({ theme }) => theme.textTertiary};
  text-transform: uppercase;
  font-size: var(--fontSize-14) !important;
  margin: 0;
`

const ArticleDescription = styled.p``
