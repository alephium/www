import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'

import Button from '../../Button'
import ArrowedLink from '../../ArrowedLink'
import SubpageHeroSection from '../../customPageComponents/SubpageHeroSection'

const HomepageHeroSection = () => (
  <SubpageHeroSection>
    <h1>
      Engineered<br/>for the Future.
    </h1>
    <hr />
    <p>
      <strong>Alephium</strong> brings the security of Proof-of-Work, the scalability of sharding, and the power of smart contracts <strong>to
      real-world applications</strong>.
    </p>

    <Buttons>
      <Button url="https://docs.alephium.org">Build on Alephium</Button>
      <ArrowedLink url="/communities">Join the community</ArrowedLink>
    </Buttons>
  </SubpageHeroSection>
)

export default HomepageHeroSection


const Buttons = styled.div`
  display: flex;
  gap: var(--spacing-4);
  margin-top: var(--spacing-8);

  @media ${deviceBreakPoints.mobile} {
    margin-top: var(--spacing-4);
  }

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: var(--spacing-2);
  }
`
