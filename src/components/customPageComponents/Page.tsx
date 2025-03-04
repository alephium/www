import { ThemeProvider } from 'styled-components'
import { PageProps } from 'gatsby'

import GlobalStyle from '../../styles/global-style'
import { darkTheme } from '../../styles/themes'

import Seo from '../Seo'
import Footer from '../Footer'
import NavigationMenu from '../NavigationMenu'
import { ReactNode } from 'react'

interface CustomPageProps extends PageProps {
  content: ReactNode
}

const Page = ({ content }: CustomPageProps) => (
  <>
    <Seo />
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <main>
        <NavigationMenu />

        <div>
          {content}

          <Footer />
        </div>
      </main>
    </ThemeProvider>
  </>
)

export default Page
