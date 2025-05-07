import { HTMLAttributes, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import PageSectionContainer from '../PageSectionContainer'

type GradientPosition = 'top' | 'bottom' | 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'

interface SubpageSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  Parallax?: ReactNode
  wide?: boolean
  fullWidth?: boolean
  narrow?: boolean
  bgColor?: '1' | '2' | '3'
  border?: boolean
  isCentered?: boolean
  className?: string
  edgeGradient?: boolean
  gradientPosition?: GradientPosition
}

const SubpageSection = ({ children, Parallax, ...props }: SubpageSectionProps) => (
  <SubpageSectionStyled {...props}>
    {children}
    {Parallax}
  </SubpageSectionStyled>
)

export default SubpageSection

const SubpageSectionStyled = styled(PageSectionContainer)<
  Pick<SubpageSectionProps, 'bgColor' | 'isCentered' | 'border' | 'edgeGradient' | 'gradientPosition'>
>`
  position: relative;
  justify-content: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
  padding-top: var(--spacing-12);
  padding-bottom: var(--spacing-12);
  background-color: ${({ theme, bgColor }) => (bgColor ? theme[`background${bgColor}`] : 'transparent')};
  border-radius: var(--radius-big);
  overflow: hidden;

  ${({ border }) =>
    border &&
    css`
      box-shadow: inset 0 0 0 4px ${({ theme }) => theme.borderPrimary};
    `}

  ${({ edgeGradient, gradientPosition = 'bottom', theme }) =>
    edgeGradient &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        ${gradientPosition.includes('top') ? 'top: 0;' : 'bottom: 0;'}
        ${gradientPosition.includes('left')
          ? 'left: 0;'
          : gradientPosition.includes('right')
          ? 'right: 0;'
          : 'left: 0;'}
        background: radial-gradient(
          circle at ${gradientPosition.includes('right') ? '140%' : gradientPosition.includes('left') ? '-40%' : '50%'} 
          ${gradientPosition.includes('top') ? '-90%' : '190%'},
          transparent 30%,
          ${theme.palette4} 35%,
          ${theme.palette3} 50%,
          ${theme.textPrimary} 70%,
          ${theme.palette3} 85%,
          ${theme.palette4} 90%,
          transparent 100%
        );
        mask-image: radial-gradient(
          ellipse 100% 60% at center ${gradientPosition.includes('top') ? 'top' : 'bottom'},
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        -webkit-mask-image: radial-gradient(
          ellipse 100% 50% at center ${gradientPosition.includes('top') ? 'top' : 'bottom'},
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        pointer-events: none;
        filter: blur(40px);
        opacity: 0.5;
      }
    `}
`
