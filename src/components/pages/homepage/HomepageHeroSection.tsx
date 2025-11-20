import { colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import { lightTheme } from '../../../styles/themes'
import AlephiumLogo from '../../AlephiumLogo'
import Button from '../../Button'
import ConcentricEllipses from '../../ConcentricEllipses'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'
import GlowingContainer from '../../GlowingContainer'

extend([mixPlugin])

const HomepageHeroSection = () => (
  <SectionWrapper>
    <SubpageSectionStyled noTopPadding bgColor="3" fullWidth>
      <GlowingContainer>
        <ConcentricEllipses />
      </GlowingContainer>
      <TopSection>
        <TextElementWithReflection isCentered>
          <h1>
            The Web3
            <br />
            you were promised.
          </h1>
          <p>
            Easy to build on. Safe to use. Ready to grow.
            <br />
            <strong>No tradeoffs.</strong>
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
            innerGlowColor={colord(lightTheme.palette1).lighten(0.2).alpha(0.2).toHex()}
          />
        </AlephiumLogoContainer>
      </BottomSection>
    </SubpageSectionStyled>
  </SectionWrapper>
)

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
  height: 65vh;
  min-height: 800px;
  gap: var(--spacing-4);
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.textPrimary} 15%,
      ${({ theme }) => theme.textPrimary} 85%,
      transparent 100%
    );
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
  flex: 1.5;
  position: relative;
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
