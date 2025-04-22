import { forwardRef, ReactNode } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'
import HeroPageSectionContainer from '../Hero/HeroPageSectionContainer'
import TextElement from './TextElement'

interface SubpageHeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  mediaContent: ReactNode
}

const SubpageHeroSection = forwardRef<HTMLElement, SubpageHeroSectionProps>(function SubpageHeroSection(
  { children, mediaContent, ...props },
  ref
) {
  return (
    <SubpageHeroSectionStyled ref={ref} {...props}>
      <BackgroundMediaWrapper>{mediaContent}</BackgroundMediaWrapper>
      <HeroPageSectionContainer>
        <LeftContentWrapper>
          <LeftContentBackground />
          <TextElementStyled>{children}</TextElementStyled>
        </LeftContentWrapper>
      </HeroPageSectionContainer>
    </SubpageHeroSectionStyled>
  )
})

export default SubpageHeroSection

const SubpageHeroSectionStyled = styled.section`
  position: relative;
  min-height: 80vh;
  margin: auto;
  width: 90vw;
  overflow: hidden;
  transition: all 0.4s ease-in;
  display: flex;
  border: 2px solid ${({ theme }) => theme.borderPrimary};
  border-radius: var(--radius-big);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.9);
`

const TextElementStyled = styled(TextElement)`
  max-width: 500px;
  > p {
    color: ${({ theme }) => theme.textSecondary};
    font-weight: var(--fontWeight-semiBold);
    line-height: 1.3;

    @media ${deviceBreakPoints.smallMobile} {
      font-size: 22px;
    }

    * strong {
      color: var(--color-white);
      font-weight: inherit;
    }
  }

  > hr {
    width: 90%;
    height: 3px;
    background-color: ${({ theme }) => theme.textPrimary};
    margin: var(--spacing-5) 0 0;
    border: none;
  }
  z-index: 1;
`

const LeftContentWrapper = styled.div`
  margin-right: auto;
  position: relative;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-4);
  }
`

const LeftContentBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
  border-radius: var(--radius-big);
  transform: translateX(-30px);
  filter: blur(60px);
  pointer-events: none;
`

const BackgroundMediaWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`
