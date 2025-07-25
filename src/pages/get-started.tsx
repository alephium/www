import { graphql, PageProps, useStaticQuery } from 'gatsby'
import styled, { useTheme } from 'styled-components'

import Button from '../components/Button'
import CardFooterButtonContainer from '../components/common/CardFooterButtonContainer'
import CardsHorizontalScroller from '../components/common/CardsHorizontalScroller'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageImageHeroSection from '../components/customPageComponents/SubpageImageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextCardContent from '../components/customPageComponents/TextCardContent'
import TextElement from '../components/customPageComponents/TextElement'
import GradientText from '../components/GradientText'
import SectionDivider from '../components/SectionDivider'

const CARD_WIDTH = 380
const CARD_GAP = 24

const exchangesQuery = graphql`
  query GetStartedPage {
    ecosystemImage: file(relativePath: { eq: "rock-pile.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80)
      }
    }
    treasureImage: file(relativePath: { eq: "treasure.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    mineImage: file(relativePath: { eq: "mine.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
  }
`

const GetStartedPage = (props: PageProps) => (
  <Page
    {...props}
    seo={{
      title: 'Get Started with Alephium | Build, Mine, Explore',
      description:
        'Begin your Alephium journey - whether you want to build, mine, or explore. Learn everything you need to join the future of decentralized finance.'
    }}
    content={<PageContent />}
  />
)

const PageContent = () => {
  const { ecosystemImage, mineImage } = useStaticQuery<Queries.GetStartedPageQuery>(exchangesQuery)
  const theme = useTheme()

  return (
    <>
      <GetAlphSection />

      <SectionDivider />

      <SubpageImageHeroSection
        backgroundImage={ecosystemImage}
        alignContent="center"
        bottomMargin
        minHeight="500px"
        split
      >
        <TextElement isCentered>
          <h2>
            <GradientText color1={theme.palette6} color2={theme.palette1}>
              Explore the ecosystem
            </GradientText>
          </h2>
          <p>
            <strong>All the dApps, tools, integrations, partners and more, in one place.</strong>
          </p>
          <Button big highlight url="https://alph.land">
            See all apps
          </Button>
        </TextElement>
      </SubpageImageHeroSection>

      <SectionDivider border pageWidth />

      <SubpageSection isCentered>
        <TextElement isCentered>
          <h2>
            <GradientText>Build on Alephium</GradientText>
          </h2>
          <p>
            Alephium&apos;s scalable Proof-of-Less-Work and secure Smart Contracts give you the tools to{' '}
            <strong>build better, faster and safer.</strong>
          </p>
        </TextElement>

        <SubheaderContent isCentered>
          <Grid columns={2} gap="small">
            <TextCard url="https://docs.alephium.org/">
              <TextCardContent>
                <h3>Documentation</h3>
                <p>Documentation to get you going quick and easy.</p>
              </TextCardContent>
            </TextCard>
            <TextCard url="https://github.com/alephium/community/blob/master/Grant%26RewardProgram.md">
              <TextCardContent>
                <h3>Grants</h3>
                <p>
                  You have an idea, but no funding?
                  <br />
                  We can help.
                </p>
              </TextCardContent>
            </TextCard>
          </Grid>

          <SectionDivider />

          <TextElement isCentered>
            <h3>Guides and tutorials</h3>
            <Button url="https://docs.alephium.org/ralph">Ralph Language</Button>
            <Button url="https://docs.alephium.org/sdk/getting-started">SDK</Button>
            <Button url="https://www.youtube.com/playlist?list=PL8q8n0BHJS1PWP7t8ABECYdOaPM-hJmjx">Tutorials</Button>
          </TextElement>
        </SubheaderContent>
      </SubpageSection>

      <SectionDivider border pageWidth />

      <SubpageImageHeroSection backgroundImage={mineImage} minHeight="500px">
        <h2>
          Mine ALPH.
          <small>
            <br />
            Secure the Network.
            <br />
            Earn Rewards.
          </small>
        </h2>
        <p>
          <strong>ALPH mining is efficient, accessible, and built for long-term sustainability.</strong>
        </p>
        <Button big highlight url="https://docs.alephium.org/mining">
          Start mining
        </Button>
      </SubpageImageHeroSection>

      <SectionDivider />

      <SubpageSection>
        <TextElement isCentered>
          <h2>Not sure what to do first?</h2>
          <p>No worries! Join our community and explore, there are many ways you can leave your mark on Alephium.</p>
          <Button big highlight url="/communities">
            See our communities
          </Button>
        </TextElement>
      </SubpageSection>
    </>
  )
}

export default GetStartedPage

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const GetAlphSection = () => {
  const { treasureImage } = useStaticQuery<Queries.GetStartedPageQuery>(exchangesQuery)

  return (
    <>
      <SubpageSection fullWidth>
        <TextElement isCentered>
          <h1>
            Get Started
            <br />
            with Alephium
          </h1>
          <p>
            Here&apos;s everything you need
            <br />
            <strong>to begin your journey in the Alephium ecosystem.</strong>
          </p>
        </TextElement>
      </SubpageSection>

      <SubpageImageHeroSection backgroundImage={treasureImage} minHeight="550px" alignContent="center">
        <h1>Wallets</h1>
        <p>
          Your gateway to Alephium: <strong>store, swap, lend, and more!</strong>
        </p>
        <Button big highlight url="/wallets">
          Get a wallet
        </Button>
      </SubpageImageHeroSection>

      <SectionDivider />

      <SubpageSection fullWidth>
        <TextElementStyled>
          <h2>Get ALPH</h2>
          <p>
            The native token of Alephium. You can get it through your wallet, exchanges, other networks or your peers.
          </p>
        </TextElementStyled>

        <CardsHorizontalScroller cardWidth={CARD_WIDTH} cardGap={CARD_GAP} animateCards additionalLeftPadding>
          <TextCard>
            <TextCardContent>
              <TextElement>
                <h3>On-Ramps</h3>
                <p>
                  You can get ALPH directly from the Alephium mobile and desktop wallets with a{' '}
                  <strong>debit/credit card, bank transfer or even Apple Pay.</strong> <br />
                  <small>Geographical restrictions apply.</small>
                </p>
              </TextElement>
              <CardFooterButtonContainer>
                <Button squared url="https://x.com/alephium/status/1899529139331481881">
                  More on on-ramps
                </Button>
              </CardFooterButtonContainer>
            </TextCardContent>
          </TextCard>
          <TextCard>
            <TextCardContent>
              <TextElement>
                <h3>Centralised Exchanges</h3>
                <p>
                  Centralised Exchanges (CEX) are platforms where ALPH is available using traditional currencies.{' '}
                  <strong>They maintain custody over the ALPH</strong> you get until you transfer it to a wallet under
                  your control.
                </p>
              </TextElement>
              <CardFooterButtonContainer>
                <Button squared url="https://www.coingecko.com/en/coins/alephium#markets">
                  List of exchanges
                </Button>
              </CardFooterButtonContainer>
            </TextCardContent>
          </TextCard>
          <TextCard>
            <TextCardContent>
              <TextElement>
                <h3>Decentralised Exchanges</h3>
                <p>
                  If you want more control, you can get ALPH using smart contracts. With Decentralized Exchanges (DEX)
                  you can trade digital assets <strong>without handing over control of your funds</strong> to a company.
                </p>
              </TextElement>
              <CardFooterButtonContainer>
                <Button squared url="https://www.coingecko.com/en/coins/alephium#markets">
                  Try a DEX
                </Button>
              </CardFooterButtonContainer>
            </TextCardContent>
          </TextCard>
          <TextCard>
            <TextCardContent>
              <TextElement>
                <h3>Bridged ALPH</h3>
                <p>
                  You can also get ALPH on <strong>other networks like Ethereum and BSC</strong>. Just use the Alephium
                  Token Bridge to move it to native ALPH on the Alephium network.
                </p>
              </TextElement>
              <CardFooterButtonContainer>
                <Button squared url="https://docs.alephium.org/infrastructure/the-bridge/">
                  More on the bridge
                </Button>
              </CardFooterButtonContainer>
            </TextCardContent>
          </TextCard>
          <TextCard>
            <TextCardContent>
              <TextElement>
                <h3>From your peers</h3>
                <p>
                  Once you have an Alephium wallet, you just need to share your address to start sending and receiving
                  ALPH and other tokens directly with others.
                </p>
              </TextElement>
              <CardFooterButtonContainer>
                <Button squared url="/wallets">
                  More on wallets
                </Button>
              </CardFooterButtonContainer>
            </TextCardContent>
          </TextCard>
        </CardsHorizontalScroller>
      </SubpageSection>
    </>
  )
}

const TextElementStyled = styled(TextElement)`
  width: var(--page-width);
  margin: 0 auto;
`
