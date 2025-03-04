import { ReactNode } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import { darkTheme } from '../../styles/themes'
import { deviceBreakPoints } from '../../styles/global-style'

import HeroPageSectionContainer from '../Hero/HeroPageSectionContainer'
interface SubpageHeroSectionProps {
  children: ReactNode
}

const SubpageHeroSection = ({ children }: SubpageHeroSectionProps) => (
  <ThemeProvider theme={darkTheme}>
    <SubpageHeroSectionStyled>
      <HeroPageSectionContainer>
        <LeftContentWrapper>{children}</LeftContentWrapper>
      </HeroPageSectionContainer>
    </SubpageHeroSectionStyled>
  </ThemeProvider>
)

export default SubpageHeroSection

const SubpageHeroSectionStyled = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  transition: all 0.4s ease-in;
  display: flex;

  ${({ theme }) => css`
    background: linear-gradient(black 0%, black 40%, ${theme.bgSecondary}) 100%;
  `};
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
