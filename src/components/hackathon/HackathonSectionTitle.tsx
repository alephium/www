import styled from 'styled-components'
import SectionTextHeader from '../../components/SectionTextHeader'

export default styled(SectionTextHeader)<{ backgroundColor?: 'bgSecondary' | 'bgTertiary' }>`
  padding: 0 var(--spacing-8) 0 0;
  margin-bottom: var(--spacing-8);
  backdrop-filter: none;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme[backgroundColor] : theme.bgSecondary} !important;
`
