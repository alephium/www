import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import ArrowedLink from '../../ArrowedLink'
import Button from '../../Button'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'
import EddyBackground from '../../EddyBackground'
import PageSectionContainer from '../../PageSectionContainer'

const HomepageHeroSection = () => (
  <PageSectionContainer fullWidth>
    <EddyBackground />
    <SubpageSection>
      <TextElement isCentered>
        <h1>The Web3 you were promised.</h1>
        <p>
          <strong>
            Scalable Proof-of-Less-Work and secure Smart Contracts,
            <br />
            only on Alephium.
          </strong>
        </p>
      </TextElement>

      <Buttons>
        <Button big highlight url="https://docs.alephium.org">
          Build on Alephium
        </Button>
        <ArrowedLink url="/communities">Join the community</ArrowedLink>
      </Buttons>
    </SubpageSection>
  </PageSectionContainer>
)

export default HomepageHeroSection

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  margin-top: var(--spacing-8);

  @media ${deviceBreakPoints.mobile} {
    margin-top: var(--spacing-4);
  }

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: var(--spacing-2);
  }
`
