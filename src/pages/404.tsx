import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

import HeroSection from '../components/Hero/HeroSection'
import HeroContentWrapper from '../components/Hero/HeroContentWrapper'
import HeroPageSectionContainer from '../components/Hero/HeroPageSectionContainer'
import NavigationMenu from '../components/NavigationMenu'
import TextSnippet from '../components/TextSnippet'

import LogoWhite from '../images/svgs/logo-white.svg'
import HeroDarkImage from '../images/hero-dark.svg'

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <main>
        <HeroSection>
          <img src={HeroDarkImage} alt="Hero dark" className="hero-image planet" />
          <HeroPageSectionContainer>
            <div className="navigation-menu-wrapper">
              <NavigationMenu />
            </div>
            <HeroContentWrapper>
              <div className="contents">
                <LogoWhite className="logo" />
                <h1>404 - Page not found</h1>
                <TextSnippetStyled bigText>
                  Let's go back to the <Link to="/">home page</Link>.
                </TextSnippetStyled>
              </div>
            </HeroContentWrapper>
          </HeroPageSectionContainer>
        </HeroSection>
      </main>
    </ThemeProvider>
  )
}

const TextSnippetStyled = styled(TextSnippet)`
  color: ${({ theme }) => theme.textTertiary};

  a {
    color: ${({ theme }) => theme.textPrimary};
    text-decoration: none;
  }
`

export default NotFoundPage
