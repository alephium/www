import { addApostrophes, ExplorerClient } from '@alephium/sdk'
import { HttpResponse } from '@alephium/sdk/api/explorer'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import Column from '../../../components/Columns/Column'
import Columns from '../../../components/Columns/Columns'
import NumbersInfo from '../../../components/NumbersInfo'
import PageSectionContainer from '../../../components/PageSectionContainer'
import SubsectionTextHeader from '../../../components/SubsectionTextHeader'
import Waves from '../../../components/Wave/Waves'
import { deviceBreakPoints } from '../../../styles/global-style'
import { formatNumberForDisplay } from '../../../utils/numbers'
import Button from '../../Button'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
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

type ActiveAddressRes = { [alphThreshold: string]: { amount: number } }[]

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
  const [activeAddresses, setActiveAddresses] = useState<number>()
  const [bridgeTVL, setBridgeTVL] = useState<number>()
  const [chainTVL, setChainTVL] = useState<number>()
  const [protocolsStakingTVL, setProtocolsStakingTVL] = useState<number>()

  const boxRef = useRef<HTMLDivElement>(null)

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
      <TextElement>
        <h2>Some Numbers.</h2>
        <p>Let the facts speak for themselves.</p>
      </TextElement>
      <SubheaderContent>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ zIndex: 5000, width: '100%' }}
          viewport={{ once: true }}
        >
          <PageSectionContainer>
            <BorderedBox ref={boxRef}>
              <RealTimeLabel>Real time data</RealTimeLabel>
              <ColumnsStyled>
                {columns.map((column) => (
                  <NumbersColumn key={column.description}>
                    <NumbersInfo {...column} />
                  </NumbersColumn>
                ))}
                {/*
              <NumbersColumn>
                <NumbersInfo
                  description="Active addresses"
                  value={activeAddresses?.toString()}
                  isLoading={activeAddresses === undefined}
                />
              </NumbersColumn>
            */}
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
                <NumbersColumn>
                  <NumbersInfo
                    description="Bridged TVL"
                    value={bridgeTVL ? '$' + formatNumberForDisplay(bridgeTVL).join('') : '-'}
                    isLoading={bridgeTVL === undefined}
                  />
                </NumbersColumn>
              </ColumnsStyled>
              <ButtonContainer>
                <Button url="https://explorer.alephium.org/" big highlight>
                  Check out our explorer
                </Button>
              </ButtonContainer>
              <Waves parentRef={boxRef} />
            </BorderedBox>
          </PageSectionContainer>
        </motion.div>
      </SubheaderContent>
    </SubpageSection>
  )
}

export default HomepageNumbersSection

const BorderedBox = styled.div`
  flex: 1;
  border-radius: var(--radius-big);
  border: 4px solid ${({ theme }) => theme.borderPrimary};
  padding: var(--spacing-11);
  padding-bottom: var(--spacing-16);
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  min-height: 230px;
`

const RealTimeLabel = styled.div`
  position: absolute;
  top: var(--spacing-3);
  right: var(--spacing-3);
  background: ${({ theme }) => theme.background1};
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-small);
  color: ${({ theme }) => theme.textSecondary};
  z-index: 1;
  display: flex;
  align-items: center;
  gap: var(--spacing-1);

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.palette1};
    border-radius: 50%;
    display: inline-block;
  }
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: var(--spacing-3);
  left: var(--spacing-3);
  z-index: 1;
`

const NumbersColumn = styled(Column)`
  display: flex;
  align-items: center;
  z-index: 1;

  &:not(:first-child) {
    > div {
      padding-left: var(--spacing-3);

      @media ${deviceBreakPoints.mobile} {
        padding-left: 0;
        padding-top: var(--spacing-9);
      }
    }
  }

  &:not(:last-child) {
    > div {
      padding-right: var(--spacing-9);

      @media ${deviceBreakPoints.mobile} {
        padding-right: 0;
      }
    }
  }
`

const SubsectionTextHeaderStyled = styled(SubsectionTextHeader)`
  margin-bottom: var(--spacing-4);
`

const ColumnsStyled = styled(Columns)`
  align-items: baseline;
`
