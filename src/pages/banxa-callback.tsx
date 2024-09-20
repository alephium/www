import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

import PageSectionContainer from '../components/PageSectionContainer'

const BanxaCallbackPage = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <main style={{ height: '100vh' }}>
      <PageSectionContainerStyled>
        <div className="contents">
          <h1>Returning to your wallet...</h1>
        </div>
      </PageSectionContainerStyled>
    </main>
  </ThemeProvider>
)

export default BanxaCallbackPage

const PageSectionContainerStyled = styled(PageSectionContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`
