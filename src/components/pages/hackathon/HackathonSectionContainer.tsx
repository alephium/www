import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import PageSectionContainer from '../../PageSectionContainer'

export default styled(PageSectionContainer)`
  padding: var(--spacing-6) 0;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-12) var(--spacing-4);
  }
`
