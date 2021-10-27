import { FC } from 'react'
import styled, { useTheme } from 'styled-components'

import Card from './Card'
import CardTextTeaser from './CardTextTeaser'
import { ArrowedLinkProps } from './ArrowedLink'

import { deviceBreakPoints } from '../styles/global-style'

interface CardEngagementProps {
  title: string
  link: ArrowedLinkProps
  ImageComponent: FC
  className?: string
}

let CardEngagement: FC<CardEngagementProps> = ({ title, link, ImageComponent, children, className }) => {
  const theme = useTheme()

  return (
    <Card className={className} borderColor={theme.bgPrimary} thickBorders bgColor={theme.bgTertiary} link={link}>
      <div className="card-contents">
        <CardTextTeaserStyled title={title} link={{ ...link, onlyText: true }}>
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
  padding-right: var(--spacing-8);
`

CardEngagement = styled(CardEngagement)`
  min-height: 11rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.2s ease;
  flex: 1;

  @media ${deviceBreakPoints.mobile} {
    & + & {
      margin-top: var(--spacing-4);
    }
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
    background-color: ${({ theme }) => theme.bgPrimary};
    border-color: transparent;

    &:before {
      background: linear-gradient(270deg, var(--color-salmon) 0%, var(--color-blue-200) 100%);
    }
  }

  .card-contents {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  .image-container {
    width: 32%;
    position: relative;
    margin: calc(-1 * var(--spacing-4)) calc(-1 * var(--spacing-4)) calc(-1 * var(--spacing-4)) 0;
    overflow: hidden;
  }
`

export default CardEngagement
