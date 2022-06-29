import { useState, MutableRefObject, useEffect } from 'react'

const useElementDistanceToTop = (ref: MutableRefObject<HTMLDivElement | null>) => {
  const [elementTop, setElementTop] = useState(0)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const onScroll = () => setElementTop(element.getBoundingClientRect().top)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ref])

  return elementTop
}

export default useElementDistanceToTop
