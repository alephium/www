import { FC } from 'react'
import styled, { css } from 'styled-components'

interface ColumnProps {
  vertialCenter?: boolean
  className?: string
}

let Column: FC<ColumnProps> = ({ vertialCenter = false, className, children }) => (
  <div className={className}>{children}</div>
)

Column = styled(Column)`
  flex-basis: 100%;
  flex: 1;

  ${({ vertialCenter }) =>
    vertialCenter &&
    css`
      display: flex;
      align-items: center;
    `}
`

export default Column
