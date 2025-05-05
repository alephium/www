import { graphql, PageProps } from 'gatsby'

import Button from '../components/Button'
import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import HomepageEcosystemSection from '../components/pages/homepage/HomepageEcosystemSection'
import HomepageHeroSection from '../components/pages/homepage/HomepageHeroSection'
import HomepageIntroSection from '../components/pages/homepage/HomepageIntroSection'
import HomepageNumbersSection from '../components/pages/homepage/HomepageNumbersSection'
import HomepagePartnersSection from '../components/pages/homepage/HomepagePartnersSection'
import HomepageUSPSection from '../components/pages/homepage/HomepageUSPSection'
import SectionDivider from '../components/SectionDivider'

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          partnersSection {
            ...HomepagePartnersSection
          }
        }
      }
    }
    lighthouseImage: file(relativePath: { eq: "lighthouse.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
  }
`

const IndexPage = (props: PageProps<Queries.IndexPageQuery>) => {
  const content = props.data.allMarkdownRemark.nodes[0].frontmatter
  const lighthouseImage = props.data.lighthouseImage?.childImageSharp?.gatsbyImageData

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

          {content?.partnersSection && <HomepagePartnersSection {...content.partnersSection} />}

          <HomepageIntroSection />

          <SectionDivider />

          <HomepageUSPSection />

          <HomepageNumbersSection />

          <HomepageEcosystemSection />

          <SubpageSection fullWidth>
            <TextElement isCentered>
              <h2>
                <small>It&apos;s time</small>
                <br />
                to make waves.
              </h2>
              <p>
                Alephium isn&apos;t just a concept - it&apos;s something we build, together.{' '}
                <strong>There&apos;s a place for you here and we can&apos;t wait to meet you.</strong>
              </p>
              <Button big highlight url="/get-started">
                Get started
              </Button>
            </TextElement>
          </SubpageSection>

          <SectionDivider />
        </>
      }
    />
  )
}

export default IndexPage
