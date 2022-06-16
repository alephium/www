import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useState, useRef, useLayoutEffect, FC } from 'react'
import styled from 'styled-components'

interface ParallaxWrapperProps {
  speed: number // Between -10 and 10 for good results
  className?: string
}

const ParallaxWrapper: FC<ParallaxWrapperProps> = ({ className, speed = 5, ...props }) => {
  const [elementTop, setElementTop] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useViewportScroll()

  const y = useTransform(scrollY, [elementTop, elementTop + (10 / speed) * 2], [0, -1], {
    clamp: false
  })

  useLayoutEffect(() => {
    const element = ref.current

    if (!element) return

    setElementTop(element.offsetTop)
  }, [ref])

  return <Container className={className} ref={(ref) => ref} {...props} style={{ y }} />
}

const Container = styled(motion.div)``

export default ParallaxWrapper
