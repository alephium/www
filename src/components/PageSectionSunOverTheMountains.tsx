import styled from 'styled-components'

import SvgSunOverMountainsFront from '../images/sun-over-mountains-front.svg'
import SvgSunOverMountainsBack from '../images/sun-over-mountains-back.svg'
import ParallaxWrapper from './ParallaxWrapper'

const PageSectionSunOverTheMountains = () => (
  <Container>
    <ParallaxImageFront speed={-10} />
    <ParallaxImageBack speed={2} />
  </Container>
)

const Container = styled.section`
  position: relative;
  height: 600px;
  width: 100%;
  margin-bottom: var(--spacing-10);
`

const ParallaxImage = styled(ParallaxWrapper)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

const ParallaxImageFront = styled(ParallaxImage)`
  background-image: url(${SvgSunOverMountainsFront});
`

const ParallaxImageBack = styled(ParallaxImage)`
  background-image: url(${SvgSunOverMountainsBack});
`

export default PageSectionSunOverTheMountains
