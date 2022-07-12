import styled from 'styled-components'

import SectionTextHeader from './SectionTextHeader'
import DualTimeline, { Timeline } from './DualTimeline'

export type PageSectionMilestonesContentType = {
  title: string
  subtitle: string
  timelines: Timeline[]
}

interface Props {
  content: PageSectionMilestonesContentType
}

const PageSectionMilestones = ({ content: { title, subtitle, timelines } }: Props) => (
  <section>
    <SectionTextHeader title={title} subtitle={subtitle} bigSubtitle bigText sticky centered />
    <Centered>
      <DualTimeline timelines={timelines} />
    </Centered>
  </section>
)

const Centered = styled.div`
  display: flex;
  justify-content: center;
`

export default PageSectionMilestones
