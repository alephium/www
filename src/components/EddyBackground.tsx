import { FC } from 'react'
import styled, { useTheme } from 'styled-components'

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
}

const MeshGradientEffect: FC<MeshGradientEffectProps> = () => {
  const theme = useTheme()

  // Left and right gradients as separate containers
  const leftGradient = `radial-gradient(circle at 0% 50%, ${theme.palette2} 20%, ${theme.palette5} 30%, ${theme.palette3} 50%, transparent 70%)`
  const rightGradient = `radial-gradient(circle at 100% 50%, ${theme.palette2} 20%, ${theme.palette5} 30%, ${theme.palette3} 50%, transparent 70%)`

  return (
    <EddyBackgroundContainer>
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
  filter: blur(70px) brightness(${({ theme }) => (theme.name === 'dark' ? 0.8 : 1.2)})
    saturate(${({ theme }) => (theme.name === 'dark' ? 1.1 : 0.8)});
  background-size: 65% 75%;
  background-repeat: no-repeat;
`
