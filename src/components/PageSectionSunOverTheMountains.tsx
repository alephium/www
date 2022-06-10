import styled from 'styled-components'

import SvgSunOverMountains from '../images/sun-over-mountains.svg'

const PageSectionSunOverTheMountains = () => (
  <section>
    <Centered>
      <BackgroundImage />
    </Centered>
  </section>
)

const Centered = styled.div`
  display: flex;
  justify-content: center;
`

const BackgroundImage = styled.div`
  width: 911px;
  height: 694px;
  background-image: url(${SvgSunOverMountains});
  background-position: center;
`

export default PageSectionSunOverTheMountains
