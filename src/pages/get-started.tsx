import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Button from '../components/Button'
import CardImage from '../components/customPageComponents/CardImage'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SideBySide from '../components/customPageComponents/SideBySide'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import SubpageVideoHeroSection from '../components/customPageComponents/SubpageVideoHeroSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextElement from '../components/customPageComponents/TextElement'
import GatsbyImageWrapper from '../components/GatsbyImageWrapper'
import PageSectionContainer from '../components/PageSectionContainer'
import { WalletCard, WalletCards } from '../components/PageSectionWallets'
import SectionDivider from '../components/SectionDivider'
import useWallets from '../hooks/useWallets'

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
        gatsbyImageData(width: 1920, layout: CONSTRAINED, transformOptions: { fit: COVER, cropFocus: CENTER })
      }
    }
    blobVideo: file(relativePath: { eq: "alephium-blob.mp4" }) {
      publicURL
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
  const wallets = useWallets()
  const { exchangesContent, heroImage, heroVideo, blobVideo, ecosystemImage } =
    useStaticQuery<Queries.GetStartedPageQuery>(exchangesQuery)
  const exchanges = exchangesContent.nodes[0].frontmatter?.exchanges ?? []
  const blobVideoUrl = blobVideo?.publicURL || undefined
  const ecosystemImageData = ecosystemImage?.childImageSharp?.gatsbyImageData || undefined

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
          <SubpageVideoHeroSection poster={heroImage} video={heroVideo}>
            <h1>Get Started with Alephium</h1>
            <hr />
            <p>
              <strong>
                Whether you want to build, mine, or explore, this guide has everything you need to dive in.
              </strong>
            </p>
          </SubpageVideoHeroSection>

          <SubpageSection>
            <SideBySide>
              <TextElement>
                <h2>What is Alephium?</h2>
                <p>
                  <strong>Alephium is a next-generation Layer 1 blockchain</strong>, designed to deliver unmatched
                  security without compromising scalability or energy efficiency.
                </p>
                <p>
                  <strong>
                    Applications built on Alephium run faster, cost less, and inherit the resilience of Proof-of-Work,
                    ensuring your project is safe and scalable from day one.
                  </strong>{' '}
                  Whether you're launching dApps, creating digital assets, or integrating Web3 infrastructure, Alephium
                  provides the robust security, flexibility and performance needed to push boundaries.
                </p>
                <p>
                  <strong>It’s not just about building - it’s about building smarter.</strong> Alephium eliminates
                  common smart contract vulnerabilities, reduces energy consumption by 87% compared to traditional PoW,
                  and <strong>ensures long-term scalability without compromising security.</strong>
                </p>
              </TextElement>
              <video muted playsInline preload="auto" autoPlay loop>
                <source src={blobVideoUrl} type="video/mp4" />
              </video>
            </SideBySide>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection fullWidth>
            <PageSectionContainer>
              <TextElement>
                <h2>Your wallet</h2>
                <p>
                  To interact with the Alephium ecosystem{' '}
                  <strong>you’ll need a wallet, which acts as your gateway to the network</strong>. With an Alephium
                  wallet, you can store, send, and receive ALPH, manage digital assets (stablecoins, NFTs) and
                  seamlessly connect to dApps.
                </p>
              </TextElement>
            </PageSectionContainer>
            <PageSectionContainer>
              <WalletCards>
                <WalletCard
                  title="Desktop wallet"
                  description="Alephium’s flagship wallet. Ready for everything, from daily management tasks to smart contracts deployment, privacy & DeFi."
                  screenshot={{ publicURL: wallets?.desktop?.image?.publicURL ?? '' }}
                  color="rgb(91, 0, 255)"
                  actions={[
                    {
                      title: 'Get the desktop wallet',
                      link: wallets?.desktop?.url ?? ''
                    }
                  ]}
                />

                <WalletCard
                  title="Extension wallet"
                  description="The wallet in your browser. Get access to the latest features with a focus on DeFi."
                  screenshot={{ publicURL: wallets?.extension?.image?.publicURL ?? '' }}
                  color="rgb(24, 215, 255)"
                  actions={[
                    {
                      title: 'Chrome',
                      link: wallets?.extension?.urls?.chrome ?? ''
                    },
                    {
                      title: 'Firefox',
                      link: wallets?.extension?.urls?.firefox ?? ''
                    }
                  ]}
                />
                <WalletCard
                  title="Mobile wallet"
                  description="Alephium on the go. First-class UX. Available on Android and iOS."
                  screenshot={{ publicURL: wallets?.mobile?.image?.publicURL ?? '' }}
                  color="rgb(228, 124, 12)"
                  actions={[
                    {
                      title: 'Android',
                      link: wallets?.mobile?.urls?.android ?? ''
                    },
                    {
                      title: 'iOS',
                      link: wallets?.mobile?.urls?.ios ?? ''
                    }
                  ]}
                />
              </WalletCards>
            </PageSectionContainer>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Get ALPH</h2>
              <p>
                You can get ALPH by{' '}
                <strong>
                  buying it with traditional fiat currency, exchanging it with another cryptocurrency, or bridging from
                  another ecosystem.
                </strong>
              </p>
            </TextElement>
            <SubheaderContent>
              <Grid columns={4} gap="small">
                {exchanges.map(
                  (exchange) =>
                    exchange &&
                    exchange.title &&
                    exchange.url && (
                      <TextElement key={exchange.title} url={exchange.url}>
                        <CardImage src={exchange.logo?.publicURL ?? ''} alt={exchange.title} rounded />
                        <h3>{exchange.title}</h3>
                        <p>{exchange.description}</p>
                      </TextElement>
                    )
                )}
              </Grid>
            </SubheaderContent>

            <SubpageSection>
              <TextElement isCentered>
                <Button url="https://www.coingecko.com/en/coins/alephium#markets">See more ALPH markets</Button>
              </TextElement>
            </SubpageSection>
          </SubpageSection>

          <SectionDivider />

          <PageSectionContainer fullHeight wide justifyContent="center">
            <GatsbyImageWrapper
              image={ecosystemImageData}
              alt="Ecosystem background"
              style={{ height: '100%' }}
              objectFit="cover"
              loading="lazy"
              isBackground
            />
            <TextElement isCentered>
              <h2>Explore the ecosystem</h2>
              <p>
                <strong>
                  Discover innovative dApps and tokenized assets - trade, borrow, lend or earn ALPH, by engaging with
                  DeFi protocols or contributing to the ecosystem.
                </strong>
              </p>
              <Button url="https://alph.land">See all apps</Button>
            </TextElement>
          </PageSectionContainer>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Build on Alephium</h2>
              <p>
                With robust smart contract security, high-performance sharding, and a resilient Proof-of-Work
                foundation, Alephium gives you the tools to build better, safer, and faster.
              </p>
            </TextElement>

            <SubheaderContent>
              <Grid columns={2}>
                <TextCard url="https://docs.alephium.org/">
                  <CardImage src="https://place-hold.it/100" rounded />
                  <h3>Documentation</h3>
                  <p>Documentation to get you going quick and easy.</p>
                </TextCard>
                <TextCard url="/grants">
                  <CardImage src="https://place-hold.it/100" rounded />
                  <h3>Grants</h3>
                  <p>You have an idea, but no funding? We can help.</p>
                </TextCard>
              </Grid>
            </SubheaderContent>

            <SubheaderContent>
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

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Mine ALPH. Secure the Network. Earn Rewards</h2>
              <p>
                ALPH mining is efficient, accessible, and built for long-term sustainability. Powered by
                Proof-of-Less-Work, Alephium reduces energy consumption by 87% compared to traditional PoW, making
                mining more sustainable and rewarding.
              </p>
              <ul>
                <li>Clear and fair emissions schedule</li>
                <li>Energy efficient</li>
                <li>Easy setup and quick start</li>
              </ul>
            </TextElement>

            <SubheaderContent>
              <TextElement isCentered>
                <h3>Ready to mine?</h3>
                <Button url="https://docs.alephium.org/mining">Get started</Button>
              </TextElement>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement isCentered>
              <h2>Not sure what to do first?</h2>
              <p>
                No worries! Join our community and explore, there are many ways you can leave your mark on Alephium.
              </p>
              <Button url="/communities">See our communities</Button>
            </TextElement>
          </SubpageSection>
        </>
      }
    />
  )
}

export default CustomPage
