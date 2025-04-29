import { motion, useAnimation } from 'framer-motion'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useEffect, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import useIsMobile from '../../hooks/useIsMobile'
import { darkTheme } from '../../styles/themes'
import GatsbyImageWrapper from '../GatsbyImageWrapper'
import SubpageHeroSection, { SubpageHeroSectionProps } from './SubpageHeroSection'

const TRANSITION_DURATION_MS = 1500

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
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafIdRef = useRef<number | null>(null)
  const pendingTimeRef = useRef(0)
  const isHoveringRef = useRef(false)
  const [firstFrameCaptured, setFirstFrameCaptured] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoControls = useAnimation()
  const canvasControls = useAnimation()

  const isMobile = useIsMobile()

  const imageData = poster?.childImageSharp?.gatsbyImageData
  const image = imageData ? getImage(imageData) : undefined

  useEffect(() => {
    if (isMobile || !video?.publicURL) return

    const videoElement = videoRef.current
    const canvas = canvasRef.current
    if (!videoElement || !canvas) return

    const captureFirstFrame = () => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.width = videoElement.videoWidth
      canvas.height = videoElement.videoHeight

      ctx.drawImage(videoElement, 0, 0, videoElement.videoWidth, videoElement.videoHeight)
      setFirstFrameCaptured(true)
    }

    const startAnimation = () => {
      videoElement.currentTime = 0
      videoElement.addEventListener('seeked', captureFirstFrame, { once: true })
      videoElement.playbackRate = 0.5
      videoElement.play().catch(console.error)
    }

    const handleTimeUpdate = () => {
      const duration = videoElement.duration
      const currentTime = videoElement.currentTime
      const timeUntilEnd = duration - currentTime

      // Start fade 1.5 seconds before the video ends, but only if not hovering
      if (timeUntilEnd <= TRANSITION_DURATION_MS / 1000 && !isHoveringRef.current) {
        // Start both animations simultaneously for crossfade effect
        videoControls.start({
          opacity: 0,
          transition: {
            duration: TRANSITION_DURATION_MS / 1000,
            onComplete: () => {
              if (!isHoveringRef.current) {
                videoElement.currentTime = 0
                videoElement.pause()
              }
            }
          }
        })
        canvasControls.start({ opacity: 1, transition: { duration: TRANSITION_DURATION_MS / 1000 } })
      }
    }

    const handleLoadedData = () => {
      setVideoLoaded(true)
      startAnimation()
    }

    if (videoElement.readyState >= 2) {
      setVideoLoaded(true)
      startAnimation()
    } else {
      videoElement.addEventListener('loadeddata', handleLoadedData, { once: true })
    }

    videoElement.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData)
      videoElement.removeEventListener('timeupdate', handleTimeUpdate)
      videoElement.removeEventListener('seeked', captureFirstFrame)
    }
  }, [isMobile, video?.publicURL, videoControls, canvasControls])

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (isMobile) return

    const video = videoRef.current
    if (!video || !video.duration) return

    isHoveringRef.current = true
    video.pause()

    // Start both animations simultaneously for crossfade effect
    videoControls.start({ opacity: 1 })
    canvasControls.start({ opacity: 0 })

    const { left, width } = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - left) / width

    pendingTimeRef.current = Math.max(0, Math.min(1, ratio)) * video.duration

    if (!rafIdRef.current) {
      rafIdRef.current = window.requestAnimationFrame(() => {
        const seekTo = pendingTimeRef.current

        if (typeof video.fastSeek === 'function') {
          video.fastSeek(seekTo)
        } else {
          video.currentTime = seekTo
        }

        rafIdRef.current = null
      })
    }
  }

  const handlePointerLeave = () => {
    if (isMobile) return
    isHoveringRef.current = false
    const video = videoRef.current
    if (video) {
      video.play().catch(console.error)
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <SubpageHeroSection
        ref={innerRef}
        onPointerMove={!isMobile ? handlePointerMove : undefined}
        onPointerLeave={!isMobile ? handlePointerLeave : undefined}
        mediaContent={
          <PosterWrapper>
            {poster && (!videoLoaded || !firstFrameCaptured) && (
              <PosterImage image={image} alt="" style={{ height: '100%' }} objectFit="cover" />
            )}

            {!isMobile && video?.publicURL && (
              <>
                <MotionFirstFrameCanvas ref={canvasRef} initial={{ opacity: 0 }} animate={canvasControls} />
                <MotionVideoContainer
                  ref={videoRef}
                  muted
                  playsInline
                  preload="auto"
                  initial={{ opacity: 1 }}
                  animate={videoControls}
                >
                  <source src={video.publicURL} type="video/mp4" />
                </MotionVideoContainer>
              </>
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

const MotionVideoContainer = styled(motion.video)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  pointer-events: auto;
`

const MotionFirstFrameCanvas = styled(motion.canvas)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
  aspect-ratio: 16/9;
`

const PosterImage = styled(motion(GatsbyImageWrapper))`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`
