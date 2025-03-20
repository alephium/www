import { PageProps } from 'gatsby'

import SectionDivider from '../components/SectionDivider'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import Page from '../components/customPageComponents/Page'

const CustomPage = (props: PageProps) => (
  <Page
    {...props}
    content={
      <>
        <SubpageHeroSection>
          <h1>About</h1>
          <hr />
          <p>About</p>
        </SubpageHeroSection>

        <SectionDivider />
      </>
    }
  />
)

export default CustomPage
