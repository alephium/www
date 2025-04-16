import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

const SideBySide = styled.div<{ reverseOnMobile?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);

  > * {
    flex: 1;
  }

  + div {
    margin-top: var(--spacing-16);
  }

  @media ${deviceBreakPoints.mobile} {
    flex-direction: ${({ reverseOnMobile }) => (reverseOnMobile ? 'column-reverse' : 'column')};
  }
`

export default SideBySide
