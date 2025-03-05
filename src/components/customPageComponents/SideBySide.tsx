import styled from 'styled-components'

const SideBySide = styled.div`
  display: flex;
  gap: var(--spacing-8);

  > * {
    flex: 1;
  }
`

export default SideBySide
