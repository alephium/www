import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

interface GridProps {
  gap?: 'large' | 'small'
  columns?: number
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, minmax(0, 1fr));
  gap: ${({ gap }) => (gap === 'small' ? 'var(--spacing-6)' : 'var(--spacing-12)')};

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: repeat(${({ columns }) => (columns ? columns - 1 : 2)}, minmax(0, 1fr));
  }

  @media ${deviceBreakPoints.smallMobile} {
    grid-template-columns: 1fr;
  }
`

export default Grid
