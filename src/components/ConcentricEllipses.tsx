import { colord } from 'colord'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

interface ConcentricEllipsesProps {
  baseColor?: string
  bottomOffset?: string
}

const ConcentricEllipses = ({ baseColor, bottomOffset = '-15%' }: ConcentricEllipsesProps) => {
  const numEllipses = 12
  const baseWidth = 400
  const baseHeight = 350
  const widthIncrement = 160
  const heightIncrement = 100
  const baseOpacity = 0.8
  const opacityDecay = 0.1

  const ellipseConfigs = Array.from({ length: numEllipses }, (_, index) => {
    const width = baseWidth + index * widthIncrement
    const height = baseHeight + index * heightIncrement
    const opacity = Math.max(baseOpacity - index * opacityDecay, 0.05)

    return { width, height, opacity }
  })

  return (
    <EllipseContainer bottomOffset={bottomOffset}>
      {ellipseConfigs.map(({ width, height, opacity }, index) => (
        <Ellipse key={index} width={width} height={height} delay={index} opacity={opacity} baseColor={baseColor} />
      ))}
    </EllipseContainer>
  )
}

const EllipseContainer = styled.div<{ bottomOffset: string }>`
  position: absolute;
  bottom: ${({ bottomOffset }) => bottomOffset};
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 0;
  mix-blend-mode: color-dodge;
`

const Ellipse = styled.span<{ width: number; height: number; delay: number; opacity: number; baseColor?: string }>`
  position: absolute;
  border: 2px dashed
    ${({ theme, baseColor }) =>
      colord(baseColor || theme.palette1)
        .alpha(theme.name === 'dark' ? 0.25 : 0.3)
        .toHex()};
  border-radius: 50%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  opacity: ${({ opacity }) => opacity};
  animation: pulseEllipse 6s ease-in-out infinite ${({ delay }) => delay}s;

  @keyframes pulseEllipse {
    0%,
    100% {
      transform: translateX(-50%) scale(1);
    }
    50% {
      transform: translateX(-50%) scale(1.05);
    }
  }

  @media ${deviceBreakPoints.mobile} {
    width: ${({ width }) => width * 0.75}px;
    height: ${({ height }) => height * 0.75}px;
  }
`

export default ConcentricEllipses
