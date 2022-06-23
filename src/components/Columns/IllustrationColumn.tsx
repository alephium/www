import { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

interface IllustrationColumnProps {
  className?: string
}

let IllustrationColumn: FC<IllustrationColumnProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
)

IllustrationColumn = styled(IllustrationColumn)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 350px;

  img {
    width: 70%;
    height: auto;

    @media ${deviceBreakPoints.mobile} {
      width: 100%;
      max-width: var(--width-368);
      object-fit: contain;
    }
  }

  @media ${deviceBreakPoints.mobile} {
    min-height: 200px;
  }
`

export default IllustrationColumn
