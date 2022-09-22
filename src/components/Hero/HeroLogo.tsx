import styled from 'styled-components'
import { deviceBreakPoints } from '../../styles/global-style'
import AlephiumLogo from '../AlephiumLogo'

export default styled(AlephiumLogo)`
  width: 6rem;
  min-height: 5rem;

  @media ${deviceBreakPoints.smallMobile} {
    width: 3rem;
  }
`
