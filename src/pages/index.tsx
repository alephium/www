import styled, { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

import Seo from '../components/Seo'
import PageSectionHero, { PageSectionHeroContentType } from '../components/PageSectionHero'
import PageSectionIntro, { PageSectionIntroContentType } from '../components/PageSectionIntro'
import PageSectionEcosystem, { PageSectionEcosystemContentType } from '../components/PageSectionEcosystem'
import PageSectionTechnology, { PageSectionTechnologyContentType } from '../components/PageSectionTechnology'
import PageSectionNumbers, { PageSectionNumbersContentType } from '../components/PageSectionNumbers'
import PageSectionMilestones, { PageSectionMilestonesContentType } from '../components/PageSectionMilestones'
import PageSectionTodoList, { PageSectionTodoListContentType } from '../components/PageSectionTodoList'
import PageSectionFollowUs, { PageSectionFollowUsContentType } from '../components/PageSectionFollowUs'
import Footer, { FooterContentType } from '../components/Footer'
import PageSectionShop, { PageSectionShopContentType } from '../components/PageSectionShop'
import SectionDivider from '../components/SectionDivider'
import PageSectionWallets, { PageSectionWalletsContentType } from '../components/PageSectionWallets'
import NavigationMenu from '../components/NavigationMenu'
import TopBanner, { TopBannerContentType } from '../components/TopBanner'
import { useEffect } from 'react'

interface IndexPageProps extends PageProps {
  data: {
    homepage: {
      nodes: {
        frontmatter: {
          topBanner: TopBannerContentType
          headerSection: PageSectionHeroContentType
          introSection: PageSectionIntroContentType
          technologySection: PageSectionTechnologyContentType
          numbersSection: PageSectionNumbersContentType
          ecosystemSection: PageSectionEcosystemContentType
          walletsSection: PageSectionWalletsContentType
          milestonesSection: PageSectionMilestonesContentType
          todoListSection: PageSectionTodoListContentType
          shopSection: PageSectionShopContentType
          followUsSection: PageSectionFollowUsContentType
        }
      }[]
    }
    footer: {
      nodes: {
        frontmatter: FooterContentType
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
        <SiteWrapper>
          <TopBanner content={pageContent.topBanner} />
          <NavigationMenu topOffset={pageContent.topBanner.text ? 80 : 0} />
          <ContentContainer>
            <PageSectionHero content={pageContent.headerSection} />
            <SectionDivider />
            <PageSectionIntro content={pageContent.introSection} />
            <SectionDivider />
            <PageSectionTechnology content={pageContent.technologySection} minimal />
            <PageSectionNumbers content={pageContent.numbersSection} />
            <SectionDivider />
            <PageSectionWallets content={pageContent.walletsSection} />
            <SectionDivider />
            <PageSectionEcosystem content={pageContent.ecosystemSection} />
            <SectionDivider />
            <PageSectionMilestones content={pageContent.milestonesSection} />
            <SectionDivider />
            <PageSectionTodoList content={pageContent.todoListSection} />
            <SectionDivider />
            <PageSectionShop content={pageContent.shopSection} />
            <PageSectionFollowUs content={pageContent.followUsSection} />
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
  query {
    homepage: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          topBanner {
            text
            linkText
            url
            color
          }
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
          technologySection {
            title
            subtitle
            blockFlowSection {
              title
              description
              links {
                text
                url
                newTab
              }
            }
            smartContractSection {
              title
              description
              links {
                text
                url
                newTab
              }
            }
            polwSection {
              title
              description
              links {
                text
                url
                newTab
              }
            }
            vmsSection {
              title
              description
              links {
                text
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
