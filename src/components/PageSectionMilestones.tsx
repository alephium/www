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
  <SectionWrapper>
    <StyledSectionTextHeader id="milestones" title={title} subtitle={subtitle} bigSubtitle bigText sticky centered />
    <Centered>
      <DualTimeline timelines={timelines} />
    </Centered>
  </SectionWrapper>
)

export default PageSectionMilestones

const SectionWrapper = styled.section`
  padding-top: var(--spacing-16);
  background-color: ${({ theme }) => theme.bgTertiary};
`

const Centered = styled.div`
  display: flex;
  justify-content: center;
`

const StyledSectionTextHeader = styled(SectionTextHeader)`
  background-color: ${({ theme }) => theme.bgTertiary};
  margin-bottom: var(--spacing-16);
`
