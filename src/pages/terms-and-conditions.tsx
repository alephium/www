import { graphql, PageProps } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Footer from '../components/Footer'
import NavigationMenu from '../components/NavigationMenu'
import PageSectionContainer from '../components/PageSectionContainer'
import Seo from '../components/Seo'
import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

interface TermsAndConditionsProps extends PageProps {
  data: {
    tc: {
      nodes: {
        html: string
      }[]
    }
  }
}

const TermsAndConditions = (props: TermsAndConditionsProps) => (
  <>
    <Seo
      title="Terms of Use | Alephium Tools"
      description="Review the terms and conditions for using Alephium’s wallets, explorer, and bridge. Transparency and user control come first."
    />
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
    </ThemeProvider>
    <main>
      <ThemeProvider theme={darkTheme}>
        <NavigationMenu />
        <PageSectionContainer style={{ paddingTop: 200, paddingBottom: 200 }}>
          <TermsAndConditionsContent dangerouslySetInnerHTML={{ __html: props.data.tc.nodes[0].html }} />
        </PageSectionContainer>
        <Footer />
      </ThemeProvider>
    </main>
  </>
)

export default TermsAndConditions

export const pageQuery = graphql`
  query {
    tc: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/terms-and-conditions.md/" } }) {
      nodes {
        html
      }
    }
  }
`

const TermsAndConditionsContent = styled.div`
  p,
  ul {
    color: var(--color-grey-250);
    font-size: var(--fontSize-18);
    line-height: var(--lineHeight-26);
    font-weight: var(--fontWeight-medium);
  }
`
