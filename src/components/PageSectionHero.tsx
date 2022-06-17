import { FC, useRef, useState } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import { darkTheme } from '../styles/themes'
import { deviceBreakPoints } from '../styles/global-style'

import NavigationMenu from './NavigationMenu'
import TextSnippet from './TextSnippet'
import Paginator from './Paginator'
import HeroSlider from './Hero/HeroSlider'
import HeroSection from './Hero/HeroSection'
import HeroContentWrapper from './Hero/HeroContentWrapper'
import HeroPageSectionContainer from './Hero/HeroPageSectionContainer'

import HeroDarkFrontImage from '../images/hero-dark-front.svg'
import HeroDarkMiddleImage from '../images/hero-dark-middle.svg'
import HeroDarkBackImage from '../images/hero-dark-back.svg'
import HeroLightImage from '../images/hero-light.svg'
import Arrow from '../images/svgs/arrow-right.svg'
import ParallaxWrapper from './ParallaxWrapper'
import { motion } from 'framer-motion'
import AlephiumLogo from './AlephiumLogo'

export interface PageSectionHeroContentType {
  dark: {
    title: string
    subtitle: string
  }
  light: {
    title: string
    subtitle: string
  }
}

interface PageSectionHeroProps {
  className?: string
  content: PageSectionHeroContentType
}

const PageSectionHero: FC<PageSectionHeroProps> = ({ className, content }) => {
  const [slide, setSlide] = useState<0 | 1>(0)
  const innerRef = useRef<HTMLElement>(null)
  const themeContent = slide === 0 ? content.dark : content.light

  const toggleSlide = () => {
    setSlide(slide === 0 ? 1 : 0)
  }

  const onSwipe = () => {
    setSlide(slide === 0 ? 1 : 0)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <HeroSlider heroElementRef={innerRef} onSwipe={onSwipe}>
        <HeroSection className={className} ref={innerRef}>
          <ParallaxWrapper className="hero-image-container" speed={3}>
            <img src={HeroLightImage} alt="Hero light" className={`hero-image`} />
          </ParallaxWrapper>

          <Mask
            animate={{ opacity: slide === 1 ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="hero-image-container"
          >
            <ParallaxWrapper className="hero-image-container" speed={-4}>
              <img src={HeroDarkBackImage} alt="Hero dark back" className="hero-image" />
            </ParallaxWrapper>
            <ParallaxWrapper className="hero-image-container" speed={1}>
              <img src={HeroDarkMiddleImage} className="hero-image" alt="Hero dark front" />
            </ParallaxWrapper>
            <ParallaxWrapper className="hero-image-container" speed={3}>
              <img src={HeroDarkFrontImage} className="hero-image" alt="Hero dark front" />
            </ParallaxWrapper>
          </Mask>

          <HeroPageSectionContainer>
            <div className="navigation-menu-wrapper">
              <NavigationMenu />
            </div>
            <HeroContentWrapper>
              <div className="contents">
                <>
                  <StyledLogo gradientIndex={slide} />

                  <h1>{themeContent.title}</h1>
                  <TextSnippetStyled bigText>{themeContent.subtitle}</TextSnippetStyled>
                  <PaginatorStyled onPageClick={toggleSlide} currentPage={slide} setCurrentPage={setSlide} />
                  <a
                    href="#intro"
                    aria-label="Scroll to the intro section"
                    data-goatcounter-click="hero-section:arrow-down"
                  >
                    <ArrowDown />
                  </a>
                </>
              </div>
            </HeroContentWrapper>
          </HeroPageSectionContainer>
        </HeroSection>
      </HeroSlider>
    </ThemeProvider>
  )
}

const Mask = styled(motion.div)`
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgSecondary};
`

const StyledLogo = styled(AlephiumLogo)`
  width: 6rem;
  min-height: 5rem;

  @media ${deviceBreakPoints.smallMobile} {
    width: 3rem;
  }
`

const TextSnippetStyled = styled(TextSnippet)`
  max-width: var(--width-564);
  color: ${({ theme }) => theme.textTertiary};

  // Fixing the height to 4 lines of text helps provide a smooth transition when the text is updated
  height: calc(var(--lineHeight-26) * 4);

  @media ${deviceBreakPoints.smallMobile} {
    height: calc(var(--lineHeight-26) * 8);
  }
`

const ArrowDown = styled(Arrow)`
  width: 1.625rem;
  fill: ${({ theme }) => theme.textPrimary};
  transform: rotate(90deg);

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: var(--spacing-5);
  }
`

const PaginatorStyled = styled(Paginator)`
  margin-top: var(--spacing-11);
  margin-bottom: var(--spacing-11);

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: var(--spacing-5);
  }
`

export default PageSectionHero
