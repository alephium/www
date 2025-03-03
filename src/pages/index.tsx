import { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

import Seo from '../components/Seo'
import PageSectionHero from '../components/pageSections/PageSectionHero'
import PageSectionIntro from '../components/pageSections/PageSectionIntro'
import PageSectionTechnology from '../components/pageSections/PageSectionTechnology'
import PageSectionNumbers from '../components/pageSections/PageSectionNumbers'
import Footer from '../components/Footer'
import SectionDivider from '../components/SectionDivider'
import NavigationMenu from '../components/NavigationMenu'
import PageSectionEcosystem from '../components/pageSections/PageSectionEcosystem'
import PageSectionPartners from '../components/pageSections/PageSectionPartners'
import PageSectionCta from '../components/pageSections/PageSectionCta'

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          pageSectionHeroContent {
            ...PageSectionHero
          }
          pageSectionIntroContent {
            ...PageSectionIntro
          }
          pageSectionStatsContent {
            ...PageSectionNumbers
          }
          pageSectionTechContent {
            ...PageSectionTechnology
          }
          pageSectionEcosystemContent {
            ...PageSectionEcosystem
          }
          pageSectionPartnersContent {
            ...PageSectionPartners
          }
          pageSectionCtaContent {
            ...PageSectionCta
          }
        }
      }
    }
  }
`

const IndexPage = (props: PageProps<Queries.IndexPageQuery>) => {
  const content = props.data.allMarkdownRemark.nodes[0].frontmatter

  return (
    <>
      <Seo />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <main>
          <NavigationMenu />

          <div>
            {content?.pageSectionHeroContent && (
              <>
                <PageSectionHero {...content.pageSectionHeroContent} />
                <SectionDivider />
              </>
            )}

            {content?.pageSectionIntroContent && (
              <>
                <PageSectionIntro {...content.pageSectionIntroContent} />
                <SectionDivider />
              </>
            )}

            {content?.pageSectionStatsContent && (
              <>
                <PageSectionNumbers {...content.pageSectionStatsContent} />
                <SectionDivider />
              </>
            )}

            {content?.pageSectionTechContent && (
              <>
                <PageSectionTechnology {...content.pageSectionTechContent} />
                <SectionDivider />
              </>
            )}

            {content?.pageSectionEcosystemContent && (
              <>
                <PageSectionEcosystem {...content.pageSectionEcosystemContent} />
                <SectionDivider />
              </>
            )}

            {content?.pageSectionPartnersContent && (
              <>
                <PageSectionPartners {...content.pageSectionPartnersContent} />
                <SectionDivider />
              </>
            )}

            {content?.pageSectionCtaContent && (
              <>
                <PageSectionCta {...content.pageSectionCtaContent} />
                <SectionDivider />
              </>
            )}

            <Footer />
          </div>
        </main>
      </ThemeProvider>
    </>
  )
}

export default IndexPage
