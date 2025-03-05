import { PageProps } from 'gatsby'

import SectionDivider from '../components/SectionDivider'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import Page from '../components/customPageComponents/Page'

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
      </>
    }
  />
)

export default CustomPage
