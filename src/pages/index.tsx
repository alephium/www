import { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { darkTheme, lightTheme } from '../styles/themes'

import Seo from '../components/Seo'
import PageSectionHero, { PageSectionHeroContentType } from '../components/PageSectionHero'
import PageSectionIntro, { PageSectionIntroContentType } from '../components/PageSectionIntro'
import PageSectionTechnology, { PageSectionTechnologyContentType } from '../components/PageSectionTechnology'
import PageSectionUsability, { PageSectionUsabilityContentType } from '../components/PageSectionUsability'
import PageSectionStartNow, { PageSectionStartNowContentType } from '../components/PageSectionStartNow'
import PageSectionFollowUs, { PageSectionFollowUsContentType } from '../components/PageSectionFollowUs'
import Footer, { FooterContentType } from '../components/Footer'

interface IndexPageProps extends PageProps {
  data: {
    homepage: {
      nodes: {
        frontmatter: {
          headerSection: PageSectionHeroContentType
          introSection: PageSectionIntroContentType
          technologySection: PageSectionTechnologyContentType
          usabilitySection: PageSectionUsabilityContentType
          startNowSection: PageSectionStartNowContentType
          followUsSection: PageSectionFollowUsContentType
          footer: FooterContentType
        }
      }[]
    }
  }
}

const IndexPage = (props: IndexPageProps) => {
  const pageContent = props.data.homepage.nodes[0].frontmatter

  return (
    <>
      <Seo />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
      </ThemeProvider>
      <main>
        <ThemeProvider theme={darkTheme}>
          <PageSectionHero content={pageContent.headerSection} />
          <PageSectionIntro content={pageContent.introSection} />
          <PageSectionTechnology content={pageContent.technologySection} />
        </ThemeProvider>
        <ThemeProvider theme={lightTheme}>
          <PageSectionUsability content={pageContent.usabilitySection} />
          <PageSectionStartNow content={pageContent.startNowSection} />
          <PageSectionFollowUs content={pageContent.followUsSection} />
        </ThemeProvider>
        <ThemeProvider theme={darkTheme}>
          <Footer content={pageContent.footer} />
        </ThemeProvider>
      </main>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    homepage: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          headerSection {
            dark {
              title
              subtitle
            }
            light {
              title
              subtitle
            }
          }
          introSection {
            title
            subtitle
            cards {
              title
              description
              link {
                text
                url
                newTab
              }
            }
          }
          technologySection {
            title
            subtitle
            blockFlowSection {
              title
              description
              cardText
              links {
                text
                url
                newTab
              }
            }
            polwSection {
              title
              description
              cardText
              links {
                text
                url
                newTab
              }
            }
            smartContractSection {
              title
              description
              cardText
              links {
                text
                url
                newTab
              }
            }
            vmsSection {
              title
              description
              cardText
              links {
                text
                url
                newTab
              }
            }
            numbersSection {
              title
              subtitle
              columns {
                number
                description
              }
            }
          }
          usabilitySection {
            title
            subtitle
            description
            button {
              text
              url
              newTab
            }
            images {
              src {
                childImageSharp {
                  gatsbyImageData(width: 1920, placeholder: BLURRED, formats: [AUTO])
                }
              }
              altText
            }
          }
          startNowSection {
            title
            subtitle
            description
            cards {
              title
              subtitle
              description
              link {
                text
                url
                newTab
              }
            }
          }
          followUsSection {
            title
            subtitle
            description
            socialMediaLinks {
              name
              url
            }
          }
          footer {
            columns {
              title
              links {
                text
                url
                newTab
              }
            }
          }
        }
      }
    }
  }
`
