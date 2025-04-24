import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Page from '../components/customPageComponents/Page'
import SubpageHeroSection from '../components/customPageComponents/SubpageImageHeroSection'

const aboutQuery = graphql`
  query AboutPage {
    heroImage: file(relativePath: { eq: "alephium-hackathon-lake.png" }) {
      ...HeroImage
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage } = useStaticQuery<Queries.AboutPageQuery>(aboutQuery)

  return (
    <Page
      {...props}
      seo={{
        title: 'About Alephium | Sharded Layer 1 Blockchain with PoLW & Smart Contracts',
        description:
          'Alephium is a scalable, energy-efficient Layer 1 blockchain combining sharding, smart contracts, and Proof-of-Less-Work (PoLW) to deliver high throughput and sustainability. Explore our mission, core contributors, and ecosystem.'
      }}
      content={
        <>
          <SubpageHeroSection backgroundImage={heroImage}>
            <h1>About</h1>
            <hr />
            <p>About</p>
          </SubpageHeroSection>
        </>
      }
    />
  )
}

export default CustomPage
