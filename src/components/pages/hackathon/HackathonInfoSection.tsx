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
          Up to <b>5’500$ in ALPH</b> is reserved for special honors at the jury’s discretion.
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
      <h4>The main quests</h4>
      <Paragraph>Participate in teams of 2 to 5 people, over the following categories: </Paragraph>
      <ul>
        <li>
          <b>🪄 dApps Development:</b> challenge your skills in decentralized application development.
        </li>
        <li>
          <b>🛠️ Tooling:</b> Innovate with new tools to enhance blockchain functionality.
        </li>
        <li>
          <b>🔀 Interoperability:</b> Explore the connection of Alephium with other blockchain systems.
        </li>
      </ul>
      <h4>Bounties</h4>
      <Paragraph>Full list of bounties will be announced closer to the hackathon kickoff!</Paragraph>
      <Paragraph>
        You can build any idea you want as long as it builds on Alephium and fits in one of the proposed categories. If
        you have a different idea, ping us in the general hackathon discord channel.
      </Paragraph>
      <Paragraph>
        <i>
          * You can start with a pre-existing project, but only the code progress that has happened for the duration of
          the hackathon will be considered for the evaluation & judging of the projects. For that we’ll ask you to
          define a clear objective at the beginning!
        </i>
      </Paragraph>

      <H3 divider>Conditions</H3>

      <Paragraph>
        Participants in the Hackathon must be at least 18 years old or have reached the age of majority in the
        jurisdiction in which they reside, whichever is greater old & fit with the{' '}
        <SimpleLink text="t&c" url="https://docs.google.com/document/d/1t-ViAwUSHRhRGCx4RiwL50WZoGcZeYTj" newTab />.
        Participants must register individually using the hackathon{' '}
        <SimpleLink
          text="applicant form"
          url="https://docs.google.com/forms/d/15FSd7GFPrwZXy5_cwCSDb7NXYFPTaL1DdG4Z1_0v3_s/viewform"
          newTab
        />
        . Participants will be given a special discord role.
      </Paragraph>

      <H3 divider>Why participate?</H3>

      <h4>Earn great prizes!</h4>
      <Paragraph>We’ve gone out of our way to get big prizes, and great partners.</Paragraph>
      <h4>Get visible!</h4>
      <Paragraph>
        {`This hackathon is just the beginning! 
        
        Participating projects can subsequently apply to Alephium’s `}

        <SimpleLink
          text="grant program. "
          url="https://github.com/alephium/community/blob/master/Grant%26RewardProgram.md#grants"
          newTab
        />

        {`
        
        Cetacean Capital is also interested to support participating projects as the DAO “is dedicated to supporting
        standout projects that align with their criteria in the upcoming Hackathon, providing investment/seed funding
        ranging from $50.000 to $1.000.000”. 
        
        The Blockflow DAO also expressed interest in helping quality projects develop further after the hackathon.`}
      </Paragraph>
      <h4>Be useful!</h4>
      <Paragraph>
        Complete some bounties, propose new ones, create awesome dApps or tooling for an active and growing community of
        builders and users!
      </Paragraph>
      <h4>Hack, build, hack!</h4>
      <Paragraph>Discover Ralph, the APS, our doc & the community.</Paragraph>
      <h4>Build, meet, and progress together!</h4>
      <Paragraph>
        Direct access to all core-contributors + active devs. Get & give feedback. It’s your chance to contribute early
        on to a nascent, fast-growing ecosystem!
      </Paragraph>

      <H3 divider>What is the schedule?</H3>

      <ScheduleItems>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>January 19th/22nd</h4>
            <p>Announcement and team enrollment - Opening of applications</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>February 12th</h4>
            <p>
              Hackathon Kick-off Live Event with a 1-hour demo (with h0ngchao) to setup your dev environment + 1-hour of
              open office/questions (with Cheng, Maud & other members of the jury)
            </p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>February 16th</h4>
            <p>1h Open Office Hours & Live support for participants</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>February 20th</h4>
            <p>1h Open Office Hours & Live support for participants</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>February 26th</h4>
            <p>Deadline for Submissions at 11:59PM CET</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>First half of March</h4>
            <p>Winners announced</p>
          </ScheduleItemText>
        </ScheduleItem>
      </ScheduleItems>

      <Paragraph>
        The core contributors will be easily attainable in the discord channels on a daily basis if teams need help!
      </Paragraph>
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
