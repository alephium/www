import { FC } from 'react'
import styled, { DefaultTheme, useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

export interface MeshGradientEffectProps {
  /** Not used in static version, but kept for API compatibility */
  contrast?: number
  brightness?: number
  blendMode?: string
  speed?: number
  color1?: [number, number, number]
  color2?: [number, number, number]
  color3?: [number, number, number]
  color4?: [number, number, number]
  className?: string
}

const MeshGradientEffect: FC<MeshGradientEffectProps> = ({ className }) => {
  const theme = useTheme()

  const leftGradient = `radial-gradient(circle at 0% 50%, ${theme.palette2} 15%, ${theme.palette5} 30%, ${theme.palette1} 50%, ${theme.palette3} 60%, transparent 70%)`
  const rightGradient = `radial-gradient(circle at 100% 50%, ${theme.palette2} 15%, ${theme.palette5} 30%, ${theme.palette1} 50%, ${theme.palette3} 60%, transparent 70%)`

  return (
    <EddyBackgroundContainer className={className}>
      <GradientContainer
        style={{ backgroundImage: leftGradient, left: 0, backgroundPosition: '0% 50%' }}
        aria-hidden="true"
      />
      <GradientContainer
        style={{ backgroundImage: rightGradient, right: 0, backgroundPosition: '100% 50%' }}
        aria-hidden="true"
      />
    </EddyBackgroundContainer>
  )
}

export default MeshGradientEffect

const getColorFilters = (theme: DefaultTheme) => `
    brightness(${theme.name === 'dark' ? 1 : 1.4})
    saturate(${theme.name === 'dark' ? 1.3 : 1})
    contrast(${theme.name === 'dark' ? 1.2 : 1});
`

const EddyBackgroundContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
`

const GradientContainer = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  filter: blur(90px) ${({ theme }) => getColorFilters(theme)};
  opacity: 0.8;
  background-size: 65% 75%;
  background-repeat: no-repeat;

  @media ${deviceBreakPoints.mobile} {
    filter: blur(70px) ${({ theme }) => getColorFilters(theme)};
  }
`
