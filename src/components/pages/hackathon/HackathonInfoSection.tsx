import styled from 'styled-components'

import alephiumLogo from '../../../images/logos/alephium-logo.png'
import cryptoXRLogo from '../../../images/logos/cryptoXR-logo.png'
import lsw3Logo from '../../../images/logos/lsw3-logo.jpg'
import { deviceBreakPoints } from '../../../styles/global-style'
import SimpleLink from '../../SimpleLink'
import { H3, Paragraph } from './Texts'

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
    <H3>When & where?</H3>
    <Paragraph>
      The hackathon will take place exclusively on-site at <b>Auxerre Expo Parc (Auxerrexpo)</b> on Friday January, 31st
      and Saturday, February 1st, as part of CryptoXR. Detailed directions to the venue can be found on the official{' '}
      <SimpleLink text="CryptoXR" url="https://cryptoxr.fr)" /> website.
    </Paragraph>
    <Paragraph>
      <i>
        All registered hackathon participants will automatically receive entry to CryptoXR, so you can enjoy the full
        event experience!
      </i>
    </Paragraph>

    <H3 divider>Hackathon Organizers</H3>
    <PartnersCards>
      <PartnerCard>
        <PartnerLogo>
          <img src={cryptoXRLogo} alt="CryptoXR Logo" decoding="async" loading="lazy" />
        </PartnerLogo>
        <PartnerName text="Crypto XR" url="https://www.bitmain.com/"></PartnerName>
        <PartnerDescription>
          Auxerre is set to become France’s Web3 capital from January 30 to February 1, 2025, as CryptoXR returns for
          its third edition. With over 3,000 visitors, 70+ speakers, and a 6,000 m² exhibition space, CryptoXR is one of
          the most accessible and inclusive Web3 events in France. Focused on federating and democratizing Web3
          technologies, the event brings together industry pioneers, local actors, and the broader public to celebrate
          innovation, inclusivity, and decentralization.
        </PartnerDescription>
      </PartnerCard>
      <PartnerCard>
        <PartnerLogo>
          <img src={lsw3Logo} alt="LSW3 Logo" decoding="async" loading="lazy" />
        </PartnerLogo>
        <PartnerName text="LSW3" url="https://lsw3.fr" />
        <PartnerDescription>
          LSW3 is rapidly becoming one of the largest professional Web3 networks in France, with nearly 100 members,
          including major players like Binance, Morpho, and Vivendi, as well as representation from the French
          government on its board. This growing alliance is dedicated to enhancing security across the Web3 ecosystem by
          uniting industry leaders, public institutions, and innovators to share best practices and combat fraud and
          scams in blockchain and cryptocurrency. Its mission is to make Web3 technologies safer, more transparent, and
          widely accessible, solidifying its position as a cornerstone of the French Web3 landscape.
        </PartnerDescription>
      </PartnerCard>
      <PartnerCard>
        <PartnerLogo>
          <img src={alephiumLogo} alt="Alephium Logo" decoding="async" loading="lazy" />
        </PartnerLogo>
        <PartnerName text="Alephium" url="https://alephium.org" />
        <PartnerDescription>
          Alephium is a next-gen Proof-of-Work Layer 1 blockchain designed to tackle scalability, security, and
          sustainability, making it an ideal foundation for impactful, future-ready blockchain solutions. With BlockFlow
          technology, it supports over 10,000 tps, ensuring efficiency for global applications while maintaining a
          simple, single-chain experience. Its stateful UTXO model combines smart contract flexibility with UTXO
          security, providing a secure environment for dApps and tokenized assets. Alephium’s Proof-of-Less-Work cuts
          energy use by 87%, aligning with environmental goals without compromising decentralization. As the
          second-largest PoW blockchain by TVL after Bitcoin, Alephium powers DeFi, mining, and large-scale initiatives
          like the billion-dollar GIGATONS project.
        </PartnerDescription>
      </PartnerCard>
    </PartnersCards>

    <H3 divider>Prizes & category for teams</H3>
    <PrizeList>
      <Paragraph>
        The most functional, impactful, and innovative projects will be rewarded with the following prizes:
      </Paragraph>
      <MainPrizesContainer>
        <MainPrizesTitle>Main prizes</MainPrizesTitle>
        <ul>
          <li>
            1st Place: <Badge>€3,000</Badge> in ALPH
          </li>
          <li>
            2nd Place: <Badge>€2,000</Badge> in ALPH
          </li>
          <li>
            3rd Place: <Badge>€1,000</Badge> in ALPH
          </li>
        </ul>
      </MainPrizesContainer>

      <h4>Special prizes</h4>
      <Paragraph>
        In addition to the main prizes, teams have additional opportunities to be recognized and rewarded with{' '}
        <Badge>€500 each</Badge> for excelling in specific areas:
      </Paragraph>
      <ul>
        <li>
          <b>Most Creative Project</b> – Celebrating exceptional creativity and originality in leveraging Alephium’s
          features.
        </li>
        <li>
          <b>Best User Experience (UI/UX)</b> – Recognizing projects with outstanding design, ease of use, and
          accessibility.
        </li>
        <li>
          <b>Best Code Quality</b> – Rewarding clean, efficient, and well-documented code that follows best practices.
        </li>
        <li>
          <b>Best Security Project</b> – Honoring tools that enhance Alephium’s security, such as vulnerability
          scanners, testing frameworks, or monitoring systems.
        </li>
      </ul>

      <Paragraph>
        <i>
          Please note: We reserve the right to adjust the prize categories based on the final submissions received to
          ensure alignment with the quality and diversity of the projects.
        </i>
      </Paragraph>

      <H3 divider>Prizes for Solo-participants</H3>
      <MainPrizesContainer>
        <Paragraph>
          Total Prize Pool: <Badge>€3,000</Badge>
        </Paragraph>
        <Paragraph>
          Solo developers, this is your time to shine! We’ve curated a variety of challenges tailored to individual
          contributors, offering flexible opportunities to showcase your skills and creativity. These challenges aim to
          empower solo hackers to dive into Alephium’s ecosystem, solve puzzles, and create tools that benefit the
          broader developer community. Here are some examples of potential challenges and rewards (final challenges to
          be defined):
        </Paragraph>
        <ul>
          <li>
            <b>
              Port a Simple Solidity Contract <Badge>Up to €500</Badge>
            </b>{' '}
            – Select from a predefined list of Solidity contracts and port one to Alephium’s platform. This challenge
            tests your ability to adapt smart contracts to a new blockchain environment.
          </li>
          <li>
            <b>
              Solve the Bounty Puzzle <Badge>€100 (based on complexity)</Badge>
            </b>{' '}
            – Recognizing projects with outstanding design, ease of use, and accessibility.
          </li>
          <li>
            <b>
              Build a Mini-Tool or Utility for Alephium Developers <Badge>Up to €500</Badge>
            </b>{' '}
            – Create a lightweight, functional tool to enhance the Alephium development experience. This could include
            testing frameworks, debugging tools, or utilities that streamline development workflows.
          </li>
        </ul>
      </MainPrizesContainer>
      <Paragraph>
        Stay tuned for more challenges! If you have an idea for a challenge, propose it to us upon registration or in
        person during the onboarding session on Friday January, 31st.
      </Paragraph>
      <Paragraph>
        Participants can look forward to a host of surprises throughout the event! From exclusive goodies and swag to
        bonus challenges and unexpected rewards, we’ve got plenty in store to make your hackathon experience
        unforgettable. Whether it’s a token of appreciation or an extra boost of motivation, we’re here to ensure every
        participant feels valued and inspired.
      </Paragraph>
    </PrizeList>

    <H3 divider>Timeline</H3>
    <TimeLinesWrapper>
      <ScheduleItems>
        <ScheduleItemsHeader>Friday - 16:00-20:00</ScheduleItemsHeader>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>16:30 - 17:00</h4>
            <p>Welcome & Alephium Introduction</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>17:00 - 18:00</h4>
            <p>Onboarding & resources sharing:</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>18:00-20:00</h4>
            <p>Open office + small Apéro</p>
          </ScheduleItemText>
        </ScheduleItem>
      </ScheduleItems>
      <ScheduleItems>
        <ScheduleItemsHeader>Saturday - 9:00 - 20:00</ScheduleItemsHeader>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>9:00</h4>
            <p>Opening</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>9:30</h4>
            <p>Hackathon Start</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>12:30</h4>
            <p>Lunch</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>17:00</h4>
            <p>Submission deadline</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>17:00-20:00</h4>
            <p>Review</p>
          </ScheduleItemText>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDot />
          <ScheduleItemText>
            <h4>20:00-20:30</h4>
            <p>Winner announcement on the main stage</p>
          </ScheduleItemText>
        </ScheduleItem>
      </ScheduleItems>
    </TimeLinesWrapper>
    <H3 divider>How can I participate?</H3>
    <Paragraph>Getting involved is easy!</Paragraph>
    <ul>
      <li>
        <b>Register</b>: Start by completing the registration form{' '}
        <SimpleLink text="here" url="https://forms.gle/rHGhpNpTNeZrMVdZ7" /> to secure your spot.
      </li>
      <li>
        <b>Prepare</b>: Ahead of the event, we’ll send you some resources to help you get started. In the meantime, you
        can already explore the <SimpleLink text="Alephium documentation" url="https://docs.alephium.org" /> to
        familiarize yourself with the chain and its features.
      </li>
      <li>
        <b>Attend CryptoXR</b>: Make sure to come to the CryptoXR event at Auxerrexpo, as the hackathon will take place
        exclusively on-site.
      </li>
      <li>
        Join the Onboarding Session: Don’t miss the onboarding session on Friday, January 31st, where we’ll guide you
        through everything you need to know to kickstart your hackathon experience.
      </li>
    </ul>
    <Paragraph>
      If you have any questions about the hackathon or need assistance, feel free to email us at info@alephium.org or
      Contact@lsw3.fr —we’re here to help!
    </Paragraph>
  </div>
)

export default styled(HackathonInfoSection)`
  background-color: ${({ theme }) => theme.bgTertiary};
`

const TimeLinesWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
  }
`

const ScheduleItems = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgSecondary};
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  border-radius: 22px;
  overflow: hidden;
`

const ScheduleItemsHeader = styled.div`
  background-color: ${({ theme }) => theme.bgSurface};
  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
  padding: var(--spacing-2) var(--spacing-4);
  font-size: 20px;
  text-align: center;
`

const ScheduleItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-2);
  border-left: 1px solid ${({ theme }) => theme.palette1};
  margin: 0 var(--spacing-2);

  h4 {
    margin: 10px 0 0 0 !important;
  }
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
  padding-top: 10px;
`

const PrizeList = styled.div``

const MainPrizesContainer = styled.div`
  font-size: 18px;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgPrimary};
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  border-radius: 22px;

  h3 {
    margin: 0;
  }
`

const MainPrizesTitle = styled.h3`
  font-size: 28px !important;
  margin-bottom: 16px;
`

const PartnersCards = styled.div`
  display: flex;
  gap: 20px;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
  }
`

const PartnerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: var(--spacing-3);
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 22px;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-4);
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const PartnerLogo = styled.div`
  img {
    background-color: white;
    height: 100px;
    width: 100px;
    border-radius: 22px;
    overflow: hidden;
    object-fit: contain;
  }
`

const PartnerName = styled(SimpleLink)`
  font-size: 24px;
  font-weight: 500;
`

const PartnerDescription = styled.div`
  max-width: 400px;
  font-size: 15px;
  color: ${({ theme }) => theme.textPrimaryVariation};
`

const Badge = styled.div`
  display: inline;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 4px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.palette1};
`
