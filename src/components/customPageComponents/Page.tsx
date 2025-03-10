import { PageProps } from 'gatsby'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../../styles/global-style'
import { darkTheme } from '../../styles/themes'
import Footer from '../Footer'
import NavigationMenu from '../NavigationMenu'
import Seo, { SeoProps } from '../Seo'

interface CustomPageProps extends PageProps {
  content: ReactNode
  seo?: SeoProps
}

const Page = ({ content, seo }: CustomPageProps) => (
  <>
    <Seo {...seo} />
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
