import { motion, useTransform, useViewportScroll, MotionStyle } from 'framer-motion'
import { useRef, FC, useEffect } from 'react'

interface ParallaxWrapperProps {
  speed: number // Between -10 and 10 for good results
  shouldZoom?: boolean
  targetedScale?: number
  shouldChangeOpacity?: boolean
  initialOpacity?: number
  targetedOpacity?: number
  className?: string
  style?: MotionStyle
}

const ParallaxWrapper: FC<ParallaxWrapperProps> = ({
  className,
  speed = 5,
  shouldZoom,
  targetedScale = 1.2,
  shouldChangeOpacity,
  initialOpacity = 1,
  targetedOpacity = 0,
  style,
  ...props
}) => {
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

  const zoom = useTransform(
    scrollY,
    [
      initialDistanceToTop.current - window.innerHeight,
      initialDistanceToTop.current + (ref.current?.offsetHeight || 0)
    ],
    [0.9, targetedScale]
  )

  const opacity = useTransform(
    scrollY,
    [
      initialDistanceToTop.current - window.innerHeight,
      initialDistanceToTop.current + (ref.current?.offsetHeight || 0)
    ],
    [initialOpacity, targetedOpacity]
  )

  return (
    <motion.div
      className={className}
      ref={ref}
      {...props}
      style={{ y, scale: shouldZoom ? zoom : 1, opacity: shouldChangeOpacity ? opacity : 1, ...style }}
    />
  )
}

export default ParallaxWrapper
