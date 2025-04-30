import { motion } from 'framer-motion'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useEffect, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import useIsMobile from '../../hooks/useIsMobile'
import { darkTheme } from '../../styles/themes'
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
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <SubpageHeroSection
        ref={innerRef}
        onPointerMove={!isMobile ? handlePointerMove : undefined}
        mediaContent={
          <PosterWrapper>
            {poster && !videoLoaded && (
              <PosterImage image={image} alt="" style={{ height: '100%' }} objectFit="cover" />
            )}

            {!isMobile && video?.publicURL && (
              <VideoContainer ref={videoRef} muted playsInline preload="auto">
                <source src={video.publicURL} type="video/mp4" />
              </VideoContainer>
            )}
          </PosterWrapper>
        }
        {...props}
      >
        {children}
      </SubpageHeroSection>
    </ThemeProvider>
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
