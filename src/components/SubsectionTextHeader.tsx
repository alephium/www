import React, { FC } from 'react'
import styled from 'styled-components'

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
    <h3>{title}</h3>
    <div>{subtitle}</div>
  </header>
)

SubsectionTextHeader = styled(SubsectionTextHeader)`
  max-width: ${({ condensed }) => (condensed ? 'var(--width-476)' : 'auto')};}

  h3 {
    font-size: var(--fontSize-28);
    line-height: var(--lineHeight-36);
    font-weight: var(--fontWeight-semibold);
    margin-top: 0;
    margin-bottom: var(--spacing-4);
    color: ${({ titleColor }) => titleColor || 'inherit'};

    & + div {
      color: ${({ subtitleColor }) => subtitleColor || 'var(--color-text-grey-light-1)'};
      font-size: var(--fontSize-18);
      line-height: var(--lineHeight-26);
    }
  }
`

export default SubsectionTextHeader
