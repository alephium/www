import styled from 'styled-components'
import SectionTextHeader from '../../components/SectionTextHeader'
import { deviceBreakPoints } from '../../styles/global-style'

export default styled(SectionTextHeader)<{ backgroundColor?: 'bgSecondary' | 'bgTertiary' }>`
  padding: 0 var(--spacing-8) 0 0;
  margin-bottom: var(--spacing-8);
  backdrop-filter: none;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme[backgroundColor] : theme.bgSecondary} !important;

  @media ${deviceBreakPoints.tablet} {
    padding: 0 var(--spacing-2) 0 0;
  }
`
