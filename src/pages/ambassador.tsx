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
          <h1>Alephium Ambassador Program</h1>
          <p>
            Join the Alephium Ambassador Program and become a pivotal force in advancing the world's first operational
            sharded blockchain, designed for secure and efficient decentralized applications. As an ambassador, you'll
            play a crucial role in expanding our community, sharing knowledge, and driving the adoption of Alephium's
            technology.
          </p>
          <p>
            Whether you’re a developer, educator, content creator, or blockchain enthusiast, there’s a place for you in
            the Alephium community. Together, we can build a more scalable, secure, and sustainable Web3.
          </p>
        </SubpageHeroSection>

        <SectionDivider />
      </>
    }
  />
)

export default CustomPage
