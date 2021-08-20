import React, { FC } from 'react'
import styled from 'styled-components'

interface SectionTextHeaderProps {
  className?: string
  title: string
  subtitle: string
  largeSubtitle?: boolean
  centered?: boolean
  description?: string
}

let SectionTextHeader: FC<SectionTextHeaderProps> = ({ className, title, subtitle, description }) => (
  <header className={className}>
    <h2>{title}</h2>
    <div>{subtitle}</div>
    {description && <p>{description}</p>}
  </header>
)

SectionTextHeader = styled(SectionTextHeader)`
  text-align: ${(props) => (props.centered ? 'center' : 'left')};

  h2 {
    font-size: var(--fontSize-50);
    font-weight: var(--fontWeight-semibold);
    color: ${({ theme }) => theme.textPrimary};
    margin: 0;

    & + div {
      margin-top: var(--spacing-4);
      color: ${({ theme }) => theme.textSecondary};
      font-size: ${(props) => (props.largeSubtitle ? 'var(--fontSize-24)' : 'var(--fontSize-18)')};
    }
  }

  p {
    margin-top: var(--spacing-10);
    margin-bottom: 0;
    color: ${({ theme }) => theme.textTetriary};
    font-size: var(--fontSize-18);
    max-width: var(--width-564);
  }
`

export default SectionTextHeader
