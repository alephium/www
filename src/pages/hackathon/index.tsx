import styled, { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle from '../../styles/global-style'
import { darkTheme } from '../../styles/themes'

import Seo from '../../components/Seo'
import HackathonLandingSection, { HackathonLandingSectionContentType } from './HackathonLandingSection'
import SectionDivider from '../../components/SectionDivider'
import HackathonIntroSection, { HackathonIntroSectionContentType } from './HackathonIntroSection'
import HackathonInfoSection, { HackathonInfoSectionContentType } from './HackathonInfoSection'
import HackathonJudgingSection, { HackathonJudgingSectionContentType } from './HackathonJudgingSection'

interface HackathonPageProps extends PageProps {
  data: {
    hackathon: {
      nodes: {
        frontmatter: {
          headerLandingSection: HackathonLandingSectionContentType
          introSection: HackathonIntroSectionContentType
          hackathonInfo: HackathonInfoSectionContentType
          rulesAndJudging: HackathonJudgingSectionContentType
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
        <HackathonLandingSection content={pageContent.headerLandingSection} />
        <SectionDivider />
        <HackathonIntroSection content={pageContent.introSection} />
        <SectionDivider />
        <HackathonInfoSection content={pageContent.hackathonInfo} />
        <SectionDivider />
        <HackathonJudgingSection content={pageContent.rulesAndJudging} />
      </ThemeProvider>
    </Wrapper>
  )
}

export default IndexPage

const Wrapper = styled.div`
  // Some simple specific styles for text focused pages like the hackathon one.
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
          hackathonInfo {
            participantsInfo {
              title
              description
              link {
                text
                url
              }
            }
            prerequisites {
              title
              description
              skills
              link {
                text
                url
              }
            }
            schedule {
              title
              description
              events
            }
            ideasAndTracks {
              title
              subtitle
              tracks {
                title
                description
              }
            }
            prizes {
              title
              description
              prizeList {
                title
                description
              }
            }
          }
          rulesAndJudging {
            rules {
              title
              description
            }
            criteria {
              title
              description
              criteriumList {
                title
                description
              }
            }
          }
        }
      }
    }
  }
`
