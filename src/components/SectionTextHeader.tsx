import React, { FC } from 'react'
import styled from 'styled-components'

import TextSnippet from './TextSnippet'

interface SectionTextHeaderProps {
  className?: string
  title: string
  subtitle: string
  bigSubtitle?: boolean
  centered?: boolean
  description?: string
}

let SectionTextHeader: FC<SectionTextHeaderProps> = ({ className, title, subtitle, bigSubtitle, description }) => (
  <header className={className}>
    <TextSnippet title={title} subtitle={subtitle} bigTitle bigSubtitle={bigSubtitle}>
      {description}
    </TextSnippet>
  </header>
)

SectionTextHeader = styled(SectionTextHeader)`
  text-align: ${(props) => (props.centered ? 'center' : 'left')};

  h2 {
    color: ${({ theme }) => theme.textPrimary};
    margin: 0;

    & + div {
      margin-top: var(--spacing-2);
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  p {
    margin-top: var(--spacing-5);
    margin-bottom: 0;
    color: ${({ theme }) => theme.textTetriary};
    max-width: var(--width-564);
  }
`

export default SectionTextHeader
