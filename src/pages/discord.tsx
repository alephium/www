import { graphql, PageProps } from 'gatsby'
import { useEffect } from 'react'
import { PageSectionFollowUsContentType } from '../components/PageSectionFollowUs'

interface DiscordPageProps extends PageProps {
  data: {
    homepage: {
      nodes: {
        frontmatter: {
          followUsSection: PageSectionFollowUsContentType
        }
      }[]
    }
  }
}

const DiscordPage = (props: DiscordPageProps) => {
  const pageContent = props.data.homepage.nodes[0].frontmatter
  const discordEntry = pageContent.followUsSection.socialMediaLinks.find(({ name }) => name === 'Discord')

  useEffect(() => {
    if (discordEntry) window.location.replace(discordEntry.url)
  }, [discordEntry])

  return null
}

export default DiscordPage

export const pageQuery = graphql`
  query {
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
