import { HTMLAttributes, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import PageSectionContainer from '../PageSectionContainer'

interface SubpageSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  Parallax?: ReactNode
  fullWidth?: boolean
  wide?: boolean
  narrow?: boolean
  dark?: boolean
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

const SubpageSectionStyled = styled(PageSectionContainer)<Pick<SubpageSectionProps, 'dark' | 'isCentered' | 'border'>>`
  position: relative;
  justify-content: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
  padding-top: var(--spacing-16);
  padding-bottom: var(--spacing-16);
  background-color: ${({ theme, dark }) => (dark ? 'rgba(0, 0, 0, 0.3)' : 'transparent')};
  border-radius: var(--radius-big);
  border: ${({ theme, dark }) => (dark ? `1px solid ${theme.borderPrimary}` : 'none')};
  overflow: hidden;

  ${({ border }) =>
    border &&
    css`
      box-shadow: inset 0 0 0 4px ${({ theme }) => theme.borderPrimary};
    `}
`
