import { ReactNode, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { darkTheme } from '../../styles/themes'
import video from '../../videos/lake-pan-scrub.mp4'
import SubpageHeroSection from './SubpageHeroSection'

interface SubpageVideoHeroSectionProps {
  children: ReactNode
}

const SubpageVideoHeroSection = ({ children }: SubpageVideoHeroSectionProps) => {
  const innerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const rafIdRef = useRef<number | null>(null)
  const pendingTimeRef = useRef<number>(0)

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const video = videoRef.current
    if (!video || !video.duration) return

    const { left, width } = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - left) / width
    pendingTimeRef.current = Math.max(0, Math.min(1, ratio)) * video.duration

    if (rafIdRef.current == null) {
      rafIdRef.current = window.requestAnimationFrame(() => {
        const seekTo = pendingTimeRef.current
        if (typeof (video as any).fastSeek === 'function') {
          ;(video as any).fastSeek(seekTo)
        } else {
          video.currentTime = seekTo
        }
        rafIdRef.current = null
      })
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <SubpageHeroSection
        ref={innerRef}
        onPointerMove={handlePointerMove}
        mediaContent={
          <VideoContainer ref={videoRef} muted playsInline preload="auto">
            <source src={video} type="video/mp4" />
          </VideoContainer>
        }
      >
        {children}
      </SubpageHeroSection>
    </ThemeProvider>
  )
}

export default SubpageVideoHeroSection

const VideoContainer = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
