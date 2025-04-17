import { graphql, PageProps } from 'gatsby'
import styled from 'styled-components'

import Button from '../components/Button'
import Page from '../components/customPageComponents/Page'
import TextElement from '../components/customPageComponents/TextElement'
import HomepageEcosystemSection from '../components/pages/homepage/HomepageEcosystemSection'
import HomepageHeroSection from '../components/pages/homepage/HomepageHeroSection'
import HomepageIntroSection from '../components/pages/homepage/HomepageIntroSection'
import HomepagePartnersSection from '../components/pages/homepage/HomepagePartnersSection'
import HomepageStatsSection from '../components/pages/homepage/HomepageStatsSection'
import PageSectionContainer from '../components/PageSectionContainer'
import SectionDivider from '../components/SectionDivider'
import lighthouseImage from '../images/lighthouse.png'

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
        title: 'Alephium | Scalable Proof-of-Work Blockchain for Real-World Apps',
        description:
          'Alephium is the next generation PoW Layer 1 with smart contracts. Built for speed, security, and sustainability. Start building or join the community today.'
      }}
      content={
        <>
          <HomepageHeroSection />

          {content?.intro && (
            <>
              <HomepageIntroSection {...content.intro} />
              <SectionDivider />
            </>
          )}

          <HomepageStatsSection />

          <SectionDivider />

          <HomepageEcosystemSection />

          <SectionDivider />

          {content?.partnersSection && (
            <>
              <HomepagePartnersSection {...content.partnersSection} />
              <SectionDivider />
            </>
          )}

          <LastPageSectionContainer fullHeight wide justifyContent="center">
            <TextElement isCentered>
              <h2>This is your moment.</h2>
              <p>
                Alephium isn’t just a concept - it’s something we build, together.{' '}
                <strong>There’s a place for you here and we can’t wait to meet you.</strong>
              </p>
              <Button url="/get-started">Get started</Button>
            </TextElement>
          </LastPageSectionContainer>
        </>
      }
    />
  )
}

export default IndexPage

const LastPageSectionContainer = styled(PageSectionContainer)`
  background-image: url(${lighthouseImage});
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
`
