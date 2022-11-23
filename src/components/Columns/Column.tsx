import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface ColumnProps {
  children: ReactNode
  vertialCenter?: boolean
  className?: string
}

const Column = ({ className, children }: ColumnProps) => <div className={className}>{children}</div>

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
