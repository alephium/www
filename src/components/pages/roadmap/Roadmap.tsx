import { graphql, useStaticQuery } from 'gatsby'
import { useMemo, useState } from 'react'
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
  title: string
  categories: RoadmapCategory[]
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
          {roadmaps.map((roadmap) => (
            <RoadmapYearSection key={roadmap.title} {...roadmap} />
          ))}
        </TimelineSection>
      </SubpageSection>
    </Wrapper>
  )
}

export default Roadmap

const RoadmapYearSection = ({ title, categories }: RoadmapData) => {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!categories.length) {
    return null
  }

  const safeIndex = activeIndex < categories.length ? activeIndex : 0
  const activeCategory = categories[safeIndex]
  const activeCategoryName = activeCategory.category?.trim() || 'Uncategorized'

  return (
    <RoadmapContainer>
      <StickyTitleContainer>
        <StickyTitle>{title}</StickyTitle>
      </StickyTitleContainer>
      <CategoryTabs role="tablist">
        {categories.map((category, idx) => {
          const categoryName = category.category?.trim() || 'Uncategorized'
          return (
            <CategoryTab
              key={`${title}-${categoryName}-${idx}`}
              type="button"
              role="tab"
              aria-selected={safeIndex === idx}
              tabIndex={safeIndex === idx ? 0 : -1}
              isActive={safeIndex === idx}
              onClick={() => setActiveIndex(idx)}
            >
              {categoryName}
            </CategoryTab>
          )
        })}
      </CategoryTabs>
      {activeCategory?.tagline && <CategoryTagline>{activeCategory.tagline}</CategoryTagline>}
      <RoadmapContent>
        <CategorySection>
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
              const items = (activeCategory.items || []).filter(
                (item): item is RoadmapItem => Boolean(item) && item.status === key
              )

              return (
                <StatusColumn key={`${title}-${activeCategoryName}-${key}`}>
                  {items.map((item, index) => (
                    <RoadmapItemCard key={`${item.title}-${index}`} item={item} />
                  ))}
                </StatusColumn>
              )
            })}
          </StatusColumns>
        </CategorySection>
      </RoadmapContent>
    </RoadmapContainer>
  )
}

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
  gap: var(--spacing-4);
`

const RoadmapContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${deviceBreakPoints.mobile} {
    padding-left: 0;
  }
`

const StickyTitleContainer = styled(TextElement)`
  padding-top: var(--spacing-4);
  position: sticky;
  top: 0;
  background: linear-gradient(to bottom, ${({ theme }) => theme.background3} 10%, transparent 100%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`

const StickyTitle = styled.h2`
  color: ${({ theme }) => theme.textSecondary} !important;
  font-weight: var(--fontWeight-light);
  margin-bottom: var(--spacing-2) !important;
`

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-4);
  margin: 0 calc(-1 * var(--spacing-1));
  padding: 0 var(--spacing-1);
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const CategoryTab = styled.button<{ isActive: boolean }>`
  appearance: none;
  background: none;
  border: none;
  padding: 0 0 var(--spacing-1);
  font-size: var(--fontSize-24);
  font-weight: var(--fontWeight-regular);
  color: ${({ theme, isActive }) => (isActive ? theme.textPrimary : theme.textSecondary)};
  border-bottom: 2px solid ${({ theme, isActive }) => (isActive ? theme.textPrimary : 'transparent')};
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette1};
    outline-offset: 2px;
  }

  @media ${deviceBreakPoints.mobile} {
    font-size: var(--fontSize-20);
  }
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

const CategoryTagline = styled.p`
  margin: 0;
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: var(--spacing-4);
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
