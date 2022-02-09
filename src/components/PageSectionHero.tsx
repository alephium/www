import { FC, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '../styles/themes'
import { deviceBreakPoints } from '../styles/global-style'

import NavigationMenu from './NavigationMenu'
import TextSnippet from './TextSnippet'
import Paginator from './Paginator'
import HeroSlider from './Hero/HeroSlider'
import HeroSection from './Hero/HeroSection'
import HeroContentWrapper from './Hero/HeroContentWrapper'
import HeroPageSectionContainer from './Hero/HeroPageSectionContainer'

import LogoLight from '../images/svgs/logo-dark.svg'
import LogoDark from '../images/svgs/logo-light.svg'
import HeroDarkImage from '../images/hero-dark.svg'
import HeroLightImage from '../images/hero-light.svg'
import Arrow from '../images/svgs/arrow-right.svg'

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
  const [theme, setTheme] = useState('dark')
  const [currentSlide, setCurrentSlide] = useState(1)
  const innerRef = useRef<HTMLElement>(null)
  const themeContent = theme === 'dark' ? content.dark : content.light

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const onSwipe = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    setCurrentSlide(currentSlide === 1 ? 2 : 1)
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <HeroSlider heroElementRef={innerRef} onSwipe={onSwipe}>
        <HeroSection className={className} ref={innerRef}>
          <img src={HeroDarkImage} alt="Hero dark" className={`hero-image planet ${theme === 'light' && 'hidden'}`} />
          <img src={HeroLightImage} alt="Hero light" className={`hero-image ${theme === 'dark' && 'hidden'}`} />
          <HeroPageSectionContainer>
            <div className="navigation-menu-wrapper">
              <NavigationMenu />
            </div>
            <HeroContentWrapper>
              <div className="contents">
                <>
                  {theme === 'dark' ? <LogoDark className="logo" /> : <LogoLight className="logo" />}
                  <h1>{themeContent.title}</h1>
                  <TextSnippetStyled bigText>{themeContent.subtitle}</TextSnippetStyled>
                  <PaginatorStyled
                    onPageClick={toggleTheme}
                    currentPage={currentSlide}
                    setCurrentPage={setCurrentSlide}
                  />
                  <a href="#intro" aria-label="Scroll to the intro section">
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
  margin-top: var(--spacing-11);
  transform: rotate(90deg);

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: var(--spacing-5);
  }
`

const PaginatorStyled = styled(Paginator)`
  margin-top: var(--spacing-11);

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: var(--spacing-5);
  }
`

export default PageSectionHero
