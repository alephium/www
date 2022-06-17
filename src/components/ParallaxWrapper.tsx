import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useRef, FC } from 'react'
import styled from 'styled-components'
import useElementTop from '../hooks/useElementTop'

interface ParallaxWrapperProps {
  speed: number // Between -10 and 10 for good results
  className?: string
}

const ParallaxWrapper: FC<ParallaxWrapperProps> = ({ className, speed = 5, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useViewportScroll()

  const elementTop = useElementTop(ref)

  const y = useTransform(scrollY, [elementTop, elementTop + (10 / speed) * 2], [0, -1], {
    clamp: false
  })

  return <Container className={className} ref={(ref) => ref} {...props} style={{ y }} />
}

const Container = styled(motion.div)``

export default ParallaxWrapper
