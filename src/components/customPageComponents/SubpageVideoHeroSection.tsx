import { ReactNode, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import useIsMobile from '../../hooks/useIsMobile'
import { darkTheme } from '../../styles/themes'
import SubpageHeroSection from './SubpageHeroSection'

interface SubpageVideoHeroSectionProps {
  video: string
  poster: string
  children: ReactNode
}

const SubpageVideoHeroSection = ({ video, poster, children }: SubpageVideoHeroSectionProps) => {
  const innerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafIdRef = useRef<number | null>(null)
  const pendingTimeRef = useRef(0)

  const isMobile = useIsMobile()

  const [loaded, setLoaded] = useState(false)

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (isMobile) return

    const video = videoRef.current

    if (!video || !video.duration) return

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

  return (
    <ThemeProvider theme={darkTheme}>
      <SubpageHeroSection
        ref={innerRef}
        onPointerMove={!isMobile ? handlePointerMove : undefined}
        mediaContent={
          <PosterWrapper>
            <PosterImg src={poster} $loaded={loaded} />

            {!isMobile && (
              <VideoContainer ref={videoRef} muted playsInline preload="auto" onLoadedData={() => setLoaded(true)}>
                <source src={video} type="video/mp4" />
              </VideoContainer>
            )}
          </PosterWrapper>
        }
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

const PosterImg = styled.img<{ $loaded: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $loaded }) => ($loaded ? 0 : 1)};
  transition: opacity 0.3s ease;
  transform: scale(1.2);
  pointer-events: none;
`

const VideoContainer = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`
