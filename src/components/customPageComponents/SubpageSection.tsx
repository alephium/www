import { ReactNode } from 'react'
import styled from 'styled-components'
import PageSectionContainer from '../PageSectionContainer'

interface SubpageSectionProps {
  children: ReactNode
  className?: string
  Parallax?: ReactNode
  fullWidth?: boolean
}

const SubpageSection = ({ children, className, Parallax, fullWidth }: SubpageSectionProps) => (
  <SubpageSectionStyled className={className}>
    {fullWidth ? children : <PageSectionContainer>{children}</PageSectionContainer>}
    {Parallax}
  </SubpageSectionStyled>
)

export default SubpageSection

const SubpageSectionStyled = styled.section`
  position: relative;

  padding-top: var(--spacing-12);
  padding-bottom: var(--spacing-12);
`
