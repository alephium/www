import { PlusIcon } from '@phosphor-icons/react'
import styled, { useTheme } from 'styled-components'

import { DEFAULT_ROADMAP_ITEM_TYPE, ROADMAP_ITEM_TYPE_META, RoadmapItem } from './roadmapMeta'

const RoadmapItemCard = ({ item }: { item: RoadmapItem }) => {
  const theme = useTheme()
  const { title, type } = item
  const meta = type ? ROADMAP_ITEM_TYPE_META[type] : undefined
  const { Icon: TypeIcon, label } = meta ?? ROADMAP_ITEM_TYPE_META[DEFAULT_ROADMAP_ITEM_TYPE]

  return (
    <ItemCardContainer>
      <IconBadge>
        <TypeIcon size={20} color={theme.textSecondary} />
      </IconBadge>
      <ItemCopy>
        <ItemType>{label}</ItemType>
        <ItemTitle>{title}</ItemTitle>
      </ItemCopy>
      <RightSide>
        <PlusIcon size={16} weight="bold" color={theme.textSecondary} />
      </RightSide>
    </ItemCardContainer>
  )
}

const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`

const ItemCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  padding: var(--spacing-2);
  border-radius: var(--radius);
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  background: ${({ theme }) => theme.surface2};
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 300px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.surface1};
    ${RightSide} {
      opacity: 1;
    }
  }
`

const IconBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
`

const ItemCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

const ItemType = styled.span`
  font-size: var(--fontSize-12);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.textSecondary};
`

const ItemTitle = styled.span`
  margin: 0;
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textPrimary};
`

export default RoadmapItemCard
