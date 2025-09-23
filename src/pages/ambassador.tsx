import { graphql, PageProps, useStaticQuery } from 'gatsby'
import styled, { useTheme } from 'styled-components'

import Button from '../components/Button'
import Card from '../components/Card'
import CardText from '../components/CardText'
import CardsHorizontalScroller from '../components/common/CardsHorizontalScroller'
import ClickableBox from '../components/customPageComponents/ClickableBox'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import SimpleLink from '../components/SimpleLink'

const ambassadorQuery = graphql`
  query AmbassadorPage {
    heroImage: file(relativePath: { eq: "mountain-rainbow.png" }) {
      ...HeroImage
    }
    heroVideo: file(relativePath: { eq: "mountain-rainbow-scrub.mp4" }) {
      publicURL
    }
    placeholderImage: file(relativePath: { eq: "alephium-hackathon-lake.png" }) {
      ...HeroImage
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage, heroVideo } = useStaticQuery<Queries.AmbassadorPageQuery>(ambassadorQuery)

  return (
    <Page
      {...props}
      seo={{
        title: 'Alephium Ambassador Program | Grow, Earn, Lead',
        description:
          'Join the Alephium Ambassador Program and become a voice for secure, scalable blockchain tech. Earn rewards and build your network.'
      }}
      content={
        <>
          <SubpageSection edgeGradient border="bottom">
            <TextElement isCentered>
              <h1>
                Become an Alephium
                <br />
                Ambassador
              </h1>
              <p>Help us grow Alephium, one Community at a time.</p>

              <Button url="https://t.me/+jiPAqkUlt1w2MjY0">Get started</Button>
            </TextElement>
          </SubpageSection>

          <WhySection />

          <SubpageSection>
            <TextElement>
              <h2>
                What does an <br />
                Ambassador do?
              </h2>
              <p>
                <strong>
                  As an Alephium Ambassador, you can contribute in a variety of ways based on your skills and interests:
                </strong>
              </p>
            </TextElement>

            <Cards />
          </SubpageSection>

          <SectionDivider />

          <HowToApply />

          <BottomSection />
        </>
      }
    />
  )
}

const Cards = () => {
  const theme = useTheme()

  return (
    <CardsHorizontalScroller animateCards>
      <Card border>
        <CardText>
          <h3 style={{ color: theme.palette4 }}>Content Creators</h3>
          <p>
            <strong>Create engaging content</strong> and share tweets, blogs, videos, and graphics about Alephium. Share
            your work across social media platforms and develop creative campaigns to engage the community.
          </p>
        </CardText>
      </Card>

      <Card border>
        <CardText>
          <h3 style={{ color: theme.palette2 }}>Community Builders</h3>
          <p>
            <strong>Organize and grow the local community</strong>, moderate social channels, and help expand
            Alephium&apos;s global presence through content translation.
          </p>
        </CardText>
      </Card>

      <Card border>
        <CardText>
          <h3 style={{ color: theme.palette3 }}>Educators</h3>
          <p>
            <strong>Share knowledge and expertise</strong> by creating tutorials, guides, and educational content. Host
            webinars, AMAs, and live streams while mentoring new community members and developers.
          </p>
        </CardText>
      </Card>
    </CardsHorizontalScroller>
  )
}

const HowToApply = () => {
  const theme = useTheme()

  return (
    <SubpageSection>
      <TextElement>
        <h2>How to Join the Program</h2>
      </TextElement>

      <Grid columns={2} gap="small">
        <ClickableBox align="top">
          <TextElement noMargin>
            <p>
              <strong>Join</strong> - Join the{' '}
              <SimpleLink highlight url="https://t.me/+jiPAqkUlt1w2MjY0">
                Alephium Squires group
              </SimpleLink>{' '}
              read the{' '}
              <SimpleLink highlight url="https://alephium.gitbook.io/alph-squires">
                guide
              </SimpleLink>{' '}
              and get started within minutes! The first level of our ambassador program is open to everyone!
            </p>
          </TextElement>
        </ClickableBox>
        <ClickableBox align="top">
          <TextElement noMargin>
            <p>
              <strong>Start Contributing</strong> - Begin your journey by completing tasks, participating in
              initiatives, and collaborating with other ambassadors.
            </p>
          </TextElement>
        </ClickableBox>
        <ClickableBox align="top">
          <TextElement noMargin>
            <p>
              <strong>Grow and Earn</strong> - As you contribute, you&apos;ll earn rewards, gain recognition, and unlock
              new opportunities within the Alephium ecosystem. The best Squires will be promoted to the Alephium Guard.
              This is the second level of our ambassador program, designed for our top supporters!
            </p>
          </TextElement>
        </ClickableBox>
      </Grid>
    </SubpageSection>
  )
}

const BottomSection = () => (
  <SubpageSection>
    <TextElement isCentered>
      <h2>Ready to Join?</h2>
      <p>
        Become a member of the Alephium Ambassador Program and help us build the future of finance. Together, we can
        create a more scalable, secure, and sustainable world.
      </p>
      <Button big highlight url="https://t.me/+jiPAqkUlt1w2MjY0">
        Join Us Now
      </Button>
    </TextElement>
  </SubpageSection>
)

export default CustomPage

const WhySection = () => {
  const theme = useTheme()

  return (
    <SubpageSection>
      <TextElement>
        <h2>
          Why become an
          <br />
          Ambassador?
        </h2>
      </TextElement>

      <SubheaderContent>
        <Grid columns={2}>
          <TextElement noHeadingsMargins>
            <h3>Make an Impact 🚀</h3>
            <p>
              <strong>Help redefine what&apos;s possible</strong> in the world of decentralized technology. Your impact
              will be felt across the ecosystem, from the developers building on Alephium to the users who benefit from
              its scalability and efficiency.
            </p>
          </TextElement>

          <TextElement noHeadingsMargins>
            <h3>Grow Your Skills 📚</h3>
            <p>
              You&apos;ll be surrounded by experts from different domains and get{' '}
              <strong>access to exclusive resources from Alephium&apos;s core team.</strong>
            </p>
          </TextElement>

          <TextElement noHeadingsMargins>
            <h3>Join a Global Network 🌍</h3>
            <p>
              <strong>Meet passionate innovators, join local communities, represent Alephium</strong> at local and
              international events, and more. And don&apos;t worry, we&apos;ll be right beside you, ready to guide you
              and help you succeed.
            </p>
          </TextElement>

          <TextElement noHeadingsMargins>
            <h3>Earn Rewards 💰</h3>
            <p>
              Limited-edition gear, ALPH coins, recognition on official channels, and access to new professional
              opportunities.
            </p>
          </TextElement>
        </Grid>
      </SubheaderContent>
    </SubpageSection>
  )
}

const Emoji = styled.div`
  font-size: 50px;
  width: 50px;
  height: 50px;
  border-radius: var(--radius-small);
  margin-bottom: var(--spacing-2);
`
