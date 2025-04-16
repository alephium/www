import { colord } from 'colord'
import styled from 'styled-components'

import cryptoXRIllustration from '../../../images/crypto-xr-cyberpunk.png'
import headerImage from '../../../images/crypto-xr-gradient.png'
import { deviceBreakPoints } from '../../../styles/global-style'
import SimpleLink from '../../SimpleLink'
import HackathonSectionContainer from './HackathonSectionContainer'

const HackathonLandingSection = () => (
  <SectionWrapper>
    <CryptoXRIllustration />
    <ContentContainer>
      <Content>
        <FirstContentBox>
          <SurTitle1>CryptoXR Hackathon</SurTitle1>
          <SurTitle2>BUIDL with Alephium & LSW3</SurTitle2>
          <Title>31.01 - 01.02.2025</Title>
          <SubTitle>In person</SubTitle>
        </FirstContentBox>
        <SecondContentBox>
          <TagLine>
            <TLDR>
              €15,000 in ALPH is up for grabs at the first-ever in-person Alephium hackathon, hosted by France’s most
              beloved crypto event, <SimpleLink url="https://cryptoxr.fr" text="CryptoXR" />, and{' '}
              <SimpleLink url="https://lsw3.fr/" text="LSW3" />!
            </TLDR>
            This 1-day on-site hackathon welcomes both teams and solo developers to buidl. Don’t miss the chance to dive
            into Alephium’s innovative blockchain technology, showcase your skills, and connect with the vibrant
            CryptoXR community.
          </TagLine>
        </SecondContentBox>

        <ActionLink
          href="https://forms.gle/rHGhpNpTNeZrMVdZ7"
          target="_blank"
          rel="noopener noreferrer"
          data-goatcounter-click="cryptoXR-main-button"
        >
          <ActionButton>Register now!</ActionButton>
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
  height: auto;
  padding-top: 8%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 600px;
`

const FirstContentBox = styled.div`
  padding: var(--spacing-4) calc(max(3vw, 30px));
  background-color: ${colord('#000000').alpha(0.9).toRgbString()};
  backdrop-filter: blur(24px);
  line-height: 40px;
  margin-bottom: 10px;
  border-radius: 22px;

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
  border-radius: 22px;
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
const SurTitle1 = styled.h1`
  color: ${({ theme }) => theme.palette2};
  font-size: 42rpx;
  font-weight: 500;
  margin: 0;
`

const SurTitle2 = styled.h1`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 26px;
  font-weight: 400;
  margin: 0;
`

const SubTitle = styled.div`
  display: inline-block;
  padding: 0px 16px;
  background: ${({ theme }) => theme.palette2};
  border-radius: 12px;

  @media ${deviceBreakPoints.mobile} {
    margin-top: 20px;
  }
`

const ActionLink = styled.a`
  text-decoration: none;
  color: white !important;
`

const ActionButton = styled.div`
  padding: 20px;
  text-align: center;
  background-color: white;
  color: black;
  font-weight: 500;
  border-radius: 100px;
  margin-top: 20px;
  font-size: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.palette1};
    cursor: pointer;
  }
`

const CryptoXRIllustration = styled.div`
  position: absolute;
  bottom: 0;
  right: 100px;
  background-image: url(${cryptoXRIllustration});
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 400px;
  transform: scaleX(-1);
`
