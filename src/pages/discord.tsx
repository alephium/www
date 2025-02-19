import { graphql, PageProps } from 'gatsby'
import { useEffect } from 'react'

const DiscordPage = (props: PageProps<Queries.DiscordPageQuery>) => {
  const pageContent = props.data.homepage.nodes[0].frontmatter
  const discordEntry = pageContent?.followUsSection?.socialMediaLinks?.find((link) => link?.name === 'Discord')

  useEffect(() => {
    if (discordEntry?.url) window.location.replace(discordEntry.url)
  }, [discordEntry])

  return null
}

export default DiscordPage

export const pageQuery = graphql`
  query DiscordPage {
    homepage: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          followUsSection {
            socialMediaLinks {
              name
              url
            }
          }
        }
      }
    }
  }
`
