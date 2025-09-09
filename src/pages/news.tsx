import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import GatsbyImageWrapper from '../components/GatsbyImageWrapper'
import Search from '../components/Search'
import SimpleLink from '../components/SimpleLink'
import SimpleLoader from '../components/SimpleLoader'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

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

const CustomPage = (props: PageProps) => {
  const data = useStaticQuery<Queries.NewsPostsQuery>(query)

  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(9)
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

  // Intersection observer for infinite scroll
  const [loadMoreRef, isLoadMoreVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  })

  const loadMorePosts = useCallback(() => {
    if (isLoading || !hasMorePosts) return

    setIsLoading(true)
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, filteredPosts.length))
      setIsLoading(false)
    }, 800)
  }, [isLoading, hasMorePosts, filteredPosts.length])

  useEffect(() => {
    if (isLoadMoreVisible && hasMorePosts && !isLoading) {
      loadMorePosts()
    }
  }, [isLoadMoreVisible, hasMorePosts, isLoading, loadMorePosts])

  return (
    <Page
      {...props}
      seo={{
        title: '',
        description: ''
      }}
      content={
        <SubpageSectionStyled>
          <TextElement isCentered>
            <h1>Alephium News</h1>
            <p>News, updates, and insights from the Alephium ecosystem.</p>
          </TextElement>

          <SearchContainer>
            <Search value={searchQuery} onChange={setSearchQuery} placeholder="Search articles..." />
          </SearchContainer>

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
                  <LoadMoreTrigger ref={loadMoreRef}>{isLoading && <SimpleLoader />}</LoadMoreTrigger>
                </LoadMoreContainer>
              )}
            </>
          )}
        </SubpageSectionStyled>
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
        <ImageContainer>
          <GatsbyImageWrapper
            image={post.frontmatter.featuredImage.childImageSharp?.gatsbyImageData}
            alt={post.frontmatter.title ?? ''}
            style={{ width: '100%', height: '200px' }}
          />
        </ImageContainer>
        <TextElement isBodySmall>
          <h4 style={{ marginBottom: '10px' }}>{post.frontmatter.title}</h4>
          <label>{post.frontmatter.date}</label>
          <p>{post.frontmatter.description}</p>
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
  gap: var(--spacing-4);
  padding: 10px;

  &:hover {
    ::before {
      position: absolute;
      content: '';
      inset: 0;
      border-radius: var(--radius-big);
      background-color: ${({ theme }) => theme.background2};
    }

    h4 {
      color: ${({ theme }) => theme.palette5};
    }
  }
`

const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-8);
  padding: var(--spacing-4);
`

const LoadMoreTrigger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
`
