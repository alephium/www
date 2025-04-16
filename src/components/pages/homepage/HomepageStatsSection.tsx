import { ExplorerClient } from '@alephium/sdk'
import { HttpResponse } from '@alephium/sdk/api/explorer'
import { colord } from 'colord'
import { useCallback, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import blueTreeIcon from '../../../images/blue-tree-icon.png'
import circlesIcon from '../../../images/circles-icon.png'
import featherIcon from '../../../images/feather-icon.png'
import greenDropIcon from '../../../images/green-drop-icon.png'
import rockPileIcon from '../../../images/rock-pile-icon.png'
import yellowWaveIcon from '../../../images/yellow-wave-icon.png'
import CardImage from '../../customPageComponents/CardImage'
import Grid from '../../customPageComponents/Grid'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'

const baseUrl = 'https://backend.mainnet.alephium.org'

interface Stat<T> {
  value: T
  isLoading: boolean
}

const statScalarDefault = { value: 0, isLoading: true }

type StatScalar = Stat<number>
type StatScalarKeys = 'totalTransactions'
type StatsScalarData = { [key in StatScalarKeys]: StatScalar }

const HomepageStatsSection = () => {
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
    <SubpageSection>
      <TextElement>
        <h2>
          Made for Real Adoption.
          <br />
          Built to Last.
        </h2>
      </TextElement>

      <SubheaderContent>
        <Grid columns={2}>
          <TextElement>
            <CardImageStyled src={yellowWaveIcon} rounded />
            <h3 style={{ color: theme.palette2 }}>Fast</h3>
            <TLDRSection color={theme.palette2}>
              <TLDRTag color={theme.palette2}>TL;DR</TLDRTag>
              <span>20,000+ transactions per second</span>
            </TLDRSection>
            <p>
              Alephium moves as fast as you do. With block times of just 8 seconds, sharding, and Proof-of-Less-Work, it
              delivers <strong>fast, efficient, and reliable performance</strong> - ready to scale as adoption grows.
            </p>
          </TextElement>
          <TextElement>
            <CardImageStyled src={blueTreeIcon} rounded />
            <h3 style={{ color: theme.palette3 }}>Scalable</h3>
            <TLDRSection color={theme.palette3}>
              <TLDRTag color={theme.palette3}>TL;DR</TLDRTag>
              <span>{`${totalTransactions.value.toLocaleString()} total transactions`}</span>
            </TLDRSection>
            <p>
              Built to handle <strong>high throughput without sacrificing security</strong>, Alephium’s architecture
              ensures that fees remain predictable and affordable - empowering developers and users alike.
            </p>
          </TextElement>
          <TextElement>
            <CardImageStyled src={circlesIcon} rounded />
            <h3 style={{ color: theme.palette4 }}>Secure</h3>
            <TLDRSection color={theme.palette4}>
              <TLDRTag color={theme.palette4}>TL;DR</TLDRTag>
              <span>125+ independent mining nodes</span>
            </TLDRSection>
            <p>
              With a truly decentralized Proof-of-Work model, Alephium operates independently of vulnerable central
              validators, <strong>ensuring maximum security, trustlessness, and censorship resistance.</strong>
            </p>
          </TextElement>
          <TextElement>
            <CardImageStyled src={greenDropIcon} rounded />
            <h3 style={{ color: theme.palette1 }}>Sustainable</h3>
            <TLDRSection color={theme.palette1}>
              <TLDRTag color={theme.palette1}>TL;DR</TLDRTag>
              <span>87% lower environmental impact vs. traditional PoW</span>
            </TLDRSection>
            <p>
              Alephium’s Proof-of-Less-Work mechanism reduces energy consumption, making it{' '}
              <strong>one of the most sustainable and responsible blockchains</strong> built for the future.
            </p>
          </TextElement>
          <TextElement>
            <CardImageStyled src={rockPileIcon} rounded />
            <h3 style={{ color: theme.palette6 }}>Programmable</h3>
            <TLDRSection color={theme.palette6}>
              <TLDRTag color={theme.palette6}>TL;DR</TLDRTag>
              <span>No compromise smart-contracts</span>
            </TLDRSection>
            <p>
              Alephium’s stateful UTXO model merges the best of both worlds -{' '}
              <strong>Ethereum-like smart contract flexibility with Bitcoin-level security.</strong>
            </p>
          </TextElement>
          <TextElement>
            <CardImageStyled src={featherIcon} rounded />
            <h3 style={{ color: theme.palette5 }}>Developer-friendly</h3>
            <TLDRSection color={theme.palette5}>
              <TLDRTag color={theme.palette5}>TL;DR</TLDRTag>
              <span>Incredibly easy-to-use language (RALPH) and novel VM</span>
            </TLDRSection>
            <p>
              Alephium simplifies decentralized development with an optimized SDK, MEV-resistant design, and built-in
              security features{' '}
              <strong>making smart contracts and dApps both easier to build and inherently safer.</strong>
            </p>
          </TextElement>
        </Grid>
      </SubheaderContent>
    </SubpageSection>
  )
}

const TLDRSection = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  padding: 10px 18px 10px 10px;
  background-color: ${({ color }) => colord(color).alpha(0.05).toRgbString()};
  border-radius: var(--radius-small);
  margin-top: var(--spacing-2);
  color: ${({ color }) => color};
  font-size: var(--fontSize-20);
  width: fit-content;
`

const TLDRTag = styled.div<{ color: string }>`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 6px;
  margin-right: 10px;
  border: 1px solid ${({ color }) => colord(color).alpha(0.5).toRgbString()};
  font-size: var(--fontSize-18);
`

export default HomepageStatsSection

const Stat = styled.div`
  font-size: var(--fontSize-28);
  line-height: var(--lineHeight-36);
  margin-top: var(--spacing-6);
`

const CardImageStyled = styled(CardImage)`
  margin-bottom: var(--spacing-4);
`
