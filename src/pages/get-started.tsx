import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Button from '../components/Button'
import Grid from '../components/customPageComponents/Grid'
import ImageIcon from '../components/customPageComponents/ImageIcon'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageImageHeroSection from '../components/customPageComponents/SubpageImageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import SubpageVideoHeroSection from '../components/customPageComponents/SubpageVideoHeroSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextCardContent from '../components/customPageComponents/TextCardContent'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'

const exchangesQuery = graphql`
  query GetStartedPage {
    heroImage: file(relativePath: { eq: "build-mine-explore-poster.png" }) {
      ...HeroImage
    }
    heroVideo: file(relativePath: { eq: "build-mine-explore-scrub.mp4" }) {
      publicURL
    }
    ecosystemImage: file(relativePath: { eq: "ecosystem-islands.png" }) {
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
    documentationIcon: file(relativePath: { eq: "leaf-icon.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    goldIcon: file(relativePath: { eq: "gold-icon.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    blobVideo: file(relativePath: { eq: "alephium-blob.mp4" }) {
      publicURL
    }
    desktopWallet: file(relativePath: { eq: "screenshots/desktop-wallet/desktop-wallet-1.png" }) {
      childImageSharp {
        gatsbyImageData(width: 500, quality: 100)
      }
    }
    extensionWallet: file(relativePath: { eq: "screenshots/extension-wallet/extension-1.png" }) {
      childImageSharp {
        gatsbyImageData(height: 280, quality: 100)
      }
    }
    mobileWallet: file(relativePath: { eq: "screenshots/mobile-wallet/mobile-wallet-1.png" }) {
      childImageSharp {
        gatsbyImageData(height: 280, quality: 100)
      }
    }
    exchangesContent: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/exchanges.md/" } }) {
      nodes {
        frontmatter {
          exchanges {
            title
            description
            url
            logo {
              publicURL
            }
          }
        }
      }
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage, heroVideo, treasureImage, blobVideo, mineImage, ecosystemImage, documentationIcon, goldIcon } =
    useStaticQuery<Queries.GetStartedPageQuery>(exchangesQuery)
  const blobVideoUrl = blobVideo?.publicURL || undefined

  return (
    <Page
      {...props}
      seo={{
        title: 'Get Started with Alephium | Build, Mine, Explore',
        description:
          'Begin your Alephium journey - whether you want to build, mine, or explore. Learn everything you need to join the future of decentralized finance.'
      }}
      content={
        <>
          <SubpageVideoHeroSection poster={heroImage} video={heroVideo} alignContent="bottom">
            <h1>Get Started with Alephium</h1>
            <hr />
            <p>
              <strong>Everything you need to begin your journey in the Alephium ecosystem.</strong>
            </p>
          </SubpageVideoHeroSection>

          <SectionDivider />

          <SubpageSection bgColor="3" wide>
            <TextElement isCentered>
              <h2>Why Alephium?</h2>
              <p>
                Alephium combines <strong>the resilience of Proof-of-Work</strong> with{' '}
                <strong>sustainable high performance</strong>, and{' '}
                <strong>smart contracts that are both safe and easy to use</strong> for unmatched Web3 development.
              </p>
            </TextElement>
          </SubpageSection>

          <SectionDivider />

          <SubpageImageHeroSection backgroundImage={treasureImage} minHeight="660px" split>
            <h2>Wallets</h2>
            <hr />
            <p>
              <strong>Your gateway to the Alephium ecosystem.</strong> Store, send, receive, swap, borrow, lend, and
              more!
            </p>
            <Button big highlight url="/wallets">
              Download a wallet
            </Button>
          </SubpageImageHeroSection>

          {/*<SubpageSection>
            <TextElement isCentered>
              <h2>Get ALPH</h2>
              <p>
                <strong>There are many ways to get ALPH.</strong> You can it some with traditional fiat currency,
                exchanging it with another cryptocurrency, or bridging from another ecosystem.
              </p>
            </TextElement>
            <SubheaderContent isCentered>
              <Grid columns={2} gap="small">
                {exchanges.map(
                  (exchange) =>
                    exchange &&
                    exchange.title &&
                    exchange.url && (
                      <ClickableBox key={exchange.title} url={exchange.url}>
                        <ImageIcon
                          src={exchange.logo?.publicURL ?? ''}
                          alt={exchange.title}
                          rounded
                          size={50}
                          padding={10}
                          noBottomMargin
                        />
                        <TextElement isSmall noMargin>
                          <p>
                            <strong>{exchange.title}</strong> — {exchange.description}
                          </p>
                        </TextElement>
                      </ClickableBox>
                    )
                )}
              </Grid>
              <Button url="https://www.coingecko.com/en/coins/alephium#markets">See more ALPH markets</Button>
            </SubheaderContent>
          </SubpageSection>*/}

          <SubpageSection isCentered>
            <TextElement isCentered>
              <h2>Build on Alephium</h2>
              <p>
                With robust smart contract security, high-performance sharding, and a resilient Proof-of-Work
                foundation, <strong>Alephium gives you the tools to build better, safer, and faster.</strong>
              </p>
            </TextElement>

            <SubheaderContent>
              <Grid columns={2} isCentered gap="small">
                <TextCard url="https://docs.alephium.org/">
                  <TextCardContent>
                    <ImageIcon image={documentationIcon?.childImageSharp?.gatsbyImageData} rounded />
                    <h3>Documentation</h3>
                    <p>Documentation to get you going quick and easy.</p>
                  </TextCardContent>
                </TextCard>
                <TextCard url="https://github.com/alephium/community/blob/master/Grant%26RewardProgram.md">
                  <TextCardContent>
                    <ImageIcon image={goldIcon?.childImageSharp?.gatsbyImageData} rounded />
                    <h3>Grants</h3>
                    <p>
                      You have an idea, but no funding?
                      <br />
                      We can help.
                    </p>
                  </TextCardContent>
                </TextCard>
              </Grid>
            </SubheaderContent>

            <SubheaderContent isCentered>
              <TextElement isCentered>
                <h3>Guides and tutorials</h3>
                <Button url="https://docs.alephium.org/ralph">Ralph Language</Button>
                <Button url="https://docs.alephium.org/sdk">SDK</Button>
                <Button url="https://www.youtube.com/playlist?list=PL8q8n0BHJS1PWP7t8ABECYdOaPM-hJmjx">
                  Tutorials
                </Button>
              </TextElement>
            </SubheaderContent>
          </SubpageSection>

          <SubpageImageHeroSection
            backgroundImage={ecosystemImage}
            alignContent="center"
            bottomMargin
            minHeight="600px"
          >
            <TextElement isCentered>
              <h2>Explore the ecosystem</h2>
              <p>
                <strong>All the dApps, tools, integrations, partners and more, in one place.</strong>
              </p>
              <Button big highlight url="https://alph.land">
                See all apps
              </Button>
            </TextElement>
          </SubpageImageHeroSection>

          <SubpageImageHeroSection backgroundImage={mineImage} minHeight="800px">
            <h2>
              Mine ALPH.
              <small>
                <br />
                Secure the Network.
                <br />
                Earn Rewards.
              </small>
            </h2>
            <hr />
            <p>
              ALPH mining is <strong>efficient, accessible, and built for long-term sustainability.</strong>
            </p>
            <ul>
              <li>Clear and fair emissions schedule</li>
              <li>Energy efficient</li>
              <li>Easy setup and quick start</li>
            </ul>
            <Button big highlight url="https://docs.alephium.org/mining">
              Start mining
            </Button>
          </SubpageImageHeroSection>

          <SubpageSection>
            <TextElement isCentered>
              <h2>Not sure what to do first?</h2>
              <p>
                No worries! Join our community and explore, there are many ways you can leave your mark on Alephium.
              </p>
              <Button big highlight url="/communities">
                See our communities
              </Button>
            </TextElement>
          </SubpageSection>
        </>
      }
    />
  )
}

export default CustomPage
