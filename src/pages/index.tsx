import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global-style'
import { darkTheme, lightTheme } from '../styles/themes'

import Seo from '../components/Seo'
import PageSectionHero from '../components/PageSectionHero'
import PageSectionIntro from '../components/PageSectionIntro'
import PageSectionTechnology from '../components/PageSectionTechnology'
import PageSectionUsability from '../components/PageSectionUsability'
import PageSectionStartNow from '../components/PageSectionStartNow'
import PageSectionFollowUs from '../components/PageSectionFollowUs'
import Footer from '../components/Footer'

const IndexPage = () => {
  return (
    <>
      <Seo />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
      </ThemeProvider>
      <main>
        <ThemeProvider theme={darkTheme}>
          <PageSectionHero />
          <PageSectionIntro />
          <PageSectionTechnology />
        </ThemeProvider>
        <ThemeProvider theme={lightTheme}>
          <PageSectionUsability />
          <PageSectionStartNow />
          <PageSectionFollowUs />
        </ThemeProvider>
        <ThemeProvider theme={darkTheme}>
          <Footer />
        </ThemeProvider>
      </main>
    </>
  )
}

export default IndexPage
