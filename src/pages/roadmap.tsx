import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { useTheme } from 'styled-components'

import ClickableBox from '../components/customPageComponents/ClickableBox'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import NetworkUpgradesCardScroller from '../components/NetworkUpgradesCardScroller'
import PageSectionMilestones from '../components/PageSectionMilestones'
import SectionDivider from '../components/SectionDivider'

const roadmapQuery = graphql`
  query RoadmapPage {
    heroImage: file(relativePath: { eq: "bay-tree-2.png" }) {
      ...HeroImage
    }
    heroVideo: file(relativePath: { eq: "bay-tree-2-scrub.mp4" }) {
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
        description: 'Explore Alephium&apos;s journey and find out what&apos;s next. Built for real-world adoption.'
      }}
      content={
        <>
          <SubpageSection edgeGradient border="bottom">
            <TextElement isCentered>
              <h1>
                Our Journey to
                <br />
                True Web3
              </h1>
              <p>
                Marked by purposeful upgrades, each advancing <strong>scalability, usability, and security.</strong>
              </p>
            </TextElement>
          </SubpageSection>

          <SubpageSection>
            <TextElement>
              <h2>One upgrade at a time.</h2>
              <p>
                From Leman to Rhone to Danube, <strong>this has always been the plan</strong>. Now we&apos;re entering
                the chapter <strong>where it all comes together.</strong>
              </p>
            </TextElement>
            <NetworkUpgradesCardScroller />
          </SubpageSection>

          <SectionDivider />

          <ChangesSection />

          <SectionDivider />

          <PageSectionMilestones />

          <SubpageSection border="all" edgeGradient>
            <TextElement isCentered>
              <h2>Join Us on This Journey</h2>
              <p>
                Alephium&apos;s roadmap is a living document, evolving with the input of our community and the progress
                of our technology. Stay up-to-date on our latest developments by following us on{' '}
                <a href="https://x.com/alephium">Twitter</a>, or joining our{' '}
                <a href="https://t.me/alephiumgroup">Telegram</a> group.
              </p>
            </TextElement>
          </SubpageSection>
          <SectionDivider double />
        </>
      }
    />
  )
}

export default CustomPage

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const ChangesSection = () => {
  const theme = useTheme()
  return (
    <SubpageSection>
      <TextElement isCentered>
        <h2>
          What changes are
          <br />
          coming to Alephium?
        </h2>
        <p>
          Danube isn&apos;t just an upgrade, it&apos;s <strong>the leap that enhances everything</strong> from wallet
          simplicity to block speed and developer power, redefining what&apos;s possible for a UTXO-based smart contract
          chain.
        </p>
      </TextElement>

      <SubheaderContent>
        <Grid columns={2} gap="small">
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong>One Address for Everything</strong> - Before Danube, every Alephium wallet had multiple
                addresses associated with specific network shard groups.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong>8-Second Block Time</strong> - The network now processes an average of 2 blocks per second
                across all 4 chains, bringing Alephium on par with many leading proof-of-stake networks.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong>Chained Transactions</strong> - Call several smart contracts and use the assets created during
                those calls in the same transaction. The UTXO rules now apply at the function level.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong>Quick Sync for Nodes</strong> - Sync time is now up to three times faster. Nodes download a
                quick &quot;skeleton&quot; first, then fetch data in parallel. More efficient syncing = more nodes =
                stronger network.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong>Passkeys Support</strong> - Secure credentials stored on your device. You can log in using Face
                ID, Touch ID, or hardware keys like YubiKey. Seed phrases can still be used, but they&apos;re no longer
                required at the start.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong>Sustainable Tokenomics</strong> - The hard cap has been removed and replaced with a tail
                emission model. After the initial 81 years, ALPH continues to be mined at a slow, steady pace. This
                ensures miners remain incentivized long-term.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong>Smarter Developer Tools</strong> - A new VM instruction lets contracts access the external user.
                Bitwise operations for 256-bit integers (I256) improve efficiency. The VM now auto-handles dust,
                contract, and map deposits, with assets and states instantly accessible by other contract calls.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong>Faster, Smarter Consensus</strong> - Danube optimizes Alephium&apos;s BlockFlow consensus
                algorithm with an &quot;optimistic&quot; execution path. Network throughput and responsiveness are
                doubled (up to 20k transactions per second) without compromising consensus integrity.
              </p>
            </TextElement>
          </ClickableBox>
        </Grid>
      </SubheaderContent>
    </SubpageSection>
  )
}
