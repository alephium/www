import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

interface GridProps {
  gap?: 'large' | 'small'
  columns?: number
  isCentered?: boolean
}

const Grid = styled.div<GridProps>`
  ${({ isCentered, columns }) =>
    isCentered
      ? `
          display: inline-grid;
          grid-auto-flow: column;
          grid-auto-columns: max-content;
          justify-content: center;
          margin: 0 auto;
        `
      : `
          display: grid;
          grid-template-columns: repeat(${columns || 3}, minmax(0, 1fr));
        `}
  gap: ${({ gap }) => (gap === 'small' ? 'var(--spacing-6)' : 'var(--spacing-12)')};

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: repeat(${({ columns }) => (columns ? columns - 1 : 2)}, minmax(0, 1fr));
  }

  @media ${deviceBreakPoints.ipad} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${deviceBreakPoints.smallMobile} {
    grid-template-columns: 1fr;
  }
`

export default Grid
