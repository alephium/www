import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { useTheme } from 'styled-components'

import Badge from '../components/Badge'
import Button from '../components/Button'
import CardFooterButtonContainer from '../components/common/CardFooterButtonContainer'
import CardsHorizontalScroller from '../components/common/CardsHorizontalScroller'
import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import SubpageVideoHeroSection from '../components/customPageComponents/SubpageVideoHeroSection'
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
          <SubpageVideoHeroSection video={heroVideo} poster={heroImage} minHeight="630px" showReflections>
            <TextElement>
              <h1>
                Alephium Roadmap
                <br />& Milestones
              </h1>
            </TextElement>
          </SubpageVideoHeroSection>

          <SubpageSection>
            <TextElement>
              <h2>
                Our journey to true Web3,
                <br />
                one upgrade at a time.
                <hr />
              </h2>
              <p>
                From Leman to Rhone to Danube, <strong>this has always been the plan</strong>.
                <strong> Now we're entering the chapter where it all comes together.</strong>
              </p>
            </TextElement>
            <Cards />
          </SubpageSection>

          <PageSectionMilestones />

          <SectionDivider />

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
            <h3 style={{ color: theme.palette3 }}>
              Leman<Badge color="palette3">First Era</Badge>
            </h3>

            <p>
              Leman, the first post-mainnet upgrade, refined Alephium&apos;s developer stack, enabling dApp creation
              with enhanced smart contracts, a stronger VM, and improved APIs, laying the groundwork for our builder
              ecosystem.
            </p>
          </TextElement>
          <CardFooterButtonContainer>
            <Button highlight squared url="https://medium.com/@alephium/the-leman-network-upgrade-is-live-f52c89b7dd6a">
              Learn more
            </Button>
          </CardFooterButtonContainer>
        </TextCardContent>
      </TextCard>
      <TextCard border>
        <TextCardContent>
          <TextElement>
            <h3 style={{ color: theme.palette2 }}>
              Rhone<Badge color="palette2">Second Era</Badge>
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
              Learn more
            </Button>
          </CardFooterButtonContainer>
        </TextCardContent>
      </TextCard>
      <TextCard border>
        <TextCardContent>
          <TextElement>
            <h3 style={{ color: theme.palette4 }}>
              Danube<Badge color="palette4">Third Era</Badge>
            </h3>
            <p>
              Danube marks a shift, this is where the vision of Web3 starts to feel real. Where onboarding doesn&apos;t
              require a technical manual. Where developers aren&apos;t boxed in by protocol constraints. Danube brings
              the features, UX, and dev experience that many other chains talk about - but few deliver.
            </p>
          </TextElement>
          <CardFooterButtonContainer>
            <Button highlight squared disabled>
              Learn more (soon)
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
          <CardFooterButtonContainer>
            <Button highlight squared disabled>
              Learn more (soon)
            </Button>
          </CardFooterButtonContainer>
        </TextCardContent>
      </TextCard>
    </CardsHorizontalScroller>
  )
}
