import { colord } from 'colord'
import styled from 'styled-components'
import AlephiumLogo from '../../AlephiumLogo'
import ParallaxWrapper from '../../ParallaxWrapper'
import backgroundImage from '../../../images/alephium-hackathon-lake.jpg'
import { deviceBreakPoints } from '../../../styles/global-style'

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
    <ParallaxWrapper speed={5}>
      <Content>
        <FirstContentBox>
          <AlephiumLogoStyled gradientIndex={2} />
          <Date>{date}</Date>
          <Title>{title}</Title>
        </FirstContentBox>
        <SecondContentBox>
          <TagLine>{tagline}</TagLine>
        </SecondContentBox>
      </Content>
    </ParallaxWrapper>
  </SectionWrapper>
)

export default HackathonLandingSection

const SectionWrapper = styled.div`
  position: relative;
  background: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: calc(max(60vh, 300px));
  max-height: 400px;
  display: flex;
  align-items: flex-end;
`

const AlephiumLogoStyled = styled(AlephiumLogo)`
  height: 10vh;
  min-height: 80px;
  width: auto;
`

const Content = styled.div`
  margin-bottom: -12%;
  margin-left: var(--spacing-30);
  margin-right: var(--spacing-14);
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.highlight};
  border-radius: 17px;
  overflow: hidden;

  @media ${deviceBreakPoints.tablet} {
    margin-left: var(--spacing-4);
    margin-right: var(--spacing-4);
  }
`

const FirstContentBox = styled.div`
  padding: 5vh calc(max(3vw, 30px));
  background-color: ${colord('#1111111').alpha(0.1).toRgbString()};
  backdrop-filter: blur(20px);
  max-height: 300px;
`

const SecondContentBox = styled.div`
  background-color: ${colord('#000000').alpha(0.6).toRgbString()};
  backdrop-filter: blur(20px);
  padding: 2vh 3vw;
  max-height: 150px;
`

const TagLine = styled.h2`
  color: ${({ theme }) => theme.textPrimary};
  font-size: var(--fontSize-24);
  max-width: 500px;
  font-weight: 400;
`
const Title = styled.h1`
  color: ${({ theme }) => theme.textPrimary};
  font-size: var(--fontSize-50);
  margin-top: 10px;
  font-weight: 600;
`
const Date = styled.h1`
  color: ${({ theme }) => theme.highlight};
  font-size: var(--fontSize-28);
  font-family: 'courier';
  font-weight: 200;
`
