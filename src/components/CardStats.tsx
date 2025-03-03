import { FC, PointerEvent } from 'react'
import styled, { useTheme } from 'styled-components'

import Card from './Card'
import CardTextTeaser from './CardTextTeaser'

import { deviceBreakPoints } from '../styles/global-style'
import { motion, useMotionValue, useTransform, Variants } from 'framer-motion'
import CursorHighlight from './CursorHighlight'
import { getPointerRelativePositionInElement } from '../utils/pointer'
import { graphql } from 'gatsby'

interface CardStatsProps extends Queries.CardStatsFragment {
  className?: string
  trackingName?: string
  variants?: Variants
}

export const query = graphql`
  fragment CardStats on MarkdownRemarkFrontmatterPageSectionStatsContentCards {
    title
    description
    stat
  }
`

const CardStats: FC<CardStatsProps> = ({ className, title, description, stat }) => {
  const theme = useTheme()

  const angle = 1

  const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)

  const rotateY = useTransform(x, [0, 1], [-angle, angle], {
    clamp: true
  })
  const rotateX = useTransform(y, [0, 1], [angle, -angle], {
    clamp: true
  })

  const onMove = (e: PointerEvent) => {
    const { x: positionX, y: positionY } = getPointerRelativePositionInElement(e)

    x.set(positionX, true)
    y.set(positionY, true)
  }

  return (
    <MotionContainer className={className}>
      <CardContainer
        borderColor={theme.bgPrimary}
        thickBorders
        bgColor={theme.bgTertiary}
        whileHover={{ translateZ: 5, zIndex: 10 }}
        onPointerMove={onMove}
        onPointerLeave={() => {
          x.set(0.5, true)
          y.set(0.5, true)
        }}
        style={{
          rotateY,
          rotateX
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="card-contents">
          {title && (
            <CardTextTeaser title={title}>
              <p>{description}</p>
              <Stat>{stat}</Stat>
            </CardTextTeaser>
          )}
        </div>
        <CursorHighlight />
      </CardContainer>
    </MotionContainer>
  )
}

export default CardStats

const MotionContainer = styled(motion.div)`
  display: flex;
  position: relative;

  min-width: 300px;

  @media ${deviceBreakPoints.mobile} {
    flex: 1;
    max-width: auto;
    min-width: auto;
  }
`

const CardContainer = styled(Card)`
  min-height: 11rem;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.bgPrimary};
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: box-shadow 0.2s ease-out;

  @media ${deviceBreakPoints.mobile} {
    & + & {
      margin-top: var(--spacing-4);
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.bgPrimary};
    transform: translateZ(10px);
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .card-contents {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
  }
`

const Stat = styled.div`
  font-size: var(--fontSize-36);
  line-height: var(--lineHeight-36);
  margin-top: var(--spacing-6);
`
