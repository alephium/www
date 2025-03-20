import { useEffect } from 'react'

import useSocials from '../hooks/useSocials'

const DiscordPage = () => {
  const socials = useSocials()

  const discordEntry = socials?.find((social) => social.node?.name === 'Discord')?.node

  useEffect(() => {
    if (discordEntry?.url) window.location.replace(discordEntry.url)
  }, [discordEntry])

  return null
}

export default DiscordPage
