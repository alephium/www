import styled from 'styled-components'
import Column from '../../Columns/Column'
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
    <Columns gap={'5vw'}>
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
  border: 1px solid ${({ theme }) => theme.borderPrimary};
`

const StyledSectionTextHeader = styled(SectionTextHeader)`
  padding: 0;

  @media ${deviceBreakPoints.tablet} {
    min-width: auto;
  }
`

const IllustrationBox = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgSecondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-6);
`

const Description = styled.p`
  margin-top: var(--spacing-6);
`
