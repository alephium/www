import { PageProps } from 'gatsby'

import SectionDivider from '../components/SectionDivider'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import Page from '../components/customPageComponents/Page'
import PageSectionMilestones from '../components/PageSectionMilestones'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    content={
      <>
        <SubpageHeroSection>
          <h1>Alephium Roadmap & Milestones</h1>
          <hr />
          <p>
            At Alephium, we’re building the future of blockchain technology - one milestone at a time. Our roadmap
            reflects our commitment to innovation, scalability, and community-driven growth. Explore our journey so far
            and what’s coming next.
          </p>
        </SubpageHeroSection>

        <SectionDivider />

        <PageSectionMilestones />

        <SectionDivider />

        <SubpageSection>
          <TextElement align="center">
            <h2>Current Focus</h2>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement align="center">
            <h2>What’s Next?</h2>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement align="center">
            <h2>Join Us on This Journey</h2>
            <p>
              Alephium’s roadmap is a living document, evolving with the input of our community and the progress of our
              technology. Stay up-to-date on our latest developments by following us on Twitter, or joining our Telegram
              group.
            </p>
          </TextElement>
        </SubpageSection>
      </>
    }
  />
)

export default CustomPage
