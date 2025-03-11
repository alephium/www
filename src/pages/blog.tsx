import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import { deviceBreakPoints } from '../styles/global-style'

const POSTS_PER_PAGE = 10

const CustomPage = (props: PageProps) => {
  const data = useStaticQuery<Queries.BlogPostsQuery>(query)
  const [visiblePosts, setVisiblePosts] = useState<number>(POSTS_PER_PAGE)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  const posts = data.allMarkdownRemark.nodes
  const hasMorePosts = visiblePosts < posts.length

  // Set up intersection observer for infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && hasMorePosts) {
          setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + POSTS_PER_PAGE)
        }
      },
      { rootMargin: '100px' }
    )

    const currentRef = loadMoreRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasMorePosts])

  return (
    <Page
      {...props}
      content={
        <>
          <SubpageHeroSection>
            <h1>Alephium blog</h1>
            <p>News, updates, and insights from the Alephium ecosystem.</p>
          </SubpageHeroSection>

          <SectionDivider />

          <SubpageSection>
            <Grid columns={1} gap="small">
              {posts.slice(0, visiblePosts).map((post) => (
                <TextCardStyled key={post.fields?.slug} url={post.fields?.slug ?? ''}>
                  <TextElement>
                    <h3>{post.frontmatter?.title}</h3>
                    <p>{post.frontmatter?.description}</p>
                  </TextElement>
                  {post.frontmatter?.featuredImage?.desktop?.gatsbyImageData && (
                    <GatsbyImage
                      image={post.frontmatter?.featuredImage?.desktop?.gatsbyImageData}
                      alt={post.frontmatter?.title ?? ''}
                      style={{ flexShrink: 0 }}
                    />
                  )}
                </TextCardStyled>
              ))}
            </Grid>
            {hasMorePosts && (
              <LoadMoreContainer ref={loadMoreRef}>
                <LoadingIndicator>Loading more posts...</LoadingIndicator>
              </LoadMoreContainer>
            )}
          </SubpageSection>
        </>
      }
    />
  )
}
export default CustomPage

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "blog" } }, frontmatter: { draft: { ne: true } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      totalCount
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
            desktop: childImageSharp {
              gatsbyImageData(width: 300, layout: CONSTRAINED, transformOptions: { fit: COVER, cropFocus: CENTER })
            }
          }
        }
      }
    }
  }
`

const TextCardStyled = styled(TextCard)`
  display: flex;
  gap: var(--spacing-4);
  justify-content: space-between;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column-reverse;
  }
`

const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-8);
  padding: var(--spacing-4) 0;
`

const LoadingIndicator = styled.div`
  color: var(--color-text-secondary);
  font-size: 1rem;
`
