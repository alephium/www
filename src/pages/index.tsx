import { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { darkTheme, lightTheme } from '../styles/themes'

import Seo from '../components/Seo'
import PageSectionHero, { PageSectionHeroContentType } from '../components/PageSectionHero'
import PageSectionIntro, { PageSectionIntroContentType } from '../components/PageSectionIntro'
import PageSectionTechnology, { PageSectionTechnologyContentType } from '../components/PageSectionTechnology'
import PageSectionEcosystem from '../components/PageSectionEcosystem'
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
        <ThemeProvider theme={darkTheme}>
          <PageSectionEcosystem />
        </ThemeProvider>
        <ThemeProvider theme={lightTheme}>
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
              image {
                publicURL
              }
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
