import React, { FC, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '../styles/themes'
import { deviceBreakPoints } from '../styles/global-style'

import PageSectionContainer from './PageSectionContainer'
import NavigationMenu from './NavigationMenu'
import TextSnippet from './TextSnippet'
import Paginator from './Paginator'

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

  const onPageClick = (page: number) => {
    setTheme(page === 1 ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <HeroSection className={className}>
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
                  : `Alephium firmly believes that blockchain adoption is only possible if products are built with the user in mind. Your grandma should be able to interact with Alephium, without even knowing it. Alephium, without even knowing it.`}
              </TextSnippetStyled>
              <PaginatorStyled onPageClick={onPageClick} />
              <a href="#intro">
                <ArrowDown />
              </a>
            </div>
          </div>
        </PageSectionContainerStyled>
        {theme === 'dark' ? <HeroDarkImage className="hero-image" /> : <HeroLightImage className="hero-image" />}
      </HeroSection>
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
      font-size: var(--fontSize-50);
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

    @media ${deviceBreakPoints.mobile} {
      /* TODO, if needed */
    }

    @media ${deviceBreakPoints.smallMobile} {
      /* TODO, if needed */
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
`

const ArrowDown = styled(Arrow)`
  width: 1.625rem;
  fill: ${({ theme }) => theme.textPrimary};
  margin-top: var(--spacing-11);
  transform: rotate(90deg);
`

const PaginatorStyled = styled(Paginator)`
  margin-top: var(--spacing-11);
`

export default PageSectionHero
