import { PageProps } from 'gatsby'

import Page from '../components/customPageComponents/Page'
import SubpageHeroSection from '../components/customPageComponents/SubpageHeroSection'
import SectionDivider from '../components/SectionDivider'

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
