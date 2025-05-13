import styled from 'styled-components'

const SubheaderContent = styled.div<{ isCentered?: boolean }>`
  margin-top: var(--spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  align-items: ${({ isCentered }) => (isCentered ? 'center' : 'initial')};
`

export default SubheaderContent
