import { graphql, useStaticQuery } from 'gatsby'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'
import { ROADMAP_CATEGORY_META, ROADMAP_STATUSES, RoadmapCategoryKey, RoadmapItem, RoadmapStatus } from './roadmapMeta'
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
        <TextElement>
          <LiveHeading>
            Live Roadmap Dashboard
            <LiveIndicator aria-hidden="true" />
          </LiveHeading>
          <p>
            For full transparency and accountability into everything we’re building. And for those awaiting the Core
            dApp, the “Apps” section now brings you one step closer to the action.
          </p>
        </TextElement>
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
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null)
  const tabsContainerRef = useRef<HTMLDivElement | null>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const hasCategories = categories.length > 0
  const safeIndex = hasCategories && activeIndex < categories.length ? activeIndex : 0
  const activeCategory = hasCategories ? categories[safeIndex] : undefined
  const activeCategoryName = activeCategory?.category?.trim() || 'Uncategorized'
  const handleItemToggle = useCallback((itemId: string) => {
    setExpandedItemId((current) => (current === itemId ? null : itemId))
  }, [])

  useEffect(() => {
    const container = tabsContainerRef.current
    const activeTab = tabRefs.current[safeIndex]

    if (!container || !activeTab) return

    const containerLeft = container.scrollLeft
    const containerRight = containerLeft + container.clientWidth
    const tabLeft = activeTab.offsetLeft
    const tabRight = tabLeft + activeTab.offsetWidth
    const padding = 16

    if (tabLeft < containerLeft) {
      container.scrollTo({ left: Math.max(tabLeft - padding, 0), behavior: 'smooth' })
    } else if (tabRight > containerRight) {
      container.scrollTo({
        left: tabRight - container.clientWidth + padding,
        behavior: 'smooth'
      })
    }
  }, [safeIndex])

  if (!hasCategories) {
    return null
  }

  return (
    <RoadmapContainer>
      <StickyTitleContainer>
        <StickyTitle>{title}</StickyTitle>
        <CategoryTabs role="tablist" ref={tabsContainerRef}>
          {categories.map((category, idx) => {
            const categoryName = category.category?.trim() || 'Uncategorized'
            const normalizedCategoryKey = categoryName.toLowerCase() as RoadmapCategoryKey
            const categoryMeta = ROADMAP_CATEGORY_META[normalizedCategoryKey]
            const TabIcon = categoryMeta?.Icon
            return (
              <CategoryTab
                key={`${title}-${categoryName}-${idx}`}
                type="button"
                role="tab"
                aria-selected={safeIndex === idx}
                tabIndex={safeIndex === idx ? 0 : -1}
                isActive={safeIndex === idx}
                onClick={() => setActiveIndex(idx)}
                ref={(el) => {
                  tabRefs.current[idx] = el
                }}
              >
                {safeIndex === idx && TabIcon && categoryMeta && (
                  <CategoryTabIcon aria-hidden="true" $color={categoryMeta.color} $background={categoryMeta.background}>
                    <TabIcon size={20} weight="duotone" />
                  </CategoryTabIcon>
                )}
                <CategoryTabName>{categoryName}</CategoryTabName>
              </CategoryTab>
            )
          })}
        </CategoryTabs>
      </StickyTitleContainer>
      <RoadmapContent>
        {activeCategory?.tagline && (
          <CategoryTagline>
            <div>
              <CategoryTaglineLabel>TLDR:</CategoryTaglineLabel>
            </div>
            {activeCategory.tagline}
          </CategoryTagline>
        )}
        <CategorySection>
          <StatusHeadings>
            {ROADMAP_STATUSES.map(({ key, label, Icon }) => (
              <StatusHeading key={key} status={key}>
                <span>{label}</span>
                <Icon size={20} weight="duotone" />
              </StatusHeading>
            ))}
          </StatusHeadings>
          <StatusColumns>
            {ROADMAP_STATUSES.map(({ key, label, Icon }) => {
              const items = (activeCategory?.items || []).filter(
                (item): item is RoadmapItem => Boolean(item) && item.status === key
              )
              const hasItems = items.length > 0

              return (
                <StatusColumn key={`${title}-${activeCategoryName}-${key}`}>
                  <StatusColumnHeading status={key} $isEmpty={!hasItems}>
                    <span>{label}</span>
                    <Icon size={20} weight="duotone" />
                  </StatusColumnHeading>
                  {hasItems ? (
                    items.map((item, index) => {
                      const itemId = `${title}-${activeCategoryName}-${key}-${index}`
                      return (
                        <RoadmapItemCard
                          key={itemId}
                          item={item}
                          itemId={itemId}
                          isActive={expandedItemId === itemId}
                          onToggle={handleItemToggle}
                        />
                      )
                    })
                  ) : (
                    <StatusColumnPlaceholder>
                      <Icon size={24} weight="duotone" />
                      <PlaceholderText>No {label.toLowerCase()} items yet.</PlaceholderText>
                    </StatusColumnPlaceholder>
                  )}
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

const pulse = keyframes`
  0% {
    transform: scale(0.4);
    opacity: 0.8;
  }
  70% {
    transform: scale(1.6);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

const LiveHeading = styled.h2`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-2);
`

const LiveIndicator = styled.span`
  flex-shrink: 0;
  position: relative;
  display: inline-flex;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette5};

  &::after {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.palette5};
    opacity: 0.6;
    animation: ${pulse} 2s ease-out infinite;
  }
`

const TimelineSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  margin-top: var(--spacing-4);
`

const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-10);
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
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  z-index: 2;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    bottom: -100px;
    z-index: -1;
    background: linear-gradient(to bottom, ${({ theme }) => theme.background3} 25%, transparent 100%);
  }
`

const StickyTitle = styled.h2`
  color: ${({ theme }) => theme.textSecondary} !important;
  font-weight: var(--fontWeight-light);
  margin-bottom: var(--spacing-2) !important;
`

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: var(--spacing-1);
  padding: var(--spacing-1);
  width: fit-content;
  overflow-x: auto;
  scrollbar-width: none;
  border-radius: var(--radius-big);
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.borderSecondary};
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(20px);

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${deviceBreakPoints.mobile} {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`

const CategoryTab = styled.button<{ isActive: boolean }>`
  appearance: none;
  border: none;
  padding: 0 var(--spacing-2);
  padding-left: var(--spacing-1);
  font-size: var(--fontSize-22);
  font-weight: var(--fontWeight-regular);
  color: ${({ theme, isActive }) => (isActive ? theme.textPrimary : theme.textSecondary)};
  background: ${({ theme, isActive }) => (isActive ? theme.surface1 : 'transparent')};
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  box-shadow: ${({ isActive }) =>
    isActive && '0px 8px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08)'};

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
    background: ${({ theme, isActive }) => (isActive ? theme.surface1 : theme.surface2)};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette1};
    outline-offset: 4px;
  }

  @media ${deviceBreakPoints.mobile} {
    font-size: var(--fontSize-20);
    padding: 0 var(--spacing-2);
    min-height: 32px;
  }
`

const CategoryTabIcon = styled.span<{ $color: string; $background: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${({ $color }) => $color} !important;
  flex-shrink: 0;

  svg {
    display: block;
  }
`

const CategoryTabName = styled.span`
  padding-left: var(--spacing-1);
`

const CategorySection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  background: ${({ theme }) => theme.background2};
  border-radius: var(--radius-big);
`

const CategoryTagline = styled.p`
  margin: 0;
  font-size: var(--fontSize-18);
  margin-top: var(--spacing-3);
  margin-bottom: var(--spacing-2);
  padding: var(--spacing-3);
  border-radius: var(--radius);
  background: ${({ theme }) => theme.background1};
  color: ${({ theme }) => theme.textPrimaryVariation};
`

const CategoryTaglineLabel = styled.div`
  font-weight: var(--fontWeight-regular);
  color: ${({ theme }) => theme.textTertiary};
  margin-bottom: var(--spacing-1);
  text-transform: uppercase;
`

const StatusHeadings = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-5);

  @media ${deviceBreakPoints.mobile} {
    display: none;
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

const StatusColumnHeading = styled(StatusHeading)<{ $isEmpty: boolean }>`
  display: none;
  margin-bottom: var(--spacing-2);

  @media ${deviceBreakPoints.mobile} {
    display: flex;
  }
`

const StatusColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-5);

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
`

const StatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);

  @media ${deviceBreakPoints.mobile} {
    padding-top: var(--spacing-3);
    border-top: 1px solid ${({ theme }) => theme.borderPrimary};

    &:first-child:not(:empty) {
      padding-top: 0;
      border-top: none;
    }
  }
`

const StatusColumnPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-1);
  padding: var(--spacing-2);
  max-width: 300px;
  border-radius: var(--radius);
  border: 1px dashed ${({ theme }) => theme.borderPrimary};
  color: ${({ theme }) => theme.textTertiary};

  svg {
    color: ${({ theme }) => theme.textTertiary};
  }
`

const PlaceholderText = styled.span`
  font-size: var(--fontSize-16);
`
