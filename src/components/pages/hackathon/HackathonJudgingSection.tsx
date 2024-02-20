import styled from 'styled-components'
import TeamMember from '../../TeamMember'
import { deviceBreakPoints } from '../../../styles/global-style'
import HackathonSectionContainer from './HackathonSectionContainer'
import { H3, Paragraph } from './Texts'
import SimpleLink from '../../SimpleLink'

const HackathonJudgingSection = () => (
  <HackathonSectionContainer>
    <H3 divider>Who’s in the Jury?</H3>
    <Paragraph>
      We’ve assembled a knowledgeable, exigent but amicable & engaged jury composed of core contributors. This jury will
      distribute the main prizes, bounties rewards & honorable mentions:
    </Paragraph>
    <Jury>
      <PersonCard>
        <TeamMember
          name="wachmc"
          externalImageURL="https://pbs.twimg.com/profile_images/1305244977929355264/ZpRLjJcA_400x400.jpg"
          role="Core Dev"
          url="https://twitter.com/wachmc"
        />
      </PersonCard>
      <PersonCard>
        <TeamMember
          name="h0ngcha0"
          externalImageURL="https://pbs.twimg.com/profile_images/1661551106294521856/qMixsjJu_400x400.jpg"
          role="Core Dev"
          url="https://twitter.com/hongchao"
        />
      </PersonCard>
      <PersonCard>
        <TeamMember
          name="Mika"
          externalImageURL="https://pbs.twimg.com/profile_images/1676260099096997890/PGifYKJ7_400x400.jpg"
          role="Product"
          url="https://twitter.com/mika_pote"
        />
      </PersonCard>
      <PersonCard>
        <TeamMember
          name="s0ukie"
          externalImageURL="https://pbs.twimg.com/profile_images/1319902775489318919/fND_7B0D_400x400.jpg"
          role="Operations"
          url="https://twitter.com/MaudBannwart"
        />
      </PersonCard>
      <PersonCard>
        <TeamMember
          name="Polto"
          externalImageURL="https://pbs.twimg.com/profile_images/1099938333227134977/pWfwDYnu_400x400.png"
          role="Strategy"
          url="https://twitter.com/_polto_"
        />
      </PersonCard>
      <PersonCard>
        <TeamMember
          name="zippy9999"
          externalImageURL="https://pbs.twimg.com/profile_images/1608261674938646529/k6lRrQNO_400x400.jpg"
          role="Marketing"
          url="https://twitter.com/Estragon77"
        />
      </PersonCard>
    </Jury>
    <Paragraph>Partners will have their own juries & will choose the partner prizes independently:</Paragraph>
    <Paragraph>Partner jury — Bitmain</Paragraph>
    <Paragraph>Partner jury — Blockflow DAO</Paragraph>
    <Paragraph>Partner jury — Cetacean Capital DAO</Paragraph>
    <Paragraph>Partner jury — Dappnode</Paragraph>

    <H3 divider>What will be the jury’s criteria?</H3>
    <Paragraph>
      Participants are encouraged to be creative and propose projects that resonate with their interests, as long as
      they align with Alephium’s framework and fit into one of the proposed categories. Here is how the jury will
      evaluate your project:
    </Paragraph>

    <CriteriumList>
      <CriteriumCard>
        <H3>Implementation</H3>
        <Paragraph>Does the interaction with Alephium demonstrate quality software development?</Paragraph>
      </CriteriumCard>
      <CriteriumCard>
        <H3>From idea to finish</H3>
        <Paragraph>Does the idea/intention announced at the beginning match with the output at the end?</Paragraph>
      </CriteriumCard>
      <CriteriumCard>
        <H3>UX/Design</H3>
        <Paragraph>Is the user experience and design of the project well thought out?</Paragraph>
      </CriteriumCard>
      <CriteriumCard>
        <H3>Potential Impact</H3>
        <Paragraph>How big of an impact could the project have on the Alephium ecosystem?</Paragraph>
      </CriteriumCard>
      <CriteriumCard>
        <H3>Quality of the Idea</H3>
        <Paragraph>How creative and unique is the project?</Paragraph>
      </CriteriumCard>
    </CriteriumList>

    <H3 divider>What are the rules?</H3>
    <Paragraph>
      <ul>
        <li>
          <b>Age and Legal Requirements:</b> Participants must be at least 18 years old, or have reached the age of
          majority in their jurisdiction, whichever is greater. Compliance with the terms and conditions outlined{' '}
          <SimpleLink
            text="here "
            url="https://drive.google.com/file/d/1l6zPHBKYiJshTbEBB__W1a8nxOrNDfZF/view?usp=sharing"
            newTab
          />
          is mandatory.
        </li>
        <li>
          <b>Adherence to Themes: </b>Projects should align with the hackathon’s themes and categories. Creativity is
          encouraged, but relevance to Alephium’s ecosystem is essential.
        </li>
        <li>
          <b>Progress and Development: </b>Projects can build upon existing work, but only advancements made during the
          hackathon will be considered for judging.
        </li>
        <li>
          <b>Where will the teams submit their projects: </b>The submissions must include links to code repositories.
          You can also include text, video, or audio with relevant graphics and links to webapps you may find relevant.
        </li>
      </ul>
      We’ve assembled a knowledgeable, exigent but amicable & engaged jury composed of core contributors. This jury will
      distribute the main prizes, bounties rewards & honorable mentions:
    </Paragraph>

    <H3 divider>What happens after the hackathon?</H3>
    <Paragraph>Participating projects can subsequently apply to Alephium’s grant program.</Paragraph>
    <Paragraph>
      <SimpleLink
        text="Cetacean Capital is also interested to support participating projects as the DAO"
        url="https://cetaceancapital.medium.com/bringing-the-a-game-2024-outlook-of-our-alephium-investment-4afd9a86606f"
        newTab
      />{' '}
      “is dedicated to supporting standout projects that align with their criteria in the upcoming Hackathon, providing
      investment/seed funding ranging from $50.000 to $1.000.000”.
    </Paragraph>
    <Paragraph>
      The Blockflow DAO also expressed interest in helping quality projects develop further after the hackathon.
    </Paragraph>

    <H3 divider>Hackathon Partners</H3>
    <PartnersCards>
      <PartnerCard>
        <PartnerLogo>
          <img
            src="https://pbs.twimg.com/profile_images/1740265141088952320/XxOqqSvZ_400x400.jpg"
            alt="Bitmain Logo"
            decoding="async"
            loading="lazy"
          />
        </PartnerLogo>
        <PartnerDescription>
          <SimpleLink text="BITMAIN" url="https://www.bitmain.com/" newTab /> is a global leader in digital currency
          mining servers and is committed to creating a better digital world. With cutting-edge hash-rate efficiency
          technologies, they drive secure, stable hashrate infrastructure, fueling innovation in the web 3.0 era.
        </PartnerDescription>
      </PartnerCard>
      <PartnerCard>
        <PartnerLogo>
          <img
            src="https://pbs.twimg.com/profile_images/1713965806478823424/BMQNZ1Sv_400x400.jpg"
            alt="Blockflow DAO Logo"
            decoding="async"
            loading="lazy"
          />
        </PartnerLogo>
        <PartnerDescription>
          <SimpleLink text="Blockflow Alliance" url="https://twitter.com/Blockflow_DAO" newTab /> is Alephium’s first
          ever community DAO, dedicated to boosting adoption & usage, expanding the community, nurturing development &
          promoting the Alephium ecosystem.
        </PartnerDescription>
      </PartnerCard>
      <PartnerCard>
        <PartnerLogo>
          <img
            src="https://pbs.twimg.com/profile_images/1458081424301600773/aEFzAaAN_400x400.jpg"
            alt="Cetacean Capital Logo"
            decoding="async"
            loading="lazy"
          />
        </PartnerLogo>
        <PartnerDescription>
          <SimpleLink text="Cetacean Capital" url="https://cetacean.capital/" newTab /> aims to be DeFi’s most loved,
          efficient, and profitable Investment DAO. As individuals, its members have incredible skills, experience
          knowledge and contacts, in the crypto-space for many years.
        </PartnerDescription>
      </PartnerCard>
      <PartnerCard>
        <PartnerLogo>
          <img
            src="https://pbs.twimg.com/profile_images/1566755026529406977/783o8STM_400x400.jpg"
            alt="Dappnode Logo"
            decoding="async"
            loading="lazy"
          />
        </PartnerLogo>
        <PartnerDescription>
          <SimpleLink text="Dappnode" url="https://dappnode.com/" newTab /> is the self-owned infrastructure layer for a
          human-centric, data-sovereign, private-by-design internet. Dappnode lowers the barrier of entry for non
          tech-savvy participants.
        </PartnerDescription>
      </PartnerCard>
    </PartnersCards>
  </HackathonSectionContainer>
)

export default HackathonJudgingSection

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
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  background-color: ${({ theme }) => theme.bgPrimary};

  h3 {
    margin-top: var(--spacing-2);
  }
`

const Jury = styled.div`
  display: flex;
  gap: 25px;

  @media ${deviceBreakPoints.mobile} {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const PersonCard = styled.div`
  padding-bottom: var(--spacing-2);
  text-align: center;
  max-width: 170px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PartnersCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`

const PartnerCard = styled.div`
  display: flex;
  padding: var(--spacing-3);
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  background-color: ${({ theme }) => theme.bgPrimary};
`

const PartnerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    overflow: hidden;
  }
`

const PartnerDescription = styled.div``
