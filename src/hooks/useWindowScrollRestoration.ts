import { useEffect } from 'react'

interface UseScrollRestorationOptions {
  key: string
  enabled?: boolean
}

export const useWindowScrollRestoration = ({ key, enabled = true }: UseScrollRestorationOptions) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    const storageKey = `scroll-position-${key}`

    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem(storageKey)
      if (savedPosition) {
        const scrollTop = parseInt(savedPosition, 10)
        window.scrollTo(0, scrollTop)
      }
    }

    const handleScroll = () => {
      sessionStorage.setItem(storageKey, window.scrollY.toString())
    }

    const timeoutId = setTimeout(restoreScrollPosition, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [key, enabled])
}

export default useWindowScrollRestoration
