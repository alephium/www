import { ExplorerClient } from '@alephium/sdk'
import { HttpResponse } from '@alephium/sdk/api/explorer'
import { graphql } from 'gatsby'
import { useCallback, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import Button from '../../Button'
import CardFooterButtonContainer from '../../common/CardFooterButtonContainer'
import CardsHorizontalScroller from '../../common/CardsHorizontalScroller'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextCard from '../../customPageComponents/TextCard'
import TextCardContent from '../../customPageComponents/TextCardContent'
import TextElement from '../../customPageComponents/TextElement'

const CARD_WIDTH = 380
const CARD_GAP = 24

const baseUrl = 'https://backend.mainnet.alephium.org'

interface Stat<T> {
  value: T
  isLoading: boolean
}

export const iconFragment = graphql`
  fragment Icon on File {
    childImageSharp {
      gatsbyImageData(width: 82, layout: CONSTRAINED, transformOptions: { fit: COVER, cropFocus: CENTER })
    }
  }
`

const statScalarDefault = { value: 0, isLoading: true }

type StatScalar = Stat<number>
type StatScalarKeys = 'totalTransactions'
type StatsScalarData = { [key in StatScalarKeys]: StatScalar }

const HomepageUSPSection = () => {
  const theme = useTheme()
  const [explorerClient, setExplorerClient] = useState<ExplorerClient>()
  const [statsScalarData, setStatsScalarData] = useState<StatsScalarData>({
    totalTransactions: statScalarDefault
  })

  const updateStatsScalar = useCallback(
    (key: StatScalarKeys, value: StatScalar['value']) => {
      setStatsScalarData((prevState) => ({ ...prevState, [key]: { value, isLoading: false } }))
    },
    [setStatsScalarData]
  )

  useEffect(() => {
    setExplorerClient(new ExplorerClient({ baseUrl }))
  }, [])

  useEffect(() => {
    if (!explorerClient) return

    const fetchAndUpdateStatsScalar = async (
      key: StatScalarKeys,
      fetchCall: () => Promise<HttpResponse<string | number>>
    ) => {
      await fetchCall()
        .then((res) => res.text())
        .then((text) => updateStatsScalar(key, parseInt(text)))
    }

    fetchAndUpdateStatsScalar('totalTransactions', explorerClient.infos.getInfosTotalTransactions)
  }, [explorerClient, updateStatsScalar])

  const { totalTransactions } = statsScalarData

  return (
    <SubpageSectionStyled fullWidth bgColor="2">
      <TextElementStyled>
        <h2>Web3, done right.</h2>
        <p>
          <strong>
            Dive in. 🐠 <br />
          </strong>
          Discover what makes Alephium stand apart.
        </p>
      </TextElementStyled>

      <CardsHorizontalScroller cardWidth={CARD_WIDTH} cardGap={CARD_GAP} animateCards additionalLeftPadding>
        <TextCard border>
          <TextCardContent>
            <TextElement>
              <h3>Fast ⚡</h3>
              <TLDRSection>
                <span>8 second block time, 2 BPS network throughput.</span>
              </TLDRSection>
            </TextElement>
            <TextElement noHeadingsMargins>
              <p>
                Each chain on Alephium now produces a block every 8 seconds. With parallel processing across the
                network, Alephium achieves 2 blocks per second on average,
                <strong> matching the speed of leading PoS networks without sacrificing decentralization.</strong>
              </p>
            </TextElement>
            <CardFooterButtonContainer>
              <Button squared url="https://x.com/alephium/status/1920780688313233634">
                Discover the Danube upgrade
              </Button>
            </CardFooterButtonContainer>
          </TextCardContent>
        </TextCard>
        <TextCard border>
          <TextCardContent>
            <TextElement>
              <h3>Scalable ⛓️</h3>
              <TLDRSection>20,000+ tps, single-chain experience.</TLDRSection>
            </TextElement>
            <TextElement noHeadingsMargins>
              <p>
                Alephium&apos;s BlockFlow sharding processes over 20,000 transactions per second while eliminating
                cross-chain complexity,{' '}
                <strong>delivering high throughput and the simplicity of a single-chain environment.</strong>
              </p>
            </TextElement>
            <CardFooterButtonContainer>
              <Button squared url="https://docs.alephium.org/misc/Content/#blockflow">
                Learn about Blockflow
              </Button>
            </CardFooterButtonContainer>
          </TextCardContent>
        </TextCard>
        <TextCard border>
          <TextCardContent>
            <TextElement>
              <h3>Secure 🔒</h3>
              <TLDRSection>
                <span>Security by design.</span>
              </TLDRSection>
            </TextElement>
            <TextElement noHeadingsMargins>
              <p>
                Alephium offers a robust, developer-friendly environment with{' '}
                <strong>built-in protections against common vulnerabilities</strong>. Its MEV-aware architecture and
                native safeguards{' '}
                <strong>prevent threats like reentrancy attacks, unlimited approvals, and flash loan exploits.</strong>
              </p>
            </TextElement>
            <CardFooterButtonContainer>
              <Button
                squared
                url="https://medium.com/@alephium/meet-alphred-a-virtual-machine-like-no-others-85ce86540025"
              >
                See why we're secure
              </Button>
            </CardFooterButtonContainer>
          </TextCardContent>
        </TextCard>
        <TextCard border>
          <TextCardContent>
            <TextElement>
              <h3>Sustainable 🌱</h3>
              <TLDRSection>
                <span>The best of PoW, 87% less energy.</span>
              </TLDRSection>
            </TextElement>
            <TextElement>
              <p>
                Alephium&apos;s <strong>Proof-of-Less-Work</strong> consensus delivers true decentralization with a
                fraction of the energy.{' '}
                <strong>
                  It retains the security and simplicity of traditional PoW while cutting energy use by over 87%.
                </strong>
              </p>
            </TextElement>
            <CardFooterButtonContainer>
              <Button squared url="https://docs.alephium.org/misc/Content/#proof-of-less-work">
                Learn about PoLW
              </Button>
            </CardFooterButtonContainer>
          </TextCardContent>
        </TextCard>
        <TextCard border>
          <TextCardContent>
            <TextElement>
              <h3>Programmable 🧩</h3>
              <TLDRSection>
                <span>Stateful UTXO, the best of Bitcoin and Ethereum.</span>
              </TLDRSection>
            </TextElement>
            <TextElement noHeadingsMargins>
              <p>
                <strong>
                  Alephium&apos;s stateful UTXO model combines Ethereum&apos;s flexibility with Bitcoin&apos;s security.
                </strong>{' '}
                It enables powerful smart contracts with mutable state while ensuring robust, UTXO-based asset
                protection.
              </p>
            </TextElement>
            <CardFooterButtonContainer>
              <Button squared url="https://docs.alephium.org/misc/Content/#stateful-utxo">
                Learn about stateful UTXOs
              </Button>
            </CardFooterButtonContainer>
          </TextCardContent>
        </TextCard>
        <TextCard border>
          <TextCardContent>
            <TextElement>
              <h3>Dev-friendly 🧑‍💻</h3>
              <TLDRSection>
                <span>Custom VM & language built for performance.</span>
              </TLDRSection>
            </TextElement>
            <TextElement noHeadingsMargins>
              <p>
                Alephium empowers developers with its{' '}
                <strong>purpose-built Virtual Machine, intuitive SDK, and high-performance programming language</strong>
                , enabling efficient development and unlocking new possibilities for smart contracts, dApps, and tokens.
              </p>
            </TextElement>
            <CardFooterButtonContainer>
              <Button squared url="https://docs.alephium.org/misc/Content/#alphred-virtual-machine">
                Learn about our VM
              </Button>
            </CardFooterButtonContainer>
          </TextCardContent>
        </TextCard>
      </CardsHorizontalScroller>
    </SubpageSectionStyled>
  )
}

const SubpageSectionStyled = styled(SubpageSection)`
  padding-right: 0;
  padding-left: 0;
`

const TextElementStyled = styled(TextElement)`
  width: var(--page-width);
  padding: 0 var(--spacing-4);
  margin: 0 auto;
`

const TLDRSection = styled.div`
  display: flex;
  align-items: center;
  border-radius: var(--radius-small);
  margin-top: var(--spacing-2);
  color: ${({ color }) => color};
  font-size: var(--fontSize-22);
  font-weight: var(--fontWeight-semiBold);
  margin-bottom: var(--spacing-4);
  width: 100%;
  box-sizing: border-box;
  opacity: 0.8;
`

export default HomepageUSPSection
