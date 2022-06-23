import { motion, useTransform, useViewportScroll, MotionStyle } from 'framer-motion'
import { useRef, FC, useLayoutEffect } from 'react'
import { isBrowser } from '../utils/misc'

interface ParallaxWrapperProps {
  speed: number // Between -10 and 10 for good results
  shouldZoom?: boolean
  targetedScale?: number
  shouldChangeOpacity?: boolean
  initialOpacity?: number
  targetedOpacity?: number
  shouldRotate?: boolean
  targetedRotation?: number
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
  shouldRotate,
  targetedRotation = 90,
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const initialDistanceToTop = useRef(0)
  const { scrollY } = useViewportScroll()

  const transformBounds = isBrowser
    ? [
        initialDistanceToTop.current - window.innerHeight,
        initialDistanceToTop.current + (ref.current?.offsetHeight || 0)
      ]
    : []

  useLayoutEffect(() => {
    if (ref.current && !initialDistanceToTop.current) {
      initialDistanceToTop.current = ref.current.getBoundingClientRect().top
    }
  }, [])

  console.log(initialDistanceToTop.current)
  console.log(scrollY.get())

  const y = useTransform(scrollY, transformBounds, [10 * speed, -10 * speed], {
    clamp: false
  })

  const zoom = useTransform(scrollY, transformBounds, [0.9, targetedScale])

  const opacity = useTransform(scrollY, transformBounds, [initialOpacity, targetedOpacity])

  const rotation = useTransform(scrollY, transformBounds, [-10, targetedRotation])

  return (
    <motion.div
      className={className}
      ref={ref}
      {...props}
      style={{
        y,
        scale: shouldZoom ? zoom : 1,
        opacity: shouldChangeOpacity ? opacity : 1,
        rotate: shouldRotate ? rotation : 0,
        ...style
      }}
    />
  )
}

export default ParallaxWrapper
