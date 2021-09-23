import React, { FC } from 'react'
import styled from 'styled-components'

import TextSnippet from './TextSnippet'

interface SectionTextHeaderProps {
  className?: string
  title: string
  subtitle: string
  bigSubtitle?: boolean
  centered?: boolean
}

let SectionTextHeader: FC<SectionTextHeaderProps> = ({ className, title, subtitle, bigSubtitle, children }) => (
  <header className={className}>
    <TextSnippet title={title} subtitle={subtitle} bigTitle bigSubtitle={bigSubtitle}>
      {children}
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
    color: ${({ theme }) => theme.textTertiary};
    max-width: var(--width-564);
  }
`

export default SectionTextHeader
