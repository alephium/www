import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import SectionTextHeader from '../../SectionTextHeader'

export default styled(SectionTextHeader)<{ backgroundColor?: 'surface2' | 'background1' }>`
  padding: 0 var(--spacing-8) 0 0;
  margin-bottom: var(--spacing-8);
  backdrop-filter: none;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme[backgroundColor] : theme.surface2} !important;

  h2 {
    font-size: 44px;
    font-weight: 400;
  }

  .text-subtitle {
    font-weight: 350;
  }

  @media ${deviceBreakPoints.mobile} {
    padding: 0 var(--spacing-2) 0 0;
  }
`
