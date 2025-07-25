import { graphql, PageProps } from 'gatsby'
import styled, { useTheme } from 'styled-components'

import Button from '../components/Button'
import Page from '../components/customPageComponents/Page'
import TextElement from '../components/customPageComponents/TextElement'
import GatsbyImageWrapper from '../components/GatsbyImageWrapper'
import HomepageCommunitySection from '../components/pages/homepage/HomepageCommunitySection'
import HomepageEcosystemSection from '../components/pages/homepage/HomepageEcosystemSection'
import HomepageHeroSection from '../components/pages/homepage/HomepageHeroSection'
import HomepageIntroSection from '../components/pages/homepage/HomepageIntroSection'
import HomepageNewsPopup from '../components/pages/homepage/HomepageNewsPopup'
import HomepageNumbersSection from '../components/pages/homepage/HomepageNumbersSection'
import HomepagePartnersSection from '../components/pages/homepage/HomepagePartnersSection'
import HomepageUSPSection from '../components/pages/homepage/HomepageUSPSection'
import SectionDivider from '../components/SectionDivider'

export const pageQuery = graphql`
  query IndexPage {
    seaImageNight: file(relativePath: { eq: "sea-night.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    seaImageDay: file(relativePath: { eq: "sea-day.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
  }
`

const IndexPage = (props: PageProps<Queries.IndexPageQuery>) => (
  <Page
    {...props}
    content={
      <>
        <HomepageHeroSection />

        <SectionDivider />

        <HomepagePartnersSection />

        <SectionDivider border pageWidth />

        <HomepageNewsPopup />

        <HomepageUSPSection />

        <SectionDivider border pageWidth />

        <HomepageNumbersSection />

        <SectionDivider border pageWidth />

        <HomepageIntroSection />

        <SectionDivider double />

        <HomepageEcosystemSection />

        <SectionDivider />

        <HomepageCommunitySection />

        <SectionDivider double />

        <BottomSection {...props} />
      </>
    }
  />
)

const BottomSection = (props: PageProps<Queries.IndexPageQuery>) => {
  const theme = useTheme()

  const seaImage =
    theme.name === 'dark'
      ? props.data.seaImageNight?.childImageSharp?.gatsbyImageData
      : props.data.seaImageDay?.childImageSharp?.gatsbyImageData

  return (
    <BottomSectionStyled>
      <BottomBackgroundImageContainer>
        <GatsbyImageWrapper image={seaImage} alt="Sea" />
      </BottomBackgroundImageContainer>
      <TextElement isCentered>
        <h1>
          It&apos;s time
          <br />
          to make waves.
        </h1>
        <p>
          Alephium isn&apos;t just a vision, it&apos;s a fast growing ecosystem.
          <br />
          <strong>There&apos;s a place for you here and we can&apos;t wait to meet you.</strong>
        </p>
        <Button big highlight url="/get-started">
          Get started
        </Button>
      </TextElement>
    </BottomSectionStyled>
  )
}

export default IndexPage

const BottomBackgroundImageContainer = styled.div`
  position: absolute;
  inset: 0;
  opacity: 1;
  mask-image: linear-gradient(to bottom, transparent, black 200px);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 200px);

  img {
    position: relative;
    z-index: 0;
  }
`

const BottomSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 600px;
  width: 100%;
  margin-top: var(--spacing-4);
  padding: 0 var(--spacing-4);
  box-sizing: border-box;
`
