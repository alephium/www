import { PageProps } from 'gatsby'

import Button from '../components/Button'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import SimpleLink from '../components/SimpleLink'

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
            <Grid columns={3}>
              <TextCard>
                <h3>Suggest a Bounty</h3>
                <p>
                  If you have an idea for a bounty that would help improve the Alephium ecosystem, you can submit your
                  proposal for review by the Alephium team.
                </p>
                <Button url="/">Submit a bounty proposal</Button>
              </TextCard>
              <TextCard>
                <h3>Work on an Existing Bounty</h3>
                <p>If you’re ready to take on a bounty, browse the open opportunities and submit your interest.</p>
                <Button url="/">View open bounties</Button>
              </TextCard>
              <TextCard>
                <h3>Improve Security</h3>
                <p>
                  Security is critical for Alephium. Our Bug Bounty Program rewards contributors who identify and report
                  vulnerabilities.
                </p>
                <Button url="https://github.com/alephium/community/blob/master/BugBounty.md">Report a bug</Button>
              </TextCard>
            </Grid>
          </SubheaderContent>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Open bounties</h2>
          </TextElement>

          <SubheaderContent>
            <Grid columns={1} gap="small">
              {Array.from({ length: 3 }).map((_, index) => (
                <TextCard key={index}>
                  <h3>Bounty Title {index + 1}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <Button url="">View details</Button>
                </TextCard>
              ))}
            </Grid>
          </SubheaderContent>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Bounty Program Process</h2>
          </TextElement>

          <SubheaderContent>
            <TextElement>
              <h3>Step 1</h3>
              <h4>Select a Bounty & Get Started</h4>
              <p>
                <ul>
                  <li>Review available bounties and select one that fits your expertise.</li>
                  <li>
                    Before starting, make sure you meet the program's eligibility requirements and agree to the Terms &
                    Conditions.
                  </li>
                  <li>
                    Apply for the bounty through our <SimpleLink url="">bounty platform</SimpleLink>.
                  </li>
                </ul>
              </p>
            </TextElement>
            <TextElement>
              <h3>Step 2</h3>
              <h4>Submit Your Completed Work</h4>
              <p>
                Once you've completed your bounty task, submit your work through the{' '}
                <SimpleLink url="">bounty platform</SimpleLink>.
              </p>
            </TextElement>
            <TextElement>
              <h3>Step 3</h3>
              <h4>Review & Evaluation</h4>
              <p>
                <ul>
                  <li>Submissions go through technical and business reviews (estimated 1-2 weeks).</li>
                  <li>Once the reviews are done, the Alephium committee will assess the work and provide feedback.</li>
                </ul>
              </p>
            </TextElement>
            <TextElement>
              <h3>Step 4</h3>
              <h4>Submission Results & Approval</h4>
              <p>
                <ul>
                  <li>You will be notified of your bounty review outcome.</li>
                  <li>Both successful and unsuccessful submissions will receive feedback.</li>
                </ul>
              </p>
            </TextElement>
            <TextElement>
              <h3>Step 5</h3>
              <h4>Bounty Agreement & Payment</h4>
              <p>
                <ul>
                  <li>If your submission is approved, you will receive a Bounty Agreement to formalize the reward.</li>
                  <li>Once all steps are complete, the bounty reward is paid out in ALPH tokens.</li>
                </ul>
              </p>
            </TextElement>
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
          <TextElement isCentered>
            <h2>Ready? Join the Bounty Program today!</h2>
            <Button url="/">Join the program</Button>
          </TextElement>
        </SubpageSection>
      </>
    }
  />
)

export default CustomPage
