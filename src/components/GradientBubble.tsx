import styled from 'styled-components'
import ParallaxWrapper, { ParallaxWrapperProps } from './ParallaxWrapper'

const gradients = {
  0: 'linear-gradient(30deg, #fff47c 20%, #00b7ff 50%, #ff009d 80%)',
  1: 'linear-gradient(40deg, #f340a2 20%, #3700ff 50%, #00d5ff 80%)',
  2: 'linear-gradient(65deg, #889bd8 20%, #210cc4 50%, #9534fc 80%)',
  3: 'linear-gradient(65deg, #40f3de 20%, #ffff00 50%, #fc8434 80%)',
  4: 'linear-gradient(65deg, #6250ff 20%, #bf00ff 50%, #fce834 80%)'
}
interface GradientRingProps extends ParallaxWrapperProps {
  positionPercentage: [number, number]
  gradientVariant: keyof typeof gradients
  scale?: number
  blur?: number
  className?: string
}

const GradientRing = ({
  className,
  positionPercentage,
  gradientVariant,
  scale = 1,
  blur = 0,
  ...rest
}: GradientRingProps) => (
  <Anchor style={{ left: positionPercentage[0] + '%', top: positionPercentage[1] + '%' }}>
    <ParallaxWrapper className={className} {...rest}>
      <BubbleContainer
        style={{
          transform: `scale(${scale / 5})`,
          filter: `blur(${blur}px)`,
          background: gradients[gradientVariant]
        }}
      >
        <BubbleCenter />
      </BubbleContainer>
    </ParallaxWrapper>
  </Anchor>
)

const Anchor = styled.div`
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
`

const BubbleContainer = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  border-radius: 600px;
`

const BubbleCenter = styled.div`
  background-color: ${({ theme }) => theme.bgTertiary};
  height: 90%;
  width: 90%;
  border-radius: 600px;
  margin: auto;
`

export default GradientRing
