import type { MutableRefObject } from 'react'
import { useLayoutEffect, useRef, useState } from 'react'

export const useRefScrollProgress = (watch?: unknown): [MutableRefObject<HTMLDivElement | null>, number, number] => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)

  useLayoutEffect(() => {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const offsetTop = rect.top + scrollTop - window.innerHeight

    setStart(offsetTop / document.body.clientHeight)
    setEnd((offsetTop + rect.height) / document.body.clientHeight)
  }, [watch])

  return [ref, start, end]
}
