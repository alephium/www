import { useCallback, useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] => {
  const { threshold = 0.1, rootMargin = '0px', freezeOnceVisible = false } = options
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const frozen = useRef(false)

  const updateIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (frozen.current) return

      const isElementIntersecting = entry.isIntersecting
      setIsIntersecting(isElementIntersecting)

      if (isElementIntersecting && freezeOnceVisible) {
        frozen.current = true
      }
    },
    [freezeOnceVisible]
  )

  useEffect(() => {
    const node = ref?.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || !node) return

    const observerParams = { threshold, rootMargin }
    const observer = new IntersectionObserver(updateIntersection, observerParams)

    observer.observe(node)

    return () => observer.disconnect()
  }, [ref, threshold, rootMargin, updateIntersection])

  return [ref, isIntersecting]
}

export default useIntersectionObserver
