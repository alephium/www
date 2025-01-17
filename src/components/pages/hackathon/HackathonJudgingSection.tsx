import styled from 'styled-components'
import TeamMember from '../../TeamMember'
import { deviceBreakPoints } from '../../../styles/global-style'
import HackathonSectionContainer from './HackathonSectionContainer'
import { H3, Paragraph } from './Texts'
import SimpleLink from '../../SimpleLink'

const HackathonJudgingSection = () => (
  <div>
    <H3 divider>Jury</H3>
    <Paragraph>We are excited to announce our panel of judges for the hackathon:</Paragraph>
    <Jury>
      <PersonCard>
        <TeamMember
          name="Cheng Wang"
          externalImageURL="https://pbs.twimg.com/profile_images/1305244977929355264/ZpRLjJcA_400x400.jpg"
          role=" Founder and core developer of Alephium, bringing deep expertise in blockchain technology and innovation."
          url="https://twitter.com/wachmc"
        />
      </PersonCard>
      <PersonCard>
        <TeamMember
          name="Hongchao"
          externalImageURL="https://pbs.twimg.com/profile_images/1661551106294521856/qMixsjJu_400x400.jpg"
          role="Core developer at Alephium, contributing extensive experience in decentralized systems and development."
          url="https://twitter.com/hongchao"
        />
      </PersonCard>
    </Jury>
    <Paragraph>
      With their diverse backgrounds and expertise, our jury is well-equipped to evaluate the creativity, functionality,
      and impact of your projects. Stay tuned for more exciting announcements as we reveal additional members of our
      judging panel!
    </Paragraph>

    <H3 divider>What are the rules?</H3>
    <Paragraph>To ensure a fair and exciting competition, all participants must follow the Hackathon rules:</Paragraph>
    <ul>
      <li>Participants must be at least 18 years old (or the age of majority in their jurisdiction).</li>
      <li>Teams can have up to 5 members, and solo participation is also welcome.</li>
      <li>Submissions must be completed and submitted before the deadline.</li>
      <li>All projects must comply with applicable laws and intellectual property requirements.</li>
      <li>Prizes will be awarded at the full discretion of the jury.</li>
    </ul>

    <Paragraph>
      For full details on eligibility, team formation, submission guidelines, judging criteria, and more, check out the
      complete Hackathon rules{' '}
      <SimpleLink text="here" url="https://drive.google.com/file/d/1PiJDzg1gUsTTO-JRXTOfMYnnfe8jD4pq/view" />.
    </Paragraph>
  </div>
)

export default HackathonJudgingSection

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
  max-width: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
