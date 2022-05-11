import { FC } from 'react'
import styled from 'styled-components'

import PageSectionContainer from './PageSectionContainer'
import SvgSunOverMountains from '../images/sun-over-mountains.svg'

const PageSectionSunOverTheMountains = () => (
  <section>
    <PageSectionContainer>
      <BackgroundImage src={SvgSunOverMountains} />
    </PageSectionContainer>
  </section>
)

const BackgroundImage = styled.div`
  width: 911px;
  height: 694px;
  background-image: url(${(props) => props.src});
`

export default PageSectionSunOverTheMountains
