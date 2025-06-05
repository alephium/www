import { HTMLAttributes, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'
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
  noTopPadding?: boolean
  noBottomPadding?: boolean
  overflow?: 'hidden' | 'visible'
}

const SubpageSection = ({ children, Parallax, ...props }: SubpageSectionProps) => (
  <SubpageSectionStyled {...props}>
    {children}
    {Parallax}
  </SubpageSectionStyled>
)

export default SubpageSection

const SubpageSectionStyled = styled(PageSectionContainer)<SubpageSectionProps>`
  position: relative;
  justify-content: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
  padding-top: ${({ noTopPadding }) => (noTopPadding ? '0' : 'var(--spacing-12)')};
  padding-bottom: ${({ noBottomPadding }) => (noBottomPadding ? '0' : 'var(--spacing-12)')};
  background-color: ${({ theme, bgColor }) => (bgColor ? theme[`background${bgColor}`] : 'transparent')};
  border-radius: ${({ fullWidth }) => (fullWidth ? '0' : 'var(--radius-big)')};
  overflow: ${({ overflow }) => overflow || 'hidden'};

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-8) var(--spacing-4);
  }

  ${({ border }) =>
    border &&
    css`
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.borderPrimary};
    `}

  ${({ edgeGradient, gradientPosition = 'bottom', theme }) =>
    edgeGradient &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        max-height: 200px;
        ${gradientPosition.includes('top') ? 'top: 0;' : 'bottom: 0;'}
        ${gradientPosition.includes('left')
          ? 'left: 0;'
          : gradientPosition.includes('right')
          ? 'right: 0;'
          : 'left: 0;'}
        background: radial-gradient(
          circle at ${gradientPosition.includes('right') ? '140%' : gradientPosition.includes('left') ? '-40%' : '50%'} 
          ${gradientPosition.includes('top') ? '-90%' : '190%'},
          transparent 60%,
          ${theme.palette4} 65%,
          ${theme.palette2} 70%,
          ${theme.palette1} 75%,
          ${theme.palette3} 85%,
          transparent 100%
        );
        mask-image: radial-gradient(
          ellipse 100% 80% at center ${gradientPosition.includes('top') ? 'top' : 'bottom'},
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        -webkit-mask-image: radial-gradient(
          ellipse 100% 80% at center ${gradientPosition.includes('top') ? 'top' : 'bottom'},
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        pointer-events: none;
        filter: blur(70px) saturate(1.7) brightness(1.1);
      }
    `}
`
