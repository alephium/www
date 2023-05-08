import styled from 'styled-components'

export default styled.section<{ doubleMargin?: boolean }>`
  margin: ${({ doubleMargin }) => (doubleMargin ? 'var(--spacing-10)' : 'var(--spacing-6)')} 10vw;

  @media (min-width: 1600px) {
    margin: ${({ doubleMargin }) => (doubleMargin ? 'var(--spacing-10)' : 'var(--spacing-6)')} auto;
    max-width: 1400px;
  }
`
