import { PageProps } from 'gatsby'

import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import PageSectionMilestones from '../components/PageSectionMilestones'
import SectionDivider from '../components/SectionDivider'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    floatingMenu={false}
    seo={{
      title: 'Alephium Roadmap | Past Milestones & Future Vision',
      description: "Explore Alephium’s journey and find out what's next. Built for real-world adoption."
    }}
    content={
      <>
        <SubpageSection>
          <TextElement isCentered>
            <h1>
              Alephium Roadmap
              <br /> & Milestones
            </h1>
          </TextElement>
        </SubpageSection>

        <PageSectionMilestones />

        <SectionDivider />

        <SubpageSection>
          <TextElement isCentered>
            <h2>Join Us on This Journey</h2>
            <p>
              Alephium’s roadmap is a living document, evolving with the input of our community and the progress of our
              technology. Stay up-to-date on our latest developments by following us on{' '}
              <a href="https://x.com/alephium">Twitter</a>, or joining our{' '}
              <a href="https://t.me/alephiumgroup">Telegram</a> group.
            </p>
          </TextElement>
        </SubpageSection>
      </>
    }
  />
)

export default CustomPage
