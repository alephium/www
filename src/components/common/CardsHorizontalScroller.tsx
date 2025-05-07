import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

interface CardsHorizontalScrollerProps {
  children: React.ReactNode
  cardWidth?: number
  cardGap?: number
}

const CARD_WIDTH = 380
const CARD_GAP = 24

const CardsHorizontalScroller = ({
  children,
  cardWidth = CARD_WIDTH,
  cardGap = CARD_GAP
}: CardsHorizontalScrollerProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [showLeftMask, setShowLeftMask] = useState(true)
  const [showRightMask, setShowRightMask] = useState(true)

  const checkScrollable = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const leftPadding = parseInt(getComputedStyle(container).paddingLeft)
      const canScrollLeft = container.scrollLeft > leftPadding
      const canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth

      setCanScrollLeft(canScrollLeft)
      setCanScrollRight(canScrollRight)
      setShowLeftMask(canScrollLeft)
      setShowRightMask(canScrollRight)
    }
  }, [])

  useEffect(() => {
    checkScrollable()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollable)
      window.addEventListener('resize', checkScrollable)
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollable)
        window.removeEventListener('resize', checkScrollable)
      }
    }
  }, [checkScrollable])

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = cardWidth + cardGap
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <StatsContainer>
      <CardsScroll ref={scrollContainerRef} $showLeftMask={showLeftMask} $showRightMask={showRightMask}>
        {children}
      </CardsScroll>
      <ScrollButtonsContainer>
        <ScrollButton onClick={() => handleScroll('left')} aria-label="Scroll cards left" disabled={!canScrollLeft}>
          <Arrow>←</Arrow>
        </ScrollButton>
        <ScrollButton onClick={() => handleScroll('right')} aria-label="Scroll cards right" disabled={!canScrollRight}>
          <Arrow>→</Arrow>
        </ScrollButton>
      </ScrollButtonsContainer>
    </StatsContainer>
  )
}

const StatsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: var(--spacing-4);
  position: relative;
`

const CardsScroll = styled.div<{ $showLeftMask: boolean; $showRightMask: boolean }>`
  display: flex;
  gap: ${CARD_GAP}px;
  overflow-x: auto;
  padding: var(--spacing-4) 0;
  padding-left: calc((100% - var(--page-width)) / 2 + var(--spacing-4));
  scroll-snap-type: x mandatory;
  -webkit-mask-image: linear-gradient(
    to right,
    ${(props) => (props.$showLeftMask ? 'transparent' : 'black')},
    black 60px,
    black calc(100% - 60px),
    ${(props) => (props.$showRightMask ? 'transparent' : 'black')}
  );
  mask-image: linear-gradient(
    to right,
    ${(props) => (props.$showLeftMask ? 'transparent' : 'black')},
    black 60px,
    black calc(100% - 60px),
    ${(props) => (props.$showRightMask ? 'transparent' : 'black')}
  );

  @media ${deviceBreakPoints.mobile} {
    gap: ${CARD_GAP / 2}px;
    -webkit-mask-image: linear-gradient(
      to right,
      ${(props) => (props.$showLeftMask ? 'transparent' : 'black')} 20px,
      black calc(100% - 20px),
      ${(props) => (props.$showRightMask ? 'transparent' : 'black')}
    );
    mask-image: linear-gradient(
      to right,
      ${(props) => (props.$showLeftMask ? 'transparent' : 'black')} 20px,
      black calc(100% - 20px),
      ${(props) => (props.$showRightMask ? 'transparent' : 'black')}
    );
  }

  -webkit-overflow-scrolling: touch;
  margin-bottom: var(--spacing-4);

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-gray-300);
    border-radius: 4px;
  }
`

const ScrollButtonsContainer = styled.div`
  display: flex;
  gap: var(--spacing-2);
  justify-content: flex-end;
  padding-right: var(--spacing-10);
`

const ScrollButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--color-white);
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  opacity: 1;

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`

const Arrow = styled.span`
  font-size: 24px;
  line-height: 1;
`

export default CardsHorizontalScroller
