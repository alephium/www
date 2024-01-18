import { colord } from 'colord'
import styled from 'styled-components'
import { deviceBreakPoints } from '../../../styles/global-style'
import HackathonSectionContainer from './HackathonSectionContainer'
import headerImage from '../../../images/alephium-hackathon-lake.png'

export type HackathonLandingSectionContentType = {
  tagline: string
  title: string
  date: string
}

interface HackathonLandingSectionProps {
  content: HackathonLandingSectionContentType
}

const HackathonLandingSection = ({ content: { tagline, title, date } }: HackathonLandingSectionProps) => (
  <SectionWrapper>
    <HackathonSectionContainer>
      <Content>
        <FirstContentBox>
          <Date>{date}</Date>
          <Title>{title}</Title>
        </FirstContentBox>
        <SecondContentBox>
          <TagLine>{tagline}</TagLine>
        </SecondContentBox>
      </Content>
    </HackathonSectionContainer>
  </SectionWrapper>
)

export default HackathonLandingSection

const SectionWrapper = styled.div`
  margin-top: 65px;
  position: relative;
  height: calc(max(70vh, 300px));
  padding-top: 40px;
  background-color: black;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
`

const Content = styled.div`
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  overflow: hidden;
  max-width: 600px;

  @media ${deviceBreakPoints.mobile} {
    margin-left: var(--spacing-2);
    margin-right: var(--spacing-2);
  }
`

const FirstContentBox = styled.div`
  padding: var(--spacing-4) calc(max(3vw, 30px));
  background-color: ${colord('#000000').alpha(0.9).toRgbString()};
  backdrop-filter: blur(24px);
  line-height: 40px;
`

const SecondContentBox = styled.div`
  background-color: ${colord('#000000').alpha(0.7).toRgbString()};
  color: white;
  backdrop-filter: blur(24px);
  padding: 2vh 3vw;
  line-height: 30px;
`

const TagLine = styled.h2`
  color: ${({ theme }) => theme.textPrimary};
  font-size: var(--fontSize-24);
  font-weight: 400;
`
const Title = styled.h1`
  color: ${({ theme }) => theme.textPrimary};
  font-size: var(--fontSize-50);
  margin-top: 10px;
  font-weight: 500;
`
const Date = styled.h1`
  color: ${({ theme }) => theme.palette1};
  font-size: var(--fontSize-28);
  font-family: 'courier';
  font-weight: 200;
`
