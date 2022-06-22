import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useRef, FC, useEffect } from 'react'

interface ParallaxWrapperProps {
  speed: number // Between -10 and 10 for good results
  className?: string
}

const ParallaxWrapper: FC<ParallaxWrapperProps> = ({ className, speed = 5, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const initialDistanceToTop = useRef(0)
  const { scrollY } = useViewportScroll()

  useEffect(() => {
    if (ref.current && !initialDistanceToTop.current) {
      initialDistanceToTop.current = window.pageYOffset + ref.current.getBoundingClientRect().top
    }
  }, [])

  const y = useTransform(
    scrollY,
    [
      initialDistanceToTop.current - window.innerHeight,
      initialDistanceToTop.current + (ref.current?.offsetHeight || 0)
    ],
    [10 * speed, -10 * speed],
    {
      clamp: false
    }
  )

  return <motion.div className={className} ref={ref} {...props} style={{ y }} />
}

export default ParallaxWrapper
