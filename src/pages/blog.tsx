import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import { deviceBreakPoints } from '../styles/global-style'

const CustomPage = (props: PageProps) => {
  const data = useStaticQuery<Queries.BlogPostsQuery>(query)

  const posts = data.allMarkdownRemark.nodes

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
              {posts.map((post) => (
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
