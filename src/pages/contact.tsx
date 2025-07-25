import { PageProps } from 'gatsby'

import Button from '../components/Button'
import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    seo={{
      title: 'Contact Alephium | Get in Touch',
      description:
        "Questions or proposals? Reach out to the Alephium team. We're here to support builders, partners, and the community."
    }}
    content={
      <>
        <SectionDivider />
        <SubpageSection edgeGradient>
          <TextElement isCentered>
            <h1>Contact Us</h1>
            <p>
              Got questions, feedback, or just want to say hi? <br /> We’re here for you.
            </p>
          </TextElement>
          <TextElement isCentered>
            <Button squared url="mailto:info@alephium.org">
              General
            </Button>
            <Button squared url="mailto:business@alephium.org">
              Business and Partnerships
            </Button>
            <Button squared url="mailto:press@alephium.org">
              Press
            </Button>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement isCentered>
            <h3>Build with us</h3>
            <p>Not sure where to start? Dive into our documentation or apply for a grant.</p>
            <Button url="https://docs.alephium.org">Documentation</Button>
            <Button url="https://github.com/alephium/community/blob/master/Grant%26RewardProgram.md">Grants</Button>
          </TextElement>
        </SubpageSection>
      </>
    }
  />
)

export default CustomPage
