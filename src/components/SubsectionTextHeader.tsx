import { FC } from 'react'
import styled from 'styled-components'

import TextSnippet from './TextSnippet'

interface SubsectionTextHeaderProps {
  title: string
  subtitle: string
  className?: string
  condensed?: boolean
}

let SubsectionTextHeader: FC<SubsectionTextHeaderProps> = ({ title, subtitle, className }) => (
  <header className={className}>
    <TextSnippet title={title} titleHierarchy="h3" subtitle={subtitle} />
  </header>
)

SubsectionTextHeader = styled(SubsectionTextHeader)`
  max-width: ${({ condensed }) => (condensed ? 'var(--width-476)' : 'none')};}

  h3 {
    margin-bottom: var(--spacing-2);
    color: ${({ theme }) => theme.textPrimary};

    & + div {
      color: ${({ theme }) => theme.textTertiary};
    }
  }
`

export default SubsectionTextHeader
