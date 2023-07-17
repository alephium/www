import { FC, useRef } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import { darkTheme } from '../styles/themes'
import { deviceBreakPoints } from '../styles/global-style'

import NavigationMenu from './NavigationMenu'
import HeroContentWrapper from './Hero/HeroContentWrapper'
import HeroPageSectionContainer from './Hero/HeroPageSectionContainer'

import Arrow from '../images/svgs/arrow-right.svg'
import HeroLogo from './Hero/HeroLogo'

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
          <HeroContentWrapper>
            <div className="contents">
              <>
                <HeroLogoStyled gradientIndex={slide} />

                <Title>{`Scalable for devs.
Secure for users.
Decentralized for all.`}</Title>
                <Separator />
                <Boilerplate>{themeContent.subtitle}</Boilerplate>
                <a
                  href="#intro"
                  aria-label="Scroll to the intro section"
                  data-goatcounter-click="hero-section:arrow-down"
                >
                  <ArrowDown />
                </a>
              </>
            </div>
          </HeroContentWrapper>
        </HeroPageSectionContainer>
      </PageSectionHeroStyled>
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

  h1 {
    font-size: var(--fontSize-70);
    color: ${({ theme }) => theme.textPrimary};
    font-weight: var(--fontWeight-semiBold);

    @media ${deviceBreakPoints.smallMobile} {
      font-size: var(--fontSize-36);
    }
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

const HeroLogoStyled = styled(HeroLogo)`
  height: 100px;
`

const Boilerplate = styled.span`
  max-width: var(--width-564);
  color: ${({ theme }) => theme.textSecondary};
  font-size: 24px;
  font-weight: 200;
  margin-bottom: var(--spacing-8);

  @media ${deviceBreakPoints.smallMobile} {
    height: calc(var(--lineHeight-26) * 8);
  }
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
  font-size: 50px !important;
  white-space: pre-wrap;
`

const Separator = styled.div`
  width: 60px;
  height: 4px;
  background-color: ${({ theme }) => theme.textPrimary};
  margin-bottom: var(--spacing-4);
`

export default PageSectionHero
