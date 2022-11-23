import { motion, useTransform, useScroll, MotionStyle } from 'framer-motion'
import { useRef, FC, useEffect, useState } from 'react'
import { isBrowser, isMobile } from '../utils/misc'

interface ParallaxWrapperProps {
  speed: number // Between -10 and 10 for good results
  shouldZoom?: boolean
  targetedScale?: number
  shouldChangeOpacity?: boolean
  initialOpacity?: number
  targetedOpacity?: number
  shouldRotate?: boolean
  targetedRotation?: number
  translateUpperBound?: number
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
  translateUpperBound,
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [initialDistanceToTop, setInitialDistanceToTop] = useState(0)
  const { scrollY } = useScroll()

  const transformBounds = isBrowser
    ? [initialDistanceToTop - window.innerHeight, initialDistanceToTop + (ref.current?.offsetHeight || 0)]
    : []

  useEffect(() => {
    if (ref.current && !initialDistanceToTop) {
      setInitialDistanceToTop(window.pageYOffset + ref.current.getBoundingClientRect().top)
    }
  }, [initialDistanceToTop])

  const y = useTransform(scrollY, transformBounds, [10 * speed, -10 * speed], {
    clamp: false
  })

  const clampedY = useTransform(y, (v) => (translateUpperBound && v > translateUpperBound ? translateUpperBound : v))

  const zoom = useTransform(scrollY, transformBounds, [0.9, targetedScale])

  const opacity = useTransform(scrollY, transformBounds, [initialOpacity, targetedOpacity])

  const rotation = useTransform(scrollY, transformBounds, [-10, targetedRotation])

  return !isMobile ? (
    <motion.div
      className={className}
      ref={ref}
      {...props}
      style={{
        y: translateUpperBound ? clampedY : y,
        scale: shouldZoom ? zoom : 1,
        opacity: shouldChangeOpacity ? opacity : 1,
        rotate: shouldRotate ? rotation : 0,
        ...style
      }}
    />
  ) : (
    <div ref={ref} {...props} className={className} />
  )
}

export default ParallaxWrapper
