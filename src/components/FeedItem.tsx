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
  gap: var(--spacing-8);

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
  }

  &:not(:last-child) {
    padding-bottom: var(--spacing-8);
    border-bottom: 1px solid var(--color-grey-dark-2);
  }

  &:not(:first-child) {
    padding-top: var(--spacing-8);
  }

  svg {
    width: var(--width-120);

    @media ${deviceBreakPoints.mobile} {
      align-self: center;
    }
  }
`

export default FeedItem
