import { PageProps } from 'gatsby'

import SectionDivider from '../components/SectionDivider'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import Button from '../components/Button'
import Page from '../components/customPageComponents/Page'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    content={
      <>
        <SubpageHeroSection>
          <h1>Shaping the Future, One Block at a Time</h1>
          <hr />
          <p>
            At Alephium, we blend innovative technology with a human-centric approach to create a blockchain experience
            that’s both powerful and accessible. Dive into our official brand hub to discover resources that reflect our
            vision including logos, fonts, color palettes, templates, and more. Let’s shape the future of Web3,
            together.
          </p>
          <Button url="../assets/brand.zip">Download assets</Button>
        </SubpageHeroSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Alephium Logo</h2>
            <p>
              Get the Alephium logo for your next publication, event, or any other creation. Please do not stretch,
              recolor, edit, or alter the logo in any way
            </p>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Spacing</h2>
            <p>
              Please do not crowd the logo. When placing elements nearby, use the letter ‘u’ in the wordmark as a guide
              for spacing. //I have stolen this from Sui, please add whatever is the best practice from our side
            </p>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Partnerships</h2>
            <p>
              When positioning dual logos in brand partnerships, apply the same principles as for clear space. Use a 1pt
              line, extending from the top to the bottom of the symbol's height, as a divider between the two logos.
            </p>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Colors</h2>
          </TextElement>
        </SubpageSection>

        <SectionDivider />

        <SubpageSection>
          <TextElement>
            <h2>Typography</h2>
            <p>
              We use the Inter typeface family in all our communications. Use Inter Regular and Inter Bold for all
              Alephium communications.
            </p>
            <Button url="https://rsms.me/inter">Download Inter</Button>
          </TextElement>
        </SubpageSection>
      </>
    }
  />
)

export default CustomPage
