import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import SectionDivider from '../components/SectionDivider'

const CustomPage = (props: PageProps) => {
  const data = useStaticQuery<Queries.BlogPostsQuery>(query)

  const posts = data.allMarkdownRemark.nodes

  return (
    <Page
      {...props}
      content={
        <>
          <SubpageHeroSection>
            <h1>Blog</h1>
          </SubpageHeroSection>

          <SectionDivider />

          <SubpageSection>
            <Grid columns={1}>
              {posts.map((post) => (
                <TextCard key={post.fields?.slug} url={post.fields?.slug ?? ''}>
                  <h3>{post.frontmatter?.title}</h3>
                  <p>{post.frontmatter?.description}</p>
                </TextCard>
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
    allMarkdownRemark(filter: { fields: { contentType: { eq: "blog" } } }, sort: { frontmatter: { date: DESC } }) {
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
              fluid(maxWidth: 500, maxHeight: 290) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
