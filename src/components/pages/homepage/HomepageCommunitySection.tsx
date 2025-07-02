import Button from '../../Button'
import CommunityMosaic from '../../CommunityMosaic'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'

const HomepageCommunitySection = () => (
  <SubpageSection wide>
    <SubpageSection>
      <TextElement isCentered>
        <h2>
          Be part of a <br />
          bubbling community.
        </h2>
        <Button big highlight url="/communities">
          Get on board
        </Button>
      </TextElement>
    </SubpageSection>
    <CommunityMosaic />
  </SubpageSection>
)

export default HomepageCommunitySection
