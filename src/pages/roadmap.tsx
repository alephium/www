import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import SubpageVideoHeroSection from '../components/customPageComponents/SubpageVideoHeroSection'
import TextElement from '../components/customPageComponents/TextElement'
import PageSectionMilestones from '../components/PageSectionMilestones'
import SectionDivider from '../components/SectionDivider'

const roadmapQuery = graphql`
  query RoadmapPage {
    heroImage: file(relativePath: { eq: "magic-mountain.png" }) {
      ...HeroImage
    }
    heroVideo: file(relativePath: { eq: "magic-mountain-scrub.mp4" }) {
      publicURL
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage, heroVideo } = useStaticQuery<Queries.RoadmapPageQuery>(roadmapQuery)

  return (
    <Page
      {...props}
      floatingMenu={false}
      seo={{
        title: 'Alephium Roadmap | Past Milestones & Future Vision',
        description: "Explore Alephium’s journey and find out what's next. Built for real-world adoption."
      }}
      content={
        <>
          <SubpageVideoHeroSection video={heroVideo} poster={heroImage}>
            <h1>Alephium Roadmap & Milestones</h1>
            <hr />
            <p>
              At Alephium, we’re building the future of blockchain technology - one milestone at a time.
              <br />
              <strong>Explore our journey so far and what’s coming next.</strong>
            </p>
          </SubpageVideoHeroSection>

          <PageSectionMilestones />

          <SectionDivider />

          <SubpageSection>
            <TextElement isCentered>
              <h2>Join Us on This Journey</h2>
              <p>
                Alephium’s roadmap is a living document, evolving with the input of our community and the progress of
                our technology. Stay up-to-date on our latest developments by following us on{' '}
                <a href="https://x.com/alephium">Twitter</a>, or joining our{' '}
                <a href="https://t.me/alephiumgroup">Telegram</a> group.
              </p>
            </TextElement>
          </SubpageSection>
        </>
      }
    />
  )
}

export default CustomPage
