import { PageProps } from 'gatsby'
import styled from 'styled-components'

import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import NetworkUpgradesCardScroller from '../components/NetworkUpgradesCardScroller'
import Phase2HighlightsSection from '../components/pages/roadmap/Phase2HighlightsSection'
import Phase2Section from '../components/pages/roadmap/Phase2Section'
import Roadmap from '../components/pages/roadmap/Roadmap'
import SectionDivider from '../components/SectionDivider'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    floatingMenu={false}
    seo={{
      title: 'Alephium Roadmap | Past Milestones & Future Vision',
      description: 'Explore Alephium&apos;s journey and find out what&apos;s next. Built for real-world adoption.'
    }}
    content={
      <>
        <SubpageSection edgeGradient border="bottom">
          <TextElement isCentered>
            <PageSurtitle>Alephium's</PageSurtitle>
            <PageTitle>Phase 2</PageTitle>
            <PageSubtitleContainer>
              <PageSubtitle>From scalable infrastructure to aligned economics.</PageSubtitle>
            </PageSubtitleContainer>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Phase One: Scalable Infrastructure</h2>
            <p>
              From Leman to Rhone to Danube, this has always been the plan, one upgrade at a time.
              <br />
              Now we&apos;re entering the chapter <strong>where it all comes together.</strong>
            </p>
          </TextElement>
          <NetworkUpgradesCardScroller />
        </SubpageSection>

        <Phase2Section />

        <Phase2HighlightsSection />

        <Roadmap />

        <SectionDivider />

        <SubpageSection border="all" edgeGradient>
          <TextElement isCentered>
            <h2>Join us on this journey</h2>
            <p>
              Alephium&apos;s roadmap is a living document, evolving with the input of our community and the progress of
              our technology. Stay up-to-date on our latest developments by following us on{' '}
              <a href="https://x.com/alephium">Twitter</a>, or joining our{' '}
              <a href="https://t.me/alephiumgroup">Telegram</a> group.
            </p>
          </TextElement>
        </SubpageSection>
        <SectionDivider double />
      </>
    }
  />
)

export default CustomPage

const PageSurtitle = styled.div`
  margin-top: 0;
  margin-bottom: var(--spacing-1);
  font-size: var(--fontSize-26);
  color: ${({ theme }) => theme.textTertiary};
  font-weight: 400;
`

const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: var(--spacing-3);
`

const PageSubtitleContainer = styled.div`
  display: flex;
  justify-self: center;
  width: fit-content;
  flex-grow: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding: var(--spacing-1) var(--spacing-2);
  background: ${({ theme }) => theme.background1};
  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
  border-radius: 100px;
`

const PageSubtitle = styled.div`
  font-weight: 400;
  font-size: var(--fontSize-18);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(90deg, ${({ theme }) => theme.palette5}, ${({ theme }) => theme.palette2});
`
