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
import GitHubIcon from '../images/svgs/brand-icon-github.svg'
import Columns from './Columns/Columns'
import Column from './Columns/Column'

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
      <Columns>
        <Column>
          <SectionTextHeader title={content.title} subtitle={content.subtitle} bigSubtitle bigText>
            <p>{content.description}</p>
          </SectionTextHeader>
        </Column>
        <Column>
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
        </Column>
      </Columns>
    </PageSectionContainer>
  </section>
)

export default styled(FollowUs)`
  padding: var(--spacing-12) 0;
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textPrimary};
  align-items: center;

  * {
    text-align: left;
  }

  .text-content {
    display: flex;
    justify-content: flex-start;
  }
`

const SocialMediaIconsList = styled.div`
  display: flex;
  gap: var(--spacing-6);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.separator};
  border-radius: 9px;
  padding: var(--spacing-4);
  width: 80%;
  margin: auto;
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
    case 'GitHub':
      return GitHubIcon
    default:
      break
  }
}
