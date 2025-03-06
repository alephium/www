import { graphql, PageProps } from 'gatsby'

import PageSectionHero from '../components/pageSections/PageSectionHero'
import HomepageIntroSection from '../components/pages/homepage/HomepageIntroSection'
import HomepageTechnologySection from '../components/pages/homepage/HomepageTechnologySection'
import PageSectionNumbers from '../components/pageSections/PageSectionNumbers'
import SectionDivider from '../components/SectionDivider'
import PageSectionEcosystem from '../components/pageSections/PageSectionEcosystem'
import PageSectionPartners from '../components/pageSections/PageSectionPartners'
import PageSectionCta from '../components/pageSections/PageSectionCta'
import Page from '../components/customPageComponents/Page'

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          pageSectionHeroContent {
            ...PageSectionHero
          }

          intro {
            ...HomepageIntroSection
          }

          pageSectionStatsContent {
            ...PageSectionNumbers
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
    <Page
      {...props}
      content={
        <>
          {content?.pageSectionHeroContent && (
            <>
              <PageSectionHero {...content.pageSectionHeroContent} />
              <SectionDivider />
            </>
          )}

          {content?.intro && (
            <>
              <HomepageIntroSection {...content.intro} />
              <SectionDivider />
            </>
          )}

          {content?.pageSectionStatsContent && (
            <>
              <PageSectionNumbers {...content.pageSectionStatsContent} />
              <SectionDivider />
            </>
          )}

          <HomepageTechnologySection />
          <SectionDivider />

          <PageSectionEcosystem />
          <SectionDivider />

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
        </>
      }
    />
  )
}

export default IndexPage
