import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { useTheme } from 'styled-components'

import Badge from '../components/Badge'
import Button from '../components/Button'
import CardFooterButtonContainer from '../components/common/CardFooterButtonContainer'
import CardsHorizontalScroller from '../components/common/CardsHorizontalScroller'
import ClickableBox from '../components/customPageComponents/ClickableBox'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextCardContent from '../components/customPageComponents/TextCardContent'
import TextElement from '../components/customPageComponents/TextElement'
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
          <SectionDivider />

          <SubpageSection bgColor="1" wide border edgeGradient gradientPosition="top">
            <TextElement isCentered>
              <h2>
                Our Journey to
                <br />
                True Web3
              </h2>
              <p>
                Marked by purposeful upgrades, each advancing <strong>scalability, usability, and security.</strong>
              </p>
            </TextElement>
          </SubpageSection>

          <SubpageSection>
            <TextElement>
              <h2>One upgrade at a time.</h2>
              <p>
                From Leman to Rhone to Danube, <strong>this has always been the plan</strong>.
                <strong> Now we're entering the chapter where it all comes together.</strong>
              </p>
            </TextElement>
            <Cards />
          </SubpageSection>

          <SectionDivider />

          <ChangesSection />

          <SectionDivider />

          <PageSectionMilestones />

          <SubpageSection border edgeGradient>
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

const Cards = () => {
  const theme = useTheme()

  return (
    <CardsHorizontalScroller cardWidth={380} cardGap={24} animateCards>
      <TextCard border>
        <TextCardContent>
          <TextElement>
            <h3 style={{ color: theme.palette3, paddingRight: 0 }}>
              Leman<Badge color="palette3">March 30, 2023</Badge>
            </h3>

            <p>
              Leman, the first post-mainnet upgrade, refined Alephium&apos;s developer stack, enabling dApp creation
              with enhanced smart contracts, a stronger VM, and improved APIs, laying the groundwork for our builder
              ecosystem.
            </p>
          </TextElement>
          <CardFooterButtonContainer>
            <Button highlight squared url="https://medium.com/@alephium/the-leman-network-upgrade-is-live-f52c89b7dd6a">
              More on Leman upgrade
            </Button>
          </CardFooterButtonContainer>
        </TextCardContent>
      </TextCard>
      <TextCard border>
        <TextCardContent>
          <TextElement>
            <h3 style={{ color: theme.palette2, paddingRight: 0 }}>
              Rhone<Badge color="palette2">Jun 12, 2024</Badge>
            </h3>
            <p>
              Then came Rhone, our first big leap forward. Block times dropped from 64 to 16 seconds, smart contracts
              got more powerful, and dApp performance improved across the board. Rhone was about making Alephium
              stronger, faster, and ready to compete with the best L1s in the space.
            </p>
          </TextElement>
          <CardFooterButtonContainer>
            <Button
              highlight
              squared
              url="https://medium.com/@alephium/rh%C3%B4ne-network-upgrade-activated-cbeb298585fe"
            >
              More on Rhone upgrade
            </Button>
          </CardFooterButtonContainer>
        </TextCardContent>
      </TextCard>
      <TextCard border>
        <TextCardContent>
          <TextElement>
            <h3 style={{ color: theme.palette4, paddingRight: 0 }}>
              Danube<Badge color="palette4">Upcoming</Badge>
            </h3>
            <p>
              Danube marks a shift, this is where the vision of Web3 starts to feel real. Where onboarding doesn&apos;t
              require a technical manual. Where developers aren&apos;t boxed in by protocol constraints. Danube brings
              the features, UX, and dev experience that many other chains talk about - but few deliver.
            </p>
          </TextElement>
          <CardFooterButtonContainer>
            <Button highlight squared url="https://x.com/alephium/status/1920780688313233634">
              More on Danube upgrade
            </Button>
          </CardFooterButtonContainer>
        </TextCardContent>
      </TextCard>
      <TextCard border>
        <TextCardContent>
          <TextElement>
            <h3>Next?</h3>
            <p>
              We continue to build. The next upgrade of the Danube era will focus on strengthening Alephium&apos;s core
              - enhancing performance, expanding smart contract capabilities, and setting the stage for high-impact apps
              that showcase the true utility of ALPH.
            </p>
          </TextElement>
        </TextCardContent>
      </TextCard>
    </CardsHorizontalScroller>
  )
}

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const ChangesSection = () => {
  const theme = useTheme()
  return (
    <SubpageSection wide>
      <TextElement isCentered>
        <h2>
          What changes are
          <br />
          coming to Alephium?
        </h2>
        <p>
          Danube isn’t just an upgrade, it’s <strong>the leap that enhances everything</strong> from wallet simplicity
          to block speed and developer power, redefining what’s possible for a UTXO-based smart contract chain.
        </p>
      </TextElement>

      <SubheaderContent>
        <Grid columns={2} gap="small">
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong style={{ color: theme.palette1 }}>One Address for Everything</strong> - Before Danube, every
                Alephium wallet had multiple addresses associated with specific network shard groups.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong style={{ color: theme.palette2 }}>8-Second Block Time</strong> - The network now processes an
                average of 2 blocks per second across all 4 chains, bringing Alephium on par with many leading
                proof-of-stake networks.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong style={{ color: theme.palette3 }}>Chained Transactions</strong> - Call several smart contracts
                and use the assets created during those calls in the same transaction. The UTXO rules now apply at the
                function level.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong style={{ color: theme.palette4 }}>Quick Sync for Nodes</strong> - Sync time is now up to three
                times faster. Nodes download a quick “skeleton” first, then fetch data in parallel. More efficient
                syncing = more nodes = stronger network.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong style={{ color: theme.palette5 }}>Passkeys Support</strong> - Secure credentials stored on your
                device. You can log in using Face ID, Touch ID, or hardware keys like YubiKey. Seed phrases can still be
                used, but they’re no longer required at the start.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong style={{ color: theme.palette6 }}>Sustainable Tokenomics</strong> - The hard cap has been
                removed and replaced with a tail emission model. After the initial 81 years, ALPH continues to be mined
                at a slow, steady pace. This ensures miners remain incentivized long-term.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong style={{ color: theme.palette1 }}>Smarter Developer Tools</strong> - A new VM instruction lets
                contracts access the external user. Bitwise operations for 256-bit integers (I256) improve efficiency.
                The VM now auto-handles dust, contract, and map deposits, with assets and states instantly accessible by
                other contract calls.
              </p>
            </TextElement>
          </ClickableBox>
          <ClickableBox>
            <TextElement noMargin>
              <p>
                <strong style={{ color: theme.palette2 }}>Faster, Smarter Consensus</strong> - Danube optimizes
                Alephium’s BlockFlow consensus algorithm with an "optimistic" execution path. Network throughput and
                responsiveness are doubled (up to 20k transactions per second) without compromising consensus integrity.
              </p>
            </TextElement>
          </ClickableBox>
        </Grid>
      </SubheaderContent>
    </SubpageSection>
  )
}
