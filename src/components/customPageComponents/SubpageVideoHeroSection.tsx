import { ReactNode, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'
import { darkTheme } from '../../styles/themes'
import video from '../../videos/lake-bridge-pan.mp4'
import HeroPageSectionContainer from '../Hero/HeroPageSectionContainer'
import TextElement from './TextElement'

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
      <SubpageVideoHeroSectionStyled ref={innerRef} onMouseMove={handleMouseMove}>
        <BackgroundImageWrapper>
          <VideoContainer ref={videoRef} muted playsInline>
            <source src={video} type="video/mp4" />
          </VideoContainer>
        </BackgroundImageWrapper>
        <HeroPageSectionContainer>
          <LeftContentWrapper>
            <LeftContentBackground />
            <TextElementStyled>{children}</TextElementStyled>
          </LeftContentWrapper>
        </HeroPageSectionContainer>
      </SubpageVideoHeroSectionStyled>
    </ThemeProvider>
  )
}

export default SubpageVideoHeroSection

const SubpageVideoHeroSectionStyled = styled.section`
  position: relative;
  height: 80vh;
  margin: auto;
  margin-top: max(10vh, 120px);
  width: 90vw;
  overflow: hidden;
  transition: all 0.4s ease-in;
  display: flex;
  border: 2px solid ${({ theme }) => theme.borderPrimary};
  border-radius: var(--radius-big);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.9);
`

const VideoContainer = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const TextElementStyled = styled(TextElement)`
  > p {
    max-width: 420px;
    color: ${({ theme }) => theme.textSecondary};
    font-weight: var(--fontWeight-semiBold);
    line-height: 1.3;

    @media ${deviceBreakPoints.smallMobile} {
      font-size: 22px;
    }

    * strong {
      color: var(--color-white);
      font-weight: inherit;
    }
  }

  > hr {
    width: 90%;
    height: 3px;
    background-color: ${({ theme }) => theme.textPrimary};
    margin: var(--spacing-5) 0 0;
    border: none;
  }
  z-index: 1;
`

const LeftContentWrapper = styled.div`
  position: absolute;
  top: 5%;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-4);
    top: auto;
    bottom: 5%;
  }
`

const LeftContentBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
  border-radius: var(--radius-big);
  transform: translateX(-30px);
  filter: blur(60px);
  pointer-events: none;
`

const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`
