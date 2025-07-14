import { colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'
import { motion, useScroll, useTransform } from 'framer-motion'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import { lightTheme } from '../../../styles/themes'
import AlephiumLogo from '../../AlephiumLogo'
import Button from '../../Button'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'
import GlowingContainer from '../../GlowingContainer'

extend([mixPlugin])

const HomepageHeroSection = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [100, 1000], [1, 0])

  return (
    <SectionWrapper style={{ opacity }}>
      <SubpageSectionStyled noTopPadding bgColor="2" fullWidth>
        <GlowingContainer>
          <ConcentricEllipses />
        </GlowingContainer>
        <TopSection>
          <TextElementWithReflection isCentered>
            <h1>Web3, as Promised.</h1>
            <p>
              Easy to build on. Safe to use. Ready to grow. <br />
              <strong>
                <b>No tradeoffs.</b>
              </strong>
            </p>
          </TextElementWithReflection>

          <Buttons>
            <Button big highlight url="/get-started">
              Get started
            </Button>
          </Buttons>
        </TopSection>

        <BottomSection>
          <AlephiumLogoContainer>
            <AlephiumLogo
              fill={lightTheme.textPrimary}
              gradientIndex={0}
              innerGlowColor={colord(lightTheme.palette1).lighten(0.2).alpha(0.3).toHex()}
            />
          </AlephiumLogoContainer>
        </BottomSection>
      </SubpageSectionStyled>
    </SectionWrapper>
  )
}

const ConcentricEllipses = () => {
  const numEllipses = 12
  const baseWidth = 400
  const baseHeight = 350
  const widthIncrement = 160
  const heightIncrement = 100
  const baseOpacity = 0.5
  const opacityDecay = 0.075

  const ellipseConfigs = Array.from({ length: numEllipses }, (_, index) => {
    const width = baseWidth + index * widthIncrement
    const height = baseHeight + index * heightIncrement
    const opacity = Math.max(baseOpacity - index * opacityDecay, 0.05)

    return { width, height, opacity }
  })

  return (
    <EllipseContainer>
      {ellipseConfigs.map(({ width, height, opacity }, index) => (
        <Ellipse key={index} width={width} height={height} delay={index} opacity={opacity} />
      ))}
    </EllipseContainer>
  )
}

export default HomepageHeroSection

const SectionWrapper = styled(motion.div)`
  width: 100%;
  padding-top: 10vh !important;
`

const SubpageSectionStyled = styled(SubpageSection)`
  padding-bottom: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-left: var(--spacing-4);
  overflow: visible;
  min-height: 55vh;
  gap: var(--spacing-4);
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 -2px 0 2px ${({ theme }) => theme.textPrimary};
    mix-blend-mode: overlay;
    opacity: 0.5;
    pointer-events: none;
  }
`

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-4);
  flex: 1;
  position: relative;
`

const EllipseContainer = styled.div`
  position: absolute;
  bottom: -15%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 0;
`

const Ellipse = styled.span<{ width: number; height: number; delay: number; opacity: number }>`
  position: absolute;
  border: 2px dashed
    ${({ theme }) =>
      colord(theme.textPrimary)
        .alpha(theme.name === 'dark' ? 0.25 : 0.2)
        .toHex()};
  border-radius: 50%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  opacity: ${({ opacity }) => opacity};
  animation: pulseEllipse 6s ease-in-out infinite ${({ delay }) => delay}s;

  @keyframes pulseEllipse {
    0%,
    100% {
      transform: translateX(-50%) scale(1);
    }
    50% {
      transform: translateX(-50%) scale(1.05);
    }
  }

  @media ${deviceBreakPoints.mobile} {
    width: ${({ width }) => width * 0.75}px;
    height: ${({ height }) => height * 0.75}px;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;

  @media ${deviceBreakPoints.mobile} {
    margin-top: var(--spacing-2);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: 0;
  }
`

const AlephiumLogoContainer = styled.div`
  position: absolute;
  height: 280px;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);

  @media ${deviceBreakPoints.mobile} {
    height: 180px;
  }

  @media ${deviceBreakPoints.smallMobile} {
    height: 130px;
    bottom: -30px;
  }
`

const TextElementWithReflection = styled(TextElement)`
  position: relative;

  @keyframes fadeInMask {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }
`

const BottomSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`
