import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global-style'
import { darkTheme, lightTheme } from '../styles/themes'

import PageSectionHero from '../components/PageSectionHero'
import PageSectionIntro from '../components/PageSectionIntro'
import PageSectionTechnology from '../components/PageSectionTechnology'
import PageSectionUsability from '../components/PageSectionUsability'
import PageSectionStartNow from '../components/PageSectionStartNow'

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <ThemeProvider theme={darkTheme}>
          <PageSectionHero></PageSectionHero>
          <PageSectionIntro></PageSectionIntro>
          <PageSectionTechnology></PageSectionTechnology>
        </ThemeProvider>
        <ThemeProvider theme={lightTheme}>
          <PageSectionUsability></PageSectionUsability>
          <PageSectionStartNow></PageSectionStartNow>
        </ThemeProvider>
      </main>
    </>
  )
}

export default IndexPage
