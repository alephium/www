import styled from 'styled-components'

import useSocials from '../../hooks/useSocials'
import { getIconByName } from '../../images/utils'
import SocialMediaIcon from '../SocialMediaIcon'

const NavigationMenuSocials = ({ enabledItems, className }: { enabledItems: string[]; className?: string }) => {
  const socials = useSocials()

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
    width: 22px;
    height: 22px;
  }
`
