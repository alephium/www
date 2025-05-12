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
  border?: boolean
  bgColor?: 'surface1' | 'surface2'
}

const TextCard = ({
  children,
  url,
  isAnimated = false,
  variants,
  border,
  bgColor,
  ...textElementProps
}: TextCardProps) => {
  const text = (
    <TextElementStyled isBodySmall {...textElementProps}>
      {children}
    </TextElementStyled>
  )

  const card = (
    <CardContainer variants={variants} isAnimated={isAnimated}>
      <Card url={url} isAnimated={isAnimated} border={border} bgColor={bgColor}>
        {text}
      </Card>
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

interface CardProps {
  children: ReactNode
  url?: string
  isAnimated: boolean
  border?: boolean
  bgColor?: TextCardProps['bgColor']
}

const Card = ({ children, url, isAnimated, border, bgColor }: CardProps) => {
  const angle = 1.2
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
      style={isAnimated ? { rotateY, rotateX } : undefined}
      url={url}
      isAnimated={isAnimated}
      border={border}
      bgColor={bgColor}
    >
      {children}
      {url && <GradientBorder />}
    </CardStyled>
  )
}

const cardStyles = ({ border, bgColor }: { border?: boolean; bgColor?: TextCardProps['bgColor'] }) => css`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: var(--radius);
  background-color: ${({ theme }) => (bgColor ? theme[bgColor] : 'rgba(0, 0, 0, 0.5)')};
  background-clip: padding-box;
  text-decoration: none;
  transition: all 0.1s ease-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  ${border &&
  css`
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border: 2px solid ${({ theme }) => theme.borderPrimary};
      border-radius: inherit;
      backdrop-filter: saturate(200%) brightness(1.1);
      -webkit-backdrop-filter: saturate(200%) brightness(1.1);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      -webkit-mask-composite: xor;
      pointer-events: none;
    }
  `}
`

const GradientBorder = styled.div`
  position: absolute;
  inset: 0;
  border-radius: var(--radius);
  background: radial-gradient(
    circle at var(--gradient-x) var(--gradient-y),
    ${({ theme }) => theme.borderPrimary} 30%,
    ${({ theme }) => theme.palette2} 35%,
    ${({ theme }) => theme.palette1} 40%,
    ${({ theme }) => theme.palette4} 50%,
    ${({ theme }) => theme.palette3} 60%,
    ${({ theme }) => theme.borderPrimary} 70%
  );
  opacity: 0;
  pointer-events: none;
  z-index: -1;
  transition: opacity 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: calc(var(--radius) - 2px);
    background: rgba(0, 0, 0, 0.8);
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: calc(var(--radius) - 2px);
    background: rgba(19, 19, 19, 0.8);
    backdrop-filter: blur(100px) saturate(180%);
    -webkit-backdrop-filter: blur(100px) saturate(180%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
`

const CardContainer = styled(motion.div)<{ isAnimated?: boolean }>`
  ${({ isAnimated }) => isAnimated && 'perspective: 200px;'}
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  @media ${deviceBreakPoints.mobile} {
    max-width: 80vw;
  }
`

const TextElementStyled = styled(TextElement)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;

  p {
    font-weight: var(--fontWeight-medium);
    font-size: var(--fontSize-18);
    line-height: 1.4;
  }

  h3 {
    position: relative;
    padding-right: var(--spacing-6);
  }
`

const SimpleLinkStyled = styled(SimpleLink)<Pick<TextCardProps, 'isAnimated'>>`
  display: flex;
  width: 100%;
  height: 100%;
  ${({ isAnimated }) =>
    isAnimated &&
    css`
      perspective: 200px;
    `};
`

const CardStyled = styled(motion.div)<{
  url?: string
  isAnimated: boolean
  border?: boolean
  bgColor?: TextCardProps['bgColor']
}>`
  ${({ border, bgColor }) => cardStyles({ border, bgColor })}
  ${({ url }) => url && 'transform-style: preserve-3d;'}
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  @media ${deviceBreakPoints.mobile} {
    & + & {
      margin-top: var(--spacing-3);
    }
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

      &:hover ${GradientBorder}::after {
        opacity: 1;
      }

      h3::after {
        content: '→';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: var(--fontSize-24);
        transition: transform 0.3s ease, color 0.3s ease;
        color: ${({ theme }) => theme.textTertiary};
      }

      &:hover h3::after {
        color: ${({ theme }) => theme.textPrimary};
      }
    `}

  .styled-image {
    filter: blur(1px) brightness(0.5);
  }

  h3 {
    transition: color 0.3s ease;
  }

  &:hover {
    .styled-image {
      filter: blur(0px) brightness(1);
    }
  }
`
