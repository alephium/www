import styled from 'styled-components'

const SubheaderContent = styled.div<{ isCentered?: boolean }>`
  margin-top: var(--spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  align-items: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
`

export default SubheaderContent
