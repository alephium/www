import styled from 'styled-components'

import TextElement from './TextElement'

const TextCardContent = styled(TextElement)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-2);

  p {
    flex: 1;
  }

  h3 {
    margin: 0;
  }
`

export default TextCardContent
