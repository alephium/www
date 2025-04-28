import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

const SideBySide = styled.div<{ reverseOnMobile?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-8);

  > * {
    flex: 1;
    min-width: 400px;
  }

  + div {
    margin-top: var(--spacing-16);
  }

  @media ${deviceBreakPoints.mobile} {
    flex-direction: ${({ reverseOnMobile }) => (reverseOnMobile ? 'column-reverse' : 'column')};
    align-items: flex-start;

    > * {
      min-width: auto;
    }
  }
`

export default SideBySide
