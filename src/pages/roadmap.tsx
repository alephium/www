import { PageProps } from 'gatsby'

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
            <h1>Alephium’s journey to Phase 2</h1>
            <p>From scalable infrastructure to aligned economics.</p>
          </TextElement>
        </SubpageSection>

        <SubpageSection>
          <TextElement>
            <h2>Phase One: Scalable, Secure, Easy to Use Infrastructure</h2>
            <p>
              From Leman to Rhone to Danube, <strong>this has always been the plan</strong>. Now we&apos;re entering the
              chapter <strong>where it all comes together.</strong>
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
            <h2>Join Us on This Journey</h2>
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
