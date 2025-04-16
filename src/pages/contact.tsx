import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Page from '../components/customPageComponents/Page'
import SubpageHeroSection from '../components/customPageComponents/SubpageImageHeroSection'
import SectionDivider from '../components/SectionDivider'

const contactQuery = graphql`
  query ContactPage {
    heroImage: file(relativePath: { eq: "alephium-hackathon-lake.png" }) {
      ...HeroImage
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage } = useStaticQuery<Queries.ContactPageQuery>(contactQuery)

  return (
    <Page
      {...props}
      content={
        <>
          <SubpageHeroSection backgroundImage={heroImage}>
            <h1>Contact</h1>
            <hr />
            <p>Contact</p>
          </SubpageHeroSection>

          <SectionDivider />
        </>
      }
    />
  )
}

export default CustomPage
