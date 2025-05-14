import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { graphql, PageProps, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Slider from 'react-slick'
import styled from 'styled-components'

import Badge from '../components/Badge'
import Button from '../components/Button'
import ClickableBox from '../components/customPageComponents/ClickableBox'
import Grid from '../components/customPageComponents/Grid'
import ImageIcon from '../components/customPageComponents/ImageIcon'
import Page from '../components/customPageComponents/Page'
import SideBySide from '../components/customPageComponents/SideBySide'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import GatsbyImageWrapper from '../components/GatsbyImageWrapper'
import SectionDivider from '../components/SectionDivider'
import useWallets from '../hooks/useWallets'

const walletsQuery = graphql`
  query WalletsPage {
    heroImage: file(relativePath: { eq: "treasure.png" }) {
      ...HeroImage
    }
    heroVideo: file(relativePath: { eq: "underwater-treasure-scrub.mp4" }) {
      publicURL
    }
    securityImage: file(relativePath: { eq: "pearl-in-oyster-texture.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    featuresImage: file(relativePath: { eq: "transparent-tools-texture.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
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
    ledgerLogo: file(relativePath: { eq: "logos/ledger.svg" }) {
      publicURL
    }
    onekeyLogo: file(relativePath: { eq: "logos/onekey.svg" }) {
      publicURL
    }
    safepalLogo: file(relativePath: { eq: "logos/safepal.svg" }) {
      publicURL
    }
    tangemLogo: file(relativePath: { eq: "logos/tangem.png" }) {
      publicURL
    }
    goldshellLogo: file(relativePath: { eq: "logos/goldshell.png" }) {
      publicURL
    }
  }
`

const CustomPage = (props: PageProps) => {
  const {
    desktopScreenshots,
    extensionScreenshots,
    mobileScreenshots,
    ledgerLogo,
    onekeyLogo,
    safepalLogo,
    tangemLogo,
    goldshellLogo
  } = useStaticQuery<Queries.WalletsPageQuery>(walletsQuery)
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
          <SectionDivider />

          <SubpageSection bgColor="2" wide border edgeGradient gradientPosition="top">
            <TextElement isCentered>
              <h1>
                Our Wallets,
                <br />
                Designed for Humans.
              </h1>
              <p>
                Our wallets are designed for ease-of-use,{' '}
                <strong>making Alephium&apos;s technology accessible for all.</strong>
              </p>
            </TextElement>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection wide>
            <SideBySide reverseOnMobile>
              <TextElement isBodySmall>
                <h3>Mobile Wallet</h3>
                <div>
                  <Badge color="palette3">iOS</Badge>
                  <Badge color="palette1">Android</Badge>
                </div>
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
              <TextElement isBodySmall>
                <h3>Desktop Wallet</h3>
                <div>
                  <Badge color="palette3">Windows</Badge>
                  <Badge color="palette4">MacOS</Badge>
                  <Badge color="palette6">Linux</Badge>
                </div>
                <p>
                  Alephium&apos;s flagship desktop wallet is designed for both everyday transactions and advanced
                  functionalities like smart contract deployment. It offers a comprehensive interface for managing your
                  assets securely.
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
              <WalletCarousel images={desktopScreenshots.nodes.map((node) => node.childImageSharp?.gatsbyImageData)} />
            </SideBySide>
            <SectionDivider />
            <SideBySide reverseOnMobile>
              <TextElement isBodySmall>
                <h3>Browser Extension Wallet</h3>
                <div>
                  <Badge color="palette3">Chrome</Badge>
                  <Badge color="palette6">Firefox</Badge>
                </div>
                <p>
                  For seamless interaction with web-based dApps, the Alephium Extension Wallet integrates directly into
                  your browser, providing quick and secure access to your assets.
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
          </SubpageSection>

          <SectionDivider />

          <SubpageSection wide>
            <SubheaderContent>
              <TextElement isCentered>
                <h2>Hardware Wallet Support</h2>
                <p>
                  For enhanced security, Alephium supports hardware wallets, allowing you to store your private keys
                  offline and protect your assets from potential online threats.
                </p>
              </TextElement>

              <Grid columns={5} gap="small">
                <ClickableBox url="https://support.ledger.com/article/Alephium-ALPH" orientation="vertical">
                  <ImageIcon
                    src={ledgerLogo?.publicURL ?? ''}
                    alt="Ledger logo"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>Ledger</p>
                  </TextElement>
                </ClickableBox>
                <ClickableBox url="https://onekey.so" orientation="vertical">
                  <ImageIcon
                    src={onekeyLogo?.publicURL ?? ''}
                    alt="Onekey logo"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>OneKey</p>
                  </TextElement>
                </ClickableBox>
                <ClickableBox url="https://www.safepal.com" orientation="vertical">
                  <ImageIcon
                    src={safepalLogo?.publicURL ?? ''}
                    alt="SafePal logo"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>SafePal</p>
                  </TextElement>
                </ClickableBox>
                <ClickableBox url="https://tangem.com" orientation="vertical">
                  <ImageIcon
                    src={tangemLogo?.publicURL ?? ''}
                    alt="Tangem logo"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>Tangem</p>
                  </TextElement>
                </ClickableBox>
                <ClickableBox url="https://www.goldshell.com" orientation="vertical">
                  <ImageIcon
                    src={goldshellLogo?.publicURL ?? ''}
                    alt="Goldshell logo"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>Goldshell</p>
                  </TextElement>
                </ClickableBox>
              </Grid>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection style={{ opacity: 0.5 }}>
            <TextElement isSmall isFootnote isCentered>
              <h3>Security Reminder</h3>
              <p>
                Always keep your seed phrase and private keys secure. Never share them with anyone, and be cautious of
                phishing attempts.
              </p>
              <p>
                By choosing the Alephium wallet that aligns with your preferences, you can confidently manage your
                assets and engage with the vibrant Alephium community.
              </p>

              <h3>Disclaimer</h3>

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
  position: relative;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.25);
  padding: var(--spacing-2);
  padding-bottom: var(--spacing-6);
  border-radius: var(--radius);
  border: 1px solid ${({ theme }) => theme.borderPrimary};

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
