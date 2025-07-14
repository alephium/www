import { colord } from 'colord'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styled, { DefaultTheme, useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

interface GlowingContainerProps {
  className?: string
  children?: ReactNode
}

const GlowingContainer = ({ className, children }: GlowingContainerProps) => {
  const theme = useTheme()

  const bottomGradient = `radial-gradient(circle at 50% 100%, ${colord(theme.palette1).lighten(0.25).toHex()} 15%, ${
    theme.palette1
  } 25%, ${theme.palette1} 35%, ${colord(theme.palette6)
    .alpha(theme.name === 'dark' ? 0.5 : 0.3)
    .toHex()} 45%, transparent 65%)`

  const backgroundGradient = `linear-gradient(to bottom left, ${theme.palette6} 0%, ${theme.palette1} 20%, ${theme.palette6} 50%, ${theme.palette1} 100%)`

  return (
    <EddyBackgroundContainer className={className}>
      <Background />
      <BottomGradientContainer
        style={{ backgroundImage: bottomGradient, transformOrigin: '50% 100%' }}
        initial={{ scaleX: 0.1, scaleY: 0.1, opacity: 0 }}
        animate={{
          scaleX: 0.8,
          scaleY: 0.6,
          opacity: 1
        }}
        transition={{
          duration: 2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        aria-hidden="true"
      />
      {children}
      <BackgroundGradientContainer
        style={{ backgroundImage: backgroundGradient }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }}
      />
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

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => (theme.name === 'dark' ? theme.background3 : theme.background1)};
  pointer-events: none;
  border-radius: calc(var(--radius-huge) - var(--spacing-2));
  filter: blur(50px);
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

const BackgroundGradientContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`
