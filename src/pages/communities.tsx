import { PageProps } from 'gatsby'

import SectionDivider from '../components/SectionDivider'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import Page from '../components/customPageComponents/Page'
import TextElement from '../components/customPageComponents/TextElement'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import Placeholder from '../components/customPageComponents/Placeholder'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    content={
      <>
        <SubpageHeroSection>
          <h1>Online communities</h1>
          <hr />
          <p>
            We are lucky to have a very active community of builders, users & friends. Join the channels and groups and
            help us launch Alephium to the stars!
          </p>
        </SubpageHeroSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Official Channels</h2>
            <p>Core contributors maintain these with the help of fantastic community moderators:</p>
          </TextElement>

          <SubheaderContent>
            <Placeholder width="100%" height="100px" />
          </SubheaderContent>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Community Channels</h2>
            <p>
              Many of our communities run their own channels in a variety of languages. These local communities are
              unofficial.
            </p>
          </TextElement>

          <TextElement>
            <h3>Telegram Community Groups</h3>
            <Placeholder width="100%" height="100px" />
          </TextElement>

          <TextElement>
            <h3>Twitter/X Community Accounts</h3>
            <Placeholder width="100%" height="100px" />
          </TextElement>

          <TextElement>
            <h3>Alephium Community Blogs</h3>
            <Placeholder width="100%" height="100px" />
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement isCentered>
            <h2>Want to be featured?</h2>
            <p>
              If you run an Alephium community account in your language and want to be featured here, send a message to
              admins in official channels and we’ll add you in a flash!
            </p>
          </TextElement>
        </SubpageSection>
      </>
    }
  />
)

export default CustomPage
