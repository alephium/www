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
}

const SubpageSection = ({ children, Parallax, ...props }: SubpageSectionProps) => (
  <SubpageSectionStyled {...props}>
    {children}
    {Parallax}
  </SubpageSectionStyled>
)

export default SubpageSection

const SubpageSectionStyled = styled(PageSectionContainer)<
  Pick<SubpageSectionProps, 'bgColor' | 'isCentered' | 'border'>
>`
  position: relative;
  justify-content: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
  padding-top: var(--spacing-14);
  padding-bottom: var(--spacing-14);
  background-color: ${({ theme, bgColor }) => (bgColor ? theme[`background${bgColor}`] : 'transparent')};
  border-radius: var(--radius-big);
  overflow: hidden;

  ${({ border }) =>
    border &&
    css`
      box-shadow: inset 0 0 0 4px ${({ theme }) => theme.borderPrimary};
    `}
`
