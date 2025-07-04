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
    boatLineImage: file(relativePath: { eq: "boat-line.png" }) {
      publicURL
    }
    birdsLineImage: file(relativePath: { eq: "birds-line.png" }) {
      publicURL
    }
  }
`

const HomepageHeroSection = () => {
  const { allMarkdownRemark, boatLineImage, birdsLineImage } = useStaticQuery<Queries.HeroSectionQuery>(pageQuery)
  const content = allMarkdownRemark.nodes[0].frontmatter
  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, [100, 1000], [1, 0])

  return (
    <SectionWrapper>
      <motion.div style={{ opacity }}>
        <SubpageSectionStyled fullWidth noTopPadding>
          <EddyBackgroundStyled />
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
        <BoatLineImage imageUrl={boatLineImage?.publicURL || ''} />
        <BirdsLineImage imageUrl={birdsLineImage?.publicURL || ''} />
      </motion.div>
    </SectionWrapper>
  )
}

export default HomepageHeroSection

const SectionWrapper = styled.div`
  position: sticky;
  top: 0;
`

const SubpageSectionStyled = styled(SubpageSection)`
  padding-bottom: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-left: var(--spacing-4);
  overflow: visible;
  min-height: 75vh;
  gap: var(--spacing-4);
`

const TextAndButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-4);
  flex: 1;
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

const BoatLineImage = styled.div<{ imageUrl?: string }>`
  position: absolute;
  bottom: -5px;
  right: 0;
  background-image: url(${({ imageUrl }) => imageUrl || ''});
  background-size: contain;
  background-position: bottom right;
  background-repeat: no-repeat;
  width: 180px;
  height: 140px;
  z-index: 1;
  transform: scaleX(-1);
  opacity: 0.5;

  @media ${deviceBreakPoints.mobile} {
    width: 150px;
    height: 75px;
  }
`

const BirdsLineImage = styled.div<{ imageUrl?: string }>`
  position: absolute;
  top: 100px;
  left: 100px;
  background-image: url(${({ imageUrl }) => imageUrl || ''});
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;
  width: 180px;
  height: 140px;
  z-index: 1;
  opacity: 0.5;

  @media ${deviceBreakPoints.mobile} {
    top: 100px;
    left: 50px;
    width: 150px;
    height: 75px;
  }
`
