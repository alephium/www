import styled from 'styled-components'

const CardsRow = styled.div`
  display: flex;
  gap: var(--spacing-6);
  flex-wrap: wrap;

  > div,
  > a {
    flex: 1;
    height: auto;
  }
`

export default CardsRow
