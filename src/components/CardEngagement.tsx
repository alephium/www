import React, { FC } from 'react'
import styled from 'styled-components'

import Card from './Card'
import ArrowedLink from './ArrowedLink'

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
        <article>
          <div className="text-content">
            <div className="title">{title}</div>
            <div className="content">{children}</div>
          </div>
          <ArrowedLink to="#">{link}</ArrowedLink>
        </article>
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

  article {
    max-width: 70%;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
  }

  .text-content {
    margin-bottom: var(--spacing-4);
  }

  .title {
    font-size: var(--fontSize-28);
    font-weight: var(--fontWeight-semibold);
    margin-bottom: var(--spacing-6);
  }

  .content {
    color: var(--color-text-grey-light-1);
    line-height: var(--line-height-22);
  }

  svg {
    width: 5rem;
  }
`

export default CardEngagement
