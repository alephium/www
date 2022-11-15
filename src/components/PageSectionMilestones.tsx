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
    <StyledSectionTextHeader title={title} subtitle={subtitle} bigSubtitle bigText sticky centered />
    <Centered>
      <DualTimeline timelines={timelines} />
    </Centered>
  </SectionWrapper>
)

const SectionWrapper = styled.section`
  margin-top: var(--spacing-12);
`

const Centered = styled.div`
  display: flex;
  justify-content: center;
`

const StyledSectionTextHeader = styled(SectionTextHeader)`
  background-color: ${({ theme }) => theme.bgSecondary};
`

export default PageSectionMilestones
