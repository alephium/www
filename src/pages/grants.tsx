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
          <h1>Alephium Grants & Funding Opportunities</h1>
          <hr />
          <p>
            At Alephium, we believe that builders drive progress. Our Grants Program is designed to support individuals
            and teams working on projects that expand and strengthen the Alephium ecosystem. Whether you&apos;re
            developing DeFi applications, NFT platforms, decentralized services, integrations, or hardware solutions, we
            want to assist you in bringing your idea to fruition on Alephium.
          </p>
        </SubpageHeroSection>

        <SectionDivider />
      </>
    }
  />
)

export default CustomPage
