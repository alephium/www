import styled from 'styled-components'
import PageSectionContainer from '../../PageSectionContainer'
import { deviceBreakPoints } from '../../../styles/global-style'

export default styled(PageSectionContainer)`
  padding: var(--spacing-6) 0;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-12) var(--spacing-4);
  }
`
