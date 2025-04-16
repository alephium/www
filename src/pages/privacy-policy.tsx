import { graphql, PageProps } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Footer from '../components/Footer'
import NavigationMenu from '../components/NavigationMenu'
import PageSectionContainer from '../components/PageSectionContainer'
import Seo from '../components/Seo'
import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

interface PrivacyPolicyProps extends PageProps {
  data: {
    privacy: {
      nodes: {
        html: string
      }[]
    }
  }
}

const PrivacyPolicy = (props: PrivacyPolicyProps) => (
  <>
    <Seo />
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
    </ThemeProvider>
    <main>
      <ThemeProvider theme={darkTheme}>
        <NavigationMenu />
        <PageSectionContainer style={{ paddingTop: 200, paddingBottom: 200 }}>
          <PrivacyPolicyContent dangerouslySetInnerHTML={{ __html: props.data.privacy.nodes[0].html }} />
        </PageSectionContainer>
        <Footer />
      </ThemeProvider>
    </main>
  </>
)

export default PrivacyPolicy

export const pageQuery = graphql`
  query {
    privacy: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/privacy-policy.md/" } }) {
      nodes {
        html
      }
    }
  }
`

const PrivacyPolicyContent = styled.div`
  p,
  ul {
    color: var(--color-grey-250);
    font-size: var(--fontSize-18);
    line-height: var(--lineHeight-26);
    font-weight: var(--fontWeight-medium);
  }
`
