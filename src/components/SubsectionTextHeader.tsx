import React, { FC } from 'react'
import styled from 'styled-components'

import TextSnippet from './TextSnippet'

interface SubsectionTextHeaderProps {
  title: string
  titleColor?: string
  subtitle: string
  subtitleColor?: string
  className?: string
  condensed?: boolean
}

let SubsectionTextHeader: FC<SubsectionTextHeaderProps> = ({ title, subtitle, className }) => (
  <header className={className}>
    <TextSnippet title={title} titleHierarchy="h3" subtitle={subtitle} />
  </header>
)

SubsectionTextHeader = styled(SubsectionTextHeader)`
  max-width: ${({ condensed }) => (condensed ? 'var(--width-476)' : 'auto')};}

  h3 {
    margin-bottom: var(--spacing-2);
    color: ${({ titleColor }) => titleColor || 'inherit'};

    & + div {
      color: ${({ subtitleColor }) => subtitleColor || 'var(--color-text-grey-light-1)'};
    }
  }
`

export default SubsectionTextHeader
