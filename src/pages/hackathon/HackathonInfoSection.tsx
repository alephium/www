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
    skills: string[]
  }
  schedule: {
    title: string
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
      <h3>{content.participantsInfo.title}</h3>
      <p>{content.participantsInfo.description}</p>
      <StyledArrowedLink url={content.participantsInfo.link.url} newTab>
        {content.participantsInfo.link.text}
      </StyledArrowedLink>
      <br />
      <h3>{content.prerequisites.title}</h3>
      <p>
        <ul>
          {content.prerequisites.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </p>
      <br />
      <h3>{content.schedule.title}</h3>
      <p>
        <ul>
          {content.schedule.events.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </p>
      <br />
      <h3>{content.ideasAndTracks.title}</h3>
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
