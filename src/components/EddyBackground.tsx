import { colord } from 'colord'
import { motion } from 'framer-motion'
import styled, { DefaultTheme, useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

const EddyBackground = ({ className }: { className?: string }) => {
  const theme = useTheme()

  const bottomGradient = `radial-gradient(circle at 50% 120%, ${theme.palette2} 15%, ${theme.palette5} 35%, ${colord(
    theme.palette3
  )
    .alpha(theme.name === 'dark' ? 0.5 : 0.3)
    .toHex()} 55%, transparent 65%)`

  return (
    <EddyBackgroundContainer className={className}>
      <GradientContainer
        style={{ backgroundImage: bottomGradient, transformOrigin: '50% 100%' }}
        initial={{ scaleX: 0.3, scaleY: 0.3, opacity: 0 }}
        animate={{
          scaleX: 0.7,
          scaleY: 0.5,
          opacity: 1
        }}
        transition={{
          duration: 2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        aria-hidden="true"
      />
    </EddyBackgroundContainer>
  )
}

export default EddyBackground

const getColorFilters = (theme: DefaultTheme) => `
    brightness(${theme.name === 'dark' ? 1 : 1.15})
`

const EddyBackgroundContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
`

const GradientContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  filter: blur(70px) ${({ theme }) => getColorFilters(theme)};
  background-repeat: no-repeat;

  @media ${deviceBreakPoints.mobile} {
    filter: blur(70px) ${({ theme }) => getColorFilters(theme)};
  }
`
