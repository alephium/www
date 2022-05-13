import { FC } from 'react'
import styled from 'styled-components'

import PageSectionContainer from './PageSectionContainer'
import SectionTextHeader from './SectionTextHeader'
import DualTimeline from './DualTimeline'

const timelines = [
  {
    title: 'Core platform',
    years: [
      {
        year: '2019',
        entries: [
          { order: 0, text: 'This is a test', when: 'Q2.2019' },
          { order: 1, text: 'This is a test', when: 'Q2.2019' },
          { order: 2, text: 'This is a test', when: 'Q2.2019', isMajor: true },
          { order: 3, text: 'This is a test', when: 'Q2.2019' },
        ],
      },
      {
        year: '2020',
        entries: [
          { order: 2, text: 'This is a test', when: 'Q2.2019' },
          { order: 3, text: 'This is a test', when: 'Q2.2019' },
        ]
      }
    ]
  },
  {
    title: 'Ecosystem',
    years: [
      {
        year: '2019',
        entries: [
          { order: 0, text: 'This is another long long long long long test', when: 'Q2.2019' },
          { order: 1, text: 'This is another long long long long long test', when: 'Q2.2019' },
          { order: 3, text: 'This is another long long long long long test', when: 'Q2.2019' },
        ],
      },
      {
        year: '2020',
        entries: [
          { order: 0, text: 'This is a test', when: 'Q2.2019' },
        ]
      }
    ]
  },

]

const PageSectionMilestones = () => (
  <section>
    <PageSectionContainer>
      <SectionTextHeaderStyled title="Completed milestones" subtitle="A success story" bigSubtitle bigText />
      <Centered>
        <DualTimeline timelines={timelines} />
      </Centered>
    </PageSectionContainer>
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
