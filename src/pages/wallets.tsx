import { graphql, PageProps, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Button from '../components/Button'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SideBySide from '../components/customPageComponents/SideBySide'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageHeroSection from '../components/customPageComponents/SubpageImageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import SimpleLink from '../components/SimpleLink'
import useWallets from '../hooks/useWallets'

const walletsQuery = graphql`
  query WalletsPage {
    heroImage: file(relativePath: { eq: "alephium-hackathon-lake.png" }) {
      ...HeroImage
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage } = useStaticQuery<Queries.WalletsPageQuery>(walletsQuery)
  const wallets = useWallets()

  return (
    <Page
      {...props}
      seo={{
        title: '',
        description: ''
      }}
      content={
        <>
          <SubpageHeroSection backgroundImage={heroImage}>
            <h1>Your Gateway to the Alephium Ecosystem</h1>
            <hr />
            <p>
              Embarking on your Alephium journey begins with selecting a secure and user-friendly wallet tailored to
              your needs. Alephium offers a variety of wallets to manage your ALPH tokens, interact with decentralized
              applications (dApps), and participate in the ecosystem&apos;s growth.
            </p>
          </SubpageHeroSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Why Choose an Alephium Wallet?</h2>
            </TextElement>

            <SubheaderContent>
              <Grid columns={3}>
                <TextCard>
                  <h3>Enhanced Security</h3>
                  <p>
                    Alephium's non-custodial wallets ensure that only you have access to your funds and private keys,
                    which are fully encrypted on your device.
                  </p>
                </TextCard>
                <TextCard>
                  <h3>Comprehensive Features</h3>
                  <p>
                    Whether you prefer desktop applications, browser extensions, or mobile apps, Alephium wallets allow
                    you to manage ALPH tokens, engage with dApps, and more.
                  </p>
                </TextCard>
                <TextCard>
                  <h3>Simple Setup</h3>
                  <p>
                    Getting started is straightforward—download your preferred wallet, set up your account, and you're
                    ready to explore the Alephium ecosystem.
                  </p>
                </TextCard>
              </Grid>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Explore Alephium Wallets</h2>
              <p>Choose the wallet that best fits your preferences.</p>
            </TextElement>

            <SubheaderContent>
              <SideBySide reverseOnMobile>
                <TextElement isBodySmall>
                  <h3>Desktop Wallet</h3>
                  <p>
                    Alephium's flagship desktop wallet is designed for both everyday transactions and advanced
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
                <WalletScreenShot src={wallets?.desktop?.image?.publicURL ?? ''} />
              </SideBySide>
              <SideBySide>
                <WalletScreenShot src={wallets?.extension?.image?.publicURL ?? ''} />
                <TextElement isBodySmall>
                  <h3>Browser Extension Wallet</h3>
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
              </SideBySide>
              <SideBySide reverseOnMobile>
                <TextElement isBodySmall>
                  <h3>Mobile Wallet</h3>
                  <p>
                    Manage your ALPH tokens on the go with Alephium's mobile wallet, offering a balance between security
                    and convenience.
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
                <WalletScreenShot src={wallets?.mobile?.image?.publicURL ?? ''} />
              </SideBySide>
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
                      <SimpleLink url="https://docs.alephium.org/wallet/ledger">Ledger</SimpleLink>
                    </li>
                    <li>OneKey</li>
                    <li>Safepa</li>
                  </ul>
                </TextElement>
              </SideBySide>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Getting Started with Your Alephium Wallet</h2>
            </TextElement>

            <SubheaderContent>
              <TextElement>
                <h3>1. Choose Your Wallet</h3>
                <p>Select the wallet type that best suits your needs—desktop, browser extension, or mobile.</p>
              </TextElement>
              <TextElement>
                <h3>2. Download and Install</h3>
                <p>Follow the provided links to download and install the wallet on your device.</p>
              </TextElement>
              <TextElement>
                <h3>3. Set Up Your Account</h3>
                <p>
                  Create a new wallet by following the on-screen instructions. Ensure you securely back up your seed
                  phrase during this process.
                </p>
              </TextElement>
              <TextElement>
                <h3>4. Add ALPH Tokens</h3>
                <p>
                  Deposit ALPH into your wallet by receiving tokens from an exchange, another wallet, or using the
                  in-app buy option.
                </p>
              </TextElement>
              <TextElement>
                <h3>5. Explore the Ecosystem</h3>
                <p>
                  Use your wallet to interact with dApps, stake tokens, and participate in Alephium's growing ecosystem.
                </p>
              </TextElement>
            </SubheaderContent>
          </SubpageSection>

          <SubpageSection>
            <TextElement isSmall>
              <h3>Security Reminder</h3>
              <p>
                Always keep your seed phrase and private keys secure. Never share them with anyone, and be cautious of
                phishing attempts.
              </p>
              <p>
                By choosing the Alephium wallet that aligns with your preferences, you can confidently manage your
                assets and engage with the vibrant Alephium community.
              </p>
            </TextElement>

            <TextElement isSmall>
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

const WalletScreenShot = styled.img`
  width: 100%;
  max-height: 420px;
  object-fit: contain;
`
