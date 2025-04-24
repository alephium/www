import styled from 'styled-components'

const SubheaderContent = styled.div<{ isCentered?: boolean }>`
  margin-top: var(--spacing-10);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-10);
  align-items: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
`

export default SubheaderContent
