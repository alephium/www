import React from 'react'

import GlobalStyle from '../styles/global-style'
import PageSectionContainer from '../components/PageSectionContainer'
import Hero from '../components/Hero'
import CardEngagement from '../components/CardEngagement'
import HookImage from '../images/hook.svg'
import WalletImage from '../images/wallet.svg'
import MiningImage from '../images/mining.svg'

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Hero></Hero>
        <section>
          <PageSectionContainer>
            <CardEngagement title="Start mining" link="Documentation" ImageComponent={MiningImage}>
              Get your node ready, and contribute to the network security. It doesn't take more that a few minutes to
              start getting rewarded in ALPH tokens.
            </CardEngagement>
            <CardEngagement title="Get the wallet" link="Download" ImageComponent={WalletImage}>
              Safe and super easy to use, start to store / send / receive your precious ALPH tokens right away.
            </CardEngagement>
            <CardEngagement title="Build on Alephium" link="Documentation" ImageComponent={HookImage}>
              The mainnet is not far away. You can already start leveraging the power of Alephium and start building
              your own tools and apps!
            </CardEngagement>
          </PageSectionContainer>
        </section>
      </main>
    </>
  )
}

export default IndexPage
