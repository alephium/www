import { FC, useRef } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import { darkTheme } from '../styles/themes'
import { deviceBreakPoints } from '../styles/global-style'

import HeroPageSectionContainer from './Hero/HeroPageSectionContainer'

import Arrow from '../images/svgs/arrow-right.svg'

import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

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

  const themeContent = content.dark

  return (
    <ThemeProvider theme={darkTheme}>
      <PageSectionHeroStyled className={className} ref={innerRef}>
        <HeroPageSectionContainer>
          <LeftContentWrapper>
            <TextContent>
              <Title>
                <div>
                  Scalable for{' '}
                  <motion.span
                    initial={{ color: 'rgb(44, 208, 242)' }}
                    animate={{ color: 'rgb(44, 146, 242)' }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
                  >
                    devs.
                  </motion.span>
                </div>
                <div>
                  Secure for{' '}
                  <motion.span
                    initial={{ color: 'rgb(242, 160, 44)' }}
                    animate={{ color: 'rgb(242, 94, 44)' }}
                    transition={{ duration: 1.8, repeat: Infinity, repeatType: 'mirror' }}
                  >
                    users.
                  </motion.span>
                </div>
                <div>
                  Decentralized for{' '}
                  <motion.span
                    initial={{ color: 'rgb(248, 84, 166)' }}
                    animate={{ color: 'rgb(242, 39, 100)' }}
                    transition={{ duration: 2.4, repeat: Infinity, repeatType: 'mirror' }}
                  >
                    all.
                  </motion.span>
                </div>
              </Title>
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
        <ThreeDimensionSceneContainer>
          <Spline scene="https://prod.spline.design/NqiuAD2RdAocCcLo/scene.splinecode" />
        </ThreeDimensionSceneContainer>
      </PageSectionHeroStyled>
    </ThemeProvider>
  )
}

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
  pointer-events: none;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-4);
    top: 60%;
  }

  @media ${deviceBreakPoints.smallMobile} {
    padding: var(--spacing-4);
    top: 65%;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  pointer-events: none;
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

const ThreeDimensionSceneContainer = styled.div`
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

export default PageSectionHero
