import { MinusIcon, PlusIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import styled, { useTheme } from 'styled-components'

import Button from '../../Button'
import { DEFAULT_ROADMAP_ITEM_TYPE, ROADMAP_ITEM_TYPE_META, RoadmapItem } from './roadmapMeta'

interface RoadmapItemCardProps {
  item: RoadmapItem
  itemId: string
  isActive: boolean
  onToggle: (itemId: string) => void
}

const RoadmapItemCard = ({ item, itemId, isActive, onToggle }: RoadmapItemCardProps) => {
  const theme = useTheme()
  const overlayRef = useRef<HTMLDivElement>(null)
  const { title, type } = item
  const meta = type ? ROADMAP_ITEM_TYPE_META[type] : undefined
  const fallbackMeta = ROADMAP_ITEM_TYPE_META[DEFAULT_ROADMAP_ITEM_TYPE]
  const { Icon: TypeIcon, label, color } = meta ?? fallbackMeta
  const iconColor = color || fallbackMeta.color
  const canExpand = Boolean(item.description?.trim())
  const buttonLabel = item.button?.label
  const buttonUrl = item.button?.url

  useEffect(() => {
    if (!isActive) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onToggle(itemId)
      }
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        onToggle(itemId)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('pointerdown', handlePointerDown)
    overlayRef.current?.focus({ preventScroll: true })

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isActive, itemId, onToggle])

  return (
    <CardWrapper $isActive={isActive}>
      <CollapsedButton
        type="button"
        layout="position"
        onClick={canExpand ? () => onToggle(itemId) : undefined}
        aria-expanded={canExpand ? isActive : undefined}
        aria-disabled={!canExpand}
        disabled={!canExpand}
        $isActive={isActive}
        $canExpand={canExpand}
      >
        <ItemCopy>
          <ItemLabelRow>
            <TypeIcon size={14} color={iconColor} />
            <ItemType>{label}</ItemType>
          </ItemLabelRow>
          <ItemTitle>{title}</ItemTitle>
        </ItemCopy>
        {canExpand && (
          <RightSide>
            <PlusIcon size={16} weight="bold" color={theme.textSecondary} />
          </RightSide>
        )}
      </CollapsedButton>
      <AnimatePresence>
        {canExpand && isActive && (
          <ExpandedCardShell key="expanded-content">
            <ExpandedCard
              ref={overlayRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label={`${title} roadmap details`}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{
                default: { type: 'spring', stiffness: 280, damping: 32, mass: 0.9 },
                opacity: { duration: 0.2 }
              }}
            >
              <ExpandedHeader>
                <ExpandedIconBadge $color={iconColor}>
                  <TypeIcon size={24} color={iconColor} />
                </ExpandedIconBadge>
                <HeaderCopy>
                  <ExpandedTitle>{title}</ExpandedTitle>
                </HeaderCopy>
                <CloseButton type="button" onClick={() => onToggle(itemId)} aria-label="Close roadmap item">
                  <MinusIcon size={18} weight="bold" color={theme.textSecondary} />
                </CloseButton>
              </ExpandedHeader>
              {item.description && <Description>{item.description}</Description>}
              {buttonLabel && buttonUrl && (
                <ActionButton url={buttonUrl} highlight squared textAlign="center">
                  {buttonLabel}
                </ActionButton>
              )}
            </ExpandedCard>
          </ExpandedCardShell>
        )}
      </AnimatePresence>
    </CardWrapper>
  )
}

const CardWrapper = styled.div<{ $isActive: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 300px;
  z-index: ${({ $isActive }) => ($isActive ? 5 : 1)};
  overflow: visible;
`

const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`

const CollapsedButton = styled(motion.button)<{ $isActive: boolean; $canExpand: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  padding: var(--spacing-2);
  border-radius: var(--radius);
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  background: ${({ theme }) => theme.surface2};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${({ $canExpand }) => ($canExpand ? 'pointer' : 'default')};
  width: 100%;
  text-align: left;
  opacity: ${({ $isActive }) => ($isActive ? 0 : 1)};
  pointer-events: ${({ $isActive }) => ($isActive ? 'none' : 'auto')};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.surface1};
    ${RightSide} {
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette1};
  }

  &:disabled {
    opacity: 1;
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
  gap: 8px;
  pointer-events: none;
`

const ItemLabelRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`

const ItemType = styled.span`
  font-size: var(--fontSize-12);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.textTertiary};
`

const ItemTitle = styled.span`
  margin: 0;
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textPrimaryVariation};
`

const ExpandedCardShell = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(360px, calc(100vw - var(--spacing-6)));
  pointer-events: none;
`

const ExpandedCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  width: 100%;
  padding: var(--spacing-2);
  border-radius: calc(var(--radius) * 1.5);
  border: 1px solid ${({ theme }) => theme.borderSecondary};
  background: ${({ theme }) => theme.surface1};
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(18px);
  pointer-events: auto;
  outline: none;
`

const ExpandedHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`

const ExpandedIconBadge = styled(IconBadge)<{ $color?: string }>`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $color }) => ($color ? `${$color}26` : 'transparent')};
`

const HeaderCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const ExpandedTitle = styled.h3`
  margin: 0;
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textPrimary};
  font-weight: var(--fontWeight-medium);
`

const Description = styled.p`
  margin: 0;
  font-size: var(--fontSize-16);
  color: ${({ theme }) => theme.textPrimaryVariation};
  line-height: 1.5;
`

const CloseButton = styled.button`
  margin-left: auto;
  appearance: none;
  background: none;
  border: none;
  padding: 4px;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => (theme.name === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)')};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette1};
    outline-offset: 2px;
  }
`

const ActionButton = styled(Button)`
  align-self: stretch;
  justify-content: center;
`

export default RoadmapItemCard
