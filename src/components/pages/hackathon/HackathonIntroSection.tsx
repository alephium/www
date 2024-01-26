import styled from 'styled-components'
import Column from '../../Columns/Column'
import Columns from '../../Columns/Columns'
import { deviceBreakPoints } from '../../../styles/global-style'
import HackathonSectionContainer from './HackathonSectionContainer'
import HackathonSectionTitle from './HackathonSectionTitle'

interface HackathonIntroSectionProps {
  className?: string
}

const HackathonIntroSection = ({ className }: HackathonIntroSectionProps) => (
  <HackathonSectionContainer className={className}>
    <Columns gap="50px">
      <Column>
        <StyledSectionTextHeader
          bigSubtitle
          title="1. 2. 3. Start building."
          subtitle="Scalable for devs. Secure for users. Decentralized for all."
        />
      </Column>
    </Columns>
    <Description>{`Over the past year, the Leman Network Upgrade unleashed new tools for developers.
  
  The bridge has opened the doors to new users, the first dApps have laid the foundation of a lively ecosystem & recent attention has brought a lot of curious & active newcomers. 

  Alephium is by builders, for builders. 

  Come & hack with us.`}</Description>
  </HackathonSectionContainer>
)

export default styled(HackathonIntroSection)``

const StyledSectionTextHeader = styled(HackathonSectionTitle)`
  max-width: 650px;
  padding: 0;

  h2 {
    font-weight: 500 !important;
    font-size: 48px;
  }

  @media ${deviceBreakPoints.mobile} {
    min-width: auto;
  }
`

const Description = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  border-left: 2px solid ${({ theme }) => theme.palette1};
  padding-left: 20px;
  text-align: justify;
  white-space: pre-line;

  @media ${deviceBreakPoints.mobile} {
    margin: var(--spacing-2) var(--spacing-2) 0 0;
    padding-left: 15px;
  }
`
