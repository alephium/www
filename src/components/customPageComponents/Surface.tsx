import styled from 'styled-components'

const Surface = styled.div`
  display: flex;
  border-radius: var(--radius-big);
  background-color: ${({ theme }) => theme.background2};
  padding: var(--spacing-6);
  max-width: var(--page-width);
  box-sizing: border-box;
`

export default Surface
