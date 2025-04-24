import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

import PageSectionContainer from '../PageSectionContainer'

interface SubpageSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  Parallax?: ReactNode
  fullWidth?: boolean
  wide?: boolean
  narrow?: boolean
  dark?: boolean
  isCentered?: boolean
}

const SubpageSection = ({ children, Parallax, fullWidth, wide, narrow, ...props }: SubpageSectionProps) => (
  <SubpageSectionStyled {...props}>
    {children}
    {Parallax}
  </SubpageSectionStyled>
)

export default SubpageSection

const SubpageSectionStyled = styled(PageSectionContainer)<Pick<SubpageSectionProps, 'dark' | 'isCentered'>>`
  position: relative;
  justify-content: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
  padding-top: var(--spacing-16);
  padding-bottom: var(--spacing-16);
  background-color: ${({ theme, dark }) => (dark ? theme.bgSurface : 'transparent')};
  border-radius: var(--radius-big);
  border: ${({ theme, dark }) => (dark ? `1px solid ${theme.borderPrimary}` : 'none')};
  overflow: hidden;
`
