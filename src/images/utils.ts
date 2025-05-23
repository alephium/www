import DiscordIcon from './svgs/brand-icon-discord.svg'
import GitHubIcon from './svgs/brand-icon-github.svg'
import LinkedInIcon from './svgs/brand-icon-linkedin.svg'
import MediumIcon from './svgs/brand-icon-medium.svg'
import RedditIcon from './svgs/brand-icon-reddit.svg'
import TelegramIcon from './svgs/brand-icon-telegram.svg'
import TwitterIcon from './svgs/brand-icon-X.svg'
import YouTubeIcon from './svgs/brand-icon-youtube.svg'

export const getIconByName = (name: string) => {
  switch (name) {
    case 'Discord':
      return DiscordIcon
    case 'Telegram':
      return TelegramIcon
    case 'Twitter/X':
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
