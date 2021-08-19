import React from 'react'

import GlobalStyle from '../styles/global-style'
import PageSectionContainer from '../components/PageSectionContainer'
import Hero from '../components/Hero'
import CardEngagement from '../components/CardEngagement'
import Feed from '../components/Feed'
import TitledColumn from '../components/TitledColumn'
import HookImage from '../images/hook.svg'
import WalletImage from '../images/wallet.svg'
import MiningImage from '../images/mining.svg'

import styled from 'styled-components'

const Columns = styled.div`
  display: flex;
  flex-flow: wrap;
`

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Hero></Hero>
        <section>
          <PageSectionContainer>
            <Columns>
              <TitledColumn title="Start" subtitle="Engage with us.">
                <CardEngagement
                  title="Start mining"
                  link="Documentation"
                  ImageComponent={MiningImage}
                  imageWidth="160px"
                >
                  Get your node ready, and contribute to the network security. It doesn't take more that a few minutes
                  to start getting rewarded in ALPH tokens.
                </CardEngagement>
                <CardEngagement title="Get the wallet" link="Download" ImageComponent={WalletImage}>
                  Safe and super easy to use, start to store / send / receive your precious ALPH tokens right away.
                </CardEngagement>
                <CardEngagement title="Build on Alephium" link="Documentation" ImageComponent={HookImage}>
                  The mainnet is not far away. You can already start leveraging the power of Alephium and start building
                  your own tools and apps!
                </CardEngagement>
              </TitledColumn>
              <TitledColumn title="Feed" subtitle="What's cooking?">
                <Feed />
              </TitledColumn>
            </Columns>
          </PageSectionContainer>
        </section>
      </main>
    </>
  )
}

export default IndexPage
