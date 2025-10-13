import { SunHorizonIcon, TreeIcon, WavesIcon } from '@phosphor-icons/react'
import { graphql, useStaticQuery } from 'gatsby'
import { useMemo } from 'react'
import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'
import RoadmapItemCard from './RoadmaptItemCard'

export type RoadmapStatus = 'done' | 'ongoing' | 'planned'
export type RoadmapType = 'core-platform' | 'ecosystem' | 'marketing' | 'liquidity'

export interface RoadmapItem {
  title: string
  status: RoadmapStatus
  type: RoadmapType
  description: string
  button?: RoadmapButton
}

interface RoadmapButton {
  label: string
  url: string
}

interface RoadmapCategory {
  category?: string
  tagline?: string
  items?: RoadmapItem[]
}

interface RoadmapNode {
  title?: string
  categories?: RoadmapCategory[]
}

interface RoadmapData {
  title: string
  categories: RoadmapCategory[]
}

const ITEM_STATUS: Array<{
  key: RoadmapStatus
  label: string
  Icon: typeof TreeIcon
}> = [
  { key: 'done', label: 'Done', Icon: TreeIcon },
  { key: 'ongoing', label: 'Ongoing', Icon: WavesIcon },
  { key: 'planned', label: 'Planned', Icon: SunHorizonIcon }
]

const Roadmap = () => {
  const data = useStaticQuery(graphql`
    query RoadmapEntries {
      allRoadmapYaml(sort: [{ title: DESC }]) {
        nodes {
          title
          categories {
            category
            tagline
            items {
              title
              status
              type
              description
              button {
                label
                url
              }
            }
          }
        }
      }
    }
  `)

  const roadmaps = useMemo<RoadmapData[]>(
    () =>
      (data.allRoadmapYaml.nodes as RoadmapNode[])
        .map((node) => {
          const title = node.title?.trim() || 'Untitled roadmap'
          return {
            title,
            categories: (node.categories || []).sort((a, b) =>
              (a.category || '').localeCompare(b.category || '', undefined, { sensitivity: 'base' })
            )
          }
        })
        .sort((a, b) => b.title.localeCompare(a.title, undefined, { numeric: true, sensitivity: 'base' })),
    [data.allRoadmapYaml.nodes]
  )

  if (!roadmaps.length) {
    return null
  }

  return (
    <Wrapper id="roadmap">
      <SubpageSection>
        <TextElement isCentered>
          <h2>Future Roadmap</h2>
          <p>
            Track Alephium&apos;s upcoming milestones as we build across the core platform, ecosystem, marketing, and
            liquidity fronts.
          </p>
        </TextElement>
      </SubpageSection>
      <SubpageSection noTopPadding fullWidth>
        <TimelineSection>
          {roadmaps.map(({ title, categories }) => (
            <RoadmapContainer key={title}>
              <SideContainer>
                <StickyTitleContainer>
                  <StickyTitle>{title}</StickyTitle>
                </StickyTitleContainer>
              </SideContainer>
              <RoadmapContent key={title}>
                <CategoriesColumn>
                  {categories.map((category, idx) => {
                    const categoryName = category.category?.trim() || 'Uncategorized'
                    return (
                      <CategorySection key={`${title}-${categoryName}-${idx}`}>
                        <CategoryHeading>
                          <HeadingTexts isBodySmall>
                            <CategoryTitle>{categoryName}</CategoryTitle>
                            {category.tagline && <CategoryTagline>{category.tagline}</CategoryTagline>}
                          </HeadingTexts>
                        </CategoryHeading>
                        <StatusHeadings>
                          {ITEM_STATUS.map(({ key, label, Icon }) => (
                            <StatusHeading key={key} status={key}>
                              <span>{label}</span>
                              <Icon size={20} weight="duotone" />
                            </StatusHeading>
                          ))}
                        </StatusHeadings>
                        <Divider />
                        <StatusColumns>
                          {ITEM_STATUS.map(({ key }) => {
                            const items = (category.items || []).filter(
                              (item): item is RoadmapItem => Boolean(item) && item.status === key
                            )
                            return (
                              <StatusColumn key={`${title}-${categoryName}-${key}`}>
                                {items.map((item, index) => (
                                  <RoadmapItemCard key={`${item.title}-${index}`} item={item} />
                                ))}
                              </StatusColumn>
                            )
                          })}
                        </StatusColumns>
                      </CategorySection>
                    )
                  })}
                </CategoriesColumn>
              </RoadmapContent>
              <SideContainer />
            </RoadmapContainer>
          ))}
        </TimelineSection>
      </SubpageSection>
    </Wrapper>
  )
}

export default Roadmap

const Wrapper = styled.section``

const TimelineSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
`

const SideContainer = styled.div`
  width: calc((100% - var(--page-width)) / 2);
  display: flex;
  justify-content: flex-end;
  padding-right: var(--spacing-6);

  @media ${deviceBreakPoints.mobile} {
    position: static;
    transform: none;
    margin-bottom: var(--spacing-3);
  }
`

const RoadmapContainer = styled.div`
  display: flex;
  justify-content: center;
`

const RoadmapContent = styled.div`
  position: relative;
  width: var(--page-width);

  @media ${deviceBreakPoints.mobile} {
    padding-left: 0;
  }
`

const StickyTitleContainer = styled(TextElement)`
  padding-top: var(--spacing-4);
`

const StickyTitle = styled.h2`
  position: sticky;
  top: var(--spacing-4);
  color: ${({ theme }) => theme.textTertiary} !important;
  font-weight: var(--fontWeight-light);
`

const CategoriesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-20);
`

const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  border-radius: var(--radius-huge);
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  background: ${({ theme }) => theme.background2};
`

const CategoryHeading = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-2);
`

const HeadingTexts = styled(TextElement)`
  display: flex;
  flex-direction: column;
`

const CategoryTitle = styled.h3`
  margin: 0;
  font-weight: var(--fontWeight-medium);
  color: ${({ theme }) => theme.textPrimary};
`

const CategoryTagline = styled.p`
  margin: 0;
`

const StatusHeadings = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-5);

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: 1fr;
    row-gap: var(--spacing-2);
  }
`

const headingAccent = {
  done: css`
    color: ${({ theme }) => theme.palette3};
  `,
  ongoing: css`
    color: ${({ theme }) => theme.palette1};
  `,
  planned: css`
    color: ${({ theme }) => theme.palette2};
  `
} as const

const StatusHeading = styled.div<{ status: RoadmapStatus }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  font-size: var(--fontSize-20);
  ${({ status }) => headingAccent[status]}

  @media ${deviceBreakPoints.mobile} {
    justify-content: flex-start;
  }
`

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.borderPrimary};
`

const StatusColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-5);

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: 1fr;
  }
`

const StatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`
