import { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

interface ColumnsProps {
  className?: string
  gap?: string
}

let Columns: FC<ColumnsProps> = ({ className, children }) => <div className={className}>{children}</div>

Columns = styled(Columns)`
  display: flex;
  flex-flow: wrap;
  gap: ${(props) => props.gap || '0'};

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`

export default Columns
