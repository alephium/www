import { FC } from 'react'
import styled, { css } from 'styled-components'

interface ColumnProps {
  vertialCenter?: boolean
  className?: string
}

const Column: FC<ColumnProps> = ({ className, children }) => <div className={className}>{children}</div>

export default styled(Column)`
  flex-basis: 100%;
  flex: 1;

  ${({ vertialCenter }) =>
    vertialCenter &&
    css`
      display: flex;
      align-items: center;
    `}
`
