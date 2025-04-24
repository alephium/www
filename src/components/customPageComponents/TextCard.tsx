import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion'
import { PointerEvent, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'
import { getPointerRelativePositionInElement } from '../../utils/pointer'
import SimpleLink from '../SimpleLink'
import TextElement, { TextElementProps } from './TextElement'

interface TextCardProps extends TextElementProps {
  children: ReactNode
  actionTitle?: string
  url?: string
  isAnimated?: boolean
  variants?: Variants
}

const TextCard = ({ children, url, isAnimated = false, variants, ...textElementProps }: TextCardProps) => {
  const text = (
    <TextElementStyled isBodySmall {...textElementProps}>
      {children}
    </TextElementStyled>
  )

  const card = (
    <CardContainer variants={variants} isAnimated={isAnimated}>
      {isAnimated ? <AnimatedCard>{text}</AnimatedCard> : <Card>{text}</Card>}
    </CardContainer>
  )

  return url ? (
    <SimpleLinkStyled url={url} isAnimated={isAnimated}>
      {card}
    </SimpleLinkStyled>
  ) : (
    card
  )
}

export default TextCard

const AnimatedCard = ({ children }: { children: ReactNode }) => {
  const angle = 0.5

  const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)

  const springConfig = { stiffness: 200, damping: 20 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const rotateY = useTransform(springX, [0, 1], [angle, -angle], {
    clamp: true
  })
  const rotateX = useTransform(springY, [0, 1], [-angle, angle], {
    clamp: true
  })

  const onMove = (e: PointerEvent) => {
    const { x: positionX, y: positionY } = getPointerRelativePositionInElement(e)

    x.set(positionX, true)
    y.set(positionY, true)
  }

  return (
    <AnimatedCardStyled
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0.5, true)
        y.set(0.5, true)
      }}
      style={{
        rotateY,
        rotateX
      }}
    >
      {children}
    </AnimatedCardStyled>
  )
}

const cardStyles = css`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: var(--radius);
  background-color: ${({ theme }) => theme.bgSecondary};
  border: 2px solid ${({ theme }) => theme.borderPrimary};
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.4);
  max-width: 420px;
  background-clip: padding-box;
  text-decoration: none;
  transition: all 0.1s ease-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`

const Card = styled.div`
  ${cardStyles}
`

const TextElementStyled = styled(TextElement)`
  display: flex;
  flex-direction: column;
  flex: 1;

  p {
    font-weight: var(--fontWeight-medium);
  }
`

const SimpleLinkStyled = styled(SimpleLink)<Pick<TextCardProps, 'isAnimated'>>`
  display: flex;
  ${({ isAnimated }) =>
    isAnimated &&
    css`
      perspective: 200px;
    `}
`

const AnimatedCardStyled = styled(motion.div)`
  ${cardStyles}
  transform-style: preserve-3d;

  @media ${deviceBreakPoints.mobile} {
    & + & {
      margin-top: var(--spacing-3);
    }
  }

  &:hover {
    transform: translateZ(6px);
    z-index: 1;
  }
`

const CardContainer = styled(motion.div)<{ isAnimated?: boolean }>`
  ${({ isAnimated }) => isAnimated && 'perspective: 200px;'};
  display: flex;
  position: relative;
  max-width: 420px;

  @media ${deviceBreakPoints.mobile} {
    flex: 1;
    min-width: 300px;
  }
`
