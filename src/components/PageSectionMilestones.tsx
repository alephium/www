import { FC } from 'react'
import styled from 'styled-components'

import PageSectionContainer from './PageSectionContainer'
import SectionTextHeader from './SectionTextHeader'
import DualTimeline, { Timeline } from './DualTimeline'

interface Props {
  content: {
    title: string
    subtitle: string
    timelines: Timeline[]
  }
}

const PageSectionMilestones = ({ content: { title, subtitle, timelines }}: Props) => (
  <section>
    <SectionTextHeaderStyled title={title} subtitle={subtitle} bigSubtitle bigText />
    <Centered>
      <DualTimeline timelines={timelines} />
    </Centered>
  </section>
)

const Centered = styled.div`
  display: flex;
  justify-content: center;
`

const SectionTextHeaderStyled = styled(SectionTextHeader)`
  text-align: center;
  padding-bottom: 70px;
`

export default PageSectionMilestones
