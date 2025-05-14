import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

const CardsRow = styled.div`
  display: flex;
  gap: var(--spacing-4);
  flex-wrap: wrap;

  > div {
    flex: 1;
  }
`

export default CardsRow

export const CardsRowSegment = styled.div<{ minWidth?: number }>`
  display: flex;
  gap: var(--spacing-4);
  flex-wrap: wrap;

  > div,
  > a {
    flex: 1 1 ${({ minWidth }) => minWidth ?? 250}px;
    min-width: ${({ minWidth }) => minWidth ?? 250}px;
    max-width: 1fr;
    height: auto;
  }

  @media ${deviceBreakPoints.ipad} {
    > div,
    > a {
      flex: 1 1 100%;
    }
  }
`
