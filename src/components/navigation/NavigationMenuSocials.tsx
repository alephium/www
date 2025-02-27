import { graphql, useStaticQuery } from 'gatsby'
import SocialMediaIcon from '../SocialMediaIcon'
import styled from 'styled-components'
import { getIconByName } from '../../images/utils'

const NavigationMenuSocials = ({ enabledItems, className }: { enabledItems: string[]; className?: string }) => {
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
    <NavigationMenuSocialsStyled className={className}>
      {enabledItems.map((itemName) => {
        const socialUrl = socials.find((social) => social.node.name === itemName)?.node.url

        if (socialUrl)
          return (
            <SocialMediaIconStyled
              key={itemName}
              name={itemName}
              url={socialUrl}
              ImageComponent={getIconByName(itemName)}
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
