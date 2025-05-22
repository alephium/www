import { PageProps } from 'gatsby'
import styled, { useTheme } from 'styled-components'

import Accordion from '../components/Accordion'
import Button from '../components/Button'
import CardFooterButtonContainer from '../components/common/CardFooterButtonContainer'
import { CardsRowSegment } from '../components/customPageComponents/CardsRow'
import ClickableBox from '../components/customPageComponents/ClickableBox'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextCardContent from '../components/customPageComponents/TextCardContent'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import SimpleLink from '../components/SimpleLink'
import { deviceBreakPoints } from '../styles/global-style'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    seo={{
      title: 'Alephium Grants | Funding for Builders & Innovators',
      description:
        'Build on Alephium and get funded. Explore our grants for DeFi, NFTs, tooling, and more. Apply today to bring your idea to life.'
    }}
    content={
      <>
        <SectionDivider />
        <SubpageSection border edgeGradient>
          <TextElement isCentered>
            <h1>Grants and Funding</h1>
            <p>
              The Alephium Grants and Funding program aims to connect builders, creators, and founders to the best
              source of funding for their work. This may be through the Alephium Foundation or other ecosystem sources.
            </p>
          </TextElement>
          <SectionDivider />
          <Buttons>
            <Button squared url="/grants/#foundation-grants">
              Foundation Grants
            </Button>
            <Button squared url="/grants/#ecosystem-funding">
              Ecosystem Funding
            </Button>
          </Buttons>
        </SubpageSection>

        <SubpageSection id="foundation-grants">
          <TextElement>
            <h2>
              Alephium Foundation Grants <hr />
            </h2>
            <p>
              The Alephium Foundation supports the growth of the Alephium ecosystem by offering grants to builders and
              teams.{' '}
              <strong>
                If you're working on a project leveraging Alephium, we invite you to apply below so we can help support
                your efforts.
              </strong>
            </p>
          </TextElement>

          <SectionDivider />

          <TextElement>
            <h3>What we fund</h3>
            <p>
              We support a wide range of projects that contribute to the Alephium ecosystem, including DeFi,
              infrastructure, wallets, payments, core tooling and more. If your project helps grow or enhance Alephium,
              we encourage you to apply.
            </p>
          </TextElement>

          <SubheaderContent>
            <ProjectTypesGrid columns={5} gap="small">
              <ClickableBox align="center">
                <TextElement isCentered noMargin>
                  <p>DeFi</p>
                </TextElement>
              </ClickableBox>
              <ClickableBox align="center">
                <TextElement isCentered noMargin>
                  <p>Infrastructure</p>
                </TextElement>
              </ClickableBox>
              <ClickableBox align="center">
                <TextElement isCentered noMargin>
                  <p>Wallets</p>
                </TextElement>
              </ClickableBox>
              <ClickableBox align="center">
                <TextElement isCentered noMargin>
                  <p>Payments</p>
                </TextElement>
              </ClickableBox>
              <ClickableBox align="center">
                <TextElement isCentered noMargin>
                  <p>Core Tooling</p>
                </TextElement>
              </ClickableBox>
              <ClickableBox align="center">
                <TextElement isCentered noMargin>
                  <p>Stablecoins</p>
                </TextElement>
              </ClickableBox>
              <ClickableBox align="center">
                <TextElement isCentered noMargin>
                  <p>RWAs</p>
                </TextElement>
              </ClickableBox>
              <ClickableBox align="center">
                <TextElement isCentered noMargin>
                  <p>DAO & Governance</p>
                </TextElement>
              </ClickableBox>
              <ClickableBox align="center">
                <TextElement isCentered noMargin>
                  <p>Security & Privacy</p>
                </TextElement>
              </ClickableBox>
              <ClickableBox align="center">
                <TextElement isCentered noMargin>
                  <p>NFTs & Gaming</p>
                </TextElement>
              </ClickableBox>
            </ProjectTypesGrid>
          </SubheaderContent>
          <SectionDivider double />
          <HowToApply />
        </SubpageSection>

        <SectionDivider />

        <SubpageSection id="ecosystem-funding" noTopPadding>
          <TextElement>
            <h2>
              Ecosystem Funding <hr />
            </h2>
            <p>
              Beyond the Alephium Foundation, various funding options exist, depending on your project's stage,
              location, or focus.
            </p>
          </TextElement>
          <SubheaderContent>
            <TextElement>
              <h3>Hackathons</h3>
              <p>
                The Alephium Foundation partnered with OnlyDust to enable Alephium-based dApps to participate in its
                monthly ODHacks. ODHacks are collaborative open-source hackathons where developers build, learn, and
                contribute to leading blockchain ecosystems with direct feedback from maintainers. Participation is
                fully funded. dApps can showcase open-source repositories with open issues, receive commits from top
                builders, and discover emerging talent. For more information about OnlyDust and ODHacks, visit{' '}
                <SimpleLink highlight url="https://onlydust.com">
                  onlydust.com
                </SimpleLink>
              </p>
              <SectionDivider />
              <Button url="">Apply to ODHack</Button>
            </TextElement>
          </SubheaderContent>
        </SubpageSection>

        <SubpageSection noTopPadding>
          <TextElement>
            <h3>Grant Programs</h3>
            <p>
              Several grant programs are actively run by teams within the Alephium ecosystem. These initiatives
              typically focus on specific domains or areas of innovation, targeting projects and developers aligned with
              those priorities.
            </p>
          </TextElement>

          <SubheaderContent>
            <CardsRowSegment>
              <TextCard border>
                <TextCardContent>
                  <TextElement>
                    <h4>Blockflow DAO</h4>
                    <p>
                      The Alephium DAO offers its own community-driven grants to support ecosystem growth. These grants
                      are proposed, voted on, and funded directly by the DAO.
                    </p>
                  </TextElement>
                  <CardFooterButtonContainer>
                    <Button squared url="#">
                      Apply here
                    </Button>
                  </CardFooterButtonContainer>
                </TextCardContent>
              </TextCard>
              <TextCard border>
                <TextCardContent>
                  <TextElement>
                    <h4>Primevault</h4>
                    <p>
                      In partnership with Primevault, projects building on Alephium can access free platform credits and
                      potential funding to leverage PrimeVault&#39;s institutional-grade custody infrastructure.
                    </p>
                  </TextElement>
                  <CardFooterButtonContainer>
                    <Button squared url="#">
                      Apply here
                    </Button>
                  </CardFooterButtonContainer>
                </TextCardContent>
              </TextCard>
              <TextCard border>
                <TextCardContent>
                  <TextElement>
                    <h4>Contribium</h4>
                    <p>
                      The Alephium Foundation also collaborates with Contribium, a platform for bounties and small
                      grants. It enables developers to earn rewards for completing ecosystem tasks, contributing to
                      open-source projects, or launching small initiatives.
                    </p>
                  </TextElement>
                  <CardFooterButtonContainer>
                    <Button squared url="#">
                      Apply here
                    </Button>
                  </CardFooterButtonContainer>
                </TextCardContent>
              </TextCard>
            </CardsRowSegment>
          </SubheaderContent>
        </SubpageSection>
        <SubpageSection>
          <TextElement>
            <h2>FAQ</h2>
          </TextElement>
          <SubheaderContent>
            <Accordion title="What is the Alephium Foundation Grant Program?">
              <p>
                The Grant Program supports builders and teams developing projects that grow and enhance the Alephium
                ecosystem by providing funding, mentorship, and resources.
              </p>
            </Accordion>
            <Accordion title="Which projects can apply?">
              <p>
                A few conditions must be met to be eligible. Projects must be:
                <br />
                - Building on Alephium or willing to migrate to Alephium.
                <br />- Building for the long term.
              </p>
            </Accordion>
            <Accordion title="What is the application review process?">
              <p>
                Applications are reviewed by the Foundation&#39;s team. Promising projects may be invited for interviews
                or follow-up discussions before final decisions are made.
              </p>
            </Accordion>
            <Accordion title="What happens after my application is accepted?">
              <p>
                Accepted projects will receive funding and ongoing support, including mentorship and access to technical
                resources to help bring your vision to life.
              </p>
            </Accordion>
            <Accordion title="Can existing projects apply?">
              <p>
                Yes, both new and existing projects that align with Alephium&#39;s ecosystem goals are encouraged to
                apply.
              </p>
            </Accordion>
            <Accordion title="How much funding can I request?">
              <p>
                Funding depends on project scope and impact and is released by milestones. Please include a budget and
                milestones in your application.
              </p>
            </Accordion>
            <Accordion title="In what currency are the grants paid?">
              <p>All grants are paid in ALPH token, the native crypto currency of the Alephium network.</p>
            </Accordion>
            <Accordion title="Are there any restrictions on how grant funds can be used?">
              <p>
                Grant funds should be used solely to advance the project outlined in your application. Any significant
                changes require prior approval from the Foundation.
              </p>
            </Accordion>
            <Accordion title="Is there a deadline to apply for a grant?">
              <p>
                The Alephium Foundation accepts applications on a rolling basis, but priority may be given to earlier
                submissions depending on available funds.
              </p>
            </Accordion>
            <Accordion title="Are there other funding options within the Alephium ecosystem?">
              <p>
                Yes, besides the Foundation&#39;s grants, other ecosystem partners may offer additional funding
                programs. This page will help guiding you to these resources.
              </p>
            </Accordion>
          </SubheaderContent>
        </SubpageSection>
      </>
    }
  />
)

const HowToApply = () => {
  const theme = useTheme()

  return (
    <>
      <TextElement>
        <h3>How to Apply</h3>
        <p>
          Please fill out the appropriate form with all the required information related to your specific area. Kindly
          allow some time as we coordinate with the relevant teams at Alephium.
        </p>
      </TextElement>
      <SubheaderContent>
        <CardsRowSegment>
          <TextCard border url="">
            <TextCardContent>
              <h4 style={{ color: theme.palette3 }}>Profit-Oriented Applications</h4>
            </TextCardContent>
          </TextCard>
          <TextCard border url="">
            <TextCardContent>
              <h4 style={{ color: theme.palette4 }}>Infrastructure & Core Tooling</h4>
            </TextCardContent>
          </TextCard>
          <TextCard border url="">
            <TextCardContent>
              <h4 style={{ color: theme.palette1 }}>Developer Experience & Education</h4>
            </TextCardContent>
          </TextCard>
          <TextCard border url="/y">
            <TextCardContent>
              <h4 style={{ color: theme.palette2 }}>Community & Ecosystem Growth</h4>
            </TextCardContent>
          </TextCard>
        </CardsRowSegment>
      </SubheaderContent>
    </>
  )
}

export default CustomPage

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-2);
`

const ProjectTypesGrid = styled(Grid)`
  @media ${deviceBreakPoints.mobile} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
