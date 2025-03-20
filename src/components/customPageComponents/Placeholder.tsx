import styled from 'styled-components'

const Placeholder = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '400px'};
  background-color: var(--color-grey-700);
`

export default Placeholder
