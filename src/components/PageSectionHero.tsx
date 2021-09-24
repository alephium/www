import React, { FC, useRef, useState } from 'react'
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

interface PageSectionHeroProps {
  className?: string
}

let PageSectionHero: FC<PageSectionHeroProps> = ({ className }) => {
  const [theme, setTheme] = useState('dark')
  const [currentSlide, setCurrentSlide] = useState(1)
  const innerRef = useRef<HTMLElement>(null)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const onSwipeRight = () => {
    setTheme('dark')
    setCurrentSlide(1)
  }

  const onSwipeLeft = () => {
    setTheme('light')
    setCurrentSlide(2)
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <HeroSlider heroElementRef={innerRef} onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}>
        <HeroSection className={className} ref={innerRef}>
          <PageSectionContainerStyled>
            <div className="navigation-menu-wrapper">
              <NavigationMenu />
            </div>
            <div className="contents">
              <div>
                {theme === 'dark' ? <Logo className="logo" /> : <LogoYellow className="logo" />}
                <h1>{theme === 'dark' ? `Blockchain v3.0` : `Usability first`}</h1>
                <TextSnippetStyled bigText>
                  {theme === 'dark'
                    ? `Alephium is the first operational sharded blockchain bringing versatility, scalability, and energy
                efficiency to Bitcoin's proven core technologies, while offering much better performances and secure P2P
                smart contracts.`
                    : `Alephium firmly believes that blockchain adoption is only possible if products are built with the user in mind. Your grandma should be able to interact with Alephium, without even knowing it.`}
                </TextSnippetStyled>
                <PaginatorStyled
                  onPageClick={toggleTheme}
                  currentPage={currentSlide}
                  setCurrentPage={setCurrentSlide}
                />
                <a href="#intro">
                  <ArrowDown />
                </a>
              </div>
            </div>
          </PageSectionContainerStyled>
          {theme === 'dark' ? <HeroDarkImage className="hero-image" /> : <HeroLightImage className="hero-image" />}
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
