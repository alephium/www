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

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          ...PageSectionHero
          ...PageSectionIntro
          ...PageSectionTechnology
          ...PageSectionNumbers
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
                <PageSectionHero pageSectionHeroContent={content.pageSectionHeroContent} />
                <SectionDivider />
              </>
            )}

            {content?.pageSectionIntroContent && (
              <>
                <PageSectionIntro pageSectionIntroContent={content.pageSectionIntroContent} />
                <SectionDivider />
              </>
            )}

            {content?.pageSectionStatsContent && (
              <>
                <PageSectionNumbers pageSectionStatsContent={content.pageSectionStatsContent} />
                <SectionDivider />
              </>
            )}

            {content?.pageSectionTechContent && (
              <PageSectionTechnology pageSectionTechContent={content.pageSectionTechContent} />
            )}

            <Footer />
          </div>
        </main>
      </ThemeProvider>
    </>
  )
}

export default IndexPage
