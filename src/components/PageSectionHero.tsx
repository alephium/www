import { FC, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '../styles/themes'
import { deviceBreakPoints } from '../styles/global-style'

import PageSectionContainer from './PageSectionContainer'
import NavigationMenu from './NavigationMenu'
import TextSnippet from './TextSnippet'
import Paginator from './Paginator'
import HeroSlider from './HeroSlider'

import Logo from '../images/svgs/logo.svg'
import LogoYellow from '../images/svgs/logo-yellow.svg'
import HeroDarkImage from '../images/svgs/hero-dark.svg'
import HeroLightImage from '../images/svgs/hero-light.svg'
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
          <PageSectionContainerStyled>
            <div className="navigation-menu-wrapper">
              <NavigationMenu />
            </div>
            <div className="contents">
              <div>
                {theme === 'dark' ? <Logo className="logo" /> : <LogoYellow className="logo" />}
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
              </div>
            </div>
          </PageSectionContainerStyled>
          {theme === 'dark' ? (
            <HeroDarkImage className="hero-image planet" />
          ) : (
            <HeroLightImage className="hero-image" />
          )}
        </HeroSection>
      </HeroSlider>
    </ThemeProvider>
  )
}

const HeroSection = styled.section`
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.bgPrimary};
  transition: all 0.25s linear;

  .navigation-menu-wrapper {
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: var(--fontSize-70);
    color: ${({ theme }) => theme.textPrimary};
    font-weight: var(--fontWeight-bold);

    @media ${deviceBreakPoints.smallMobile} {
      font-size: var(--fontSize-36);
    }
  }

  .contents {
    display: flex;
    align-items: center;
    height: 100%;
    flex-grow: 1;
    z-index: 1;

    .text-content {
      @media ${deviceBreakPoints.mobile} {
        color: ${({ theme }) => theme.textPrimary};
      }
    }
  }

  .logo {
    width: 6rem;

    @media ${deviceBreakPoints.smallMobile} {
      width: 3rem;
    }
  }

  .hero-image {
    position: absolute;
    right: 0;
    bottom: 0;
    width: auto;

    @media ${deviceBreakPoints.mobile} {
      &.planet {
        filter: brightness(0.5);
      }
    }
  }
`

const PageSectionContainerStyled = styled(PageSectionContainer)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const TextSnippetStyled = styled(TextSnippet)`
  max-width: var(--width-564);
  color: ${({ theme }) => theme.textTertiary};

  // Fixing the height to 4 lines of text helps provide a smooth transition when the text is updated
  height: calc(var(--lineHeight-26) * 4);

  @media ${deviceBreakPoints.smallMobile} {
    height: calc(var(--lineHeight-26) * 7);
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
