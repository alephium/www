import { FC, useEffect, RefObject, TouchEvent } from 'react'

interface HeroSliderProps {
  heroElementRef: RefObject<HTMLElement>
  onSwipe: () => void
}

const HeroSlider: FC<HeroSliderProps> = ({ heroElementRef, onSwipe, children }) => {
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
      }
      xDown = 0
      yDown = 0
    }

    if (heroElement) {
      heroElement.addEventListener('touchstart', handleTouchStart, { passive: true })
      heroElement.addEventListener('touchmove', handleTouchMove, { passive: true })
    }
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('touchstart', handleTouchStart)
        heroElement.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [heroElementRef, onSwipe])

  return <>{children}</>
}

export default HeroSlider
