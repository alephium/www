import { FC } from 'react'
import styled from 'styled-components'

import { CommunityChannel } from '../hooks/useCommunityChannels'
import { getIconByName } from '../images/utils'
import Badge from './Badge'

interface CommunityChannelCardProps {
  channel: CommunityChannel
  className?: string
}

const platforms = [
  { name: 'Telegram', getUrl: (c: CommunityChannel) => c.telegram },
  { name: 'Twitter/X', getUrl: (c: CommunityChannel) => c.twitter },
  { name: 'Medium', getUrl: (c: CommunityChannel) => c.blog }
]

const CommunityChannelCard: FC<CommunityChannelCardProps> = ({ channel, className }) => (
  <div className={className}>
    <Header>
      <Emoji>{channel.emoji}</Emoji>
      <Name>{channel.name}</Name>
      <Badge color={channel.official ? 'palette3' : 'textPrimary'} compact>
        {channel.official ? 'Official' : 'Unofficial'}
      </Badge>
    </Header>
    <Links>
      {platforms.map(({ name, getUrl }) => {
        const url = getUrl(channel)
        const Icon = getIconByName(name)

        if (!url || !Icon) return null

        return (
          <IconLink
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Alephium ${channel.name ?? ''} on ${name}`}
          >
            <Icon />
          </IconLink>
        )
      })}
    </Links>
  </div>
)

export default styled(CommunityChannelCard)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  background-color: ${({ theme }) => theme.background2};
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  border-radius: var(--radius);
  padding: var(--spacing-4);
  height: 100%;
  box-sizing: border-box;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
`

const Emoji = styled.div`
  font-size: 32px;
  line-height: 1;
`

const Name = styled.div`
  flex: 1;
  font-weight: var(--fontWeight-semiBold);
  font-size: var(--fontSize-18);
`

const Links = styled.div`
  display: flex;
  gap: var(--spacing-4);
`

const IconLink = styled.a`
  display: inline-flex;
  transition: all 0.1s ease-out;

  svg {
    width: 24px;
    height: 24px;
    opacity: 0.8;

    * {
      fill: ${({ theme }) => theme.textPrimary} !important;
    }
  }

  &:hover svg {
    opacity: 1;
  }
`
