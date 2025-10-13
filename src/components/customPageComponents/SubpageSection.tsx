import { HTMLAttributes, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import Glow from '../Glow'
import PageSectionContainer, { PageSectionContainerProps } from '../PageSectionContainer'

interface SubpageSectionProps extends PageSectionContainerProps, HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  Parallax?: ReactNode
  border?: 'top' | 'bottom' | 'top-bottom' | 'all'
  isCentered?: boolean
  className?: string
  edgeGradient?: boolean
  gradientPosition?: 'top' | 'bottom' | 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'left' | 'right'
  noTopPadding?: boolean
  noBottomPadding?: boolean
  overflow?: 'hidden' | 'visible'
}

const SubpageSection = ({ children, Parallax, edgeGradient, gradientPosition, ...props }: SubpageSectionProps) => (
  <SubpageSectionStyled {...props}>
    {children}
    {Parallax}
    {edgeGradient && <Glow position={gradientPosition} />}
  </SubpageSectionStyled>
)

export default SubpageSection

const SubpageSectionStyled = styled(PageSectionContainer)<SubpageSectionProps>`
  position: relative;
  justify-content: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
  padding-top: ${({ noTopPadding }) => (noTopPadding ? '0' : 'var(--spacing-10)')};
  padding-bottom: ${({ noBottomPadding }) => (noBottomPadding ? '0' : 'var(--spacing-10)')};
  background-color: ${({ theme, bgColor }) => (bgColor ? theme[`background${bgColor}`] : 'transparent')};

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
`
