import { graphql, PageProps } from 'gatsby'

import PageSectionHero from '../components/pageSections/PageSectionHero'
import PageSectionLinkedCards from '../components/pageSections/PageSectionLinkedCards'
import PageSectionTextImageAlternate from '../components/pageSections/PageSectionTextImageAlternate'
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
          pageSectionLinkedCardsContent {
            ...PageSectionLinkedCards
          }
          pageSectionStatsContent {
            ...PageSectionNumbers
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

          {content?.pageSectionLinkedCardsContent && (
            <>
              <PageSectionLinkedCards {...content.pageSectionLinkedCardsContent} />
              <SectionDivider />
            </>
          )}

          {content?.pageSectionStatsContent && (
            <>
              <PageSectionNumbers {...content.pageSectionStatsContent} />
              <SectionDivider />
            </>
          )}

          <PageSectionTextImageAlternate />
          <SectionDivider />

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
        </>
      }
    />
  )
}

export default IndexPage
