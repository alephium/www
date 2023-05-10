import styled, { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { ambassadorsTheme } from '../styles/themes'

import Seo from '../components/Seo'
import AmbassadorsIntroSection, {
  AmbassadorsIntroSectionContentType
} from '../components/pages/ambassadors/AmbassadorsIntroSection'
import AmbassadorsInfoSection, {
  AmbassadorsInfoSectionContentType
} from '../components/pages/ambassadors/AmbassadorsInfoSection'
import AmbassadorsLandingSection, {
  AmbassadorsLandingSectionContentType
} from '../components/pages/ambassadors/AmbassadorsLandingSection'
import NavigationMenu from '../components/NavigationMenu'
import Footer from '../components/Footer'

interface HackathonPageProps extends PageProps {
  data: {
    ambassadors: {
      nodes: {
        frontmatter: {
          headerLandingSection: AmbassadorsLandingSectionContentType
          introSection: AmbassadorsIntroSectionContentType
          hackathonInfo: AmbassadorsInfoSectionContentType
        }
        html: string
      }[]
    }
  }
}

const IndexPage = (props: HackathonPageProps) => {
  const pageContent = props.data.ambassadors.nodes[0].frontmatter

  return (
    <ThemeProvider theme={ambassadorsTheme}>
      <Wrapper>
        <Seo />
        <GlobalStyle />
        <NavigationMenuStyled />
        <AmbassadorsLandingSection content={pageContent.headerLandingSection} />
        <AmbassadorsIntroSection content={pageContent.introSection} />
        <AmbassadorsInfoSection content={pageContent.hackathonInfo} />
      </Wrapper>
      <Footer location={props.location} />
    </ThemeProvider>
  )
}

export default IndexPage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  // Some simple specific styles for text focused pages like the hackathon one.
  * {
    box-sizing: border-box;
  }
  font-size: 18px; // Slighty increase base font size for marketing content
  line-height: 24px;
  font-family: 'Switzer', 'Helvetica Neue', 'Inter'; // Trial.
  background-color: ${({ theme }) => theme.bgPrimary};

  a {
    color: ${({ theme }) => theme.highlightComplementary};
    font-weight: 300;
  }

  h2 {
    font-size: var(--fontSize-32);
    font-weight: 400;
  }

  h3 {
    font-weight: 400;
  }

  .text-subtitle {
    color: var(--color-grey-300);
    font-size: var(--fontSize-24);
    margin: 0;
    font-weight: 400;
  }

  b {
    font-weight: 600;
  }
`

const NavigationMenuStyled = styled(NavigationMenu)`
  margin: 0 10vw;

  a {
    font-weight: 300;
    color: ${({ theme }) => theme.textPrimary};
  }
`

export const pageQuery = graphql`
  query {
    ambassadors: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/ambassadors.md/" } }) {
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
