import DiscordIcon from './svgs/brand-icon-discord.svg'
import GitHubIcon from './svgs/brand-icon-github.svg'
import LinkedInIcon from './svgs/brand-icon-linkedin.svg'
import MediumIcon from './svgs/brand-icon-medium.svg'
import RedditIcon from './svgs/brand-icon-reddit.svg'
import TelegramIcon from './svgs/brand-icon-telegram.svg'
import TwitterIcon from './svgs/brand-icon-twitter.svg'
import YouTubeIcon from './svgs/brand-icon-youtube.svg'

export const getIconByName = (name: string) => {
  switch (name) {
    case 'Discord':
      return DiscordIcon
    case 'Telegram':
      return TelegramIcon
    case 'X':
      return TwitterIcon
    case 'Reddit':
      return RedditIcon
    case 'Medium':
      return MediumIcon
    case 'LinkedIn':
      return LinkedInIcon
    case 'Youtube':
      return YouTubeIcon
    case 'GitHub':
      return GitHubIcon
    default:
      break
  }
}

export const updateSrcSet = (srcSet: string, maxWidth: number) => {
  if (!srcSet) return null
  const srcSetArray = srcSet.split(',')
  return srcSetArray
    .reduce((filtered, src) => {
      const [url, width] = src.split(' ')
      if (parseInt(width) <= maxWidth) {
        filtered.push(`${url} ${width}`)
      }
      return filtered
    }, [] as string[])
    .join(',')
}
