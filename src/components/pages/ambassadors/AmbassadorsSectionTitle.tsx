import styled from 'styled-components'
import SectionTextHeader from '../../SectionTextHeader'
import { deviceBreakPoints } from '../../../styles/global-style'

export default styled(SectionTextHeader)`
  padding: 0 var(--spacing-8) 0 0;
  margin-bottom: var(--spacing-8);
  backdrop-filter: none;
  background-color: ${({ theme }) => theme.bgPrimary} !important;

  @media ${deviceBreakPoints.tablet} {
    padding: 0 var(--spacing-2) 0 0;
  }
`
