import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Slider from 'react-slick'
import styled from 'styled-components'

import Badge from '../components/Badge'
import Button from '../components/Button'
import CardsRow from '../components/customPageComponents/CardsRow'
import Page from '../components/customPageComponents/Page'
import SideBySide from '../components/customPageComponents/SideBySide'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import SubpageVideoHeroSection from '../components/customPageComponents/SubpageVideoHeroSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextCardContent from '../components/customPageComponents/TextCardContent'
import TextElement from '../components/customPageComponents/TextElement'
import GatsbyImageWrapper from '../components/GatsbyImageWrapper'
import SectionDivider from '../components/SectionDivider'
import SimpleLink from '../components/SimpleLink'
import useWallets from '../hooks/useWallets'

const walletsQuery = graphql`
  query WalletsPage {
    heroImage: file(relativePath: { eq: "treasure.png" }) {
      ...HeroImage
    }
    heroVideo: file(relativePath: { eq: "underwater-treasure-scrub.mp4" }) {
      publicURL
    }
    desktopScreenshots: allFile(
      filter: { relativeDirectory: { eq: "screenshots/desktop-wallet" } }
      sort: { name: ASC }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 800, quality: 100)
        }
      }
    }
    extensionScreenshots: allFile(
      filter: { relativeDirectory: { eq: "screenshots/extension-wallet" } }
      sort: { name: ASC }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(height: 500, quality: 100)
        }
      }
    }
    mobileScreenshots: allFile(
      filter: { relativeDirectory: { eq: "screenshots/mobile-wallet" } }
      sort: { name: ASC }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(height: 500, quality: 100)
        }
      }
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage, heroVideo, desktopScreenshots, extensionScreenshots, mobileScreenshots } =
    useStaticQuery<Queries.WalletsPageQuery>(walletsQuery)
  const wallets = useWallets()

  return (
    <Page
      {...props}
      seo={{
        title: 'Alephium Wallets | Securely Manage Your ALPH',
        description:
          'Choose from desktop, browser, or mobile wallets to manage ALPH and interact with dApps on Alephium. Secure, fast, and easy to use.'
      }}
      content={
        <>
          <SubpageVideoHeroSection poster={heroImage} video={heroVideo}>
            <h1>Alephium Wallets</h1>
            <hr />
            <p>
              <strong>Alephium offers a variety of wallets</strong> to manage your ALPH tokens, interact with
              decentralized applications (dApps), and participate in the ecosystem&apos;s growth.
            </p>
          </SubpageVideoHeroSection>

          <SubpageSection>
            <TextElement>
              <h2>
                Your Gateway
                <br />
                to the Alephium
                <br />
                Ecosystem
              </h2>
            </TextElement>

            <SubheaderContent>
              <CardsRow>
                <TextCard>
                  <TextCardContent>
                    <h3>Enhanced Security</h3>
                    <p>
                      Alephium&apos;s non-custodial wallets ensure that only you have access to your funds and private
                      keys, which are fully encrypted on your device.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>Comprehensive Features</h3>
                    <p>
                      Whether you prefer desktop applications, browser extensions, or mobile apps, Alephium wallets
                      allow you to manage ALPH tokens, engage with dApps, and more.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>Simple Setup</h3>
                    <p>
                      Getting started is straightforward — download your preferred wallet, set up your account, and
                      you&apos;re ready to explore the Alephium ecosystem.
                    </p>
                  </TextCardContent>
                </TextCard>
              </CardsRow>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <SubheaderContent>
              <SideBySide reverseOnMobile>
                <TextElement isBodySmall>
                  <h3>
                    Desktop Wallet
                    <Badge color="palette1">Windows</Badge>
                    <Badge color="palette2">MacOS</Badge>
                    <Badge color="palette3">Linux</Badge>
                  </h3>
                  <p>
                    Alephium&apos;s flagship desktop wallet is designed for both everyday transactions and advanced
                    functionalities like smart contract deployment. It offers a comprehensive interface for managing
                    your assets securely.
                  </p>
                  <p>Features:</p>
                  <ul>
                    <li>Full control over your private keys</li>
                    <li>Support for multiple addresses</li>
                    <li>Integration with hardware wallets</li>
                    <li>Advanced transaction options</li>
                  </ul>
                  <p>Access the latest version from the official GitHub releases.</p>
                  <Button url={wallets?.desktop?.url ?? ''}>Download</Button>
                </TextElement>
                <WalletCarousel
                  images={desktopScreenshots.nodes.map((node) => node.childImageSharp?.gatsbyImageData)}
                />
              </SideBySide>
              <SectionDivider />
              <SideBySide reverseOnMobile>
                <TextElement isBodySmall>
                  <h3>
                    Browser Extension Wallet
                    <Badge color="palette4">Chrome</Badge>
                    <Badge color="palette5">Firefox</Badge>
                  </h3>
                  <p>
                    For seamless interaction with web-based dApps, the Alephium Extension Wallet integrates directly
                    into your browser, providing quick and secure access to your assets.
                  </p>
                  <p>Features:</p>
                  <ul>
                    <li>Easy dApp connectivity</li>
                    <li>Secure transaction approvals</li>
                    <li>User-friendly interface</li>
                  </ul>

                  <p>Available for:</p>
                  <Button url={wallets?.extension?.urls?.chrome ?? ''}>Chrome</Button>
                  <Button url={wallets?.extension?.urls?.firefox ?? ''}>Firefox</Button>
                </TextElement>
                <WalletCarousel
                  images={extensionScreenshots.nodes.map((node) => node.childImageSharp?.gatsbyImageData)}
                />
              </SideBySide>
              <SectionDivider />
              <SideBySide reverseOnMobile>
                <TextElement isBodySmall>
                  <h3>
                    Mobile Wallet
                    <Badge color="palette6">iOS</Badge>
                    <Badge color="palette1">Android</Badge>
                  </h3>
                  <p>
                    Manage your ALPH tokens on the go with Alephium&apos;s mobile wallet, offering a balance between
                    security and convenience.
                  </p>
                  <p>Features:</p>
                  <ul>
                    <li>Real-time balance updates</li>
                    <li>QR code support for transactions</li>
                    <li>Biometric security options</li>
                    <li>WalletConnect integration for dApps</li>
                  </ul>

                  <p>Download from:</p>
                  <Button url={wallets?.mobile?.urls?.android ?? ''}>Android Google Play Store</Button>
                  <Button url={wallets?.mobile?.urls?.ios ?? ''}>iOS App Store </Button>
                </TextElement>
                <WalletCarousel images={mobileScreenshots.nodes.map((node) => node.childImageSharp?.gatsbyImageData)} />
              </SideBySide>
              <SectionDivider />
              <SideBySide reverseOnMobile>
                <TextElement>
                  <h3>Hardware Wallet Support</h3>
                  <p>
                    For enhanced security, Alephium supports hardware wallets, allowing you to store your private keys
                    offline and protect your assets from potential online threats..
                  </p>
                  <p>Supported Devices:</p>
                  <ul>
                    <li>
                      <SimpleLink highlight url="https://docs.alephium.org/wallet/ledger">
                        Ledger
                      </SimpleLink>
                    </li>
                    <li>OneKey</li>
                    <li>SafePal</li>
                  </ul>
                </TextElement>
              </SideBySide>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement isSmall>
              <h3>Security Reminder</h3>
              <hr />
              <p>
                Always keep your seed phrase and private keys secure. Never share them with anyone, and be cautious of
                phishing attempts.
              </p>
              <p>
                By choosing the Alephium wallet that aligns with your preferences, you can confidently manage your
                assets and engage with the vibrant Alephium community.
              </p>

              <h3>Disclaimer</h3>
              <hr />
              <p>
                The list of wallets does not constitute an endorsement and is not exhaustive of all wallet options
                available. Always do your own research before choosing a wallet. The list includes non-custodial
                Alephium wallets.
              </p>
            </TextElement>
          </SubpageSection>
        </>
      }
    />
  )
}

export default CustomPage

const WalletCarousel = ({ images }: { images: (IGatsbyImageData | null | undefined)[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            {image && (
              <GatsbyImageWrapper
                image={image}
                alt={`Wallet screenshot ${index + 1}`}
                loading="lazy"
                preserveWidth
                center
              />
            )}
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  )
}

const CarouselContainer = styled.div`
  width: 100%;
  max-height: 500px;
  position: relative;
  margin-bottom: 20px;

  .slick-dots {
    bottom: -30px;

    li {
      button:before {
        color: ${({ theme }) => theme.textTertiary};
        font-size: 8px;
      }

      &.slick-active button:before {
        color: ${({ theme }) => theme.textPrimary};
      }
    }
  }
`
