import styled from 'styled-components'

import SimpleLink from '../SimpleLink'

const ClickableBox = styled(SimpleLink)`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  background-color: ${({ theme }) => theme.bgSecondary};
  border-radius: var(--radius);
  padding: var(--spacing-2);
  &:hover {
    background-color: ${({ theme }) => theme.bgPrimary};
  }
`

export default ClickableBox
