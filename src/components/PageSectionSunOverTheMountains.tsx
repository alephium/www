import { FC } from 'react'
import styled from 'styled-components'

import PageSectionContainer from './PageSectionContainer'
import SvgSunOverMountains from '../images/sun-over-mountains.svg'

const PageSectionSunOverTheMountains = () => (
  <section>
    <Centered>
      <BackgroundImage src={SvgSunOverMountains} />
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
  background-image: url(${(props) => props.src});
  background-position: center;
`

export default PageSectionSunOverTheMountains
