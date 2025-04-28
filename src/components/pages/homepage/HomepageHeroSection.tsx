import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import ArrowedLink from '../../ArrowedLink'
import Button from '../../Button'
import SubpageVideoHeroSection from '../../customPageComponents/SubpageVideoHeroSection'

export const homepageHeroQuery = graphql`
  query HomepageHero {
    heroImage: file(relativePath: { eq: "lake-pan-poster.png" }) {
      ...HeroImage
    }
    heroVideo: file(relativePath: { eq: "lake-pan-scrub.mp4" }) {
      publicURL
    }
  }
`

const HomepageHeroSection = () => {
  const { heroImage, heroVideo } = useStaticQuery<Queries.HomepageHeroQuery>(homepageHeroQuery)

  return (
    <SubpageVideoHeroSection video={heroVideo} poster={heroImage}>
      <h1>
        Engineered
        <br />
        for the Future.
      </h1>
      <hr />
      <p>
        <strong>
          Alephium brings the security of Proof-of-Work, the scalability of sharding, and the power of smart contracts
          to real-world applications
        </strong>
        .
      </p>

      <Buttons>
        <Button big highlight url="https://docs.alephium.org">
          Build on Alephium
        </Button>
        <ArrowedLink url="/communities">Join the community</ArrowedLink>
      </Buttons>
    </SubpageVideoHeroSection>
  )
}

export default HomepageHeroSection

const Buttons = styled.div`
  display: flex;
  gap: var(--spacing-4);
  margin-top: var(--spacing-8);

  @media ${deviceBreakPoints.mobile} {
    margin-top: var(--spacing-4);
  }

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: var(--spacing-2);
  }
`
