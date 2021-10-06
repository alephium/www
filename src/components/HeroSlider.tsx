import React, { FC, useEffect, RefObject } from 'react'

interface HeroSliderProps {
  heroElementRef: RefObject<HTMLElement>
  onSwipeRight: () => void
  onSwipeLeft: () => void
}

const HeroSlider: FC<HeroSliderProps> = ({ heroElementRef, onSwipeRight, onSwipeLeft, children }) => {
  let xDown = 0
  let yDown = 0

  useEffect(() => {
    const heroElement = heroElementRef.current

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
  }, [heroElementRef])

  const handleTouchStart = (event: any) => {
    xDown = event.touches[0].clientX
    yDown = event.touches[0].clientY
  }

  const handleTouchMove = (event: any) => {
    if (!xDown || !yDown) {
      return
    }

    var xUp = event.touches[0].clientX
    var yUp = event.touches[0].clientY

    var xDiff = xDown - xUp
    var yDiff = yDown - yUp

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        onSwipeLeft()
      } else {
        onSwipeRight()
      }
    }
    xDown = 0
    yDown = 0
  }

  return <>{children}</>
}

export default HeroSlider
