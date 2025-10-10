import { graphql, PageProps, useStaticQuery } from 'gatsby'
import styled, { useTheme } from 'styled-components'

import Button from '../components/Button'
import Card from '../components/Card'
import CardText from '../components/CardText'
import CardFooterButtonContainer from '../components/common/CardFooterButtonContainer'
import CardImage from '../components/customPageComponents/CardImage'
import { CardsRowSegment } from '../components/customPageComponents/CardsRow'
import ClickableBox from '../components/customPageComponents/ClickableBox'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import { deviceBreakPoints } from '../styles/global-style'

const grantsQuery = graphql`
  query GrantsPage {
    blockflowDAOLogo: file(relativePath: { eq: "logos/blockflow-dao-logo.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80)
      }
    }
    primevaultLogo: file(relativePath: { eq: "logos/primevault-logo.svg" }) {
      publicURL
    }
    contribiumLogo: file(relativePath: { eq: "logos/contribium-logo.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80)
      }
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { blockflowDAOLogo, primevaultLogo } = useStaticQuery<Queries.GrantsPageQuery>(grantsQuery)

  return (
    <Page
      {...props}
      seo={{
        title: 'Alephium Grants | Funding for Builders & Innovators',
        description:
          'Build on Alephium and get funded. Explore our grants for DeFi, NFTs, tooling, and more. Apply today to bring your idea to life.'
      }}
      content={
        <>
          <SubpageSection edgeGradient border="bottom">
            <TextElement isCentered>
              <h1>Grants and Funding</h1>
              <p>
                Connecting builders, creators, and founders to the best source of funding for their work, either through
                the Alephium Foundation Grants or other ecosystem sources.
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
              <h2>Alephium Foundation Grants</h2>
              <p>
                The Alephium Foundation offers grants to support builders growing the ecosystem. If you&apos;re building
                on Alephium, <strong>apply below to get started.</strong>
              </p>
            </TextElement>

            <SectionDivider />

            <TextElement>
              <h3>What we fund</h3>
            </TextElement>

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
                  <p>DAOs</p>
                </TextElement>
              </ClickableBox>
              <ClickableBox align="center">
                <TextElement isCentered noMargin>
                  <p>NFTs</p>
                </TextElement>
              </ClickableBox>
              <ClickableBox align="center">
                <TextElement isCentered noMargin>
                  <p>Gaming</p>
                </TextElement>
              </ClickableBox>
            </ProjectTypesGrid>
            <SectionDivider double />
            <HowToApply />
            <SectionDivider double />

            <TextElement>
              <h3>Application process overview</h3>
            </TextElement>
            <SubheaderContent>
              <TextElement>
                <ul>
                  <li>Submit your application & documentation.</li>
                  <li>We will reach out for interviews if your application is deemed a good fit.</li>
                  <li>We will notify you if your application is accepted (or not).</li>
                  <li>Grantees onboarded!</li>
                </ul>
              </TextElement>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection id="ecosystem-funding" noTopPadding>
            <TextElement>
              <h2>Ecosystem Grant Programs</h2>
              <p>Several grant programs are run within the Alephium ecosystem, some focusing on specific domains.</p>
            </TextElement>

            <SubheaderContent>
              <CardsRowSegment>
                <Card border>
                  <CardImageStyled image={blockflowDAOLogo?.childImageSharp?.gatsbyImageData} />
                  <CardText>
                    <h4>Blockflow DAO</h4>
                    <p>
                      The Alephium DAO offers its own community-driven grants to support ecosystem growth. These grants
                      are proposed, voted on, and funded directly by the DAO.
                    </p>
                  </CardText>
                  <CardFooterButtonContainer>
                    <Button squared url="https://forms.gle/sPsHD4VwThXA5TRN9">
                      Apply here
                    </Button>
                  </CardFooterButtonContainer>
                </Card>
                <Card border>
                  <CardImageStyled src={primevaultLogo?.publicURL ?? ''} />
                  <CardText>
                    <h4>Primevault</h4>
                    <p>
                      In partnership with Primevault, projects building on Alephium can access free platform credits and
                      potential funding to leverage PrimeVault&#39;s institutional-grade custody infrastructure.
                    </p>
                  </CardText>
                  <CardFooterButtonContainer>
                    <Button squared url="https://forms.gle/vR92JzSavweUDupt6">
                      Apply here
                    </Button>
                  </CardFooterButtonContainer>
                </Card>
                <Card border>
                  <CenteredTextContainer>
                    <TextElement isCentered isBodySmall>
                      <p>More coming soon...</p>
                    </TextElement>
                  </CenteredTextContainer>
                </Card>
              </CardsRowSegment>
            </SubheaderContent>
          </SubpageSection>

          {/*  <SubpageSection>
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
                  Applications are reviewed by the Foundation&#39;s team. Promising projects may be invited for
                  interviews or follow-up discussions before final decisions are made.
                </p>
              </Accordion>
              <Accordion title="What happens after my application is accepted?">
                <p>
                  Accepted projects will receive funding and ongoing support, including mentorship and access to
                  technical resources to help bring your vision to life.
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
          */}
        </>
      }
    />
  )
}

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
          <Card border url="https://tally.so/r/mZWdzy">
            <CardText>
              <h4 style={{ color: theme.palette3 }}>Profit-Oriented Applications</h4>
            </CardText>
          </Card>
          <Card border url="https://tally.so/r/3lg5vV">
            <CardText>
              <h4 style={{ color: theme.palette4 }}>Infrastructure & Core Tooling</h4>
            </CardText>
          </Card>
          <Card border url="https://tally.so/r/nP4grx">
            <CardText>
              <h4 style={{ color: theme.palette1 }}>Developer Experience & Education</h4>
            </CardText>
          </Card>
          <Card border url="https://tally.so/r/mDbYWE">
            <CardText>
              <h4 style={{ color: theme.palette2 }}>Community & Ecosystem Growth</h4>
            </CardText>
          </Card>
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
  margin-top: var(--spacing-2);
  @media ${deviceBreakPoints.mobile} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
const CardImageStyled = styled(CardImage)`
  filter: ${({ theme }) => (theme.name === 'light' ? 'invert(1)' : 'none')};
  margin: var(--spacing-3);
  margin-bottom: var(--spacing-2);
`

const CenteredTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`
