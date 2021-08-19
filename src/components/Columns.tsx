import React, { FC } from 'react'
import styled from 'styled-components'

interface ColumnsProps {
  className?: string
}

let Columns: FC<ColumnsProps> = ({ className, children }) => <div className={className}>{children}</div>

Columns = styled(Columns)`
  display: flex;
  flex-flow: wrap;
`

export default Columns
