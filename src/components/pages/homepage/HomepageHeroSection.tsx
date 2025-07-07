import { colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'
import { motion, useScroll, useTransform } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import Button from '../../Button'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'
import EddyBackground from '../../EddyBackground'
import GradientText from '../../GradientText'
import HomepagePartnersSection from './HomepagePartnersSection'

extend([mixPlugin])

export const pageQuery = graphql`
  query HeroSection {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          partnersSection {
            ...HomepagePartnersSection
          }
        }
      }
    }
    cityscapeImage: file(relativePath: { eq: "cityscape.png" }) {
      publicURL
    }
    birdsImage: file(relativePath: { eq: "birds.png" }) {
      publicURL
    }
  }
`

const HomepageHeroSection = () => {
  const { allMarkdownRemark, cityscapeImage, birdsImage } = useStaticQuery<Queries.HeroSectionQuery>(pageQuery)
  const content = allMarkdownRemark.nodes[0].frontmatter
  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, [100, 1000], [1, 0])

  return (
    <SectionWrapper>
      <motion.div style={{ opacity }}>
        <SubpageSectionStyled fullWidth noTopPadding>
          <EddyBackgroundStyled />
          <ConcentricEllipses />
          <TextAndButton>
            <TextElementWithReflection isCentered>
              <h1>
                The Web3
                <br />
                <DiscreetGradientText>you were promised.</DiscreetGradientText>
              </h1>
              <p>
                Scalability, smart contracts, and real decentralization <br />
                without the tradeoffs.
                <br />
                <strong>
                  <GradientText>
                    <b>Only on Alephium.</b>
                  </GradientText>
                </strong>
              </p>
            </TextElementWithReflection>

            <Buttons>
              <Button big highlight url="/get-started">
                Get started
              </Button>
            </Buttons>
          </TextAndButton>
          <PartnersSectionWrapper>
            {content?.partnersSection && <HomepagePartnersSection {...content.partnersSection} />}
          </PartnersSectionWrapper>
        </SubpageSectionStyled>
        <CityscapeImage imageUrl={cityscapeImage?.publicURL || ''} />
        <BirdsImage imageUrl={birdsImage?.publicURL || ''} />
      </motion.div>
    </SectionWrapper>
  )
}

const ConcentricEllipses = () => {
  const numEllipses = 10
  const baseWidth = 400
  const baseHeight = 240
  const widthIncrement = 200
  const heightIncrement = 120
  const baseOpacity = 0.9
  const opacityDecay = 0.08

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

const SectionWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  overflow: hidden;
`

const SubpageSectionStyled = styled(SubpageSection)`
  padding-bottom: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-left: var(--spacing-4);
  overflow: visible;
  min-height: 75vh;
  gap: var(--spacing-4);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 30px;
    background: ${({ theme }) => theme.background2};
    clip-path: polygon(
      0% 100%,
      5% 80%,
      10% 90%,
      15% 70%,
      20% 85%,
      25% 75%,
      30% 90%,
      35% 80%,
      40% 95%,
      45% 85%,
      50% 100%,
      55% 80%,
      60% 90%,
      65% 75%,
      70% 85%,
      75% 80%,
      80% 95%,
      85% 85%,
      90% 90%,
      95% 80%,
      100% 100%
    );
    z-index: 1;
  }
`

const TextAndButton = styled.div`
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
  bottom: -25%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 0;
  mix-blend-mode: screen;
`

const Ellipse = styled.span<{ width: number; height: number; delay: number; opacity: number }>`
  position: absolute;
  border: 2px dashed ${({ theme }) => colord(theme.textPrimary).alpha(0.08).toHex()};
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
      transform: translateX(-50%) scale(1.02);
    }
  }

  @media ${deviceBreakPoints.mobile} {
    width: ${({ width }) => width * 0.75}px;
    height: ${({ height }) => height * 0.75}px;
  }
`

const DiscreetGradientText = styled.span`
  background: radial-gradient(
    ellipse 200% 100% at 50% 100%,
    ${({ theme }) =>
        colord(theme.palette2)
          .mix(theme.textPrimary, theme.name === 'dark' ? 0.35 : 0.5)
          .toHex()}
      10%,
    ${({ theme }) =>
        colord(theme.palette5)
          .mix(theme.textPrimary, theme.name === 'dark' ? 0.45 : 0.65)
          .toHex()}
      20%,
    ${({ theme }) => colord(theme.textPrimary).toHex()} 30%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  background-position: 50% 0%;
  background-repeat: no-repeat;
  animation: revealGradient 2s ease-out forwards;

  @keyframes revealGradient {
    0% {
      background-position: 50% 0%;
    }
    100% {
      background-position: 50% 100%;
    }
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  margin-top: var(--spacing-2);

  @media ${deviceBreakPoints.mobile} {
    margin-top: var(--spacing-4);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: var(--spacing-2);
  }
`

const EddyBackgroundStyled = styled(EddyBackground)`
  margin-top: -100px;
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

const PartnersSectionWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

const CityscapeImage = styled.div<{ imageUrl?: string }>`
  position: absolute;
  bottom: 0px;
  right: -50px;
  background-image: url(${({ imageUrl }) => imageUrl || ''});
  background-size: contain;
  background-position: bottom right;
  background-repeat: no-repeat;
  width: 400px;
  height: 140px;
  z-index: 1;
  opacity: ${({ theme }) => (theme.name === 'dark' ? 0.3 : 0.4)};

  @media ${deviceBreakPoints.mobile} {
    width: 350px;
    height: 75px;
  }
`

const BirdsImage = styled.div<{ imageUrl?: string }>`
  position: absolute;
  top: 130px;
  left: 130px;
  background-image: url(${({ imageUrl }) => imageUrl || ''});
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;
  width: 180px;
  height: 140px;
  z-index: 1;
  opacity: ${({ theme }) => (theme.name === 'dark' ? 0.3 : 0.4)};

  @media ${deviceBreakPoints.mobile} {
    top: 100px;
    left: 50px;
    width: 150px;
    height: 75px;
  }
`
