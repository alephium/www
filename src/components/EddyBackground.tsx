import { motion } from 'framer-motion'
import styled, { DefaultTheme, useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

const EddyBackground = ({ className }: { className?: string }) => {
  const theme = useTheme()

  const bottomGradient = `radial-gradient(circle at 50% 100%, ${theme.palette2} 10%, ${theme.palette5} 40%, ${theme.palette3} 70%, transparent 90%)`

  return (
    <EddyBackgroundContainer className={className}>
      <GradientContainer
        style={{ backgroundImage: bottomGradient, backgroundPosition: '50% 100%', transformOrigin: '50% 100%' }}
        initial={{ scaleX: 0.5, scaleY: 0.5, opacity: 0 }}
        animate={{
          scaleX: 1,
          scaleY: 1,
          opacity: theme.name === 'dark' ? 0.8 : 0.7
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
  height: 80%;
  z-index: -1;
  pointer-events: none;
  filter: blur(80px) ${({ theme }) => getColorFilters(theme)};
  background-size: 80% 60%;
  background-repeat: no-repeat;

  @media ${deviceBreakPoints.mobile} {
    filter: blur(70px) ${({ theme }) => getColorFilters(theme)};
  }
`
