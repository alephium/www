import { PageProps } from 'gatsby'
import styled from 'styled-components'

import Button from '../components/Button'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import Placeholder from '../components/customPageComponents/Placeholder'
import SideBySide from '../components/customPageComponents/SideBySide'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import useWallets from '../hooks/useWallets'

const CustomPage = (props: PageProps) => {
  const wallets = useWallets()

  return (
    <Page
      {...props}
      content={
        <>
          <SubpageHeroSection>
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
                <TextElement>
                  <h3>Desktop Wallet</h3>
                  <p>
                    Alephium's flagship desktop wallet is designed for both everyday transactions and advanced
                    functionalities like smart contract deployment. It offers a comprehensive interface for managing
                    your assets securely.
                  </p>
                  <p>Features:</p>
                  <Button url={wallets?.desktop?.url ?? ''}>Download</Button>
                </TextElement>
                <WalletScreenShot src={wallets?.desktop?.image?.publicURL ?? ''} />
              </SideBySide>
              <SideBySide>
                <WalletScreenShot src={wallets?.extension?.image?.publicURL ?? ''} />
                <TextElement>
                  <h3>Browser Extension Wallet</h3>
                  <p>
                    For seamless interaction with web-based dApps, the Alephium Extension Wallet integrates directly
                    into your browser, providing quick and secure access to your assets.
                  </p>
                  <p>Features:</p>
                  <p>Available for:</p>
                  <Button url={wallets?.extension?.urls?.chrome ?? ''}>Chrome</Button>
                  <Button url={wallets?.extension?.urls?.firefox ?? ''}>Firefox</Button>
                </TextElement>
              </SideBySide>
              <SideBySide reverseOnMobile>
                <TextElement>
                  <h3>Mobile Wallet</h3>
                  <p>
                    Manage your ALPH tokens on the go with Alephium's mobile wallet, offering a balance between security
                    and convenience.
                  </p>
                  <p>Features:</p>
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
              <Placeholder width="100%" height="100px" />
            </SubheaderContent>
            <SubheaderContent>
              <Placeholder width="100%" height="100px" />
            </SubheaderContent>
            <SubheaderContent>
              <Placeholder width="100%" height="100px" />
            </SubheaderContent>
            <SubheaderContent>
              <Placeholder width="100%" height="100px" />
            </SubheaderContent>
            <SubheaderContent>
              <Placeholder width="100%" height="100px" />
            </SubheaderContent>

            <TextElement>
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
