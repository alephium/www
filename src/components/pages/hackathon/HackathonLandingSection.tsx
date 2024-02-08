import { colord } from 'colord'
import styled from 'styled-components'
import { deviceBreakPoints } from '../../../styles/global-style'
import HackathonSectionContainer from './HackathonSectionContainer'
import headerImage from '../../../images/alephium-hackathon-lake.png'
import SimpleLink from '../../SimpleLink'

const HackathonLandingSection = () => (
  <SectionWrapper>
    <ContentContainer>
      <Content>
        <FirstContentBox>
          <Date>Hackathon #1 - Pioneers</Date>
          <Title>12th - 26th February 2024</Title>
        </FirstContentBox>
        <SecondContentBox>
          <TagLine>
            <TLDR>
              TL;DR - Up to $50,000 in ALPH tokens, sponsored by Alephium, the{' '}
              <SimpleLink url="https://twitter.com/Blockflow_DAO" text="Blockflow Alliance DAO" newTab />, and{' '}
              <SimpleLink url="https://cetacean.capital/" text="Cetacean Capital" newTab /> and{' '}
              <SimpleLink url="https://dappnode.com/" text="Dappnode" newTab />
            </TLDR>
            It will reward teams building across 3 main categories (dApps, tooling & interoperability) as well as
            offering bounties for solo hackers!
          </TagLine>
        </SecondContentBox>

        <ActionLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSdDsa1CwJeg-fxrWb1gVWefP4iJoNoZwNe0PNwk94GqmcMkHg/viewform?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          data-goatcounter-click="hackathonApplyMainBtn"
        >
          <ActionButton>Apply now!</ActionButton>
        </ActionLink>
      </Content>
    </ContentContainer>
  </SectionWrapper>
)

export default HackathonLandingSection

const SectionWrapper = styled.div`
  display: flex;
  margin-top: 65px;
  position: relative;
  min-height: calc(100vh - 65px);
  background-color: black;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  overflow: hidden;
`

const ContentContainer = styled(HackathonSectionContainer)`
  flex: 1;
  display: flex;
  align-items: center;
  height: auto;
`

const Content = styled.div`
  overflow: hidden;
  max-width: 600px;
`

const FirstContentBox = styled.div`
  padding: var(--spacing-4) calc(max(3vw, 30px));
  background-color: ${colord('#000000').alpha(0.9).toRgbString()};
  backdrop-filter: blur(24px);
  line-height: 40px;
  margin-bottom: 10px;

  @media ${deviceBreakPoints.mobile} {
    padding: 20px;

    * {
      margin: 0;
    }
  }
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
  color: ${({ theme }) => theme.palette2};
  font-size: 30px;
  font-weight: 500;
`

const ActionLink = styled.a`
  text-decoration: none;
  color: white !important;
`

const ActionButton = styled.div`
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.palette3};

  &:hover {
    background-color: ${({ theme }) => theme.palette2};
    cursor: pointer;
  }
`
