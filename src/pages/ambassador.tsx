import { PageProps } from 'gatsby'

import SectionDivider from '../components/SectionDivider'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import Page from '../components/customPageComponents/Page'
import Grid from '../components/customPageComponents/Grid'
import TextCard from '../components/customPageComponents/TextCard'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import Placeholder from '../components/customPageComponents/Placeholder'
import Button from '../components/Button'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    content={
      <>
        <SubpageHeroSection>
          <h1>Alephium Ambassador Program</h1>
          <hr />
          <p>
            Join the Alephium Ambassador Program and become a pivotal force in advancing the world's first operational
            sharded blockchain, designed for secure and efficient decentralized applications. As an ambassador, you'll
            play a crucial role in expanding our community, sharing knowledge, and driving the adoption of Alephium's
            technology.
          </p>
          <p>
            Whether you’re a developer, educator, content creator, or blockchain enthusiast, there’s a place for you in
            the Alephium community. Together, we can build a more scalable, secure, and sustainable Web3.
          </p>
        </SubpageHeroSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Why Become an Alephium Ambassador?</h2>
          </TextElement>

          <SubheaderContent>
            <Grid columns={2}>
              <TextCard>
                <h3>Make an Impact</h3>
                <p>
                  By becoming an Alephium Ambassador, you’re not just supporting a blockchain project - you’re helping
                  to redefine what’s possible in the world of decentralized technology. Your impact will be felt across
                  the ecosystem, from the developers building on Alephium to the users who benefit from its scalability
                  and efficiency.
                </p>
              </TextCard>
              <TextCard>
                <h3>Grow Your Skills</h3>
                <p>
                  Being an Ambassador is more than just a role - it’s an opportunity to develop valuable skills, gain
                  hands-on experience, and grow both personally and professionally. You’ll be surrounded by experts from
                  different domains and get access to exclusive resources from Alephium’s core team.
                </p>
              </TextCard>
              <TextCard>
                <h3>Join a Global Network</h3>
                <p>
                  Become part of a vibrant, diverse, and supportive global community. Meet passionate innovators, join
                  local communities, represent Alephium at local and international events, and more. And don’t worry,
                  we’ll be right beside you, ready to provide guidance to help you succeed.
                </p>
              </TextCard>
              <TextCard>
                <h3>Earn Rewards</h3>
                <p>
                  Your contributions as an Alephium Ambassador will be recognized and rewarded in meaningful ways. We
                  celebrate your efforts with limited-edition gear, ALPH coins, recognition on official channels,
                  helping you open the doors to new professional opportunities, and providing support to attend Web3
                  events, conferences, and hackathons.
                </p>
              </TextCard>
            </Grid>
          </SubheaderContent>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>What Does an Alephium Ambassador Do?</h2>
            <p>
              As an Alephium Ambassador, you can contribute in a variety of ways based on your skills and interests:
            </p>
          </TextElement>

          <SubheaderContent>
            <Placeholder width="100%" height="100px" />
          </SubheaderContent>
          <SubheaderContent>
            <Placeholder width="100%" height="100px" />
          </SubheaderContent>
          <SubheaderContent>
            <Placeholder width="100%" height="100px" />
          </SubheaderContent>
          <SubheaderContent>
            <Placeholder width="100%" height="100px" />
          </SubheaderContent>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>How to Join the Program</h2>
          </TextElement>

          <SubheaderContent>
            <Placeholder width="100%" height="100px" />
          </SubheaderContent>
          <SubheaderContent>
            <Placeholder width="100%" height="100px" />
          </SubheaderContent>
          <SubheaderContent>
            <Placeholder width="100%" height="100px" />
          </SubheaderContent>
          <SubheaderContent>
            <Placeholder width="100%" height="100px" />
          </SubheaderContent>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Have questions?</h2>
            <p>Check our FAQ page for more information or join our community and contact our team.</p>
            <Button url="/faq">Check FAQ</Button>
            <Button url="/discord">Join Discord</Button>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement isCentered>
            <h2>Ready to Join?</h2>
            <p>
              Become a part of the Alephium Ambassador Program and help us build the future of finance. Together, we can
              create a more scalable, secure, and sustainable world.
            </p>
            <Button url="/https://docs.google.com/forms/d/e/1FAIpQLSfR0T6Fg3v8HU86wZJgQBXslRUJKS3bsiQb92-ZIyaaV4RreA/viewform">
              Apply Now
            </Button>
          </TextElement>
        </SubpageSection>
      </>
    }
  />
)

export default CustomPage
