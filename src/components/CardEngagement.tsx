import { FC } from 'react'
import styled, { useTheme } from 'styled-components'

import Card from './Card'
import CardTextTeaser from './CardTextTeaser'
import SimpleLink, { SimpleLinkProps } from './SimpleLink'

import { deviceBreakPoints } from '../styles/global-style'

interface CardEngagementProps {
  title: string
  link: SimpleLinkProps
  image: { publicURL: string }
  className?: string
  trackingName?: string
}

const CardEngagement: FC<CardEngagementProps> = ({ title, link, image, children, className, trackingName }) => {
  const theme = useTheme()

  return (
    <SimpleLinkStyled {...link}>
      <CardContainer className={className} borderColor={theme.bgPrimary} thickBorders bgColor={theme.bgTertiary} shadow>
        <div className="card-contents">
          <Iconic src={image.publicURL} alt={title} />
          <CardTextTeaser title={title} trackingName={trackingName}>
            {children}
          </CardTextTeaser>
        </div>
      </CardContainer>
    </SimpleLinkStyled>
  )
}

const SimpleLinkStyled = styled(SimpleLink)`
  display: flex;
`

const CardContainer = styled(Card)`
  min-height: 11rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.2s ease;
  flex: 1;
  border: var(--border-primary-dark);

  @media ${deviceBreakPoints.mobile} {
    & + & {
      margin-top: var(--spacing-4);
    }
  }

  &:after {
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

    &:after {
      background: linear-gradient(270deg, var(--color-salmon) 0%, var(--color-blue-200) 100%);
    }
  }

  .card-contents {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
  }
`

const Iconic = styled.img`
  width: 82px;
  height: 82px;
  padding-bottom: 30px;
`

export default CardEngagement
