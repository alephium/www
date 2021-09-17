import React, { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import CardTextTeaser from './CardTextTeaser'
import { ArrowedLinkProps } from './ArrowedLink'

interface FeedItemProps {
  IconComponent: FC
  title: string
  subtitle?: string
  link: ArrowedLinkProps
  className?: string
}

let FeedItem: FC<FeedItemProps> = ({ IconComponent, title, subtitle, link, children, className }) => (
  <div className={className}>
    <IconComponent />
    <CardTextTeaser title={title} subtitle={subtitle} link={link}>
      {children}
    </CardTextTeaser>
  </div>
)

FeedItem = styled(FeedItem)`
  display: flex;
  gap: var(--spacing-4);

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
  }

  &:not(:last-child) {
    padding-bottom: var(--spacing-4);
    border-bottom: 1px solid ${({ theme }) => theme.separator};
  }

  &:not(:first-child) {
    padding-top: var(--spacing-4);
  }

  svg {
    width: var(--width-120);

    @media ${deviceBreakPoints.mobile} {
      align-self: center;
    }
  }
`

export default FeedItem
