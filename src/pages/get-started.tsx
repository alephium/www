import { PageProps } from 'gatsby'

import SectionDivider from '../components/SectionDivider'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import Button from '../components/Button'
import TextElement from '../components/customPageComponents/TextElement'
import SideBySide from '../components/customPageComponents/SideBySide'
import Placeholder from '../components/customPageComponents/Placeholder'
import { ParallaxBg, WalletCard, WalletCards } from '../components/PageSectionWallets'
import { StaticImage } from 'gatsby-plugin-image'
import PageSectionContainer from '../components/PageSectionContainer'
import CardsGrid, { Card, LinkedCard } from '../components/customPageComponents/CardsGrid'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    content={
      <>
        <SubpageHeroSection>
          <h1>Get Started with Alephium</h1>
          <hr />
          <p>
            Not sure where to begin? Whether you want to build, mine, or explore, this guide has everything you need to
            dive in.
          </p>
        </SubpageHeroSection>

        <SectionDivider />

        <SubpageSection>
          <SideBySide>
            <TextElement size="small">
              <h3>What is Alephium?</h3>
              <p>
                Alephium is a next-generation Layer 1 blockchain, designed to deliver unmatched security without
                compromising scalability or energy efficiency.
              </p>
              <p>
                Applications built on Alephium run faster, cost less, and inherit the resilience of Proof-of-Work,
                ensuring your project is safe and scalable from day one. Whether you're launching dApps, creating
                digital assets, or integrating Web3 infrastructure, Alephium provides the robust security, flexibility
                and performance needed to push boundaries.
              </p>
              <p>
                It’s not just about building - it’s about building smarter. Alephium eliminates common smart contract
                vulnerabilities, reduces energy consumption by 87% compared to traditional PoW, and ensures long-term
                scalability without compromising security.
              </p>
            </TextElement>
            <Placeholder />
          </SideBySide>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection Parallax={<ParallaxBg />} fullWidth>
          <PageSectionContainer>
            <TextElement>
              <h2>Create a wallet</h2>
              <p>
                To interact with the Alephium ecosystem you’ll need a wallet, which acts as your gateway to the network.
                With an Alephium wallet, you can store, send, and receive ALPH, manage digital assets (stablecoins,
                NFTs) and seamlessly connect to dApps.
              </p>
            </TextElement>
          </PageSectionContainer>
          <WalletCards>
            <WalletCard
              title="Desktop wallet"
              description="Alephium’s flagship wallet. Ready for everything, from daily management tasks to smart contracts deployment, privacy & DeFi."
              screenshot={
                <StaticImage
                  src={'../images/screenshots/desktop-wallet.png'}
                  alt="Desktop wallet"
                  objectFit="contain"
                  style={{ height: '100%' }}
                />
              }
              color="rgb(91, 0, 255)"
              actions={[
                {
                  title: 'Get the desktop wallet',
                  link: 'https://github.com/alephium/alephium-frontend/releases/latest'
                }
              ]}
            />
            <WalletCard
              title="Extension wallet"
              description="The wallet in your browser. Get access to the latest features with a focus on DeFi."
              screenshot={
                <StaticImage
                  src={'../images/screenshots/extension.png'}
                  alt="Extension wallet"
                  objectFit="contain"
                  style={{ height: '100%' }}
                />
              }
              color="rgb(24, 215, 255)"
              actions={[
                {
                  title: 'Chrome',
                  link: 'https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj'
                },
                {
                  title: 'Firefox',
                  link: 'https://addons.mozilla.org/en-US/firefox/addon/alephiumextensionwallet/'
                }
              ]}
            />
            <WalletCard
              title="Mobile wallet"
              description="Alephium on the go. First-class UX. Available on Android and iOS."
              screenshot={
                <StaticImage
                  src={'../images/screenshots/mobile.png'}
                  alt="Mobile wallet"
                  objectFit="contain"
                  style={{ height: '100%' }}
                />
              }
              color="rgb(228, 124, 12)"
              actions={[
                {
                  title: 'Android',
                  link: 'https://play.google.com/store/apps/details?id=org.alephium.wallet'
                },
                {
                  title: 'iOS',
                  link: 'https://apps.apple.com/us/app/alephium-wallet/id6469043072'
                }
              ]}
            />
          </WalletCards>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Get ALPH</h2>
            <p>
              You can get ALPH by buying it with traditional fiat currency, exchanging it with another cryptocurrency,
              or bridging from another ecosystem.
            </p>
          </TextElement>
          <CardsGrid columns={4}>
            <LinkedCard url="https://bridge.alephium.org/">
              <Placeholder width="100px" height="100px " />
              <h3>Alephium Bridge</h3>
              <p>A native bridge on Alephium that enhances interoperability with other blockchains.</p>
            </LinkedCard>
            <LinkedCard url="https://www.ayin.app/">
              <Placeholder width="100px" height="100px " />
              <h3>AYIN</h3>
              <p>Decentralized exchange built on Alephium.</p>
            </LinkedCard>
            <LinkedCard url="https://buy.onramper.com/?mode=buy&onlyCryptos=alph_alph">
              <Placeholder width="100px" height="100px " />
              <h3>Onramper</h3>
              <p>A leading fiat-to-crypto on-ramp aggregator.</p>
            </LinkedCard>
            <LinkedCard url="https://www.mexc.com/exchange/ALPH_USDT">
              <Placeholder width="100px" height="100px " />
              <h3>MEXC</h3>
              <p>Digital assets exchange.</p>
            </LinkedCard>
            <LinkedCard url="https://www.gate.io/trade/ALPH_USDT">
              <Placeholder width="100px" height="100px " />
              <h3>Gate.io</h3>
              <p>Digital assets exchange.</p>
            </LinkedCard>
            <LinkedCard url="https://app.uniswap.org/explore/tokens/ethereum/0x590f820444fa3638e022776752c5eef34e2f89a6">
              <Placeholder width="100px" height="100px " />
              <h3>Uniswap</h3>
              <p>Leading decentralized exchange.</p>
            </LinkedCard>
            <LinkedCard url="https://elexium.finance/">
              <Placeholder width="100px" height="100px " />
              <h3>Elexium Finance</h3>
              <p>Decentralized exchange & liquidity arena on Alephium.</p>
            </LinkedCard>
            <LinkedCard url="https://pancakeswap.finance/swap?inputCurrency=0x8683ba2f8b0f69b2105f26f488bade1d3ab4dec8&outputCurrency=0x55d398326f99059ff775485246999027b3197955">
              <Placeholder width="100px" height="100px " />
              <h3>Pancake Swap</h3>
              <p>Multichain decentralized exchange.</p>
            </LinkedCard>
          </CardsGrid>

          <TextElement align="center">
            <Button url="https://coinmarketcap.com/currencies/alephium/#Markets">See more ALPH markets</Button>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement align="center">
            <h2>Explore Alephium ecosystem</h2>
            <p>
              Discover innovative dApps and tokenized assets - trade, borrow, lend or earn ALPH, by engaging with DeFi
              protocols or contributing to the ecosystem.
            </p>
            <Button url="https://alph.land">See all apps</Button>
          </TextElement>

          <Placeholder width="100%" height="400px" />
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Build on Alephium</h2>
            <p>
              With robust smart contract security, high-performance sharding, and a resilient Proof-of-Work foundation,
              Alephium gives you the tools to build better, safer, and faster.
            </p>
          </TextElement>

          <CardsGrid columns={2}>
            <LinkedCard url="https://docs.alephium.org/">
              <Placeholder width="100px" height="100px " />
              <h3>Documentation</h3>
              <p>Documentation to get you going quick and easy.</p>
            </LinkedCard>
            <LinkedCard url="/grants">
              <Placeholder width="100px" height="100px " />
              <h3>Grants</h3>
              <p>You have an idea, but no funding? We can help.</p>
            </LinkedCard>
          </CardsGrid>

          <TextElement align="center">
            <h3>Guides and tutorials</h3>
            <Button url="https://docs.alephium.org/ralph">Ralph Language</Button>
            <Button url="https://docs.alephium.org/sdk">SDK</Button>
            <Button url="https://www.youtube.com/playlist?list=PL8q8n0BHJS1PWP7t8ABECYdOaPM-hJmjx">Tutorials</Button>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Mine ALPH. Secure the Network. Earn Rewards</h2>
            <p>
              ALPH mining is efficient, accessible, and built for long-term sustainability. Powered by
              Proof-of-Less-Work, Alephium reduces energy consumption by 87% compared to traditional PoW, making mining
              more sustainable and rewarding.
            </p>
            <ul>
              <li>Clear and fair emissions schedule</li>
              <li>Energy efficient</li>
              <li>Easy setup and quick start</li>
            </ul>
          </TextElement>
          <TextElement align="center">
            <h3>Ready to mine?</h3>
            <Button url="https://docs.alephium.org/mining">Get started</Button>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement align="center">
            <h2>Not sure what to do first?</h2>
            <p>No worries! Join our community and explore, there are many ways you can leave your mark on Alephium.</p>
            <Button url="/communities">See our communities</Button>
          </TextElement>
        </SubpageSection>
      </>
    }
  />
)

export default CustomPage
