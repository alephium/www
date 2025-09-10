import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { PointerEvent, ReactNode, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import { getPointerRelativePositionInElement } from '../utils/pointer'
import SimpleLink from './SimpleLink'

interface CardProps {
  children: ReactNode
  url?: string
  isAnimated?: boolean
  border?: boolean
  bgColor?: 'surface1' | 'surface2'
  className?: string
}

const Card = ({ children, url, isAnimated = false, border, bgColor, className }: CardProps) => {
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

  const card = (
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
      className={className}
    >
      {children}
      {url && <GradientBorder />}
    </CardStyled>
  )

  return url ? (
    <SimpleLinkStyled url={url} isAnimated={isAnimated}>
      {card}
    </SimpleLinkStyled>
  ) : (
    card
  )
}

const GradientBorder = styled.div`
  position: absolute;
  inset: -1px;
  border-radius: var(--radius-big);
  background: radial-gradient(
    circle at var(--gradient-x) var(--gradient-y),
    ${({ theme }) => theme.palette4} 20%,
    ${({ theme }) => theme.palette5} 70%
  );
  filter: saturate(${({ theme }) => (theme.name === 'light' ? 1.4 : 1)})
    brightness(${({ theme }) => (theme.name === 'light' ? 1.3 : 1)});
  opacity: 0;
  pointer-events: none;
  z-index: -1;
  transition: opacity 0.1s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: calc(var(--radius-big) - 2px);
    background-color: ${({ theme }) => theme.backgroundContrast};
    z-index: 0;
  }
`

const CardStyled = styled(motion.div)<{
  url?: string
  isAnimated: boolean
  border?: boolean
  bgColor?: CardProps['bgColor']
}>`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: var(--radius-big);
  background-color: ${({ theme, bgColor }) => (bgColor ? theme[bgColor] : theme.background1)};
  backdrop-filter: blur(50px) saturate(120%) brightness(1.1);
  text-decoration: none;
  transition: all 0.1s ease-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);

  ${({ border }) =>
    border &&
    css`
      border: 1px solid ${({ theme }) => theme.borderPrimary};
    `}

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

      h3::after,
      h4::after {
        content: '→';
        position: absolute;
        right: 0;
        top: 18px;
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

  h3,
  h4 {
    transition: color 0.3s ease;
  }

  h4 {
    margin-bottom: 0;
  }

  &:hover {
    .styled-image {
      filter: blur(0px) brightness(1);
    }
  }
`

const SimpleLinkStyled = styled(SimpleLink)<Pick<CardProps, 'isAnimated'>>`
  display: flex;
  width: 100%;
  height: 100%;
  ${({ isAnimated }) =>
    isAnimated &&
    css`
      perspective: 200px;
    `};
`

export default Card
