import { PageProps } from 'gatsby'

import SectionDivider from '../components/SectionDivider'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import Button from '../components/Button'
import TextElement from '../components/customPageComponents/TextElement'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    content={
      <>
        <SubpageHeroSection>
          <h1>Get Started with Alephium</h1>
          <p>
            Not sure where to begin? Whether you want to build, mine, or explore, this guide has everything you need to
            dive in.
          </p>
        </SubpageHeroSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>What is Alephium?</h2>
            <p>
              Alephium is a next-generation Layer 1 blockchain, designed to deliver unmatched security without
              compromising scalability or energy efficiency.
            </p>
            <p>
              Applications built on Alephium run faster, cost less, and inherit the resilience of Proof-of-Work,
              ensuring your project is safe and scalable from day one. Whether you're launching dApps, creating digital
              assets, or integrating Web3 infrastructure, Alephium provides the robust security, flexibility and
              performance needed to push boundaries.
            </p>
            <p>
              It’s not just about building - it’s about building smarter. Alephium eliminates common smart contract
              vulnerabilities, reduces energy consumption by 87% compared to traditional PoW, and ensures long-term
              scalability without compromising security.
            </p>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Create a wallet</h2>
            <p>
              To interact with the Alephium ecosystem you’ll need a wallet, which acts as your gateway to the network.
              With an Alephium wallet, you can store, send, and receive ALPH, manage digital assets (stablecoins, NFTs)
              and seamlessly connect to dApps.
            </p>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Get ALPH</h2>
            <p>
              You can get ALPH by buying it with traditional fiat currency, exchanging it with another cryptocurrency,
              or bridging from another ecosystem.
            </p>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Explore Alephium ecosystem</h2>
            <p>
              Discover innovative dApps and tokenized assets - trade, borrow, lend or earn ALPH, by engaging with DeFi
              protocols or contributing to the ecosystem.
            </p>
            <Button url="https://alph.land">See all apps</Button>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Build on Alephium</h2>
            <p>
              With robust smart contract security, high-performance sharding, and a resilient Proof-of-Work foundation,
              Alephium gives you the tools to build better, safer, and faster.
            </p>
            <Button url="https://alph.land">See all apps</Button>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Mine ALPH. Secure the Network. Earn Rewards</h2>
            <p>
              ALPH mining is efficient, accessible, and built for long-term sustainability. Powered by
              Proof-of-Less-Work, Alephium reduces energy consumption by 87% compared to traditional PoW, making mining
              more sustainable and rewarding.
            </p>
          </TextElement>
        </SubpageSection>

        <SubpageSection>
          <TextElement>
            <h2>Not sure what to do first?</h2>
            <p>No worries! Join our community and explore, there are many ways you can leave your mark on Alephium.</p>
            <Button url="/communities">See our communities</Button>
          </TextElement>
        </SubpageSection>
      </>
    }
  />
)

export default CustomPage
