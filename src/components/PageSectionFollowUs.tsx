import React, { FC } from 'react'
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

interface FollowUsProps {
  className?: string
}

let FollowUs: FC<FollowUsProps> = ({ className }) => (
  <section className={className}>
    <PageSectionContainer>
      <SectionTextHeader title="Follow us" subtitle="Join the community." bigSubtitle>
        <p>
          Alephium's community is growing fast. You're fascinated by the technology, you want to know more or you want
          to build something cool with it? Come and join us!
        </p>
      </SectionTextHeader>
      <SocialMediaIconsList>
        <SocialMediaIcon ImageComponent={DiscordIcon} name="Discord server" url="https://discord.gg/nD8FzcTugn" />
        <SocialMediaIcon ImageComponent={TelegramIcon} name="Telegram group" url="https://t.me/alephiumgroup" />
        <SocialMediaIcon ImageComponent={TwitterIcon} name="Twitter page" url="https://twitter.com/alephium" />
        <SocialMediaIcon ImageComponent={MediumIcon} name="Medium page" url="https://medium.com/@alephium" />
        <SocialMediaIcon ImageComponent={RedditIcon} name="Reddit page" url="https://www.reddit.com/r/Alephium/" />
        <SocialMediaIcon
          ImageComponent={LinkedInIcon}
          name="LinkedIn page"
          url="https://www.linkedin.com/company/alephium/"
        />
        <SocialMediaIcon
          ImageComponent={YouTubeIcon}
          name="Youtube channel"
          url="https://www.youtube.com/channel/UCIX9Eww2Kch7sc0E6gCmEdg"
        />
      </SocialMediaIconsList>
    </PageSectionContainer>
  </section>
)

FollowUs = styled(FollowUs)`
  padding-top: var(--spacing-16);
  padding-bottom: var(--spacing-16);
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textPrimary};
`

const SocialMediaIconsList = styled.div`
  display: flex;
  gap: var(--spacing-9);
  align-items: center;
  margin-top: var(--spacing-16);
  flex-wrap: wrap;
`

export default FollowUs
