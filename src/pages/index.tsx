import { graphql, PageProps } from 'gatsby'

import Button from '../components/Button'
import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import HomepageHeroSection from '../components/pages/homepage/HomepageHeroSection'
import HomepageIntroSection from '../components/pages/homepage/HomepageIntroSection'
import HomepagePartnersSection from '../components/pages/homepage/HomepagePartnersSection'
import HomepageStatsSection from '../components/pages/homepage/HomepageStatsSection'
import HomepageTechnologySection from '../components/pages/homepage/HomepageTechnologySection'
import SectionDivider from '../components/SectionDivider'

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          intro {
            ...HomepageIntroSection
          }

          partnersSection {
            ...HomepagePartnersSection
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
      seo={{
        title: '',
        description: ''
      }}
      content={
        <>
          <HomepageHeroSection />
          <SectionDivider />

          {content?.intro && (
            <>
              <HomepageIntroSection {...content.intro} />
              <SectionDivider />
            </>
          )}

          <HomepageStatsSection />
          <SectionDivider />

          <HomepageTechnologySection />
          <SectionDivider />

          {content?.partnersSection && (
            <>
              <HomepagePartnersSection {...content.partnersSection} />
              <SectionDivider />
            </>
          )}

          <SubpageSection>
            <SubpageSection>
              <TextElement isCentered>
                <h2>This is your moment.</h2>
                <p>
                  Alephium isn’t just a concept - it’s something we build, together. There’s a place for you here and we
                  can’t wait to meet you.
                </p>
                <Button url="/get-started">Get started</Button>
              </TextElement>
            </SubpageSection>
          </SubpageSection>
        </>
      }
    />
  )
}

export default IndexPage
