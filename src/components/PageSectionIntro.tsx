import React, { FC } from 'react'
import styled from 'styled-components'

import HookImage from '../images/svgs/hook.svg'
import WalletImage from '../images/svgs/wallet.svg'
import MiningImage from '../images/svgs/mining.svg'

import PageSectionContainer from './PageSectionContainer'
import CardEngagement from './CardEngagement'
// import Feed from './Feed'
import Column from './Column'
import Columns from './Columns'
import SectionTextHeader from './SectionTextHeader'
import ModalGetTheWallet from './ModalGetTheWallet'

import { deviceBreakPoints } from '../styles/global-style'

interface PageSectionIntroProps {
  className?: string
}

const IntroColumns = styled(Columns)`
  @media (max-width: 1352px) {
    gap: var(--spacing-20);
  }

  @media (max-width: 1096px) {
    gap: var(--spacing-10);
  }
`

const IntroColumnContent = styled.div`
  margin-top: var(--spacing-6);
  display: flex;
  gap: var(--spacing-2);

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
  }
`

let PageSectionIntro: FC<PageSectionIntroProps> = ({ className }) => {
  const [isGetTheWalletModalOpen, setIsGetTheWalletModalOpen] = React.useState(false)

  return (
    <section className={className} id="intro">
      <PageSectionContainer>
        <IntroColumns gap="var(--spacing-32)">
          <Column>
            <SectionTextHeader title="Start" subtitle="Engage with us." />
            <IntroColumnContent>
              <CardEngagement
                title="Start mining"
                link={{
                  text: 'Documentation',
                  to: 'https://github.com/alephium/wiki/blob/master/Miner-Guide.md',
                  newTab: true
                }}
                ImageComponent={MiningImageStyled}
              >
                <p>
                  Get your node ready, and contribute to the network security. It only takes a few minutes to start
                  getting rewarded in ALPH tokens.
                </p>
              </CardEngagement>
              <CardEngagement
                title="Get the wallet"
                link={{
                  text: 'Download',
                  openModal: setIsGetTheWalletModalOpen
                }}
                ImageComponent={WalletImageStyled}
              >
                <p>Safe and super easy to use. Store, send, and receive ALPH tokens in a few clicks.</p>
              </CardEngagement>
              <CardEngagement
                title="Build on Alephium"
                link={{
                  text: 'Documentation',
                  to: '#'
                }}
                ImageComponent={HookImageStyled}
              >
                <p>The mainnet is live! Start building your own protocols and apps today!</p>
              </CardEngagement>
            </IntroColumnContent>
          </Column>
          {/* <Column>
          <SectionTextHeader title="Feed" subtitle="What's cooking?" />
          <IntroColumnContent>
            <Feed />
          </IntroColumnContent>
        </Column> */}
        </IntroColumns>
      </PageSectionContainer>
      <ModalGetTheWallet isOpen={isGetTheWalletModalOpen} setIsOpen={setIsGetTheWalletModalOpen} />
    </section>
  )
}

PageSectionIntro = styled(PageSectionIntro)`
  padding: var(--spacing-16) 0 var(--spacing-28);
`

const MiningImageStyled = styled(MiningImage)`
  width: 10rem;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
`

const WalletImageStyled = styled(WalletImage)`
  width: 4.5rem;
  height: auto;
  position: absolute;
  top: -0.5rem;
  left: 0;
`

const HookImageStyled = styled(HookImage)`
  width: 5rem;
  height: auto;
  position: absolute;
  top: -4px;
  left: 0;
`

export default PageSectionIntro
