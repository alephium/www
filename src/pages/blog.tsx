import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { useState } from 'react'
import styled from 'styled-components'

import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextElement from '../components/customPageComponents/TextElement'
import ResponsiveImage from '../components/ResponsiveImage'
import Search from '../components/Search'
import SectionDivider from '../components/SectionDivider'

const CustomPage = (props: PageProps) => {
  const data = useStaticQuery<Queries.BlogPostsQuery>(query)

  const [searchQuery, setSearchQuery] = useState('')

  const posts = data.allMarkdownRemark.nodes

  const filteredPosts = posts.filter((post) => {
    const title = post.frontmatter?.title?.toLowerCase() || ''
    const description = post.frontmatter?.description?.toLowerCase() || ''
    const query = searchQuery.toLowerCase()

    return title.includes(query) || description.includes(query)
  })

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

          <SubpageSection wide>
            <SearchContainer>
              <Search value={searchQuery} onChange={setSearchQuery} placeholder="Search articles..." />
            </SearchContainer>

            {filteredPosts.length === 0 ? (
              <NoResults>
                <h3>No articles found</h3>
                <p>Try adjusting your search query</p>
              </NoResults>
            ) : (
              <Grid columns={3} gap="small">
                {filteredPosts.map((post) => (
                  <TextCardStyled key={post.fields?.slug} url={post.fields?.slug ?? ''}>
                    <TextElement>
                      <h3>{post.frontmatter?.title}</h3>
                      <p>{post.frontmatter?.description}</p>
                    </TextElement>
                    {post.frontmatter?.featuredImage && post.frontmatter?.featuredImage?.childImageSharp && (
                      <ImageContainer>
                        <ResponsiveImage
                          image={{
                            altText: post.frontmatter?.title ?? '',
                            src: post.frontmatter?.featuredImage
                          }}
                        />
                      </ImageContainer>
                    )}
                  </TextCardStyled>
                ))}
              </Grid>
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
            childImageSharp {
              gatsbyImageData(
                width: 300
                height: 150
                layout: CONSTRAINED
                transformOptions: { fit: COVER, cropFocus: CENTER }
              )
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
  flex-direction: column-reverse;
`

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 300px;
  max-height: 150px;
  position: relative;
`

const SearchContainer = styled.div`
  margin-bottom: var(--spacing-8);
`

const NoResults = styled.div`
  text-align: center;
  padding: var(--spacing-12) 0;
  color: ${({ theme }) => theme.textSecondary};

  h3 {
    margin-bottom: var(--spacing-4);
  }
`
