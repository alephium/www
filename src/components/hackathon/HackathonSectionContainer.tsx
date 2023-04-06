import styled from 'styled-components'
import PageSectionContainer from '../../components/PageSectionContainer'
import { deviceBreakPoints } from '../../styles/global-style'

export default styled(PageSectionContainer)`
  padding: var(--spacing-12);

  @media ${deviceBreakPoints.tablet} {
    padding: var(--spacing-4);
  }
`
