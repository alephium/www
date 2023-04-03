import styled, { useTheme } from 'styled-components'
import ArrowedLink from '../../components/ArrowedLink'
import { deviceBreakPoints } from '../../styles/global-style'
import HackathonSectionContainer from './HackathonSectionContainer'
import HackhathonSectionTitle from './HackhathonSectionTitle'
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
}

interface HackathonInfoSectionProps {
  content: HackathonInfoSectionContentType
  className?: string
}

const HackathonInfoSection = ({ content, className }: HackathonInfoSectionProps) => (
  <div className={className}>
    <HackathonSectionContainer>
      <HackhathonSectionTitle title="The Hackathon" subtitle="What you need to know" sticky bigSubtitle />
      <h2>{content.participantsInfo.title}</h2>
      <p>{content.participantsInfo.description}</p>
      <StyledArrowedLink url={content.participantsInfo.link.url} newTab>
        {content.participantsInfo.link.text}
      </StyledArrowedLink>
      <br />
      <h2>{content.prerequisites.title}</h2>
      <p>{content.prerequisites.description}</p>

      <ul>
        {content.prerequisites.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <StyledArrowedLink url={content.prerequisites.link.url} newTab>
        {content.prerequisites.link.text}
      </StyledArrowedLink>
      <br />
      <h2>{content.schedule.title}</h2>
      <p>{content.schedule.description}</p>
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
      <h2>{content.ideasAndTracks.title}</h2>
      <p>{content.ideasAndTracks.subtitle}</p>
      <br />
      <TrackCards>
        {content.ideasAndTracks.tracks.map((t) => (
          <TrackCard key={t.title} title={t.title} description={t.description} />
        ))}
      </TrackCards>
    </HackathonSectionContainer>
  </div>
)

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
