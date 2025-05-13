import { PageProps } from 'gatsby'
import { ReactNode } from 'react'

import { ThemeProvider } from '../../contexts/ThemeContext'
import GlobalStyle from '../../styles/global-style'
import Footer from '../Footer'
import { MetaSeo, MetaSeoProps } from '../MetaSeo'
import NavigationMenu from '../NavigationMenu'

interface CustomPageProps extends PageProps {
  content: ReactNode
  floatingMenu?: boolean
  seo?: MetaSeoProps
}

const Page = ({ content, seo, floatingMenu = true }: CustomPageProps) => (
  <>
    <MetaSeo {...seo} />
    <ThemeProvider>
      <GlobalStyle />
      <main>
        <NavigationMenu floating={floatingMenu} />

        <div>
          {content}

          <Footer />
        </div>
      </main>
    </ThemeProvider>
  </>
)

export default Page
