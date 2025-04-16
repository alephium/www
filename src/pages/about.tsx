import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Page from '../components/customPageComponents/Page'
import SubpageHeroSection from '../components/customPageComponents/SubpageImageHeroSection'
import SectionDivider from '../components/SectionDivider'

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
        title: '',
        description: ''
      }}
      content={
        <>
          <SubpageHeroSection backgroundImage={heroImage}>
            <h1>About</h1>
            <hr />
            <p>About</p>
          </SubpageHeroSection>

          <SectionDivider />
        </>
      }
    />
  )
}

export default CustomPage
