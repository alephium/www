import styled, { ThemeProvider } from 'styled-components'

import PageSectionContainer from '../components/PageSectionContainer'
import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

const GrantApplicationCallbackPage = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <main style={{ height: '100vh' }}>
      <PageSectionContainerStyled>
        <div>
          <h1>Thank you for completing your grant application! ✅</h1>
          <H2>
            We will review it as soon as possible. The next steps will be communicated to you via email or Telegram.
          </H2>
        </div>
      </PageSectionContainerStyled>
    </main>
  </ThemeProvider>
)

export default GrantApplicationCallbackPage

const PageSectionContainerStyled = styled(PageSectionContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.textSecondary};
`
