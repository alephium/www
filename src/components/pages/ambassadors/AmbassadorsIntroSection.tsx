import styled from 'styled-components'
import Columns from '../../Columns/Columns'
import { deviceBreakPoints } from '../../../styles/global-style'
import GenevaWaterJet from './AnimatedIllustrations/GenevaWaterJet'
import AmbassadorsSectionContainer from './AmbassadorsSectionContainer'
import AmbassadorsSectionTitle from './AmbassadorsSectionTitle'
import Button from '../../Button'
import { H2, H3 } from './Texts'

export type AmbassadorsIntroSectionContentType = {
  title: string
  subtitle: string
  description: string
}

interface AmbassadorsIntroSectionProps {
  content: AmbassadorsIntroSectionContentType
  className?: string
}

const AmbassadorsIntroSection = ({
  content: { title, subtitle, description },
  className
}: AmbassadorsIntroSectionProps) => (
  <AmbassadorsSectionContainer className={className}>
    <Columns gap="50px">
      <IllustrationBox></IllustrationBox>
      <TextBox>
        <TextBoxContent>
          <H2>{title}</H2>
          <H3>{subtitle}</H3>
          <Description>{description}</Description>
          <Button>Apply now</Button>
        </TextBoxContent>
      </TextBox>
    </Columns>
  </AmbassadorsSectionContainer>
)

export default AmbassadorsIntroSection

const IllustrationBox = styled.div`
  flex: 1;
  background-color: #f3c97c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 600px;

  @media ${deviceBreakPoints.tablet} {
    display: none;
  }
`

const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgSecondary};
`

const TextBoxContent = styled.div`
  padding: var(--spacing-6) 4vw;
`

const Description = styled.p`
  margin-top: var(--spacing-6);
  margin-bottom: var(--spacing-4);
`
