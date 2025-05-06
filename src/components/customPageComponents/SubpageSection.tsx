import { HTMLAttributes, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import PageSectionContainer from '../PageSectionContainer'

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
}

const SubpageSection = ({ children, Parallax, ...props }: SubpageSectionProps) => (
  <SubpageSectionStyled {...props}>
    {children}
    {Parallax}
  </SubpageSectionStyled>
)

export default SubpageSection

const SubpageSectionStyled = styled(PageSectionContainer)<
  Pick<SubpageSectionProps, 'bgColor' | 'isCentered' | 'border' | 'edgeGradient'>
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

  ${({ edgeGradient, theme }) =>
    edgeGradient &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 60%;
        bottom: 0;
        left: 0;
        background: radial-gradient(
          circle at 130% 190%,
          transparent 30%,
          ${theme.palette4} 35%,
          ${theme.palette3} 50%,
          ${theme.textPrimary} 70%,
          ${theme.palette3} 85%,
          ${theme.palette4} 90%,
          transparent 100%
        );
        mask-image: radial-gradient(ellipse 100% 60% at center bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
        -webkit-mask-image: radial-gradient(
          ellipse 100% 50% at center bottom,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        pointer-events: none;
        filter: blur(40px);
        opacity: 0.8;
      }
    `}
`
