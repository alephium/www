import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import useIsMobile from '../../hooks/useIsMobile'
import { darkTheme } from '../../styles/themes'
import { getPointerRelativePositionInElement } from '../../utils/pointer'
import GatsbyImageWrapper from '../GatsbyImageWrapper'
import SubpageHeroSection, { SubpageHeroSectionProps } from './SubpageHeroSection'

interface SubpageVideoHeroSectionProps extends Omit<SubpageHeroSectionProps, 'mediaContent'> {
  video?: {
    publicURL: string | null
  } | null
  poster?: {
    readonly childImageSharp: {
      readonly gatsbyImageData: IGatsbyImageData
    } | null
  } | null
}

const SubpageVideoHeroSection = ({ video, poster, children, ...props }: SubpageVideoHeroSectionProps) => {
  const innerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafIdRef = useRef<number | null>(null)
  const pendingTimeRef = useRef(0)
  const currentTimeRef = useRef(0)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const isMobile = useIsMobile()

  const imageData = poster?.childImageSharp?.gatsbyImageData
  const image = imageData ? getImage(imageData) : undefined

  // Add motion values for gradient position
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springX = useSpring(x, { stiffness: 500, damping: 60 })
  const springY = useSpring(y, { stiffness: 500, damping: 60 })

  useEffect(() => {
    if (isMobile || !video?.publicURL) return

    const videoElement = videoRef.current
    if (!videoElement) return

    const handleLoadedData = () => {
      setVideoLoaded(true)
    }

    if (videoElement.readyState >= 2) {
      setVideoLoaded(true)
    } else {
      videoElement.addEventListener('loadeddata', handleLoadedData, { once: true })
    }

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [isMobile, video?.publicURL])

  const updateVideoTime = () => {
    const video = videoRef.current
    if (!video || !video.duration) return

    // Smooth interpolation between current and target time
    const currentTime = currentTimeRef.current
    const targetTime = pendingTimeRef.current
    const delta = targetTime - currentTime

    // Adjust this value to control the inertia strength (lower = more inertia)
    const inertiaFactor = 0.1

    currentTimeRef.current += delta * inertiaFactor

    if (typeof video.fastSeek === 'function') {
      video.fastSeek(currentTimeRef.current)
    } else {
      video.currentTime = currentTimeRef.current
    }

    // Continue animation if we haven't reached the target time
    if (Math.abs(delta) > 0.001) {
      rafIdRef.current = window.requestAnimationFrame(updateVideoTime)
    } else {
      rafIdRef.current = null
    }
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (isMobile) return

    const video = videoRef.current
    if (!video || !video.duration) return

    video.pause()

    const { left, width } = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - left) / width

    pendingTimeRef.current = Math.max(0, Math.min(1, ratio)) * video.duration

    if (!rafIdRef.current) {
      rafIdRef.current = window.requestAnimationFrame(updateVideoTime)
    }

    // Update gradient position
    const { x: positionX, y: positionY } = getPointerRelativePositionInElement(e)
    x.set(positionX, true)
    y.set(positionY, true)
  }

  return (
    <SubpageHeroSection
      ref={innerRef}
      onPointerMove={!isMobile ? handlePointerMove : undefined}
      mediaContent={
        <PosterWrapper>
          {poster && !videoLoaded && <PosterImage image={image} alt="" style={{ height: '100%' }} objectFit="cover" />}

          {!isMobile && video?.publicURL && (
            <VideoContainer ref={videoRef} muted playsInline preload="auto">
              <source src={video.publicURL} type="video/mp4" />
            </VideoContainer>
          )}
          <GradientOverlay
            style={{
              background: useTransform(
                [springX, springY],
                ([x, y]) =>
                  `linear-gradient(${45 + y * 30}deg, 
                      rgba(34, 34, 34, 0.525) 0%,
                      rgba(97, 97, 97, 0.1) ${x * 100}%,
                      ${darkTheme.palette2} ${x * 100 + 10}%,
                      ${darkTheme.palette3} ${x * 100 + 20}%,
                      rgba(77, 77, 77, 0.2) ${x * 100 + 30}%,
                      ${darkTheme.palette4} ${x * 100 + 40}%,
                      transparent 100%
                    )`
              )
            }}
          />
          <GradientOverlay
            style={{
              background: useTransform(
                [springX, springY],
                ([x, y]) =>
                  `linear-gradient(${135 + y * 30}deg,
                      ${darkTheme.palette4} 0%,
                      rgba(130, 130, 130, 0.15) ${x * 100 - 20}%,
                      ${darkTheme.palette1} ${x * 100}%,
                      ${darkTheme.palette2} ${x * 100 + 15}%,
                      rgba(94, 94, 94, 0.1) ${x * 100 + 30}%,
                      rgba(24, 24, 24, 0.204) 100%,
                    )`
              ),
              mixBlendMode: 'multiply',
              opacity: 0.1
            }}
          />
        </PosterWrapper>
      }
      {...props}
    >
      {children}
    </SubpageHeroSection>
  )
}

export default SubpageVideoHeroSection

const PosterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const VideoContainer = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  pointer-events: auto;
`

const PosterImage = styled(motion(GatsbyImageWrapper))`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`

const GradientOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
  opacity: 0.2;
  mix-blend-mode: overlay;
  transition: opacity 0.3s ease;
`
