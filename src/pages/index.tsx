import React from 'react'

import GlobalStyle from '../styles/global-style'

import PageSectionHero from '../components/PageSectionHero'
import PageSectionIntro from '../components/PageSectionIntro'

import styled from 'styled-components'

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <PageSectionHero></PageSectionHero>
        <PageSectionIntro></PageSectionIntro>
      </main>
    </>
  )
}

export default IndexPage
