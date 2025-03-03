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

interface PageSectionNumbersContentType extends Queries.PageSectionNumbersFragment {
  className?: string
}

interface Stat<T> {
  value: T
  isLoading: boolean
}

const statScalarDefault = { value: 0, isLoading: true }

type StatScalar = Stat<number>
type StatScalarKeys = 'totalTransactions'

type StatsScalarData = { [key in StatScalarKeys]: StatScalar }

export const query = graphql`
  fragment PageSectionNumbers on MarkdownRemarkFrontmatter {
    numbersSection {
      title
      cards {
        ...CardStats
      }
    }
  }
`

const PageSectionNumbers = ({ numbersSection }: PageSectionNumbersContentType) => {
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
    <SectionContainer>
      {numbersSection?.title && <SectionTextHeaderStyled title={numbersSection.title} centered bigSubtitle />}
      <PageSectionContainer>
        <IntroColumns>
          {numbersSection?.cards?.filter(notEmpty).map((card) => (
            <CardStats
              key={card.title}
              {...card}
              stat={
                card.stat === 'live-transactions'
                  ? `${totalTransactions.value.toLocaleString()} total transactions`
                  : card.stat
              }
            />
          ))}
        </IntroColumns>
      </PageSectionContainer>
    </SectionContainer>
  )
}

export default PageSectionNumbers

const SectionContainer = styled.section`
  position: relative;
`

const IntroColumns = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: var(--spacing-16);
  gap: var(--spacing-10);

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: 1fr;
  }
`

const SectionTextHeaderStyled = styled(SectionTextHeader)`
  padding-top: var(--spacing-16);
  margin-bottom: var(--spacing-12);
`
