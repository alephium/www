import { ExplorerClient } from '@alephium/sdk'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import PageSectionContainer from '../PageSectionContainer'
import { HttpResponse } from '@alephium/sdk/api/explorer'
import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import SectionTextHeader from '../SectionTextHeader'
import CardStats from '../CardStats'
import { notEmpty } from '../../utils/misc'
import { deviceBreakPoints } from '../../styles/global-style'

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
  fragment PageSectionNumbers on MarkdownRemarkFrontmatterPageSectionStatsContent {
    titleRows
    cards {
      ...CardStats
    }
  }
`

const PageSectionNumbers = (content: Queries.PageSectionNumbersFragment) => {
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
    <section>
      {content?.titleRows && <SectionTextHeader titleRows={content.titleRows.filter(notEmpty)} centered bigSubtitle />}
      <PageSectionContainer>
        <IntroColumns>
          {content?.cards?.filter(notEmpty).map((card) => (
            <CardStats
              {...card}
              key={card.title}
              stat={
                card.stat === 'live-transactions'
                  ? `${totalTransactions.value.toLocaleString()} total transactions`
                  : card.stat
              }
            />
          ))}
        </IntroColumns>
      </PageSectionContainer>
    </section>
  )
}

export default PageSectionNumbers

const IntroColumns = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: var(--spacing-16);
  gap: var(--spacing-10);

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: 1fr;
  }
`
