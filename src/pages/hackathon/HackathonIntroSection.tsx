import styled from 'styled-components'
import Column from '../../components/Columns/Column'
import Columns from '../../components/Columns/Columns'
import PageSectionContainer from '../../components/PageSectionContainer'
import SectionTextHeader from '../../components/SectionTextHeader'
import TextSnippet from '../../components/TextSnippet'

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
      <IllustrationBox>yo</IllustrationBox>
    </Columns>
    <Description>{description}</Description>
  </SectionContainer>
)

export default HackathonIntroSection

const SectionContainer = styled(PageSectionContainer)`
  margin: 10vh auto;
`

const IllustrationBox = styled(Column)`
  background-color: ${({ theme }) => theme.textHighlight};
`

const Description = styled(TextSnippet)`
  padding: 10vh var(--spacing-4); ;
`
