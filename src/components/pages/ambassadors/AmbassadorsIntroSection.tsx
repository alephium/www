import styled from 'styled-components'
import Columns from '../../Columns/Columns'
import SectionTextHeader from '../../SectionTextHeader'
import { deviceBreakPoints } from '../../../styles/global-style'
import GenevaWaterJet from './AnimatedIllustrations/GenevaWaterJet'
import AmbassadorsSectionContainer from './AmbassadorsSectionContainer'

export type AmbassadorsIntroSectionContentType = {
  title: string
  subtitle: string
  description: string
}

interface AmbassadorsIntroSectionProps {
  content: AmbassadorsIntroSectionContentType
  className?: string
}

const AmbassadorsIntroSection = ({
  content: { title, subtitle, description },
  className
}: AmbassadorsIntroSectionProps) => (
  <AmbassadorsSectionContainer className={className}>
    <Columns>
      <IllustrationBox>
        <GenevaWaterJet />
      </IllustrationBox>
      <TextBox>
        <StyledSectionTextHeader bigSubtitle title={title} subtitle={subtitle} />
        <Description>{description}</Description>
      </TextBox>
    </Columns>
  </AmbassadorsSectionContainer>
)

export default styled(AmbassadorsIntroSection)`
  background-color: ${({ theme }) => theme.bgSecondary};
`

const StyledSectionTextHeader = styled(SectionTextHeader)`
  padding: 0;

  @media ${deviceBreakPoints.tablet} {
    min-width: auto;
  }
`

const IllustrationBox = styled.div`
  flex: 1;
  background-color: #bcdae9ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 600px;

  @media ${deviceBreakPoints.tablet} {
    display: none;
  }
`

const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8) 5vw;
`

const Description = styled.p`
  margin-top: var(--spacing-6);
`
