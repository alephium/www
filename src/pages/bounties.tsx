import { PageProps } from 'gatsby'

import SectionDivider from '../components/SectionDivider'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import CardsGrid, { Card } from '../components/customPageComponents/CardsGrid'
import Button from '../components/Button'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import Placeholder from '../components/customPageComponents/Placeholder'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    content={
      <>
        <SubpageHeroSection>
          <h1>Alephium Bounty Program</h1>
          <hr />
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

        <SubpageSection>
          <TextElement>
            <h2>How to participate?</h2>
          </TextElement>

          <SubheaderContent>
            <CardsGrid columns={3}>
              <Card>
                <h3>Suggest a Bounty</h3>
                <p>
                  If you have an idea for a bounty that would help improve the Alephium ecosystem, you can submit your
                  proposal for review by the Alephium team.
                </p>
                <Button url="/">Submit a bounty proposal</Button>
              </Card>
              <Card>
                <h3>Work on an Existing Bounty</h3>
                <p>If you’re ready to take on a bounty, browse the open opportunities and submit your interest.</p>
                <Button url="/">View open bounties</Button>
              </Card>
              <Card>
                <h3>Improve Security</h3>
                <p>
                  Security is critical for Alephium. Our Bug Bounty Program rewards contributors who identify and report
                  vulnerabilities.
                </p>
                <Button url="https://github.com/alephium/community/blob/master/BugBounty.md">Report a bug</Button>
              </Card>
            </CardsGrid>
          </SubheaderContent>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Open bounties</h2>
          </TextElement>

          <SubheaderContent>
            <Placeholder width="100%" height="100px" />
          </SubheaderContent>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Bounty Program Process</h2>
          </TextElement>

          <SubheaderContent>
            <Placeholder width="100%" height="100px" />
          </SubheaderContent>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Need More Info?</h2>
            <p>
              For additional details, check out our FAQ section or reach out to our team. //”FAQ section” leads to
              anchor FAQ-bounty on FAQ page
            </p>
            <Button url="/contact">Contact us</Button>
            <Button url="/dicord">Join the discussion</Button>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement align="center">
            <h2>Ready? Join the Bounty Program today!</h2>
          </TextElement>
        </SubpageSection>
      </>
    }
  />
)

export default CustomPage
