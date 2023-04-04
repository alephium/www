import { colord } from 'colord'
import styled from 'styled-components'
import ArrowedLink from '../../components/ArrowedLink'
import { deviceBreakPoints } from '../../styles/global-style'
import AI from './AnimatedIllustrations/AI'
import DeFi from './AnimatedIllustrations/DeFi'
import NFTs from './AnimatedIllustrations/NFTs'
import Tooling from './AnimatedIllustrations/Tooling'
import HackathonSectionContainer from './HackathonSectionContainer'
import HackhathonSectionTitle from './HackhathonSectionTitle'
import { H3, Paragraph } from './Texts'
import TrackCard from './TrackCard'

export type HackathonInfoSectionContentType = {
  participantsInfo: {
    title: string
    description: string
    link: {
      text: string
      url: string
    }
  }
  prerequisites: {
    title: string
    description: string
    skills: string[]
    link: {
      text: string
      url: string
    }
  }
  schedule: {
    title: string
    description: string
    events: string[]
  }
  ideasAndTracks: {
    title: string
    subtitle: string
    tracks: {
      title: string
      description: string
    }[]
  }
  prizes: {
    title: string
  }
}

interface HackathonInfoSectionProps {
  content: HackathonInfoSectionContentType
  className?: string
}

const HackathonInfoSection = ({ content, className }: HackathonInfoSectionProps) => (
  <div className={className}>
    <HackathonSectionContainer>
      <HackhathonSectionTitle title="The Hackathon" subtitle="What you need to know" sticky bigSubtitle />
      <H3 divider>{content.participantsInfo.title}</H3>
      <Paragraph>{content.participantsInfo.description}</Paragraph>
      <StyledArrowedLink url={content.participantsInfo.link.url} newTab>
        {content.participantsInfo.link.text}
      </StyledArrowedLink>
      <br />
      <H3 divider>{content.prerequisites.title}</H3>
      <Paragraph>{content.prerequisites.description}</Paragraph>
      <ul>
        {content.prerequisites.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <StyledArrowedLink url={content.prerequisites.link.url} newTab>
        {content.prerequisites.link.text}
      </StyledArrowedLink>
      <br />
      <H3 divider>{content.schedule.title}</H3>
      <Paragraph>{content.schedule.description}</Paragraph>
      <br />
      <ScheduleItems>
        {content.schedule.events.map((e) => (
          <ScheduleItem key={e}>
            <ScheduleItemDot />
            {e}
          </ScheduleItem>
        ))}
      </ScheduleItems>
      <br />
      <H3 divider>{content.ideasAndTracks.title}</H3>
      <Paragraph>{content.ideasAndTracks.subtitle}</Paragraph>
      <br />
      <TrackCards>
        {content.ideasAndTracks.tracks.map((t, i) => (
          <TrackCard
            illustration={animatedTrackIllustrations[i]}
            key={t.title}
            title={t.title}
            description={t.description}
          />
        ))}
      </TrackCards>
    </HackathonSectionContainer>
  </div>
)

const animatedTrackIllustrations = [
  <DeFi key="DeFi" />,
  <AI key="AI" />,
  <Tooling key="tooling" />,
  <NFTs key="NFTs" />
]

export default styled(HackathonInfoSection)`
  background-color: ${({ theme }) => theme.bgTertiary};
`

const StyledArrowedLink = styled(ArrowedLink)`
  color: ${({ theme }) => theme.highlightComplementary};

  * {
    fill: ${({ theme }) => theme.highlightComplementary};
  }
`

const ScheduleItems = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: var(--spacing-2);
`

const ScheduleItem = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-2);
  border-left: 1px solid ${({ theme }) => theme.highlight};
`

const ScheduleItemDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 20px;
  margin-right: var(--spacing-1);
  background-color: ${({ theme }) => theme.highlight};
  transform: translateX(-20px);

  @media ${deviceBreakPoints.mobile} {
    transform: translateX(-18px);
  }
`

const TrackCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`
