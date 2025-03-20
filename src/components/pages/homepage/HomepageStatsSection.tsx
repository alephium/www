import { ExplorerClient } from '@alephium/sdk'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { HttpResponse } from '@alephium/sdk/api/explorer'
import TextElement from '../../customPageComponents/TextElement'
import SubpageSection from '../../customPageComponents/SubpageSection'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
import Grid from '../../customPageComponents/Grid'
import TextCard from '../../customPageComponents/TextCard'

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
      <TextElement isCentered>
        <h2>
          Made for Real Adoption.
          <br />
          Built to Last.
        </h2>
      </TextElement>

      <SubheaderContent>
        <Grid columns={2}>
          <TextCard isSmall={false} isBodySmall>
            <h3>Fast</h3>
            <p>
              Alephium moves as fast as you do. With block times of just 8 seconds, sharding, and Proof-of-Less-Work, it
              delivers fast, efficient, and reliable performance - ready to scale as adoption grows.
            </p>
            <h4>Over 10,000 transactions per second</h4>
          </TextCard>
          <TextCard isSmall={false} isBodySmall>
            <h3>Scalable</h3>
            <p>
              Built to handle high throughput without sacrificing security, Alephium’s architecture ensures that fees
              remain predictable and affordable - empowering developers and users alike.
            </p>
            <h4>{`${totalTransactions.value.toLocaleString()} total transactions`}</h4>
          </TextCard>
          <TextCard isSmall={false} isBodySmall>
            <h3>Secure</h3>
            <p>
              With a truly decentralized Proof-of-Work model, Alephium operates independently of vulnerable central
              validators, ensuring maximum security, trustlessness, and censorship resistance.
            </p>
            <h4>125+ independent mining nodes</h4>
          </TextCard>
          <TextCard isSmall={false} isBodySmall>
            <h3>Sustainable</h3>
            <p>
              Alephium’s Proof-of-Less-Work mechanism reduces energy consumption, making it one of the most sustainable
              and responsible blockchains built for the future.
            </p>
            <h4>87% lower environmental impact vs. traditional PoW</h4>
          </TextCard>
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
