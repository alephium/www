import React, { FC } from 'react'
import styled from 'styled-components'

import Card from './Card'
import TextTeaser from './TextTeaser'

interface CardEngagementProps {
  title: string
  link: string
  ImageComponent?: FC
  className?: string
}

let CardEngagement: FC<CardEngagementProps> = ({ title, link, ImageComponent, children, className }) => {
  return (
    <Card className={className}>
      <div className="card-contents">
        <TextTeaser title={title} link={link}>
          {children}
        </TextTeaser>
        {ImageComponent && <ImageComponent />}
      </div>
    </Card>
  )
}

CardEngagement = styled(CardEngagement)`
  min-height: 11rem;
  display: flex;
  flex-direction: column;
  position: relative;

  & + & {
    margin-top: var(--spacing-7);
  }

  &:hover {
    background-color: var(--color-dark);
    background-clip: padding-box;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -2px;
      border-radius: inherit;
      background: linear-gradient(270deg, var(--color-salmon) 0%, var(--color-blue) 100%);
    }
  }

  .card-contents {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  svg {
    width: 5rem;
  }
`

export default CardEngagement
