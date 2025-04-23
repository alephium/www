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
        title: 'About Alephium | Building the Future of Proof-of-Work',
        description: "Learn about Alephium's mission, vision, and the people building real decentralized tech."
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
