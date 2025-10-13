import { CoinsIcon, GearSixIcon, MegaphoneIcon, PlusIcon, PuzzlePieceIcon } from '@phosphor-icons/react'
import styled, { useTheme } from 'styled-components'

import { RoadmapItem, RoadmapType } from './Roadmap'

const TYPE_ICONS: Record<RoadmapType, typeof GearSixIcon> = {
  'core-platform': GearSixIcon,
  ecosystem: PuzzlePieceIcon,
  marketing: MegaphoneIcon,
  liquidity: CoinsIcon
}

const RoadmapItemCard = ({ item }: { item: RoadmapItem }) => {
  const theme = useTheme()
  const { title, type = 'core-platform' } = item
  const TypeIcon = TYPE_ICONS[type]

  return (
    <ItemCardContainer>
      <IconBadge>
        <TypeIcon size={20} weight="duotone" />
      </IconBadge>
      <ItemCopy>
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
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`

const ItemCardContainer = styled.div`
  display: flex;
  align-items: ;
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
  gap: 0.35rem;
`

const ItemTitle = styled.span`
  margin: 0;
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textPrimary};
`

export default RoadmapItemCard
