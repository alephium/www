import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

const NotFoundPage = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
      </ThemeProvider>
      <main>
        <h1>Page not found</h1>
      </main>
    </>
  )
}

export default NotFoundPage
