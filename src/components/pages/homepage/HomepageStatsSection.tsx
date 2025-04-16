import { ExplorerClient } from '@alephium/sdk'
import { HttpResponse } from '@alephium/sdk/api/explorer'
import { useCallback, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import blueTreeIcon from '../../../images/blue-tree-icon.png'
import circlesIcon from '../../../images/circles-icon.png'
import greenDropIcon from '../../../images/green-drop-icon.png'
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
            <CardImage src={yellowWaveIcon} rounded />
            <h3 style={{ color: theme.palette2 }}>Fast</h3>
            <h4 style={{ color: theme.palette2 }}>Over 10,000 transactions per second</h4>
            <p>
              Alephium moves as fast as you do. With block times of just 8 seconds, sharding, and Proof-of-Less-Work, it
              delivers <strong>fast, efficient, and reliable performance</strong> - ready to scale as adoption grows.
            </p>
          </TextElement>
          <TextElement>
            <CardImage src={blueTreeIcon} rounded />
            <h3 style={{ color: theme.palette3 }}>Scalable</h3>
            <h4
              style={{ color: theme.palette3 }}
            >{`${totalTransactions.value.toLocaleString()} total transactions`}</h4>
            <p>
              Built to handle <strong>high throughput without sacrificing security</strong>, Alephium’s architecture
              ensures that fees remain predictable and affordable - empowering developers and users alike.
            </p>
          </TextElement>
          <TextElement>
            <CardImage src={circlesIcon} rounded />
            <h3 style={{ color: theme.palette4 }}>Secure</h3>
            <h4 style={{ color: theme.palette4 }}>125+ independent mining nodes</h4>
            <p>
              With a truly decentralized Proof-of-Work model, Alephium operates independently of vulnerable central
              validators, <strong>ensuring maximum security, trustlessness, and censorship resistance.</strong>
            </p>
          </TextElement>
          <TextElement>
            <CardImage src={greenDropIcon} rounded />
            <h3 style={{ color: theme.palette1 }}>Sustainable</h3>
            <h4 style={{ color: theme.palette1 }}>87% lower environmental impact vs. traditional PoW</h4>
            <p>
              Alephium’s Proof-of-Less-Work mechanism reduces energy consumption, making it{' '}
              <strong>one of the most sustainable and responsible blockchains</strong> built for the future.
            </p>
          </TextElement>
        </Grid>
      </SubheaderContent>
    </SubpageSection>
  )
}

export default HomepageStatsSection

const Stat = styled.div`
  font-size: var(--fontSize-28);
  line-height: var(--lineHeight-36);
  margin-top: var(--spacing-6);
`
