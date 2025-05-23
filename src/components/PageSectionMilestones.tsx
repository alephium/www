import { graphql, useStaticQuery } from 'gatsby'
import { useState } from 'react'
import styled from 'styled-components'

import Toggle from '../Toggle'
import SubpageSection from './customPageComponents/SubpageSection'
import TextElement from './customPageComponents/TextElement'
import DualTimeline from './DualTimeline'

export const milestonesQuery = graphql`
  query Milestones {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/milestones.md/" } }) {
      nodes {
        frontmatter {
          timelines {
            title
            years {
              year
              entries {
                row
                text
                when
                isMajor
                content
              }
            }
          }
        }
      }
    }
  }
`

const PageSectionMilestones = () => {
  const data = useStaticQuery<Queries.MilestonesQuery>(milestonesQuery)
  const timelines = data.allMarkdownRemark.nodes[0].frontmatter?.timelines

  const [showDetails, setShowDetails] = useState(false)

  const handleShowDetailsToggle = () => setShowDetails((p) => !p)

  return (
    <SectionWrapper>
      <SubpageSection isCentered>
        <TextElement isCentered>
          <h1>Roadmap & Milestones</h1>
          <p>A journey of core platform and ecosystem development.</p>
        </TextElement>
      </SubpageSection>
      <ToggleSection>
        <ToggleLabel>Summarized</ToggleLabel>
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

const SectionWrapper = styled.section``

const Centered = styled.div`
  display: flex;
  justify-content: center;
`

const ToggleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: var(--spacing-8);
  margin-top: var(--spacing-8);
`

const ToggleLabel = styled.span`
  color: ${({ theme }) => theme.textPrimary};
`
