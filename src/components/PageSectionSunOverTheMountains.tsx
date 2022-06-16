import styled from 'styled-components'

import SvgSunOverMountains from '../images/sun-over-mountains.svg'

const PageSectionSunOverTheMountains = () => (
  <Container>
    <BackgroundImage />
  </Container>
)

const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-10);
`

const BackgroundImage = styled.div`
  width: 70%;
  height: 400px;
  background-image: url(${SvgSunOverMountains});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

export default PageSectionSunOverTheMountains
