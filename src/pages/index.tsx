import styled, { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

import Seo from '../components/Seo'
import PageSectionHero from '../components/pageSections/PageSectionHero'
import PageSectionIntro from '../components/pageSections/PageSectionIntro'
import PageSectionEcosystem from '../components/PageSectionEcosystem'
import PageSectionTechnology from '../components/pageSections/PageSectionTechnology'
import PageSectionNumbers from '../components/PageSectionNumbers'
import PageSectionMilestones from '../components/PageSectionMilestones'
import PageSectionTodoList from '../components/PageSectionTodoList'
import PageSectionFollowUs from '../components/PageSectionFollowUs'
import Footer from '../components/Footer'
import PageSectionShop from '../components/PageSectionShop'
import SectionDivider from '../components/SectionDivider'
import PageSectionWallets from '../components/PageSectionWallets'
import NavigationMenu from '../components/NavigationMenu'

const IndexPage = (props: PageProps<Queries.IndexPageQuery>) => {
  const pageContent = props.data.homepage.nodes[0].frontmatter

  return (
    <>
      <Seo />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <SiteWrapper>
          <NavigationMenu />
          <ContentContainer>
            {pageContent?.headerSection && (
              <>
                <PageSectionHero headerSection={pageContent.headerSection} />
                <SectionDivider />
              </>
            )}
            {pageContent?.introSection && (
              <>
                <PageSectionIntro introSection={pageContent.introSection} />
                <SectionDivider />
              </>
            )}
            {pageContent?.technologySection && (
              <>
                <PageSectionTechnology technologySection={pageContent.technologySection} />
                <SectionDivider />
              </>
            )}
            {pageContent?.numbersSection && (
              <>
                <PageSectionNumbers content={pageContent.numbersSection} />
                <SectionDivider />
              </>
            )}
            {pageContent?.walletsSection && (
              <>
                <PageSectionWallets content={pageContent.walletsSection} />
                <SectionDivider />
              </>
            )}
            {pageContent?.ecosystemSection && (
              <>
                <PageSectionEcosystem content={pageContent.ecosystemSection} />
                <SectionDivider />
              </>
            )}
            {pageContent?.milestonesSection && (
              <>
                <PageSectionMilestones content={pageContent.milestonesSection} />
                <SectionDivider />
              </>
            )}
            {pageContent?.todoListSection && (
              <>
                <PageSectionTodoList content={pageContent.todoListSection} />
                <SectionDivider />
              </>
            )}
            {pageContent?.shopSection && (
              <>
                <PageSectionShop content={pageContent.shopSection} />
                <SectionDivider />
              </>
            )}
            {pageContent?.followUsSection && <PageSectionFollowUs content={pageContent.followUsSection} />}
            <Footer />
          </ContentContainer>
        </SiteWrapper>
      </ThemeProvider>
    </>
  )
}

export default IndexPage

const SiteWrapper = styled.main``

const ContentContainer = styled.div``

export const pageQuery = graphql`
  query IndexPage {
    homepage: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          ...PageSectionHero
          ...PageSectionIntro
          ...PageSectionTechnology
          ecosystemSection {
            title
            subtitle
            subsections {
              title
              description
              image {
                publicURL
              }
              items {
                title
                url
                logo {
                  publicURL
                }
              }
            }
          }
          numbersSection {
            title
            subtitle
          }
          walletsSection {
            title
            subtitle
            description
            wallets {
              title
              description
              screenshot {
                publicURL
              }
              color
              actions {
                title
                link
              }
            }
          }
          milestonesSection {
            title
            subtitle
            timelines {
              title
              years {
                year
                entries {
                  row
                  text
                  when
                  content
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
                description
              }
            }
          }
          shopSection {
            title
            subtitle
            description
            link {
              text
              url
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
        }
      }
    }
  }
`
