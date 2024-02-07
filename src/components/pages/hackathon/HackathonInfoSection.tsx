import styled from 'styled-components'
import { deviceBreakPoints } from '../../../styles/global-style'
import HackathonSectionContainer from './HackathonSectionContainer'
import { H3, Paragraph } from './Texts'
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

const HackathonInfoSection = ({ className }: HackathonInfoSectionProps) => (
  <div className={className}>
    <HackathonSectionContainer>
      <H3 divider>When & where?</H3>
      <Paragraph>
        The hackathon will happen exclusively online, from February 12th to 26th. Main communication hub for the
        hackathon will be <SimpleLink text="our Discord" url="http://www.alephium.org/discord" newTab /> and you can
        join the hackathon channels already!
      </Paragraph>
      <Paragraph>
        <SimpleLink
          text="Hackathon-Lounge"
          url="https://discord.com/channels/747741246667227157/1070646731106172928"
          newTab
        />{' '}
        - ⁠This is where you can find a team, share tips & brainstorm! All of our updates will be shared here, leave
        your notifications on for this one!
      </Paragraph>
      <Paragraph>
        <SimpleLink
          text="Hackathon-Projects"
          url="https://discord.com/channels/747741246667227157/1203001780703727626"
          newTab
        />{' '}
        - This is where teams will regroup around their projects, document progress & interact in their own forum-like
        post. The channel is open, but you can’t post in there yet, only when the hackathon starts!
      </Paragraph>
      <br />
      <H3 divider>What are the prizes?</H3>
      <PrizeList>
        <Paragraph>The main prizes are tiered to recognize the top five submissions:</Paragraph>
        <MainPrizesContainer>
          <MainPrizesTitle>Main prizes</MainPrizesTitle>
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
        </MainPrizesContainer>
        <Paragraph>
          In addition to the main prizes, special partner prizes add an extra chance to get recognized & rewarded:
        </Paragraph>
        <h4>Special partner prizes</h4>
        <ul>
          <li>
            Cetacean’s choice will receive <b>2’500$ in ALPH</b>
          </li>
          <li>
            Blockflow’s choice will receive <b>2’500$ in ALPH</b>
          </li>
          <li>
            Dappnode’s choice will receive a <b>home node i532-4N model</b>
          </li>
        </ul>

        <Paragraph>
          The hackathon also features bounties and honors to encourage a wide range of contributions:
        </Paragraph>

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
            Note: The distribution of prizes is subject to the discretion of the jury and may be adjusted based on the
            quality of submissions received.{' '}
          </i>
        </Paragraph>
      </PrizeList>
      <br />
      <H3 divider>What can I build?</H3>
      <Paragraph>
        Participants can engage in one of two primary participation methods: embarking on the main quests or tackling
        side quests called bounties.
      </Paragraph>
      <h4>The main quests</h4>
      <Paragraph>
        Participants must form teams of 2 to 5 people and complete projects in the following categories:
      </Paragraph>
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
      <Paragraph>
        <i>
          Can I join with an existing project? Those who wish to start with a pre-existing project can do so, but only
          the progress made during the hackathon will be considered for evaluation and judging. Clear objectives will
          need to be set at the beginning of the hackathon to facilitate this assessment.
        </i>
      </Paragraph>
      <h4>Bounties</h4>
      <Paragraph>
        Everyone can participate as a team or hack solo (but bounties are not eligible for the main prizes). These are
        specific/smaller tasks or challenges that participants can complete for rewards. The list of bounties will be
        announced closer to the hackathon kickoff.
      </Paragraph>
      <H3 divider>What is the schedule?</H3>
      <ScheduleItems>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>January 19th</h4>
            <p>Announcement and team enrollment - Opening of applications</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>January 31st</h4>
            <p>Opening of the special Discord Channel for team finding and general chat.</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>February 12th</h4>
            <p>
              Hackathon Kick-off Live Event & Official start of the hackathon! One-hour demo by h0ngchao to help set up
              your development environment followed by an hour of open office/questions.
            </p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>February 16th & 20th</h4>
            <p>
              Open Office Hours & Live Support These one-hour sessions will allow participants to engage with the core
              contributors and seek assistance or clarification on their projects.
            </p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>February 26th</h4>
            <p>Submission deadline: All projects must be submitted by 11:59 PM CET.</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>First half of March</h4>
            <p>Winners Announcement</p>
          </ScheduleItemText>
        </ScheduleItem>
      </ScheduleItems>
      <H3 divider>How can I participate?</H3>
      <Paragraph>
        First, you need to apply! Join by completing the form{' '}
        <SimpleLink
          text="here!"
          url="https://docs.google.com/forms/d/e/1FAIpQLSdDsa1CwJeg-fxrWb1gVWefP4iJoNoZwNe0PNwk94GqmcMkHg/viewform?usp=sharing"
        />
      </Paragraph>
      <Paragraph>
        Then (for the main quests), you’ll need to pick a team! Don’t worry, if you don’t have one, you’ll find one on
        Discord once we open the general chat on January 31st (date at which we’ll also give a special role to accepted
        participants).
      </Paragraph>
      <Paragraph>Remember, you can only participate as a solo hacker in the bounties!</Paragraph>
      <Paragraph>
        For the duration of the hackathon, the main communication Hub will be the hackathon’s general channel. You’ll
        find resources, updates, and support there. You’ll be able to use the channel to find teammates, mentorship from
        core-contributors or just chat!
      </Paragraph>
      <Paragraph>
        Additionally, each team will have access to a dedicated Discord sub-channel in a dedicated forum channel for
        discussion, progress reporting, and collaboration.
      </Paragraph>
    </HackathonSectionContainer>
  </div>
)

export default styled(HackathonInfoSection)`
  background-color: ${({ theme }) => theme.bgTertiary};
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
  flex-shrink: 0;

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

const PrizeList = styled.div``

const MainPrizesContainer = styled.div`
  font-size: 18px;
  padding: 16px;
  background-color: ${({ theme }) => theme.bgPrimary};
  border: 1px solid ${({ theme }) => theme.palette1};

  * {
    margin: 0;
  }
`

const MainPrizesTitle = styled.h4`
  margin-bottom: 16px;
`
