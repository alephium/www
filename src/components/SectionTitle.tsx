import React, { FC } from 'react'
import styled from 'styled-components'

interface SectionTitleProps {
  className?: string
  title: string
  subtitle: string
  largeSubtitle?: boolean
  centered?: boolean
}

let SectionTitle: FC<SectionTitleProps> = ({ className, title, subtitle }) => (
  <header className={className}>
    <h2>{title}</h2>
    <div>{subtitle}</div>
  </header>
)

SectionTitle = styled(SectionTitle)`
  text-align: ${(props) => (props.centered ? 'center' : 'left')};

  h2 {
    font-size: var(--fontSize-50);
    font-weight: var(--fontWeight-semibold);
    margin-bottom: 0;

    & + div {
      margin-top: var(--spacing-4);
      color: var(--color-text-grey-light-1);
      font-size: ${(props) => (props.largeSubtitle ? 'var(--fontSize-24)' : 'var(--fontSize-18)')};
    }
  }
`

export default SectionTitle
