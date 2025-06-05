import { useEffect, useState } from 'react'
import styled from 'styled-components'

import PageSectionContainer from '../components/PageSectionContainer'
import { ThemeProvider } from '../contexts/ThemeContext'
import GlobalStyle from '../styles/global-style'

const CLOSE_ONRAMP_TAB_DEEP_LINK = 'alephium://close-onramp-tab'

const OnrampCallbackPage = () => {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    if (countdown === 0) {
      window.open(CLOSE_ONRAMP_TAB_DEEP_LINK, '_self')
    } else {
      const interval = setInterval(() => setCountdown(countdown - 1), 1000)

      return () => clearInterval(interval)
    }
  }, [countdown])

  return (
    <ThemeProvider>
      <GlobalStyle />
      <main style={{ height: '100vh' }}>
        <PageSectionContainerStyled>
          <div className="contents">
            <h1>Purchace completed! ✅</h1>
            <h2>The funds will be sent to your wallet shortly.</h2>
            {countdown > 0 && <CountdownText>Redirecting to your wallet in {countdown}...</CountdownText>}
          </div>
        </PageSectionContainerStyled>
      </main>
    </ThemeProvider>
  )
}

export default OnrampCallbackPage

const PageSectionContainerStyled = styled(PageSectionContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const CountdownText = styled.h3`
  color: ${({ theme }) => theme.textSecondary};
`
