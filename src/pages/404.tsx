import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import HeroImage from '../components/Hero/HeroImage'
import HeroLogo from '../components/Hero/HeroLogo'
import NavigationMenu from '../components/NavigationMenu'
import PageSectionContainer from '../components/PageSectionContainer'
import TextSnippet from '../components/TextSnippet'
import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

const NotFoundPage = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <main style={{ height: '100vh' }}>
      <HeroImage layer="back" slide={0} parallaxSpeed={12} />
      <HeroImage layer="middle" slide={0} parallaxSpeed={8} />
      <HeroImage layer="front" slide={0} parallaxSpeed={2} />
      <PageSectionContainer>
        <div className="navigation-menu-wrapper">
          <NavigationMenu />
        </div>
        <CenteredContainer>
          <div className="contents">
            <HeroLogo gradientIndex={0} />
            <h1>404</h1>
            <h2>Oops! Looks like this block got orphaned...</h2>

            <TextSnippetStyled bigText>
              Go back <Link to="/">home</Link> before this fork gets any weirder!
            </TextSnippetStyled>
          </div>
        </CenteredContainer>
      </PageSectionContainer>
    </main>
  </ThemeProvider>
)

export default NotFoundPage

const TextSnippetStyled = styled(TextSnippet)`
  color: ${({ theme }) => theme.textTertiary};

  a {
    color: ${({ theme }) => theme.textPrimary};
    text-decoration: none;
  }
`

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
