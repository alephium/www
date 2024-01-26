import { colord } from 'colord'
import styled from 'styled-components'
import ArrowedLink from '../../ArrowedLink'
import { deviceBreakPoints } from '../../../styles/global-style'
import AI from './AnimatedIllustrations/AI'
import DeFi from './AnimatedIllustrations/DeFi'
import Gaming from './AnimatedIllustrations/Gaming'
import Interoperability from './AnimatedIllustrations/Interoperability'
import NFTs from './AnimatedIllustrations/NFTs'
import Tooling from './AnimatedIllustrations/Tooling'
import HackathonSectionContainer from './HackathonSectionContainer'
import HackathonSectionTitle from './HackathonSectionTitle'
import { H3, Paragraph } from './Texts'
import TrackCard from './TrackCard'
import { Link } from 'gatsby'
import SimpleLink from '../../SimpleLink'

export type HackathonInfoSectionContentType = {
  participantsInfo: {
    title: string
    description: string
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
    events: {
      title: string
      description: string
    }[]
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
    description: string
    prizeList: {
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
      <HackathonSectionTitle
        title="The Hackathon"
        subtitle="What you need to know"
        bigSubtitle
        backgroundColor="bgTertiary"
      />
      <H3 divider>When & where?</H3>
      <Paragraph>
        The hackathon will happen exclusively online, from February 12th to 26th. Main communication hub for the
        hackathon will be <SimpleLink text="our Discord" url="http://www.alephium.org/discord" newTab />. Until we
        release the hackathon channels, join the{' '}
        <SimpleLink
          text="developer channel!"
          url="https://discord.com/channels/747741246667227157/948144672402972682"
          newTab
        />
      </Paragraph>
      <br />
      <H3 divider>What are the prizes?</H3>
      <Paragraph>{content.prizes.description}</Paragraph>
      <PrizeList>
        <h4>Main prizes</h4>
        <ul>
          <li>
            First prize is <b>12’500$ in ALPH</b>
          </li>
          <li>
            Second prize is <b>6’500$ in ALPH</b>
          </li>
          <li>
            3rd, 4th and 5th are <b>3’500$ in ALPH</b> each
          </li>
        </ul>
        <h4>Special partner prizes</h4>
        <ul>
          <li>
            Cetacean’s choice will receive <b>2’500$ in ALPH</b>
          </li>
          <li>
            Blockflow’s choice will receive <b>2’500$ in ALPH</b>
          </li>
        </ul>
        <h4>Bounties</h4>
        <Paragraph>
          Up to <b>10’000$ in ALPH</b> are reserved for the bounties
        </Paragraph>
        <h4>Honors</h4>
        <Paragraph>
          Up to <b>5’500$ in ALPH</b> is reserved for special honors at the jury’s discretion!
        </Paragraph>
        <Paragraph>
          <i>
            *Prizes will be awarded at the judges’ discretion and might be adapted in function of the quality of
            submissions received.{' '}
          </i>
        </Paragraph>
      </PrizeList>
      <br />
      <H3 divider>What can I build?</H3>
      <Paragraph>There are two ways of participating! And you can do one, the other, or both.</Paragraph>
      <br />
      <ScheduleItems>
        {content.schedule.events.map((e) => (
          <ScheduleItem key={e.title}>
            <ScheduleItemDot />
            <ScheduleItemText>
              <h4>{e.title}</h4>
              <p>{e.description}</p>
            </ScheduleItemText>
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
  <NFTs key="NFTs" />,
  <Gaming key="Gaming" />,
  <Interoperability key="Interoperability" />
]

export default styled(HackathonInfoSection)`
  background-color: ${({ theme }) => theme.bgTertiary};
`

const StyledArrowedLink = styled(ArrowedLink)`
  color: ${({ theme }) => theme.palette1};

  * {
    fill: ${({ theme }) => theme.palette1};
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
  border-left: 1px solid ${({ theme }) => theme.palette1};
`

const ScheduleItemDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 20px;
  margin-right: var(--spacing-1);
  background-color: ${({ theme }) => theme.palette1};
  transform: translateX(-20px);

  @media ${deviceBreakPoints.mobile} {
    transform: translateX(-18px);
  }
`

const ScheduleItemText = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
  }

  p {
    margin: var(--spacing-2) 0 0 0;
    opacity: 0.8;
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

const PrizeList = styled.div``
