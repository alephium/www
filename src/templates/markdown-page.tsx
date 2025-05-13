import styled, { ThemeProvider } from 'styled-components'

import TextElement from '../components/customPageComponents/TextElement'
import Footer from '../components/Footer'
import { MetaSeo, MetaSeoProps } from '../components/MetaSeo'
import NavigationMenu from '../components/NavigationMenu'
import PageSectionContainer from '../components/PageSectionContainer'
import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

interface MarkdownPageProps {
  seo: MetaSeoProps
  html: string
}

const MarkdownPage = ({ seo, html }: MarkdownPageProps) => (
  <>
    <MetaSeo {...seo} />
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
    </ThemeProvider>
    <main>
      <ThemeProvider theme={darkTheme}>
        <NavigationMenu />
        <PageSectionContainer style={{ paddingTop: 200, paddingBottom: 200 }}>
          <TextElementStyled dangerouslySetInnerHTML={{ __html: html }} />
        </PageSectionContainer>
        <Footer />
      </ThemeProvider>
    </main>
  </>
)

export default MarkdownPage

const TextElementStyled = styled(TextElement)`
  p,
  ul {
    font-size: var(--fontSize-22);
    font-weight: var(--fontWeight-normal);
    max-width: none;
  }
`
