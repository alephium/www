import { colord } from 'colord'
import styled from 'styled-components'
import HackathonSectionContainer from './HackathonSectionContainer'
import HackhathonSectionTitle from './HackhathonSectionTitle'
import { H3, Paragraph } from './Texts'

export type HackathonJudgingSectionContentType = {
  rules: {
    title: string
    description: string
  }
}

interface HackathonJudgingSectionProps {
  content: HackathonJudgingSectionContentType
  className?: string
}

const HackathonJudgingSection = ({ content }: HackathonJudgingSectionProps) => (
  <HackathonSectionContainer>
    <HackhathonSectionTitle title="Rules and judging" subtitle="How to win" sticky bigSubtitle />
    <br />
    <HighlightedBox>
      <H3>{content.rules.title}</H3>
      <Paragraph>{content.rules.description}</Paragraph>
    </HighlightedBox>
    <br />
  </HackathonSectionContainer>
)

export default HackathonJudgingSection

const HighlightedBox = styled.div`
  margin-top: var(--spacing-4);
  margin-bottom: var(--spacing-4);
  padding: var(--spacing-4);
  border: 1px solid ${({ theme }) => theme.highlight};
  background-color: ${({ theme }) => colord(theme.highlight).alpha(0.2).toHex()};

  h3 {
    margin-top: 0 !important;
  }

  p {
    margin-bottom: 0 !important;
    opacity: 1 !important;
  }
`
