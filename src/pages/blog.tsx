import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { useState } from 'react'
import styled from 'styled-components'

import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import GatsbyImageWrapper from '../components/GatsbyImageWrapper'
import Search from '../components/Search'

export const query = graphql`
  query BlogPosts {
    heroImage: file(relativePath: { eq: "alephium-hackathon-lake.png" }) {
      ...HeroImage
    }
    allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "blog" } }
        # frontmatter: { draft: { ne: true } }
      }
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
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`

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
      seo={{
        title: '',
        description: ''
      }}
      content={
        <>
          <SubpageSection>
            <TextElement isCentered>
              <h1>Alephium blog</h1>
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
              <Grid columns={3} gap="large">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.fields?.slug} post={post} />
                ))}
              </Grid>
            )}
          </SubpageSection>
        </>
      }
    />
  )
}

// TODO: Extract to separate file if used in other places
interface BlogCardProps {
  post: Queries.BlogPostsQuery['allMarkdownRemark']['nodes'][number]
}

const BlogCard = ({ post }: BlogCardProps) => {
  if (!post.frontmatter?.featuredImage) {
    return null
  }

  return (
    <BlogCardContainer>
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
    </BlogCardContainer>
  )
}

export default CustomPage

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

const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`
