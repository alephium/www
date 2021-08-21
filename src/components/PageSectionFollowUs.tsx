import React, { FC } from 'react'
import styled from 'styled-components'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import SocialMediaIcon from './SocialMediaIcon'

import TelegramIcon from '../images/svgs/brand-icon-telegram.svg'
import DiscordIcon from '../images/svgs/brand-icon-discord.svg'
import TwitterIcon from '../images/svgs/brand-icon-twitter.svg'
import RedditIcon from '../images/svgs/brand-icon-reddit.svg'
import ChatIcon from '../images/svgs/brand-icon-chat.svg'
import YouTubeIcon from '../images/svgs/brand-icon-youtube.svg'

interface FollowUsProps {
  className?: string
}

let FollowUs: FC<FollowUsProps> = ({ className }) => (
  <section className={className}>
    <PageSectionContainer>
      <SectionTextHeader
        title="Follow us"
        subtitle="Join the community."
        description="Alephium's community is growing fast. You're fascinated by the technology, you want to know more or you want to build something cool with it? Come and join us!"
        largeSubtitle
      />
      <SocialMediaIconsList>
        <SocialMediaIcon ImageComponent={TelegramIcon} url="https://t.me/alephiumgroup" />
        <SocialMediaIcon ImageComponent={DiscordIcon} url="#" />
        <SocialMediaIcon ImageComponent={TwitterIcon} url="https://twitter.com/alephium" />
        <SocialMediaIcon ImageComponent={RedditIcon} url="https://www.reddit.com/r/Alephium/" />
        <SocialMediaIcon ImageComponent={ChatIcon} url="#" />
        <SocialMediaIcon ImageComponent={YouTubeIcon} url="https://www.youtube.com/channel/UCIX9Eww2Kch7sc0E6gCmEdg" />
      </SocialMediaIconsList>
    </PageSectionContainer>
  </section>
)

FollowUs = styled(FollowUs)`
  padding-top: var(--spacing-32);
  padding-bottom: var(--spacing-32);
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textPrimary};
`

const SocialMediaIconsList = styled.div`
  display: flex;
  gap: var(--spacing-18);
  align-items: flex-start;
  margin-top: var(--spacing-32);
  flex-wrap: wrap;
`

export default FollowUs
