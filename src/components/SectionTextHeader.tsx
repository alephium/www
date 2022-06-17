import { FC } from 'react'
import styled from 'styled-components'

import TextSnippet from './TextSnippet'

interface SectionTextHeaderProps {
  className?: string
  title: string
  subtitle: string
  bigSubtitle?: boolean
  bigText?: boolean
  centered?: boolean
}

let SectionTextHeader: FC<SectionTextHeaderProps> = ({
  className,
  title,
  subtitle,
  bigSubtitle,
  bigText,
  children
}) => {
  return (
    <header className={className}>
      <TextSnippet title={title} subtitle={subtitle} bigTitle bigSubtitle={bigSubtitle} bigText={bigText}>
        {children}
      </TextSnippet>
    </header>
  )
}

SectionTextHeader = styled(SectionTextHeader)`
  position: sticky;
  top: 0;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  padding: var(--spacing-5) 0;
  background-color: ${({ theme }) => theme.bgSecondary};
  z-index: 2000;

  h2 {
    color: ${({ theme }) => theme.textPrimary};
    margin: 0;

    & + div {
      margin-top: var(--spacing-2);
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  p {
    font-size: var(--fontSize-18);
    margin-top: var(--spacing-5);
    margin-bottom: 0;
    color: ${({ theme }) => theme.textTertiary};
    max-width: var(--width-564);
  }
`

export default SectionTextHeader
