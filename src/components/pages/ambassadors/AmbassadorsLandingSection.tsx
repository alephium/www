import styled from 'styled-components'
import { deviceBreakPoints } from '../../../styles/global-style'
import sunriseSrc from '../../../images/sunrise-in-ch.jpg'

export type AmbassadorsLandingSectionContentType = {
  tagline: string
  title: string
  date: string
}

interface AmbassadorsLandingSectionProps {
  content: AmbassadorsLandingSectionContentType
}

const AmbassadorsLandingSection = ({ content: { tagline, title } }: AmbassadorsLandingSectionProps) => (
  <SectionWrapper>
    <Content>
      <Label>Community</Label>
      <Title>{title}</Title>
      <TagLine>{tagline}</TagLine>
    </Content>
  </SectionWrapper>
)

export default AmbassadorsLandingSection

const SectionWrapper = styled.div`
  position: relative;
  height: 50vh;
  min-height: 500px;
  display: flex;
  background: black;
  background-image: url(${sunriseSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 5vh 10vw;
`

const Content = styled.div`
  margin-left: max(var(--spacing-14), 10vw);
  margin-top: 200px;

  @media ${deviceBreakPoints.tablet} {
    margin-left: var(--spacing-8);
    margin-top: 110px;
  }
`

const Label = styled.div`
  color: white;
  color: ${({ theme }) => theme.highlight};
  font-size: var(--fontSize-24);
  margin-bottom: var(--spacing-2);
`

const Title = styled.h1`
  //color: ${({ theme }) => theme.highlight};
  color: white;
  font-size: var(--fontSize-56);
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: 400;
`

const TagLine = styled.div`
  margin: var(--spacing-3) 0;
  font-size: var(--fontSize-24);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
`
