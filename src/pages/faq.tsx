import { PageProps } from 'gatsby'

import SectionDivider from '../components/SectionDivider'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import Button from '../components/Button'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    content={
      <>
        <SubpageHeroSection>
          <h1>Frequently Asked Questions</h1>
          <hr />
          <p>
            This page is your go-to resource for all things Alephium! Whether you're looking for blockchain data,
            development resources, mining information, or general ecosystem insights, we've got you covered
          </p>
        </SubpageHeroSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Chain Data</h2>
          </TextElement>
          <TextElement>
            <h2>Wallet & Transactions</h2>
          </TextElement>
          <TextElement>
            <h2>Development</h2>
          </TextElement>
          <TextElement>
            <h2>Mining</h2>
          </TextElement>
          <TextElement>
            <h2>Miscellaneous</h2>
          </TextElement>
          <TextElement>
            <h2>Bounty Program</h2>
          </TextElement>
          <TextElement>
            <h2>Ambassador Program</h2>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement align="center">
            <h2>Still have questions?</h2>
            <p>Join our community for in-depth information</p>
            <Button url="/discord">Join Discord</Button>
            <Button url="https://t.me/alephiumgroup">Join Telegram</Button>
          </TextElement>
        </SubpageSection>
      </>
    }
  />
)

export default CustomPage
