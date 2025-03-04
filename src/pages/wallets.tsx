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
          <h1>Your Gateway to the Alephium Ecosystem</h1>
          <p>
            Embarking on your Alephium journey begins with selecting a secure and user-friendly wallet tailored to your
            needs. Alephium offers a variety of wallets to manage your ALPH tokens, interact with decentralized
            applications (dApps), and participate in the ecosystem&apos;s growth.
          </p>
        </SubpageHeroSection>

        <SectionDivider />
      </>
    }
  />
)

export default CustomPage
