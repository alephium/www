import React, { FC } from 'react'
import styled from 'styled-components'

interface ColumnProps {
  className?: string
}

let Column: FC<ColumnProps> = ({ className, children }) => <div className={className}>{children}</div>

Column = styled(Column)`
  flex-basis: 100%;
  flex: 1;
`

export default Column
