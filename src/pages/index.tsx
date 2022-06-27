import { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

import Seo from '../components/Seo'
import PageSectionHero, { PageSectionHeroContentType } from '../components/PageSectionHero'
import PageSectionIntro, { PageSectionIntroContentType } from '../components/PageSectionIntro'
import PageSectionEcosystem from '../components/PageSectionEcosystem'
import PageSectionTechnology, { PageSectionTechnologyContentType } from '../components/PageSectionTechnology'
import PageSectionNumbers, { PageSectionNumbersContentType } from '../components/PageSectionNumbers'
import PageSectionMilestones, { PageSectionMilestonesContentType } from '../components/PageSectionMilestones'
import PageSectionTodoList, { PageSectionTodoListContentType } from '../components/PageSectionTodoList'
import PageSectionSunOverTheMountains from '../components/PageSectionSunOverTheMountains'
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
          numbersSection: PageSectionNumbersContentType
          milestonesSection: PageSectionMilestonesContentType
          todoListSection: PageSectionTodoListContentType
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
          <PageSectionTechnology content={pageContent.technologySection} minimal />
          <PageSectionNumbers content={pageContent.numbersSection} />
          <PageSectionEcosystem />
        </ThemeProvider>
        <ThemeProvider theme={darkTheme}>
          <PageSectionMilestones content={pageContent.milestonesSection} />
          <PageSectionTodoList content={pageContent.todoListSection} />
          <PageSectionFollowUs content={pageContent.followUsSection} />
          <PageSectionSunOverTheMountains />
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
                url
                newTab
              }
            }
          }
          ecosystemSection {
            title
            subtitle
            subsections {
              title
              description
              items {
                title
                url
              }
            }
          }
          technologySection {
            title
            subtitle
            blockFlowSection {
              title
              description
            }
            smartContractSection {
              title
              description
            }
            polwSection {
              title
              description
            }
            vmsSection {
              title
              description
            }
          }
          numbersSection {
            title
            subtitle
          }
          milestonesSection {
            title
            subtitle
            timelines {
              title
              years {
                year
                entries {
                  order
                  text
                  when
                  isMajor
                }
              }
            }
          }
          todoListSection {
            title
            subtitle
            lists {
              title
              items {
                text
                complete
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
