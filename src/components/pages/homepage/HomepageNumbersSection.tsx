import { addApostrophes, ExplorerClient } from '@alephium/sdk'
import { HttpResponse } from '@alephium/sdk/api/explorer'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import Column from '../../../components/Columns/Column'
import NumbersInfo from '../../../components/NumbersInfo'
import { deviceBreakPoints } from '../../../styles/global-style'
import { formatNumberForDisplay } from '../../../utils/numbers'
import Button from '../../Button'
import Card from '../../Card'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'

const baseUrl = 'https://backend.mainnet.alephium.org'
const ONE_DAY = 1000 * 60 * 60 * 24

export interface HomepageNumbersSectionContentType {
  title: string
  subtitle: string
}

interface Stat<T> {
  value: T
  isLoading: boolean
}

const statScalarDefault = { value: 0, isLoading: true }

type StatScalar = Stat<number>
type StatScalarKeys = 'hashrate' | 'circulatingSupply' | 'totalTransactions'

type StatsScalarData = { [key in StatScalarKeys]: StatScalar }

// type ActiveAddressRes = { [alphThreshold: string]: { amount: number } }[]

type ChainsTVL = {
  gecko_id: string
  tvl: number
}[]
type BridgeTVL = number

type ProtocolsTVLs = {
  id: string
  name: string
  chain: 'Alephium'
  staking: number
}[]

const HomepageNumbersSection = () => {
  const [explorerClient, setExplorerClient] = useState<ExplorerClient>()
  const [statsScalarData, setStatsScalarData] = useState<StatsScalarData>({
    hashrate: statScalarDefault,
    circulatingSupply: statScalarDefault,
    totalTransactions: statScalarDefault
  })
  // const [activeAddresses, setActiveAddresses] = useState<number>()
  const [bridgeTVL, setBridgeTVL] = useState<number>()
  const [chainTVL, setChainTVL] = useState<number>()
  const [protocolsStakingTVL, setProtocolsStakingTVL] = useState<number>()

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
    const fetchChainTvl = async () => {
      try {
        const res = await fetch('https://api.llama.fi/v2/chains')
        const tvl = (await res.json()) as ChainsTVL

        setChainTVL(tvl.find((d) => d.gecko_id === 'alephium')?.tvl)
      } catch (e) {
        console.error('Error fetching chain TVL:', e)
      }
    }
    fetchChainTvl()
  }, [])

  useEffect(() => {
    const fetchProtocols = async () => {
      try {
        const res = await fetch('https://api.llama.fi/protocols')
        const tvls = (await res.json()) as ProtocolsTVLs

        setProtocolsStakingTVL(
          tvls.filter((t) => t.chain === 'Alephium').reduce((acc, { staking }) => acc + staking, 0)
        )
      } catch (e) {
        console.error('Error fetching protocols TVL:', e)
      }
    }
    fetchProtocols()
  }, [])

  useEffect(() => {
    const fetchBridgeTVL = async () => {
      try {
        const res = await fetch('https://api.llama.fi/tvl/alephium-bridge')
        const tvl = (await res.json()) as BridgeTVL

        setBridgeTVL(tvl)
      } catch (e) {
        console.error('Error fetching bridge TVL:', e)
      }
    }
    fetchBridgeTVL()
  }, [])

  /*
  useEffect(() => {
    const fetchActiveAddresses = async () => {
      try {
        const res = (await (await fetch('https://alph-richlist.vercel.app/api/holdings')).json()) as ActiveAddressRes

        console.log(res)
        const total = Object.values(res[0]).reduce((acc, { amount }) => acc + amount, 0)

        setActiveAddresses(total)
      } catch (e) {
        console.error('Error fetching active addresses:', e)
      }
    }
    fetchActiveAddresses()
  }, [])
  */

  useEffect(() => {
    if (!explorerClient) return

    const fetchHashrateData = async () => {
      const now = new Date().getTime()
      const yesterday = now - ONE_DAY

      const { data } = await explorerClient.charts.getChartsHashrates({
        fromTs: yesterday,
        toTs: now,
        'interval-type': 'hourly'
      })

      if (data && data.length > 0) updateStatsScalar('hashrate', Number(data[0].value))
    }

    const fetchAndUpdateStatsScalar = async (
      key: StatScalarKeys,
      fetchCall: () => Promise<HttpResponse<string | number>>
    ) => {
      await fetchCall()
        .then((res) => res.text())
        .then((text) => updateStatsScalar(key, parseInt(text)))
    }

    fetchHashrateData()
    fetchAndUpdateStatsScalar('circulatingSupply', explorerClient.infos.getInfosSupplyCirculatingAlph)
    fetchAndUpdateStatsScalar('totalTransactions', explorerClient.infos.getInfosTotalTransactions)
  }, [explorerClient, updateStatsScalar])

  const { hashrate, totalTransactions } = statsScalarData
  const [hashrateInteger, hashrateDecimal, hashrateSuffix] = formatNumberForDisplay(hashrate.value, 'hash')

  const columns = [
    {
      value: hashrateInteger && `${addApostrophes(hashrateInteger)}${hashrateDecimal ?? ''}`,
      isLoading: false,
      description: `Hashrate (${hashrateSuffix}H/s)`
    },
    {
      value: formatNumberForDisplay(totalTransactions.value).join(''),
      isLoading: false,
      description: 'Transactions executed'
    }
  ]

  return (
    <SubpageSection>
      <MainContainer>
        <TextElement>
          <h2>Some Numbers.</h2>
          <p>Let the facts speak for themselves.</p>
          <ButtonContainer>
            <Button url="https://explorer.alephium.org/" big highlight>
              Check out our explorer
            </Button>
          </ButtonContainer>
        </TextElement>
        <NumbersContainer>
          <RealTimeLabel>Real time data</RealTimeLabel>
          {columns.map((column) => (
            <NumbersInfo key={column.description} {...column} />
          ))}
          <NumbersColumn>
            <NumbersInfo
              description="Chain TVL"
              value={
                chainTVL && protocolsStakingTVL
                  ? '$' + formatNumberForDisplay(chainTVL + protocolsStakingTVL).join('')
                  : '-'
              }
              isLoading={bridgeTVL === undefined}
            />
          </NumbersColumn>
          <NumbersInfo
            description="Bridged TVL"
            value={bridgeTVL ? '$' + formatNumberForDisplay(bridgeTVL).join('') : '-'}
            isLoading={bridgeTVL === undefined}
          />
        </NumbersContainer>
      </MainContainer>
    </SubpageSection>
  )
}

export default HomepageNumbersSection

const RealTimeLabel = styled.div`
  position: absolute;
  top: var(--spacing-3);
  right: var(--spacing-3);
  background: ${({ theme }) => theme.textPrimary};
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-small);
  color: ${({ theme }) => theme.background3};
  z-index: 1;
  display: flex;
  align-items: center;
  gap: var(--spacing-1);

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.palette4};
    border-radius: 50%;
    display: inline-block;
    animation: blink 2s ease-in-out infinite;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }
`

const ButtonContainer = styled.div`
  margin-top: var(--spacing-6);
`

const NumbersColumn = styled(Column)`
  display: flex;
  align-items: center;
  z-index: 1;
`

const MainContainer = styled.div`
  display: flex;
  gap: var(--spacing-12);

  > * {
    flex: 1;
  }

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
  }
`

const NumbersContainer = styled(Card)`
  display: flex;
  position: relative;
  align-items: baseline;
  flex-direction: column;
  flex-wrap: wrap;
  gap: var(--spacing-8);
  background-color: ${({ theme }) => (theme.name === 'dark' ? theme.background2 : theme.background1)};
  padding-top: var(--spacing-8);
`
