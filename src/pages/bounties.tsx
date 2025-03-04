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
          <h1>Alephium Bounty Program</h1>
          <p>
            As part of our mission to foster innovation and decentralization, Alephium is launching a Bounty Program to
            reward builders, developers, and researchers who contribute to the growth and security of the Alephium
            ecosystem.
          </p>
          <p>
            This program is designed to address key development needs, support ecosystem expansion, and encourage
            community-driven solutions. If you have the skills, knowledge, and vision to enhance Alephium, we invite you
            to participate, propose new bounties, or take on existing challenges.
          </p>
        </SubpageHeroSection>

        <SectionDivider />
      </>
    }
  />
)

export default CustomPage
