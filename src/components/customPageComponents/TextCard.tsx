import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion'
import { PointerEvent, ReactNode, useEffect, useRef } from 'react'
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
    <CardContainer variants={variants} isAnimated={!!url}>
      <Card url={url}>{text}</Card>
    </CardContainer>
  )

  return url ? (
    <SimpleLinkStyled url={url} isAnimated={!!url}>
      {card}
    </SimpleLinkStyled>
  ) : (
    card
  )
}

export default TextCard

const Card = ({ children, url }: { children: ReactNode; url?: string }) => {
  const angle = 0.5
  const cardRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const updateGradientPosition = () => {
      if (cardRef.current) {
        cardRef.current.style.setProperty('--gradient-x', `${springX.get() * 100}%`)
        cardRef.current.style.setProperty('--gradient-y', `${springY.get() * 100}%`)
      }
    }

    const unsubscribeX = springX.onChange(updateGradientPosition)
    const unsubscribeY = springY.onChange(updateGradientPosition)

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [springX, springY])

  const onMove = (e: PointerEvent) => {
    const { x: positionX, y: positionY } = getPointerRelativePositionInElement(e)

    x.set(positionX, true)
    y.set(positionY, true)
  }

  return (
    <CardStyled
      ref={cardRef}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0.5, true)
        y.set(0.5, true)
      }}
      style={url ? { rotateY, rotateX } : undefined}
      url={url}
    >
      {children}
      {url && <GradientBorder />}
    </CardStyled>
  )
}

const cardStyles = css<{ url?: string }>`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: var(--radius);
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.bgSurface};
  background-clip: padding-box;
  text-decoration: none;
  transition: all 0.1s ease-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--radius);
    border: 2px solid ${({ theme }) => theme.borderPrimary};
    pointer-events: none;
    z-index: 1;
    transition: border-color 0.3s ease;
  }
`

const GradientBorder = styled.div`
  position: absolute;
  inset: 0;
  border-radius: var(--radius);
  background: radial-gradient(
    circle at var(--gradient-x) var(--gradient-y),
    ${({ theme }) => theme.borderPrimary} 0%,
    ${({ theme }) => theme.palette2} 35%,
    ${({ theme }) => theme.palette1} 40%,
    ${({ theme }) => theme.palette4} 50%,
    ${({ theme }) => theme.palette3} 60%,
    ${({ theme }) => theme.borderPrimary} 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: calc(var(--radius) - 2px);
    background: ${({ theme }) => theme.bgPrimary};
    z-index: 0;
  }
`

const CardStyled = styled(motion.div)<{ url?: string }>`
  ${cardStyles}
  ${({ url }) => url && 'transform-style: preserve-3d;'}

  @media ${deviceBreakPoints.mobile} {
    & + & {
      margin-top: var(--spacing-3);
    }
  }

  &:hover {
    transform: translateZ(6px);
    z-index: 1;
  }

  ${({ url }) =>
    url &&
    css`
      &:hover::before {
        border: none;
      }

      &:hover ${GradientBorder} {
        opacity: 1;
      }
    `}
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
