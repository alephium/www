import styled from 'styled-components'
import Column from '../../components/Columns/Column'
import PageSectionContainer from '../../components/PageSectionContainer'

export type HackathonInfoSectionContentType = {
  participantsInfo: {
    title: string
    description: string
    link: string
  }
}

interface HackathonInfoSectionProps {
  content: HackathonInfoSectionContentType
}

const HackathonInfoSection = ({ content }: HackathonInfoSectionProps) => (
  <SectionContainer>
    <Description>{content.participantsInfo.description}</Description>
  </SectionContainer>
)

export default HackathonInfoSection

const SectionContainer = styled(PageSectionContainer)`
  margin: calc(max(30vh, 150px)) auto;
`

const Description = styled.p`
  padding: 10vh var(--spacing-4);
  color: ${({ theme }) => theme.textPrimary};
`
