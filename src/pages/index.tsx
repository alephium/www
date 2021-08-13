import React from 'react'

import GlobalStyle from '../styles/global-style'
import PageSection from '../components/PageSection'
import Hero from '../components/Hero'

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Hero></Hero>
      </main>
    </>
  )
}

export default IndexPage
