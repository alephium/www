import { ExplorerClient } from '@alephium/sdk'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { HttpResponse } from '@alephium/sdk/api/explorer'
import { graphql } from 'gatsby'
import { notEmpty } from '../../../utils/misc'
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

export const query = graphql`
  fragment HomepageStatsSection on MarkdownRemarkFrontmatterPageSectionStatsContent {
    titleRows
    cards {
      ...CardStats
    }
  }
`

const HomepageStatsSection = (content: Queries.HomepageStatsSectionFragment) => {
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
      {content?.titleRows && (
        <TextElement isCentered>
          <h2>{content.titleRows.filter(notEmpty).join('\n')}</h2>
        </TextElement>
      )}
      <SubheaderContent>
        <Grid columns={2}>
          {content?.cards?.filter(notEmpty).map((card) => (
            <TextCard key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Stat>
                {card.stat === 'live-transactions'
                  ? `${totalTransactions.value.toLocaleString()} total transactions`
                  : card.stat}
              </Stat>
            </TextCard>
          ))}
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
