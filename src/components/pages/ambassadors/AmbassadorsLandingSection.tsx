import { colord } from 'colord'
import styled from 'styled-components'
import AlephiumLogo from '../../AlephiumLogo'
import { deviceBreakPoints } from '../../../styles/global-style'

export type AmbassadorsLandingSectionContentType = {
  tagline: string
  title: string
  date: string
}

interface AmbassadorsLandingSectionProps {
  content: AmbassadorsLandingSectionContentType
}

const AmbassadorsLandingSection = ({ content: { tagline, title, date } }: AmbassadorsLandingSectionProps) => (
  <SectionWrapper>
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
  </SectionWrapper>
)

export default AmbassadorsLandingSection

const SectionWrapper = styled.div`
  position: relative;
  height: 50vh;
  display: flex;
  background: black;
  margin: 5vh 10vw;
`

const AlephiumLogoStyled = styled(AlephiumLogo)`
  height: 10vh;
  min-height: 80px;
  width: auto;
`

const Content = styled.div`
  margin-left: var(--spacing-30);
  margin-right: var(--spacing-14);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 17px;
  overflow: hidden;

  @media ${deviceBreakPoints.tablet} {
    margin-left: var(--spacing-4);
    margin-right: var(--spacing-4);
  }
`

const FirstContentBox = styled.div`
  max-height: 300px;
`

const SecondContentBox = styled.div`
  background-color: ${colord('#000000').alpha(0.6).toRgbString()};
  backdrop-filter: blur(20px);

  max-height: 150px;
`

const TagLine = styled.h2`
  color: white;
  font-size: var(--fontSize-24);
  color: ${({ theme }) => theme.bgTertiary};
  max-width: 500px;
  font-weight: 400;
`
const Title = styled.h1`
  color: white;
  font-size: var(--fontSize-50);
  margin-top: 10px;
  font-weight: 500;
`
const Date = styled.h1`
  color: ${({ theme }) => theme.highlight};
  font-size: var(--fontSize-28);
  font-weight: 200;
`
