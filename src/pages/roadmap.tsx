import { PageProps } from 'gatsby'

import Page from '../components/customPageComponents/Page'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import PageSectionMilestones from '../components/PageSectionMilestones'
import SectionDivider from '../components/SectionDivider'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    content={
      <>
        <SubpageHeroSection>
          <h1>Alephium Roadmap & Milestones</h1>
          <hr />
          <p>
            At Alephium, we’re building the future of blockchain technology - one milestone at a time. Our roadmap
            reflects our commitment to innovation, scalability, and community-driven growth. Explore our journey so far
            and what’s coming next.
          </p>
        </SubpageHeroSection>

        <SectionDivider />

        <PageSectionMilestones />

        <SectionDivider />

        <SubpageSection>
          <TextElement isCentered>
            <h2>Current Focus</h2>
          </TextElement>
          <TextElement>
            <h3>Ecosystem Expansion</h3>
            <p>
              Our team is actively onboarding new dApps and developers to the Alephium ecosystem, with a focus on DeFi,
              NFTs, and ReFi.
            </p>
          </TextElement>
          <TextElement>
            <h3>Partnerships and Integrations</h3>
            <p>
              We’re collaborating with leading projects and platforms to integrate Alephium’s technology and expand its
              reach.
            </p>
          </TextElement>
          <TextElement>
            <h3>Research and Development</h3>
            <p>
              Ongoing R&D efforts are focused on enhancing sharding, improving network performance, and exploring new
              use cases for PoLW.
            </p>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement isCentered>
            <h2>What’s Next?</h2>
          </TextElement>

          <TextElement>
            <h3>Danube Upgrade (Q1 2025)</h3>
            <ul>
              <li>Passkeys</li>
              <li>Groupless addresses</li>
              <li>8s blocktime</li>
              <li>Smart wallet stuff</li>
              <li>Chained transactions</li>
              <li>Increased gas limit</li>
              <li>Memory pool optimisations</li>
              <li>BLS signatures</li>
              <li>Improved storage</li>
            </ul>
          </TextElement>
          <TextElement>
            <h3>Global Community Expansion</h3>
            <p>
              Launching initiatives to grow Alephium’s presence in key regions, including hackathons, meetups, and
              educational programs.
            </p>
          </TextElement>
          <TextElement>
            <h3>Layer 2 Solutions</h3>
            <p>
              Exploring Layer 2 scaling solutions to further enhance Alephium’s throughput and reduce transaction costs.
            </p>
          </TextElement>
          <TextElement>
            <h3>Governance Framework</h3>
            <p>Developing a decentralized governance model to empower the community to shape Alephium’s future.</p>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement isCentered>
            <h2>Join Us on This Journey</h2>
            <p>
              Alephium’s roadmap is a living document, evolving with the input of our community and the progress of our
              technology. Stay up-to-date on our latest developments by following us on Twitter, or joining our Telegram
              group.
            </p>
          </TextElement>
        </SubpageSection>
      </>
    }
  />
)

export default CustomPage
