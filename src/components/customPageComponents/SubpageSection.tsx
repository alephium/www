import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

import PageSectionContainer from '../PageSectionContainer'

interface SubpageSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  Parallax?: ReactNode
  fullWidth?: boolean
  narrow?: boolean
}

const SubpageSection = ({ children, Parallax, fullWidth, narrow, ...props }: SubpageSectionProps) => (
  <SubpageSectionStyled {...props}>
    {fullWidth ? children : <PageSectionContainer narrow={narrow}>{children}</PageSectionContainer>}
    {Parallax}
  </SubpageSectionStyled>
)

export default SubpageSection

const SubpageSectionStyled = styled.section`
  position: relative;

  padding-top: var(--spacing-12);
  padding-bottom: var(--spacing-12);
`
