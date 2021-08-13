import * as React from 'react'

import GlobalStyle from '../styles/global-style'

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
}

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main style={pageStyles}>
        <title>Alephium</title>
        <h1 style={headingStyles}>Alephium</h1>
      </main>
    </>
  )
}

export default IndexPage
