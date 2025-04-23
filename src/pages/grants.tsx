import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Button from '../components/Button'
import CardsRow from '../components/customPageComponents/CardsRow'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageHeroSection from '../components/customPageComponents/SubpageImageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import SimpleLink from '../components/SimpleLink'

const grantsQuery = graphql`
  query GrantsPage {
    heroImage: file(relativePath: { eq: "alephium-hackathon-lake.png" }) {
      ...HeroImage
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage } = useStaticQuery<Queries.GrantsPageQuery>(grantsQuery)

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
          <SubpageHeroSection backgroundImage={heroImage}>
            <h1>Alephium Grants & Funding Opportunities</h1>
            <hr />
            <p>
              At Alephium, we believe that builders drive progress. Our Grants Program is designed to support
              individuals and teams working on projects that expand and strengthen the Alephium ecosystem. Whether
              you&apos;re developing DeFi applications, NFT platforms, decentralized services, integrations, or hardware
              solutions, we want to assist you in bringing your idea to fruition on Alephium.
            </p>
          </SubpageHeroSection>

          <SubpageSection>
            <TextElement>
              <h2>Our Funding Programs</h2>
            </TextElement>

            <SubheaderContent>
              <CardsRow>
                <TextCard>
                  <h3>Alephium Grants Fund</h3>
                  <p>
                    The Alephium Grants Fund is an initiative aimed at empowering developers and startups building on
                    the Alephium network. We offer tailored support for projects at various stages of development.
                  </p>
                  <p>Ready to bring your Alephium project to life?</p>
                  <Button url="https://docs.google.com/forms/d/e/1FAIpQLSexF7M7k7kDdJtsHKFGYZuw4uEP7dzRrxmTFaMQvdU8DdH3cA/viewform">
                    Learn & Apply
                  </Button>
                </TextCard>
                <TextCard>
                  <h3>Bug Bounty Program</h3>
                  <p>
                    Security is paramount at Alephium. We encourage individual developers to discover vulnerabilities
                    and exploits within the Alephium protocol or any of our code repositories.
                  </p>
                  <Button url="/bounties">Learn more</Button>
                </TextCard>
                <TextCard>
                  <h3>Migration and Expansion Grants</h3>
                  <p>
                    Alephium supports projects looking to migrate or expand their presence to our ecosystem. Whether
                    you're transitioning fully to Alephium or integrating it alongside other chains, this grant is
                    designed to help you navigate the process smoothly. Funds can be used for development,
                    infrastructure, user incentives, and ecosystem integration, ensuring a seamless and fruitful
                    experience for all parties involved.
                  </p>
                </TextCard>
              </CardsRow>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>What Kind of Projects Do We Fund?</h2>
              <p>
                We’re open to funding anything that improves the Alephium ecosystem. Some key areas we are excited
                about:
              </p>
              <ul>
                <li>DeFi dApps – Decentralized exchanges, lending protocols, automated market makers, etc.</li>
                <li>NFT & Gaming Platforms – Infrastructure, marketplaces, on-chain games.</li>
                <li>Decentralized Services – Privacy tools, oracles, identity solutions, etc.</li>
                <li>Developer Tooling – SDKs, frameworks, integrations with existing services.</li>
                <li>Infrastructure & Research – Security audits, scaling solutions, hardware integration.</li>
                <li>Community & Education – Content, guides, workshops, ecosystem awareness campaigns.</li>
              </ul>
              <p>
                Got something else in mind?{' '}
                <SimpleLink url="https://docs.google.com/forms/d/e/1FAIpQLSexF7M7k7kDdJtsHKFGYZuw4uEP7dzRrxmTFaMQvdU8DdH3cA/viewform">
                  We’re open to ideas!
                </SimpleLink>
              </p>
            </TextElement>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>How to Apply for a Grant?</h2>
            </TextElement>

            <SubheaderContent>
              <TextElement>
                <h3>Step 1</h3>
                <h4>Submit Your Application</h4>
                <p>
                  Fill out the{' '}
                  <SimpleLink url="https://docs.google.com/forms/d/e/1FAIpQLSexF7M7k7kDdJtsHKFGYZuw4uEP7dzRrxmTFaMQvdU8DdH3cA/viewform">
                    Grant Application Form
                  </SimpleLink>{' '}
                  with a detailed proposal.
                </p>
              </TextElement>
              <TextElement>
                <h3>Step 2</h3>
                <h4>Evaluation Process</h4>
                <p>We review your submission and reach out for additional questions or interviews.</p>
                <p>Relevant Alephium ecosystem contributors may be consulted for technical feasibility.</p>
              </TextElement>
              <TextElement>
                <h3>Step 3</h3>
                <h4>Approval & Funding</h4>
                <p>If approved, we’ll formalize the grant agreement and onboard you.</p>
                <p>Grants may be distributed in milestones or as a lump sum, depending on project scope.</p>
              </TextElement>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Grant & Reward Program Rules</h2>
              <p>
                The Alephium Grants Program is an experimental and discretionary initiative aimed at fostering growth
                and innovation in our ecosystem. The following rules apply:
              </p>
              <ul>
                <li>Grants are not guaranteed and are issued at Alephium's sole discretion.</li>
                <li>Participants are responsible for all applicable taxes in their jurisdiction.</li>
                <li>Contributions must not violate laws, infringe on rights, or compromise unauthorized data.</li>
                <li>Recipients must complete KYC (Know Your Customer) verification if requested.</li>
                <li>Failure to provide accurate contact information may result in forfeiture of the grant.</li>
                <li>Alephium reserves the right to modify or discontinue the program at any time.</li>
              </ul>
            </TextElement>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Eligibility Criteria</h2>
              <p>The following are not eligible for Alephium grants:</p>
              <ul>
                <li>Individuals under the legal age in their country of residence.</li>
                <li>Individuals or entities on sanctions lists (e.g., SECO) or in restricted countries.</li>
                <li>Alephium employees, consultants, and their immediate families.</li>
              </ul>
            </TextElement>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement isCentered>
              <h2>Ready to Build? Apply Today!</h2>
              <p>If you're passionate about expanding the Alephium ecosystem, we want to hear from you.</p>
              <Button url="https://docs.google.com/forms/d/e/1FAIpQLSexF7M7k7kDdJtsHKFGYZuw4uEP7dzRrxmTFaMQvdU8DdH3cA/viewform">
                Apply for a Grant
              </Button>
            </TextElement>

            <SubheaderContent>
              <TextElement isCentered isSmall>
                <h3>
                  Got questions? Join the discussion in our community channels or contact us directly at
                  grants@alephium.org.
                </h3>
                <p>Let’s build the future of decentralized technology together!</p>
              </TextElement>
            </SubheaderContent>
          </SubpageSection>
        </>
      }
    />
  )
}

export default CustomPage
