import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

import HeroContentWrapper from '../components/Hero/HeroContentWrapper'
import HeroPageSectionContainer from '../components/Hero/HeroPageSectionContainer'
import NavigationMenu from '../components/NavigationMenu'
import TextSnippet from '../components/TextSnippet'

import HeroLogo from '../components/Hero/HeroLogo'
import HeroImage from '../components/Hero/HeroImage'

const NotFoundPage = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <main>
      <HeroImage layer="back" slide={0} parallaxSpeed={12} />
      <HeroImage layer="middle" slide={0} parallaxSpeed={8} />
      <HeroImage layer="front" slide={0} parallaxSpeed={2} />
      <HeroPageSectionContainer>
        <div className="navigation-menu-wrapper">
          <NavigationMenu />
        </div>
        <HeroContentWrapper>
          <div className="contents">
            <HeroLogo gradientIndex={0} />
            <h1>404 - Page not found</h1>
            <TextSnippetStyled bigText>
              Let&apos;s go back to the <Link to="/">home page</Link>.
            </TextSnippetStyled>
          </div>
        </HeroContentWrapper>
      </HeroPageSectionContainer>
    </main>
  </ThemeProvider>
)

const TextSnippetStyled = styled(TextSnippet)`
  color: ${({ theme }) => theme.textTertiary};

  a {
    color: ${({ theme }) => theme.textPrimary};
    text-decoration: none;
  }
`

export default NotFoundPage
