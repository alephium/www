import React, { FC } from 'react'
import styled from 'styled-components'

import Card from './Card'
import CardTextTeaser from './CardTextTeaser'
import { ArrowedLinkProps } from './ArrowedLink'

interface CardEngagementProps {
  title: string
  link: ArrowedLinkProps
  ImageComponent: FC
  imageWidth?: string
  className?: string
}

let CardEngagement: FC<CardEngagementProps> = ({ title, link, ImageComponent, children, className }) => {
  return (
    <Card className={className}>
      <div className="card-contents">
        <CardTextTeaserStyled title={title} link={link}>
          {children}
        </CardTextTeaserStyled>
        <div className="image-container">
          <ImageComponent />
        </div>
      </div>
    </Card>
  )
}

const CardTextTeaserStyled = styled(CardTextTeaser)`
  width: 75%;
  padding-right: var(--spacing-4);
`

CardEngagement = styled(CardEngagement)`
  min-height: 11rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.2s ease;

  & + & {
    margin-top: var(--spacing-7);
  }

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
  }

  &:hover {
    background-color: var(--color-dark);
    background-clip: padding-box;
    border-color: transparent;
    cursor: pointer;

    &:before {
      background: linear-gradient(270deg, var(--color-salmon) 0%, var(--color-blue) 100%);
    }
  }

  .card-contents {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  .image-container {
    width: 25%;
    position: relative;
    margin: calc(-1 * var(--spacing-7)) calc(-1 * var(--spacing-7)) calc(-1 * var(--spacing-7)) 0;
    overflow: hidden;

    svg {
      height: auto;
      position: absolute;
      width: ${(props) => props.imageWidth || '5rem'};
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto 0;
    }
  }
`

export default CardEngagement
