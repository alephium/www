import { FC, useRef, useState } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import { darkTheme } from '../../styles/themes'
import { deviceBreakPoints } from '../../styles/global-style'

import HeroPageSectionContainer from '../Hero/HeroPageSectionContainer'

import Arrow from '../../images/svgs/arrow-right.svg'

import Spline from '@splinetool/react-spline'
import { AnimatePresence, motion, useInView } from 'framer-motion'

import placeholderImage from '../../images/3d-hero-placeholder.jpg'

import { isMobile } from '../../utils/misc'
import { graphql } from 'gatsby'
import Button from '../Button'
import ArrowedLink from '../ArrowedLink'

interface PageSectionHeroProps extends Queries.PageSectionHeroFragment {
  className?: string
}

const PageSectionHero: FC<PageSectionHeroProps> = ({ className, ...props }) => {
  const [sceneLoaded, setSceneLoaded] = useState(false)

  const innerRef = useRef<HTMLElement>(null)
  const inView = useInView(innerRef)

  const content = props.headerSection

  return (
    <ThemeProvider theme={darkTheme}>
      <PageSectionHeroStyled className={className} ref={innerRef}>
        <HeroPageSectionContainer>
          <LeftContentWrapper>
            <TextContent>
              {content?.titleRows && <Title>{content.titleRows.map((row) => row).join('\n')}</Title>}
              <Separator />
              {content?.subtitle && <Boilerplate>{content.subtitle}</Boilerplate>}
            </TextContent>
            <Buttons>
              {content?.primaryButton && content.primaryButton.url && (
                <Button newTab url={content.primaryButton.url}>
                  {content.primaryButton.text}
                </Button>
              )}
              {content?.secondaryButton && content.secondaryButton.url && (
                <ArrowedLink
                  key={content.secondaryButton.text}
                  trackingName={`hero-section:${content.secondaryButton.text?.replaceAll(' ', '-')}-link`}
                  url={content.secondaryButton.url}
                >
                  {content.secondaryButton.text}
                </ArrowedLink>
              )}
            </Buttons>
            <ArrowLink
              href="#intro"
              aria-label="Scroll to the intro section"
              data-goatcounter-click="hero-section:arrow-down"
            >
              <ArrowDown />
            </ArrowLink>
          </LeftContentWrapper>
        </HeroPageSectionContainer>
        <AnimatePresence>
          {(isMobile || !sceneLoaded) && (
            <ThreeDimensionSceneContainer
              style={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <PlaceholderImage src={placeholderImage} />
            </ThreeDimensionSceneContainer>
          )}
        </AnimatePresence>
        {!isMobile && (
          <ThreeDimensionSceneContainer animate={{ opacity: sceneLoaded && inView ? 1 : 0 }}>
            <Spline
              scene="https://prod.spline.design/NqiuAD2RdAocCcLo/scene.splinecode"
              onLoad={() => setSceneLoaded(true)}
            />
          </ThreeDimensionSceneContainer>
        )}
      </PageSectionHeroStyled>
    </ThemeProvider>
  )
}

export const query = graphql`
  fragment PageSectionHero on MarkdownRemarkFrontmatter {
    headerSection {
      titleRows
      subtitle
      primaryButton {
        text
        url
      }
      secondaryButton {
        text
        url
      }
    }
  }
`

const Buttons = styled.div`
  display: flex;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-8);
`

const PageSectionHeroStyled = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  ${({ theme }) => css`
    background: linear-gradient(black 0%, black 40%, ${theme.bgSecondary}) 100%;
  `};
  transition: all 0.4s ease-in;
  display: flex;

  .contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    z-index: 1;

    .text-content {
      @media ${deviceBreakPoints.mobile} {
        color: ${({ theme }) => theme.textPrimary};
      }
    }
  }
`

const LeftContentWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-4);
    top: 55%;
  }

  @media ${deviceBreakPoints.smallMobile} {
    padding: var(--spacing-4);
    top: 60%;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  white-space: pre-wrap;
  font-size: 54px;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: var(--fontWeight-medium);

  @media ${deviceBreakPoints.mobile} {
    font-size: 48px !important;
  }

  @media ${deviceBreakPoints.smallMobile} {
    font-size: 32px !important;
  }
`

const ThreeDimensionSceneContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;

  @media ${deviceBreakPoints.mobile} {
    left: -60%;
    top: -30%;
    opacity: 0.5;
  }

  @media ${deviceBreakPoints.smallMobile} {
    top: -40%;
    left: -100%;
    opacity: 0.5;
  }
`

const Boilerplate = styled.span`
  max-width: var(--width-564);
  color: ${({ theme }) => theme.textSecondary};
  font-size: 24px;
  font-weight: var(--fontWeight-light);
  margin-bottom: var(--spacing-8);
  line-height: 1.3;

  @media ${deviceBreakPoints.mobile} {
    font-size: 26px !important;
    margin-bottom: var(--spacing-4);
  }

  @media ${deviceBreakPoints.smallMobile} {
    font-size: 22px !important;
    margin-bottom: var(--spacing-2);
  }
`

const ArrowLink = styled.a`
  pointer-events: all;
`

const ArrowDown = styled(Arrow)`
  width: 1.625rem;
  fill: ${({ theme }) => theme.textPrimary};
  transform: rotate(90deg);

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: var(--spacing-5);
  }
`

const Separator = styled.div`
  width: 50px;
  height: 4px;
  background-color: ${({ theme }) => theme.textPrimary};
  margin-bottom: var(--spacing-5);
`

const PlaceholderImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export default PageSectionHero
