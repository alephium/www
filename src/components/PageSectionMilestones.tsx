import styled from 'styled-components'

import SectionTextHeader from './SectionTextHeader'
import DualTimeline, { Timeline } from './DualTimeline'
import Toggle from '../Toggle'
import { useState } from 'react'

export type PageSectionMilestonesContentType = {
  title: string
  subtitle: string
  timelines: Timeline[]
}

interface Props {
  content: PageSectionMilestonesContentType
}

const PageSectionMilestones = ({ content: { title, subtitle, timelines } }: Props) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleShowDetailsToggle = () => setShowDetails((p) => !p)

  return (
    <SectionWrapper>
      <StyledSectionTextHeader id="milestones" title={title} subtitle={subtitle} bigSubtitle bigText sticky centered />
      <ToggleSection>
        <ToggleLabel>Simple</ToggleLabel>
        <Toggle toggled={showDetails} onToggle={handleShowDetailsToggle} />
        <ToggleLabel>Detailed</ToggleLabel>
      </ToggleSection>
      <Centered>
        <DualTimeline timelines={timelines} detailed={showDetails} />
      </Centered>
    </SectionWrapper>
  )
}

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

  margin-bottom: var(--spacing-8);
`

const ToggleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: var(--spacing-8);
`

const ToggleLabel = styled.span`
  color: ${({ theme }) => theme.textPrimary};
`
