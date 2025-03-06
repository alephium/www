import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

interface GridProps {
  columns?: number
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, 1fr);
  gap: var(--spacing-12);

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default Grid
