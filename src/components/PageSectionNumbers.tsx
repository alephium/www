import { addApostrophes, ExplorerClient } from '@alephium/sdk'
import { useCallback, useEffect, useState, FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import { formatNumberForDisplay } from '../utils'

import PageSectionContainer from './PageSectionContainer'
import SubsectionTextHeader from './SubsectionTextHeader'
import NumbersInfo from './NumbersInfo'
import Columns from './Columns/Columns'
import Column from './Columns/Column'

const baseUrl = 'https://mainnet-backend.alephium.org'
const ONE_DAY = 1000 * 60 * 60 * 24

interface Props {
  content: {
    title: string
    subtitle: string
  }
}

interface Stat<T> {
  value: T
  isLoading: boolean
}

const statScalarDefault = { value: 0, isLoading: true }

type StatScalar = Stat<number>
type StatScalarKeys =
  | 'hashrate'
  | 'circulatingSupply'
  | 'totalTransactions'

type StatsScalarData = { [key in StatScalarKeys]: StatScalar }

const PageSectionNumbers = ({ content: { title, subtitle }}: Props) => {
  const [explorerClient, setExplorerClient] = useState<ExplorerClient>(undefined)
  const [statsScalarData, setStatsScalarData] = useState<StatsScalarData>({
    hashrate: statScalarDefault,
    circulatingSupply: statScalarDefault,
    totalTransactions: statScalarDefault
  })

  const updateStatsScalar = useCallback((key: StatScalarKeys, value: StatScalar['value']) => {
    setStatsScalarData((prevState) => ({ ...prevState, [key]: { value, isLoading: false } }))
  }, [setStatsScalarData])

  useEffect(() => {
    setExplorerClient(new ExplorerClient({ baseUrl }))
  }, [])

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
  }, [explorerClient])

  const { hashrate, circulatingSupply, totalTransactions } = statsScalarData
  const [hashrateInteger, hashrateDecimal, hashrateSuffix] = formatNumberForDisplay(hashrate.value, 'hash')
  const supply = formatNumberForDisplay(circulatingSupply.value)

  const columns = [
    {
      value: 16,
      isLoading: false,
      description: 'shards running'
    },
    {
      value: `${addApostrophes(hashrateInteger)}${(hashrateDecimal ?? '')}`,
      isLoading: false,
      description: `${hashrateSuffix}H/s`
    },
    {
      value: supply,
      isLoading: false,
      description: 'alph circulating'
    },
    {
      value: addApostrophes(totalTransactions.value.toFixed(0)),
      isLoading: false,
      description: 'transactions executed'
    }
  ]

  return <NumbersSection>
    <NumbersPageSectionContainer>
      <SubsectionTextHeaderStyled
        title={title}
        subtitle={subtitle}
        condensed
      />
      <Columns>
        {columns.map((columnContent) => (
          <NumbersColumn key={columnContent.number}>
            <NumbersInfo {...columnContent} />
          </NumbersColumn>
        ))}
      </Columns>
    </NumbersPageSectionContainer>
  </NumbersSection>
}

const NumbersPageSectionContainer = styled(PageSectionContainer)`
  max-width: var(--page-width-shrinked);
`

const NumbersSection = styled.section`
  border-bottom: var(--border-primary-light);
  background-color: ${({ theme }) => theme.bgPrimary};
  padding: var(--spacing-11) 0;
  margin-bottom: 156px;
`

const NumbersColumn = styled(Column)`
  display: flex;
  align-items: center;

  > div {
    align-self: flex-start;
  }

  &:not(:first-child) {
    > div {
      padding-left: var(--spacing-6);

      @media ${deviceBreakPoints.mobile} {
        padding-left: 0;
        padding-top: var(--spacing-9);
      }
    }

    &:before {
      content: '';
      display: block;
      width: 2px;
      height: var(--spacing-9);
      background-color: ${({ theme }) => theme.separator};
      flex-shrink: 0;

      @media ${deviceBreakPoints.mobile} {
        display: none;
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

const Centered = styled.div`
  display: flex;
  justify-content: center;
`

const SubsectionTextHeaderStyled = styled(SubsectionTextHeader)`
  margin-bottom: var(--spacing-10);
`

export default PageSectionNumbers
