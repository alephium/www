import { FC, useRef } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import { darkTheme } from '../styles/themes'
import { deviceBreakPoints } from '../styles/global-style'

import NavigationMenu from './NavigationMenu'
import HeroPageSectionContainer from './Hero/HeroPageSectionContainer'

import Arrow from '../images/svgs/arrow-right.svg'

import Spline from '@splinetool/react-spline'

export interface PageSectionHeroContentType {
  dark: {
    title: string
    subtitle: string
  }
  light: {
    title: string
    subtitle: string
  }
}

interface PageSectionHeroProps {
  className?: string
  content: PageSectionHeroContentType
}

const PageSectionHero: FC<PageSectionHeroProps> = ({ className, content }) => {
  const innerRef = useRef<HTMLElement>(null)
  const slide = 0

  const themeContent = content.dark

  return (
    <ThemeProvider theme={darkTheme}>
      <PageSectionHeroStyled className={className} ref={innerRef}>
        <HeroPageSectionContainer>
          <div className="navigation-menu-wrapper">
            <NavigationMenu />
          </div>
          <LeftContentWrapper>
            <TextContent>
              <Title>{`Scalable for devs.
Secure for users.
Decentralized for all.`}</Title>
              <Separator />
              <Boilerplate>{themeContent.subtitle}</Boilerplate>
            </TextContent>
            <ArrowLink
              href="#intro"
              aria-label="Scroll to the intro section"
              data-goatcounter-click="hero-section:arrow-down"
            >
              <ArrowDown />
            </ArrowLink>
          </LeftContentWrapper>
        </HeroPageSectionContainer>
      </PageSectionHeroStyled>
      <ThreeDimensionSceneContainer>
        <Spline scene="https://prod.spline.design/NqiuAD2RdAocCcLo/scene.splinecode" />
      </ThreeDimensionSceneContainer>
    </ThemeProvider>
  )
}

const PageSectionHeroStyled = styled.section`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  ${({ theme }) => css`
    background: linear-gradient(black 0%, black 40%, ${theme.bgSecondary}) 100%;
  `};
  transition: all 0.4s ease-in;
  display: flex;

  .navigation-menu-wrapper {
    position: relative;
    z-index: 1;
  }

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
  pointer-events: none;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-4);
    top: 60%;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  pointer-events: none;
`

const ThreeDimensionSceneContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;

  @media ${deviceBreakPoints.smallMobile} {
    left: -100%;
    opacity: 0.5;
  }
`

const Boilerplate = styled.span`
  max-width: var(--width-564);
  color: ${({ theme }) => theme.textSecondary};
  font-size: 24px;
  font-weight: 200;
  margin-bottom: var(--spacing-8);

  @media ${deviceBreakPoints.smallMobile} {
    font-size: 22px !important;
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

const Title = styled.h1`
  white-space: pre-wrap;
  font-size: 52px;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: var(--fontWeight-semiBold);

  @media ${deviceBreakPoints.smallMobile} {
    font-size: 32px !important;
  }
`

const Separator = styled.div`
  width: 60px;
  height: 4px;
  background-color: ${({ theme }) => theme.textPrimary};
  margin-bottom: var(--spacing-4);
`

export default PageSectionHero
