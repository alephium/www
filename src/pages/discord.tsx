import { graphql, useStaticQuery } from 'gatsby'
import { useEffect } from 'react'

const DiscordPage = () => {
  const {
    allSocialsYaml: { edges: socials }
  } = useStaticQuery<Queries.SocialsYamlQuery>(graphql`
    query SocialsYaml {
      allSocialsYaml {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  `)

  const discordEntry = socials?.find((social) => social.node?.name === 'Discord')?.node

  useEffect(() => {
    if (discordEntry?.url) window.location.replace(discordEntry.url)
  }, [discordEntry])

  return null
}

export default DiscordPage
