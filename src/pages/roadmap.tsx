import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import SubpageVideoHeroSection from '../components/customPageComponents/SubpageVideoHeroSection'
import TextElement from '../components/customPageComponents/TextElement'
import PageSectionMilestones from '../components/PageSectionMilestones'
import SectionDivider from '../components/SectionDivider'

const roadmapQuery = graphql`
  query RoadmapPage {
    heroImage: file(relativePath: { eq: "magic-mountain.png" }) {
      ...HeroImage
    }
    heroVideo: file(relativePath: { eq: "magic-mountain-scrub.mp4" }) {
      publicURL
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage, heroVideo } = useStaticQuery<Queries.RoadmapPageQuery>(roadmapQuery)

  return (
    <Page
      {...props}
      floatingMenu={false}
      seo={{
        title: 'Alephium Roadmap | Past Milestones & Future Vision',
        description: "Explore Alephium’s journey and find out what's next. Built for real-world adoption."
      }}
      content={
        <>
          <SubpageVideoHeroSection video={heroVideo} poster={heroImage}>
            <h1>Alephium Roadmap & Milestones</h1>
            <hr />
            <p>
              <strong>At Alephium, we’re building the future of blockchain technology</strong> - one milestone at a
              time. Our roadmap reflects our commitment to innovation, scalability, and community-driven growth.{' '}
              <strong>Explore our journey so far and what’s coming next.</strong>
            </p>
          </SubpageVideoHeroSection>

          <PageSectionMilestones />

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Current Focus</h2>
              <h3>Ecosystem Expansion</h3>
              <p>
                Our team is actively onboarding new dApps and developers to the Alephium ecosystem, with a focus on
                DeFi, NFTs, and ReFi.
              </p>
              <h3>Partnerships and Integrations</h3>
              <p>
                We’re collaborating with leading projects and platforms to integrate Alephium’s technology and expand
                its reach.
              </p>
              <h3>Research and Development</h3>
              <p>
                Ongoing R&D efforts are focused on enhancing sharding, improving network performance, and exploring new
                use cases for PoLW.
              </p>
            </TextElement>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>What’s Next?</h2>

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
              <h3>Global Community Expansion</h3>
              <p>
                Launching initiatives to grow Alephium’s presence in key regions, including hackathons, meetups, and
                educational programs.
              </p>
              <h3>Layer 2 Solutions</h3>
              <p>
                Exploring Layer 2 scaling solutions to further enhance Alephium’s throughput and reduce transaction
                costs.
              </p>
              <h3>Governance Framework</h3>
              <p>Developing a decentralized governance model to empower the community to shape Alephium’s future.</p>
            </TextElement>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement isCentered>
              <h2>Join Us on This Journey</h2>
              <p>
                Alephium’s roadmap is a living document, evolving with the input of our community and the progress of
                our technology. Stay up-to-date on our latest developments by following us on{' '}
                <a href="https://x.com/alephium">Twitter</a>, or joining our{' '}
                <a href="https://t.me/alephiumgroup">Telegram</a> group.
              </p>
            </TextElement>
          </SubpageSection>
        </>
      }
    />
  )
}

export default CustomPage
