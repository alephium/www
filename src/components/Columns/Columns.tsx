import { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

interface ColumnsProps {
  className?: string
  gap?: string
  reverse?: boolean
}

let Columns: FC<ColumnsProps> = ({ className, children }) => <div className={className}>{children}</div>

Columns = styled(Columns)`
  display: flex;
  gap: ${(props) => props.gap || '0'};

  @media ${deviceBreakPoints.mobile} {
    flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
  }
`

export default Columns
