import { graphql, useStaticQuery } from 'gatsby'
import SocialMediaIcon from '../SocialMediaIcon'
import TwitterIcon from '../../images/svgs/brand-icon-twitter.svg'
import DiscordIcon from '../../images/svgs/brand-icon-discord.svg'
import styled from 'styled-components'

const socialImages = {
  Twitter: TwitterIcon,
  Discord: DiscordIcon
}

const NavigationMenuSocials = ({ enabledItems }: { enabledItems: string[] }) => {
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

  return (
    <NavigationMenuSocialsStyled>
      {enabledItems.map((itemName) => {
        const socialUrl = socials.find((social) => social.node.name === itemName)?.node.url

        if (socialUrl)
          return (
            <SocialMediaIconStyled
              key={itemName}
              name={itemName}
              url={socialUrl}
              ImageComponent={socialImages[itemName as keyof typeof socialImages]}
            />
          )
      })}
    </NavigationMenuSocialsStyled>
  )
}

export default NavigationMenuSocials

const NavigationMenuSocialsStyled = styled.div`
  display: flex;
  gap: var(--spacing-4);
`

const SocialMediaIconStyled = styled(SocialMediaIcon)`
  svg {
    width: 30px;
    height: 30px;
  }
`
