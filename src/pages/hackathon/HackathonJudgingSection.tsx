import { colord } from 'colord'
import styled from 'styled-components'
import { deviceBreakPoints } from '../../styles/global-style'
import HackathonSectionContainer from './HackathonSectionContainer'
import HackhathonSectionTitle from './HackhathonSectionTitle'
import { H3, Paragraph } from './Texts'

export type HackathonJudgingSectionContentType = {
  rules: {
    title: string
    description: string
  }
  criteria: {
    title: string
    description: string
    criteriumList: {
      title: string
      description: string
    }[]
  }
}

interface HackathonJudgingSectionProps {
  content: HackathonJudgingSectionContentType
  className?: string
}

const HackathonJudgingSection = ({ content }: HackathonJudgingSectionProps) => (
  <HackathonSectionContainer>
    <HackhathonSectionTitle title="Rules and judging" subtitle="How to win" sticky bigSubtitle />
    <HighlightedBox>
      <H3>{content.rules.title}</H3>
      <Paragraph>{content.rules.description}</Paragraph>
    </HighlightedBox>
    <br />
    <H3 divider>{content.criteria.title}</H3>
    <Paragraph>{content.criteria.description}</Paragraph>
    <br />
    <CriteriumList>
      {content.criteria.criteriumList.map((c, i) => (
        <CriteriumCard key={c.title}>
          <H3>{c.title}</H3>
          <Paragraph>{c.description}</Paragraph>
        </CriteriumCard>
      ))}
    </CriteriumList>
  </HackathonSectionContainer>
)

export default HackathonJudgingSection

const HighlightedBox = styled.div`
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

const CriteriumList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`

const CriteriumCard = styled.div`
  padding: var(--spacing-4);
  border-radius: var(--radius);
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  background-color: ${({ theme }) => theme.bgTertiary};

  h3 {
    margin-top: var(--spacing-2);
  }
`
