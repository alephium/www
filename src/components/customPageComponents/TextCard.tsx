import { motion, useMotionValue, useTransform, Variants } from 'framer-motion'
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

  const card = isAnimated ? <AnimatedCard>{text}</AnimatedCard> : <Card>{text}</Card>

  const linkedCard = url ? (
    <SimpleLinkStyled url={url} isAnimated={isAnimated}>
      {card}
    </SimpleLinkStyled>
  ) : (
    card
  )

  return isAnimated ? <AnimatedCardContainer variants={variants}>{linkedCard}</AnimatedCardContainer> : linkedCard
}

export default TextCard

const AnimatedCard = ({ children }: { children: ReactNode }) => {
  const angle = 0.3

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
    <AnimatedCardStyled
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
      {children}
    </AnimatedCardStyled>
  )
}

const cardStyles = css`
  border-radius: var(--radius);
  background-color: ${({ theme }) => theme.bgSurface};
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.4);
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
  flex: 1;

  p {
    font-weight: var(--fontWeight-medium);
  }
`

const SimpleLinkStyled = styled(SimpleLink)<Pick<TextCardProps, 'isAnimated'>>`
  ${({ isAnimated }) =>
    isAnimated &&
    css`
      display: flex;
      perspective: 200px;
    `}
`

const AnimatedCardStyled = styled(motion.div)`
  ${cardStyles}

  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.bgSurface};
  transition: box-shadow 0.2s ease-out;
  perspective: 200px;

  @media ${deviceBreakPoints.mobile} {
    & + & {
      margin-top: var(--spacing-3);
    }
  }

  &:hover {
    transform: translateZ(6px);
    z-index: 1;
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`

const AnimatedCardContainer = styled(motion.div)`
  display: flex;
  position: relative;
  max-width: 400px;

  @media ${deviceBreakPoints.mobile} {
    flex: 1;
    min-width: 300px;
  }
`
