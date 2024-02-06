import { colord } from 'colord'
import styled from 'styled-components'
import { deviceBreakPoints } from '../../../styles/global-style'
import HackathonSectionContainer from './HackathonSectionContainer'
import headerImage from '../../../images/alephium-hackathon-lake.png'
import SimpleLink from '../../SimpleLink'

const HackathonLandingSection = () => (
  <SectionWrapper>
    <HackathonSectionContainer>
      <Content>
        <FirstContentBox>
          <Date>Hackathon #1 - Pioneers</Date>
          <Title>12th - 26th February 2024</Title>
        </FirstContentBox>
        <SecondContentBox>
          <TagLine>
            <TLDR>
              TL;DR - A prize pool of up to $50,000 in ALPH tokens, sponsored by Alephium, the{' '}
              <SimpleLink url="https://twitter.com/Blockflow_DAO" text="Blockflow Alliance DAO" newTab />, and{' '}
              <SimpleLink url="https://cetacean.capital/" text="Cetacean Capital" newTab />.
            </TLDR>
            It will reward teams building across 3 main categories (dApps, tooling & interoperability) as well as
            offering bounties for solo hackers!
          </TagLine>
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
  background-color: black;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
`

const Content = styled.div`
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
  border-radius: 12px;
  margin-bottom: 10px;
`

const SecondContentBox = styled.div`
  background-color: ${colord('#000000').alpha(0.7).toRgbString()};
  color: white;
  backdrop-filter: blur(24px);
  padding: 2vh 3vw;
  line-height: 30px;
  border-radius: 12px;
`

const TagLine = styled.h2`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.2rem;
  font-weight: 400;
  white-space: pre-line;
`

const TLDR = styled.div`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
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
