import styled, { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

import Seo from '../components/Seo'
import HackathonLandingSection, {
  HackathonLandingSectionContentType
} from '../components/hackathon/HackathonLandingSection'
import SectionDivider from '../components/SectionDivider'
import HackathonIntroSection, { HackathonIntroSectionContentType } from '../components/hackathon/HackathonIntroSection'
import HackathonInfoSection, { HackathonInfoSectionContentType } from '../components/hackathon/HackathonInfoSection'
import HackathonJudgingSection, {
  HackathonJudgingSectionContentType
} from '../components/hackathon/HackathonJudgingSection'
import GettingStartedSection, { GettingStartedSectionContentType } from '../components/hackathon/GettingStartedSection'

interface HackathonPageProps extends PageProps {
  data: {
    hackathon: {
      nodes: {
        frontmatter: {
          headerLandingSection: HackathonLandingSectionContentType
          introSection: HackathonIntroSectionContentType
          hackathonInfo: HackathonInfoSectionContentType
          rulesAndJudging: HackathonJudgingSectionContentType
          gettingStarted: GettingStartedSectionContentType
        }
        html: string
      }[]
    }
  }
}

const IndexPage = (props: HackathonPageProps) => {
  const pageContent = props.data.hackathon.nodes[0].frontmatter

  return (
    <ThemeProvider theme={darkTheme}>
      <Wrapper>
        <Seo />
        <GlobalStyle />
        <HackathonLandingSection content={pageContent.headerLandingSection} />
        <SectionDivider />
        <HackathonIntroSection content={pageContent.introSection} />
        <SectionDivider />
        <HackathonInfoSection content={pageContent.hackathonInfo} />
        <SectionDivider />
        <HackathonJudgingSection content={pageContent.rulesAndJudging} />
        <SectionDivider />
        <GettingStartedSection content={{ ...pageContent.gettingStarted, html: props.data.hackathon.nodes[0].html }} />
      </Wrapper>
    </ThemeProvider>
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

  a {
    color: ${({ theme }) => theme.highlightComplementary};
  }
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
            title
            subtitle
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
            jury {
              title
              description
              people {
                name
                role
                picture {
                  childImageSharp {
                    gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO])
                  }
                }
              }
            }
          }
          gettingStarted {
            title
            subtitle
          }
        }
        html
      }
    }
  }
`
