import { ReactNode } from 'react'
import styled from 'styled-components'
import PageSectionContainer from '../PageSectionContainer'

interface SubpageSectionProps {
  children: ReactNode
  className?: string
}

const SubpageSection = ({ children, className }: SubpageSectionProps) => (
  <SubpageSectionStyled className={className}>
    <PageSectionContainer>{children}</PageSectionContainer>
  </SubpageSectionStyled>
)

export default SubpageSection

const SubpageSectionStyled = styled.section`
  padding-top: var(--spacing-12);
  padding-bottom: var(--spacing-12);
`
