import { FC } from 'react'
import styled from 'styled-components'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import SocialMediaIcon from './SocialMediaIcon'

import TelegramIcon from '../images/svgs/brand-icon-telegram.svg'
import DiscordIcon from '../images/svgs/brand-icon-discord.svg'
import TwitterIcon from '../images/svgs/brand-icon-twitter.svg'
import RedditIcon from '../images/svgs/brand-icon-reddit.svg'
import YouTubeIcon from '../images/svgs/brand-icon-youtube.svg'
import LinkedInIcon from '../images/svgs/brand-icon-linkedin.svg'
import MediumIcon from '../images/svgs/brand-icon-medium.svg'

export interface PageSectionFollowUsContentType {
  title: string
  subtitle: string
  description: string
  socialMediaLinks: {
    name: string
    url: string
  }[]
}

interface FollowUsProps {
  className?: string
  content: PageSectionFollowUsContentType
}

const FollowUs: FC<FollowUsProps> = ({ className, content }) => (
  <section className={className}>
    <PageSectionContainer>
      <SectionTextHeader title={content.title} subtitle={content.subtitle} bigSubtitle bigText>
        <p>{content.description}</p>
      </SectionTextHeader>
      <SocialMediaIconsList>
        {content.socialMediaLinks.map(({ name, url }) => {
          const Icon = getIconByName(name)
          return (
            <SocialMediaIcon
              key={name}
              name={name}
              url={url}
              ImageComponent={Icon}
              trackingName={`follow-us-section:${name}-link`}
            />
          )
        })}
      </SocialMediaIconsList>
    </PageSectionContainer>
  </section>
)

export default styled(FollowUs)`
  padding: var(--spacing-25) 0 var(--spacing-12) 0;
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textPrimary};

  * {
    text-align: center;
  }

  .text-content {
    display: flex;
    justify-content: center;
  }
`

const SocialMediaIconsList = styled.div`
  display: flex;
  gap: var(--spacing-8);
  align-items: center;
  justify-content: center;
  margin-top: var(--spacing-10);
  flex-wrap: wrap;
`

const getIconByName = (name: string) => {
  switch (name) {
    case 'Discord':
      return DiscordIcon
    case 'Telegram':
      return TelegramIcon
    case 'Twitter':
      return TwitterIcon
    case 'Reddit':
      return RedditIcon
    case 'Medium':
      return MediumIcon
    case 'LinkedIn':
      return LinkedInIcon
    case 'Youtube':
      return YouTubeIcon
    default:
      break
  }
}
