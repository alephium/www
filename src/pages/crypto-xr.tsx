import styled, { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle, { deviceBreakPoints } from '../styles/global-style'
import { hackathonTheme } from '../styles/themes'

import Seo from '../components/Seo'
import HackathonLandingSection from '../components/pages/hackathon/HackathonLandingSection'
import HackathonInfoSection, {
  HackathonInfoSectionContentType
} from '../components/pages/hackathon/HackathonInfoSection'
import HackathonJudgingSection from '../components/pages/hackathon/HackathonJudgingSection'
import NavigationMenu from '../components/NavigationMenu'
import Footer from '../components/Footer'
import HackathonSectionContainer from '../components/pages/hackathon/HackathonSectionContainer'

interface HackathonPageProps extends PageProps {
  data: {
    cryptoXR: {
      nodes: {
        frontmatter: {
          hackathonInfo: HackathonInfoSectionContentType
        }
        html: string
      }[]
    }
  }
}

const IndexPage = (props: HackathonPageProps) => {
  const pageContent = props.data.cryptoXR.nodes[0].frontmatter

  return (
    <>
      <ThemeProvider theme={hackathonTheme}>
        <Wrapper>
          <Seo />
          <GlobalStyle />
          <NavigationMenuStyled />
          <HackathonLandingSection />
          <HackathonSectionContainer>
            <HackathonInfoSection content={pageContent.hackathonInfo} />
            <HackathonJudgingSection />
          </HackathonSectionContainer>
        </Wrapper>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default IndexPage

const NavigationMenuStyled = styled(NavigationMenu)`
  margin: 0 10vw;

  a {
    font-weight: 300;
    color: ${({ theme }) => theme.textPrimary} !important;

    &:hover {
      opacity: 0.7;
    }

    @media ${deviceBreakPoints.mobile} {
      margin: 0;
    }
  }
`

const Wrapper = styled.div`
  font-family: 'Switzer', 'Helvetica Neue', 'Inter'; // Trial.

  // Some simple specific styles for text focused pages like the hackathon one.
  * {
    box-sizing: border-box;
  }
  font-size: 16px; // Slighty increase base font size for marketing content
  line-height: 24px;

  a {
    color: ${({ theme }) => theme.palette2};
  }

  h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 1.4;
  }

  h4 {
    margin-top: 60px;
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: 500;
  }

  ul {
    line-height: 1.6;
  }

  li {
    margin-bottom: 14px;
  }

  b {
    opacity: 1;
  }
`

export const pageQuery = graphql`
  query {
    cryptoXR: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/cryptoXR.md/" } }) {
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
              events {
                title
                description
              }
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
