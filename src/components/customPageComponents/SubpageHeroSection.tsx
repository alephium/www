import { useInView } from 'framer-motion'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ReactNode, useRef } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'
import { darkTheme } from '../../styles/themes'
import HeroPageSectionContainer from '../Hero/HeroPageSectionContainer'
import TextElement from './TextElement'
import GatsbyImageWrapper from '../GatsbyImageWrapper'

interface SubpageHeroSectionProps {
  children: ReactNode
  renderAdditionalContent?: (inView: boolean) => ReactNode
  backgroundImage?: IGatsbyImageData
  backgroundImageAlt?: string
}

const SubpageHeroSection = ({
  children,
  renderAdditionalContent,
  backgroundImage,
  backgroundImageAlt = ''
}: SubpageHeroSectionProps) => {
  const innerRef = useRef<HTMLElement>(null)
  const inView = useInView(innerRef)

  return (
    <ThemeProvider theme={darkTheme}>
      <SubpageHeroSectionStyled ref={innerRef}>
        {backgroundImage && (
          <BackgroundImageWrapper>
            <GatsbyImageWrapper
              image={backgroundImage}
              alt={backgroundImageAlt}
              style={{ height: '100%', width: '100%' }}
              objectFit="cover"
            />
            <BackgroundOverlay />
          </BackgroundImageWrapper>
        )}
        <HeroPageSectionContainer>
          <LeftContentWrapper>
            <TextElementStyled>{children}</TextElementStyled>
          </LeftContentWrapper>
        </HeroPageSectionContainer>

        {renderAdditionalContent && renderAdditionalContent(inView)}
      </SubpageHeroSectionStyled>
    </ThemeProvider>
  )
}

export default SubpageHeroSection

const SubpageHeroSectionStyled = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  transition: all 0.4s ease-in;
  display: flex;
`

const TextElementStyled = styled(TextElement)`
  > h1 {
    font-size: 54px;

    @media ${deviceBreakPoints.mobile} {
      font-size: 48px;
    }

    @media ${deviceBreakPoints.smallMobile} {
      font-size: 32px;
    }
  }

  > p {
    max-width: var(--width-564);

    color: ${({ theme }) => theme.textSecondary};
    font-weight: var(--fontWeight-light);
    line-height: 1.3;

    @media ${deviceBreakPoints.smallMobile} {
      font-size: 22px;
    }
  }

  > hr {
    width: 50px;
    height: 4px;
    background-color: ${({ theme }) => theme.textPrimary};
    margin: var(--spacing-5) 0 0;
    border: none;
  }
`

const LeftContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-4);
    top: 55%;
  }

  @media ${deviceBreakPoints.smallMobile} {
    padding: var(--spacing-4);
    top: 60%;
  }
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

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.85) 100%);
  backdrop-filter: blur(10px);
  z-index: 1;
`
