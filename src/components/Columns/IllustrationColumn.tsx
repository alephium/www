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
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

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
    height: 30vh;
    align-items: initial;
  }
`

export default IllustrationColumn