import styled from 'styled-components'
import Column from '../../components/Columns/Column'
import Columns from '../../components/Columns/Columns'
import PageSectionContainer from '../../components/PageSectionContainer'
import SectionTextHeader from '../../components/SectionTextHeader'
import GenevaWaterJet from './GenevaWaterJet'

export type HackathonIntroSectionContentType = {
  title: string
  subtitle: string
  description: string
}

interface HackathonIntroSectionProps {
  content: HackathonIntroSectionContentType
}

const HackathonIntroSection = ({ content: { title, subtitle, description } }: HackathonIntroSectionProps) => (
  <SectionContainer>
    <Columns gap={'5vw'}>
      <Column>
        <SectionTextHeader bigSubtitle title={title} subtitle={subtitle} />
      </Column>
      <IllustrationBox>
        <GenevaWaterJet />
      </IllustrationBox>
    </Columns>
    <Description>{description}</Description>
  </SectionContainer>
)

export default HackathonIntroSection

const SectionContainer = styled(PageSectionContainer)`
  margin: 200px auto;
`

const IllustrationBox = styled(Column)`
  background-color: ${({ theme }) => theme.bgPrimary};
`

const Description = styled.p`
  padding: 10vh var(--spacing-4);
  color: ${({ theme }) => theme.textPrimary};
`
