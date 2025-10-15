import styled, { css } from 'styled-components'

type GradientPosition = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface GlowProps {
  position?: GradientPosition
  color?: string
  radius?: number
  opacity?: number
  className?: string
}

const Glow = styled.div<GlowProps>`
  position: absolute;
  pointer-events: none;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;

  ${({ position = 'bottom', color, radius = 20, opacity = 1, theme }) => css`
    &::before {
      content: '';
      position: absolute;

      /* Size logic */
      ${position === 'left' || position === 'right'
        ? 'width: 25%; max-width: 40px; height: 100%;'
        : position === 'top' || position === 'bottom'
        ? 'width: 100%; height: 25%; max-height: 40px;'
        : 'width: 50%; height: 50%; max-width: 120px; max-height: 120px;'}

      /* Vertical positioning */
      ${position === 'top' || position === 'top-left' || position === 'top-right'
        ? 'top: 0;'
        : position === 'bottom' || position === 'bottom-left' || position === 'bottom-right'
        ? 'bottom: 0;'
        : position === 'left' || position === 'right'
        ? 'top: 50%; transform: translateY(-50%);'
        : 'top: 0;'}
      
      /* Horizontal positioning */
      ${position === 'left' || position === 'top-left' || position === 'bottom-left'
        ? 'left: 0;'
        : position === 'right' || position === 'top-right' || position === 'bottom-right'
        ? 'right: 0;'
        : 'left: 0;'}
      
      /* Gradient positioning */
      background: radial-gradient(
        ellipse at ${position === 'right'
        ? '100%'
        : position === 'left'
        ? '0%'
        : position.includes('right')
        ? '100%'
        : position.includes('left')
        ? '0%'
        : '50%'} 
        ${position === 'top'
        ? '0%'
        : position === 'bottom'
        ? '100%'
        : position.includes('top')
        ? '0%'
        : position.includes('bottom')
        ? '100%'
        : '50%'},
        ${color || theme.palette1} 0%,
        ${color || theme.palette6} 30%,
        transparent 60%
      );
      pointer-events: none;
      opacity: ${opacity};
      filter: blur(${radius}px) brightness(${theme.name === 'dark' ? 1.4 : 1});
    }
  `};
`

export default Glow
