import styled, { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle from '../../styles/global-style'
import { darkTheme } from '../../styles/themes'

import Seo from '../../components/Seo'
import HackathonLandingSection, { HackathonLandingSectionContentType } from './HackathonLandingSection'
import SectionDivider from '../../components/SectionDivider'
import HackathonIntroSection, { HackathonIntroSectionContentType } from './HackathonIntroSection'

interface HackathonPageProps extends PageProps {
  data: {
    hackathon: {
      nodes: {
        frontmatter: {
          headerLandingSection: HackathonLandingSectionContentType
          introSection: HackathonIntroSectionContentType
        }
      }[]
    }
  }
}

const IndexPage = (props: HackathonPageProps) => {
  const pageContent = props.data.hackathon.nodes[0].frontmatter

  return (
    <Wrapper>
      <Seo />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
      </ThemeProvider>
      <ThemeProvider theme={darkTheme}>
        <HackathonLandingSection content={pageContent.headerLandingSection} />
        <SectionDivider />
      </ThemeProvider>
      <ThemeProvider theme={darkTheme}>
        <HackathonIntroSection content={pageContent.introSection} />
      </ThemeProvider>
    </Wrapper>
  )
}

export default IndexPage

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  font-size: 18px; // Slighty increase base font size for marketing content
  line-height: 24px;
`

export const pageQuery = graphql`
  query {
    hackathon: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hackathon.md/" } }) {
      nodes {
        frontmatter {
          headerLandingSection {
            tagline
            title
            date
          }
          introSection {
            title
            subtitle
            description
          }
        }
      }
    }
  }
`
