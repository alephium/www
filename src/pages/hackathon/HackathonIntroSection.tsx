import styled from 'styled-components'
import Column from '../../components/Columns/Column'
import Columns from '../../components/Columns/Columns'
import PageSectionContainer from '../../components/PageSectionContainer'
import SectionTextHeader from '../../components/SectionTextHeader'
import GenevaWaterJet from './GenevaWaterJet'
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
        <SectionTextHeader bigSubtitle title={title} subtitle={subtitle} />
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

const IllustrationBox = styled(Column)`
  background-color: ${({ theme }) => theme.bgPrimary};
`

const Description = styled.p`
  margin: var(--spacing-10) var(--spacing-4) 0 var(--spacing-4);
  color: ${({ theme }) => theme.textPrimary};
  border-left: 2px solid ${({ theme }) => theme.highlight};
  padding-left: 20px;
`
