import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Button from '../components/Button'
import Page from '../components/customPageComponents/Page'
import SubpageHeroSection from '../components/customPageComponents/SubpageImageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
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
      seo={{
        title: 'Contact Alephium | Get in Touch',
        description:
          "Questions or proposals? Reach out to the Alephium team. We're here to support builders, partners, and the community."
      }}
      content={
        <>
          <SubpageHeroSection backgroundImage={heroImage} alignContent="bottom">
            <h1>Contact Us</h1>
            <hr />
            <p>Got questions, feedback, or just want to say hi? We’re here for you.</p>
          </SubpageHeroSection>

          <SubpageSection>
            <TextElement isCentered>
              <Button url="mailto:info@alephium.org">General</Button>
              <Button url="mailto:business@alephium.org">Business and Partnerships</Button>
              <Button url="mailto:press@alephium.org">Press</Button>
            </TextElement>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement isCentered>
              <h2>Build with us</h2>
              <p>Not sure where to start? Dive into documentation for more resources or apply for a grant.</p>
              <Button url="https://docs.alephium.org">Documentation</Button>
              <Button url="/grants">Grants application</Button>
            </TextElement>
          </SubpageSection>
        </>
      }
    />
  )
}

export default CustomPage
