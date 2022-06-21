import styled from 'styled-components'
import ParallaxWrapper from './ParallaxWrapper'

interface GradientBubbleProps {
  speed: number
  className?: string
}

const GradientBubble = ({ speed, className }: GradientBubbleProps) => (
  <ParallaxWrapper className={className} speed={speed}>
    <BubbleContainer>
      <BubbleCenter />
    </BubbleContainer>
  </ParallaxWrapper>
)

const BubbleContainer = styled.div`
  background: linear-gradient(180deg, #00c2ff 0%, #2400ff 100%);
  height: 100px;
  width: 100px;
  border-radius: 110px;
`

const BubbleCenter = styled.div`
  background-color: ${({ theme }) => theme.bgSecondary};
  height: 95px;
  width: 95px;
  border-radius: 110px;
`

export default GradientBubble
