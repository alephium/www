import { colord } from 'colord'
import { HTMLAttributes, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import PageSectionContainer from '../PageSectionContainer'

interface SubpageSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  Parallax?: ReactNode
  fullWidth?: boolean
  wide?: boolean
  narrow?: boolean
  contrasted?: boolean
  border?: boolean
  isCentered?: boolean
}

const SubpageSection = ({ children, Parallax, ...props }: SubpageSectionProps) => (
  <SubpageSectionStyled {...props}>
    {children}
    {Parallax}
  </SubpageSectionStyled>
)

export default SubpageSection

const SubpageSectionStyled = styled(PageSectionContainer)<
  Pick<SubpageSectionProps, 'contrasted' | 'isCentered' | 'border'>
>`
  position: relative;
  justify-content: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
  padding-top: var(--spacing-14);
  padding-bottom: var(--spacing-14);
  background-color: ${({ theme, contrasted }) =>
    contrasted ? colord(theme.bgTertiary).lighten(0.1).toRgbString() : 'transparent'};
  border-radius: ${({ wide }) => (wide ? '0' : 'var(--radius-big)')};
  border: ${({ theme, contrasted }) => (contrasted ? `1px solid ${theme.borderPrimary}` : 'none')};
  overflow: hidden;

  ${({ border }) =>
    border &&
    css`
      box-shadow: inset 0 0 0 4px ${({ theme }) => theme.borderPrimary};
    `}
`
