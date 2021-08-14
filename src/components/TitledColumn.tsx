import React, { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

interface TitledColumnProps {
  title: string
  subtitle?: string
  className?: string
}

let TitledColumn: FC<TitledColumnProps> = ({ title, subtitle, className, children }) => (
  <div className={className}>
    <div className="column-inner">
      <h2>{title}</h2>
      {subtitle && <div>{subtitle}</div>}
      <div className="column-content">{children}</div>
    </div>
  </div>
)

TitledColumn = styled(TitledColumn)`
  flex: 0 0 50%;

  @media ${deviceBreakPoints.mobile} {
    flex: 0 0 100%;
  }

  &:not(:last-child) {
    .column-inner {
      margin-right: var(--spacing-40);

      @media ${deviceBreakPoints.mobile} {
        margin-right: 0;
      }
    }
  }
  &:not(:first-child) {
    .column-inner {
      margin-left: var(--spacing-40);

      @media ${deviceBreakPoints.mobile} {
        margin-left: 0;
      }
    }
  }

  h2 {
    font-size: var(--fontSize-50);
    font-weight: var(--fontWeight-semibold);
    margin-bottom: 0;

    & + div {
      margin-top: var(--spacing-4);
      color: var(--color-text-grey-light-1);
      font-size: var(--fontSize-18);
    }
  }

  .column-content {
    margin-top: var(--spacing-12);
  }
`

export default TitledColumn
