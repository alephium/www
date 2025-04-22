import { useEffect } from 'react'
import { useState } from 'react'

// See https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation
interface NetworkInformation extends EventTarget {
  saveData?: boolean
  effectiveType?: string
}

declare global {
  interface Navigator {
    connection?: NetworkInformation
  }
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      // Check for touch support
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

      // Check for mobile user agent
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileUserAgent = /android|webos|iphone|ipad|ipod|iemobile|opera mini/i.test(userAgent)

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // Check for data saver mode and slow connection
      const connection = navigator.connection
      const isDataSaver = connection?.saveData === true
      const isSlowConnection = connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g'

      setIsMobile(hasTouch && (isMobileUserAgent || prefersReducedMotion || isDataSaver || isSlowConnection))
    }

    checkMobile()

    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

export default useIsMobile
