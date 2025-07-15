import { colord } from 'colord'
import { motion } from 'framer-motion'
import { CSSProperties, ReactNode } from 'react'
import styled, { DefaultTheme, useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

interface GlowingContainerProps {
  className?: string
  children?: ReactNode
  centerGlowColor?: string
  peripheralGlowColor?: string
  glowOpacity?: number
  style?: CSSProperties
}

const GlowingContainer = ({
  className,
  children,
  centerGlowColor,
  peripheralGlowColor,
  glowOpacity,
  style
}: GlowingContainerProps) => {
  const theme = useTheme()

  // Use provided colors or fall back to theme colors
  const primaryColor = centerGlowColor || theme.palette1
  const secondaryColor = peripheralGlowColor || theme.palette6

  const bottomGradient = `radial-gradient(circle at 50% 100%, ${colord(primaryColor)
    .lighten(0.25)
    .toHex()} 15%, ${primaryColor} 25%, ${primaryColor} 35%, ${colord(secondaryColor)
    .alpha(theme.name === 'dark' ? 0.5 : 0.3)
    .toHex()} 45%, transparent 65%)`

  return (
    <EddyBackgroundContainer className={className} style={style}>
      <BottomGradientContainer
        style={{ backgroundImage: bottomGradient, transformOrigin: '50% 100%' }}
        initial={{ scaleX: 0.1, scaleY: 0.1, opacity: 0 }}
        animate={{
          scaleX: 0.8,
          scaleY: 0.6,
          opacity: glowOpacity || 1
        }}
        transition={{
          duration: 2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        aria-hidden="true"
      />
      {children}
    </EddyBackgroundContainer>
  )
}

export default GlowingContainer

const getColorFilters = (theme: DefaultTheme) => `
    brightness(${theme.name === 'dark' ? 1 : 1.2})
`

const EddyBackgroundContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`

const BottomGradientContainer = styled(motion.div)`
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  filter: blur(70px) ${({ theme }) => getColorFilters(theme)};
  background-repeat: no-repeat;

  @media ${deviceBreakPoints.mobile} {
    filter: blur(70px) ${({ theme }) => getColorFilters(theme)};
  }
`
