import { ExplorerClient } from '@alephium/sdk'
import { HttpResponse } from '@alephium/sdk/api/explorer'
import { graphql } from 'gatsby'
import { useCallback, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import { formatNumberForDisplay } from '../../../utils/numbers'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  }

  return (
    <SubpageSectionStyled wide edgeGradient>
      <TextElementStyled>
        <h2>
          Web3,
          <br />
          done right.
          <hr />
        </h2>
        <p>
          <strong>
            Dive in. 🐠 <br />
            Discover what makes Alephium stand apart.
          </strong>
        </p>
      </TextElementStyled>

      <CardsHorizontalScroller cardWidth={CARD_WIDTH} cardGap={CARD_GAP} animateCards>
        <TextCard border>
          <TextElement>
            <TextCardContent>
              <h3 style={{ color: theme.palette2 }}>Fast</h3>
              <TLDRSection color={theme.palette2}>
                <span>20,000+ tps, single-chain experience.</span>
              </TLDRSection>
            </TextCardContent>
          </TextElement>
          <TextCardContent>
            <TextElement noHeadingsMargins>
              <p>
                Alephium&apos;s BlockFlow sharding processes over 20,000 transactions per second while eliminating
                cross-chain complexity,{' '}
                <strong>delivering high throughput and the simplicity of a single-chain environment.</strong>
              </p>
            </TextElement>
          </TextCardContent>
        </TextCard>
        <TextCard border>
          <TextElement color={theme.palette3}>
            <TextCardContent>
              <h3 style={{ color: theme.palette3 }}>Scalable</h3>
              <TLDRSection color={theme.palette3}>
                <span>{`${formatNumberForDisplay(totalTransactions.value).join(
                  ''
                )} transactions to date, low and predictable fees.`}</span>
              </TLDRSection>
            </TextCardContent>
          </TextElement>
          <TextCardContent>
            <TextElement noHeadingsMargins>
              <p>
                Alephium&apos;s unique sharding design, built on its unique combination of UTXO and Proof-of-Work model
                together with a DAG data structure, delivers{' '}
                <strong>
                  consistent performance at scale, keeping fees stable and affordable for both users and developers.
                </strong>
              </p>
            </TextElement>
          </TextCardContent>
        </TextCard>
        <TextCard border>
          <TextElement>
            <TextCardContent>
              <h3 style={{ color: theme.palette4 }}>Secure</h3>
              <TLDRSection color={theme.palette4}>
                <span>0 exploits, 0 hacks, security by design.</span>
              </TLDRSection>
            </TextCardContent>
          </TextElement>
          <TextCardContent>
            <TextElement noHeadingsMargins>
              <p>
                Alephium offers a robust, developer-friendly environment with{' '}
                <strong>built-in protections against common vulnerabilities</strong>. Its MEV-aware architecture and
                native safeguards{' '}
                <strong>prevent threats like reentrancy attacks, unlimited approvals, and flash loan exploits.</strong>
              </p>
            </TextElement>
          </TextCardContent>
        </TextCard>
        <TextCard border>
          <TextElement>
            <TextCardContent>
              <h3 style={{ color: theme.palette1 }}>Sustainable</h3>
              <TLDRSection color={theme.palette1}>
                <span>The best of PoW, 87% less energy.</span>
              </TLDRSection>
            </TextCardContent>
          </TextElement>
          <TextCardContent>
            <TextElement noHeadingsMargins>
              <p>
                Alephium&apos;s Proof-of-Less-Work consensus delivers true decentralization with a fraction of the
                energy.{' '}
                <strong>
                  It retains the security and simplicity of traditional PoW while cutting energy use by over 87%.
                </strong>
              </p>
            </TextElement>
          </TextCardContent>
        </TextCard>
        <TextCard border>
          <TextElement>
            <TextCardContent>
              <h3 style={{ color: theme.palette6 }}>Programmable</h3>
              <TLDRSection color={theme.palette6}>
                <span>Stateful UTXO, the best of Bitcoin and Ethereum.</span>
              </TLDRSection>
            </TextCardContent>
          </TextElement>
          <TextCardContent>
            <TextElement noHeadingsMargins>
              <p>
                <strong>
                  Alephium&apos;s stateful UTXO model combines Ethereum&apos;s flexibility with Bitcoin&apos;s security.
                </strong>{' '}
                It enables powerful smart contracts with mutable state while ensuring robust, UTXO-based asset
                protection.
              </p>
            </TextElement>
          </TextCardContent>
        </TextCard>
        <TextCard border>
          <TextElement>
            <TextCardContent>
              <h3 style={{ color: theme.palette5 }}>Dev-friendly</h3>
              <TLDRSection color={theme.palette5}>
                <span>Custom VM & language built for performance.</span>
              </TLDRSection>
            </TextCardContent>
          </TextElement>
          <TextCardContent>
            <TextElement noHeadingsMargins>
              <p>
                Alephium empowers developers with its{' '}
                <strong>purpose-built Virtual Machine, intuitive SDK, and high-performance programming language</strong>
                , enabling efficient development and unlocking new possibilities for smart contracts, dApps, and tokens.
              </p>
            </TextElement>
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
  width: 100%;
  box-sizing: border-box;
  opacity: 0.8;
`

export default HomepageUSPSection
