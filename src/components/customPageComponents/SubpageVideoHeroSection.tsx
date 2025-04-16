import { ReactNode, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { darkTheme } from '../../styles/themes'
import video from '../../videos/lake-bridge-pan.mp4'
import SubpageHeroSection from './SubpageHeroSection'

interface SubpageVideoHeroSectionProps {
  children: ReactNode
}

const SubpageVideoHeroSection = ({ children }: SubpageVideoHeroSectionProps) => {
  const innerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (videoRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect()
      const relativeX = e.clientX - bounds.left
      const ratio = relativeX / bounds.width
      const duration = videoRef.current.duration
      if (duration) {
        videoRef.current.currentTime = ratio * duration
      }
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <SubpageHeroSection
        ref={innerRef}
        onMouseMove={handleMouseMove}
        mediaContent={
          <VideoContainer ref={videoRef} muted playsInline>
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
