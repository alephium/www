import { motion, useMotionValue, useTransform, Variants } from 'framer-motion'
import { PointerEvent, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'
import { getPointerRelativePositionInElement } from '../../utils/pointer'
import SimpleLink from '../SimpleLink'
import TextElement, { TextElementProps } from './TextElement'

interface TextCardProps extends TextElementProps {
  children: ReactNode
  url?: string
  isAnimated?: boolean
  variants?: Variants
}

const TextCard = ({ children, url, isAnimated = false, variants, ...textElementProps }: TextCardProps) => {
  const text = (
    <TextElementStyled isSmall url={url} {...textElementProps}>
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
  padding: 41px 30px 25px 30px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.bgPrimary};
  background-color: ${({ theme }) => theme.bgTertiary};
  background-clip: padding-box;
  text-decoration: none;
  transition: all 0.1s ease-out;
`

const Card = styled.div`
  ${cardStyles}
`

const TextElementStyled = styled(TextElement)<Pick<TextCardProps, 'url'>>`
  ${({ url }) =>
    url &&
    css`
      &:hover {
        > h3 {
          ::after {
            position: absolute;
            content: '  →';
          }
        }
      }
    `}
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
  ${cardStyles};

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

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`

const AnimatedCardContainer = styled(motion.div)`
  display: flex;
  position: relative;
  max-width: 500px;
  min-width: 300px;

  @media ${deviceBreakPoints.mobile} {
    flex: 1 1 0%;
    min-width: auto;
  }
`
