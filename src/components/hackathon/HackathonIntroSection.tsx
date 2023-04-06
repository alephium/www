import styled from 'styled-components'
import Column from '../../components/Columns/Column'
import Columns from '../../components/Columns/Columns'
import SectionTextHeader from '../../components/SectionTextHeader'
import { deviceBreakPoints } from '../../styles/global-style'
import GenevaWaterJet from './AnimatedIllustrations/GenevaWaterJet'
import HackathonSectionContainer from './HackathonSectionContainer'

export type HackathonIntroSectionContentType = {
  title: string
  subtitle: string
  description: string
}

interface HackathonIntroSectionProps {
  content: HackathonIntroSectionContentType
  className?: string
}

const HackathonIntroSection = ({
  content: { title, subtitle, description },
  className
}: HackathonIntroSectionProps) => (
  <HackathonSectionContainer className={className}>
    <Columns gap={'5vw'}>
      <Column>
        <StyledSectionTextHeader bigSubtitle title={title} subtitle={subtitle} />
      </Column>
      <IllustrationBox>
        <GenevaWaterJet />
      </IllustrationBox>
    </Columns>
    <Description>{description}</Description>
  </HackathonSectionContainer>
)

export default styled(HackathonIntroSection)`
  margin-top: var(--spacing-8);
`

const StyledSectionTextHeader = styled(SectionTextHeader)`
  min-width: 450px;

  @media ${deviceBreakPoints.tablet} {
    min-width: auto;
  }
`

const IllustrationBox = styled(Column)`
  background-color: ${({ theme }) => theme.bgPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Description = styled.p`
  margin: var(--spacing-10) 0 0 var(--spacing-4);
  color: ${({ theme }) => theme.textPrimary};
  border-left: 2px solid ${({ theme }) => theme.highlight};
  padding-left: 20px;
  text-align: justify;

  @media ${deviceBreakPoints.tablet} {
    margin: var(--spacing-10) var(--spacing-2) 0 0;
    padding-left: 15px;
  }
`
