import { HTMLAttributes, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'
import PageSectionContainer, { PageSectionContainerProps } from '../PageSectionContainer'
type GradientPosition = 'top' | 'bottom' | 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'left' | 'right'

interface SubpageSectionProps extends PageSectionContainerProps, HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  Parallax?: ReactNode
  border?: 'top' | 'bottom' | 'top-bottom' | 'all'
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
  padding-top: ${({ noTopPadding }) => (noTopPadding ? '0' : 'var(--spacing-8)')};
  padding-bottom: ${({ noBottomPadding }) => (noBottomPadding ? '0' : 'var(--spacing-8)')};
  background-color: ${({ theme, bgColor }) => (bgColor ? theme[`background${bgColor}`] : 'transparent')};
  border-radius: ${({ fullWidth }) => (fullWidth ? '0' : 'var(--radius-huge)')};
  overflow: ${({ overflow }) => overflow || 'hidden'};

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-8) var(--spacing-4);
  }

  ${({ border }) =>
    border &&
    css`
      ${border === 'top' &&
      css`
        box-shadow: inset 0 1px 0 0 ${({ theme }) => theme.borderPrimary};
      `}
      ${border === 'bottom' &&
      css`
        box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.borderPrimary};
      `}
      ${border === 'top-bottom' &&
      css`
        box-shadow: inset 0 1px 0 0 ${({ theme }) => theme.borderPrimary},
          inset 0 -1px 0 0 ${({ theme }) => theme.borderPrimary};
      `}
      ${border === 'all' &&
      css`
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.borderPrimary};
      `}
    `}

  ${({ edgeGradient, gradientPosition = 'bottom', theme }) =>
    edgeGradient &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 15%;
        max-height: 40px;
        ${gradientPosition.includes('top') ? 'top: 0;' : 'bottom: 0;'}
        ${gradientPosition.includes('left')
          ? 'left: 0;'
          : gradientPosition.includes('right')
          ? 'right: 0;'
          : 'left: 0;'}
        background: radial-gradient(
          ellipse at ${gradientPosition.includes('right')
          ? '140%'
          : gradientPosition.includes('left')
          ? '-40%'
          : '50%'} 
          ${gradientPosition.includes('top') ? '-100%' : '100%'},
          ${theme.palette6} 0%,
          ${theme.palette5} 10%,
          ${theme.palette3} 30%,
          transparent 100%
        );
        pointer-events: none;
        opacity: 1;
        filter: blur(40px) brightness(${theme.name === 'dark' ? 1 : 1.2});
      }
    `}
`
