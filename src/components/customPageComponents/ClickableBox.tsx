import styled from 'styled-components'

import SimpleLink from '../SimpleLink'

const ClickableBox = styled(SimpleLink)`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);

  &:hover {
    :before {
      content: '';
      position: absolute;
      right: -10px;
      left: -10px;
      top: -10px;
      bottom: -10px;
      border-radius: var(--radius);
      background-color: ${({ theme }) => theme.bgSecondary};
      z-index: -1;
    }
  }
`

export default ClickableBox
