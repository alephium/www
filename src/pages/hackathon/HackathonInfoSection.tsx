import styled from 'styled-components'
import ArrowedLink from '../../components/ArrowedLink'
import HackathonSectionContainer from './HackathonSectionContainer'
import HackhathonSectionTitle from './HackhathonSectionTitle'

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
