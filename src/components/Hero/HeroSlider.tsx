import { ReactNode, RefObject, TouchEvent, useEffect } from 'react'

interface HeroSliderProps {
  heroElementRef: RefObject<HTMLElement>
  onSwipe: () => void
  shouldAutoSwipe: boolean
  children?: ReactNode
}

const HeroSlider = ({ heroElementRef, onSwipe, shouldAutoSwipe = true, children }: HeroSliderProps) => {
  let swipeTimeout: ReturnType<typeof setTimeout> | undefined

  useEffect(() => {
    const heroElement = heroElementRef.current
    let xDown = 0
    let yDown = 0

    const handleTouchStart = (event: TouchEvent<Element>): void => {
      xDown = event.touches[0].clientX
      yDown = event.touches[0].clientY
    }

    const handleTouchMove = (event: TouchEvent<Element>): void => {
      if (!xDown || !yDown) {
        return
      }

      const xUp = event.touches[0].clientX
      const yUp = event.touches[0].clientY

      const xDiff = xDown - xUp
      const yDiff = yDown - yUp

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        onSwipe()
        clearSwipeTimeout()
      }
      xDown = 0
      yDown = 0
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    swipeTimeout = setTimeout(() => {
      shouldAutoSwipe && onSwipe()
    }, 8000)

    if (heroElement) {
      heroElement.addEventListener('touchstart', handleTouchStart, { passive: true })
      heroElement.addEventListener('touchmove', handleTouchMove, { passive: true })
    }
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('touchstart', handleTouchStart)
        heroElement.removeEventListener('touchmove', handleTouchMove)
      }
      clearSwipeTimeout()
    }
  }, [heroElementRef, onSwipe])

  const clearSwipeTimeout = () => {
    if (swipeTimeout) {
      clearTimeout(swipeTimeout)
    }
  }

  return <>{children}</>
}

export default HeroSlider
