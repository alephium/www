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
          <h1>Purchace completed! ✅</h1>
          <h2>The funds will be sent to your wallet shortly.</h2>
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
