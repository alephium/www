import { colord } from 'colord'
import styled, { ThemeProvider } from 'styled-components'
import AlephiumLogo from '../../components/AlephiumLogo'
import ParallaxWrapper from '../../components/ParallaxWrapper'
import backgroundImage from '../../images/alephium-hackathon-lake.jpg'
import { lightTheme } from '../../styles/themes'

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
    <AlephiumLogoStyled gradientIndex={2} />
    <ParallaxWrapper speed={5}>
      <Content>
        <FirstContentBox>
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
  background: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: flex-end;
`

const AlephiumLogoStyled = styled(AlephiumLogo)`
  position: absolute;
  top: 5vh;
  left: 5vw;
  height: 10vh;
  min-height: 80px;
  width: auto;
`

const Content = styled.div`
  padding: var(--spacing-10) var(--spacing-6);
`

const FirstContentBox = styled.div`
  padding: 3vh 3vw;
  background-color: ${({ theme }) => colord(theme.bgTertiary).alpha(0.7).toHex()};
  backdrop-filter: blur(20px);
`

const SecondContentBox = styled.div`
  background-color: ${({ theme }) => colord(theme.bgPrimary).alpha(0.5).toHex()};
  backdrop-filter: blur(20px);
  padding: 2vh 3vw;
`

const TagLine = styled.h2`
  color: ${({ theme }) => theme.textSecondary};
  font-size: var(--fontSize-24);
  max-width: 500px;
`
const Title = styled.h1`
  color: ${({ theme }) => theme.textPrimary};
  font-size: var(--fontSize-50);
  margin-top: 10px;
`
const Date = styled.h1`
  color: ${({ theme }) => theme.textHighlight};
  font-size: var(--fontSize-28);
`
