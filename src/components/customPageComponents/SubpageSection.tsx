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
}

const SubpageSection = ({ children, Parallax, fullWidth, wide, narrow, dark, ...props }: SubpageSectionProps) => (
  <SubpageSectionStyled dark={dark} {...props}>
    {fullWidth ? (
      children
    ) : (
      <PageSectionContainer narrow={narrow} wide={wide}>
        {children}
      </PageSectionContainer>
    )}
    {Parallax}
  </SubpageSectionStyled>
)

export default SubpageSection

const SubpageSectionStyled = styled.section<{ dark?: boolean }>`
  position: relative;
  padding-top: var(--spacing-16);
  padding-bottom: var(--spacing-16);
  background-color: ${({ theme, dark }) => (dark ? theme.bgSurface : theme.bgTertiary)};
  margin: var(--spacing-3);
  border-radius: var(--radius-big);
  border: ${({ theme, dark }) => (dark ? `1px solid ${theme.borderPrimary}` : 'none')};
`
