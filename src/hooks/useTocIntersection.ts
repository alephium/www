import { useCallback, useEffect, useRef, useState } from 'react'

interface TocItem {
  id: string
  title: string
  level: number
  element: HTMLElement
}

export const useTocIntersection = (tocItems: TocItem[]) => {
  const [activeId, setActiveId] = useState<string>('')
  const [highlightedId, setHighlightedId] = useState<string>('')
  const activeIdRef = useRef<string>('')

  const handleScroll = useCallback(() => {
    if (tocItems.length === 0) return

    const scrollPosition = window.scrollY
    let currentSection = ''

    for (let i = 0; i < tocItems.length; i++) {
      const element = document.getElementById(tocItems[i].id)
      if (element) {
        const elementTop = element.offsetTop
        if (elementTop <= scrollPosition) {
          currentSection = tocItems[i].id
        } else {
          break
        }
      }
    }

    if (currentSection && currentSection !== activeIdRef.current) {
      activeIdRef.current = currentSection
      setActiveId(currentSection)
    }
  }, [tocItems])

  useEffect(() => {
    if (tocItems.length === 0) return

    if (tocItems.length > 0) {
      activeIdRef.current = tocItems[0].id
      setActiveId(tocItems[0].id)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [tocItems, handleScroll])

  const handleClick = useCallback((id: string) => {
    setHighlightedId(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    setTimeout(() => {
      setHighlightedId('')
    }, 1000)
  }, [])

  return {
    activeId,
    highlightedId,
    handleClick
  }
}
