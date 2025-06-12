import { PageProps } from 'gatsby'
import { ReactNode } from 'react'
import styled from 'styled-components'

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
      <PageContainer>
        <NavigationMenu floating={floatingMenu} />

        <ContentContainer>{content}</ContentContainer>

        <Footer />
      </PageContainer>
    </ThemeProvider>
  </>
)

export default Page

const PageContainer = styled.main``

const ContentContainer = styled.div`
  padding-top: var(--spacing-16);
`
