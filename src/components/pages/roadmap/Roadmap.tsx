import { graphql, useStaticQuery } from 'gatsby'
import { useMemo } from 'react'
import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'
import { ROADMAP_STATUSES, RoadmapItem, RoadmapStatus } from './roadmapMeta'
import RoadmapItemCard from './RoadmaptItemCard'

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
  title?: string
  categories?: RoadmapCategory[]
}

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
          const categories = (node.categories || [])
            .map((category) => ({
              ...category,
              category: category.category?.trim() || 'Uncategorized'
            }))
            .sort((a, b) => (a.category || '').localeCompare(b.category || '', undefined, { sensitivity: 'base' }))

          return {
            title,
            categories
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
      <SubpageSection noTopPadding>
        <TimelineSection>
          {roadmaps.map(({ title, categories }) => (
            <RoadmapContainer key={title}>
              <StickyTitleContainer>
                <StickyTitle>{title}</StickyTitle>
              </StickyTitleContainer>
              <RoadmapContent key={title}>
                <CategoriesColumn>
                  {categories?.map((category, idx) => {
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
                          {ROADMAP_STATUSES.map(({ key, label, Icon }) => (
                            <StatusHeading key={key} status={key}>
                              <span>{label}</span>
                              <Icon size={20} weight="duotone" />
                            </StatusHeading>
                          ))}
                        </StatusHeadings>
                        <Divider />
                        <StatusColumns>
                          {ROADMAP_STATUSES.map(({ key }) => {
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

const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const RoadmapContent = styled.div`
  position: relative;

  @media ${deviceBreakPoints.mobile} {
    padding-left: 0;
  }
`

const StickyTitleContainer = styled(TextElement)`
  padding-top: var(--spacing-4);
  position: sticky;
  top: var(--spacing-4);
  background: linear-gradient(to bottom, ${({ theme }) => theme.background3} 10%, transparent 100%);
  z-index: 1;
`

const StickyTitle = styled.h2`
  color: ${({ theme }) => theme.textSecondary} !important;
  font-weight: var(--fontWeight-light);
`

const CategoriesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
`

const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  border-radius: var(--radius-big);
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
  margin-bottom: var(--spacing-1) !important;
  font-weight: var(--fontWeight-regular) !important;
  color: ${({ theme }) => theme.textPrimary};
`

const CategoryTagline = styled.p`
  margin: 0;
`

const StatusHeadings = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-5);
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
`

const StatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`
