import { colord } from 'colord'
import styled from 'styled-components'

import Button from '../../Button'
import CommunityMosaic from '../../CommunityMosaic'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'

const HomepageCommunitySection = () => (
  <SubpageSection fullWidth>
    <CommunityMosaic />
    <TextElementStyled isCentered>
      <h2>Join a bubbling community.</h2>
      <p>Check out the official and community-led channels.</p>
      <Button big highlight url="/communities">
        Get on board
      </Button>
    </TextElementStyled>
  </SubpageSection>
)

export default HomepageCommunitySection

const TextElementStyled = styled(TextElement)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  background-color: ${({ theme }) => colord(theme.background1).alpha(0.85).toHex()};
  border-radius: var(--radius-big);
  padding: var(--spacing-6) var(--spacing-8);
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  backdrop-filter: blur(30px) saturate(180%);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`
