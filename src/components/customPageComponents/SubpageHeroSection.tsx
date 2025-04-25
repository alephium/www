import { forwardRef, ReactNode } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'
import PageSectionContainer from '../PageSectionContainer'
import TextElement from './TextElement'

export type SubpageHeroSectionAlignContent = 'left' | 'center' | 'bottom'

interface SubpageHeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  mediaContent: ReactNode
  alignContent?: SubpageHeroSectionAlignContent
  maxHeight?: string
}

const SubpageHeroSection = forwardRef<HTMLElement, SubpageHeroSectionProps>(function SubpageHeroSection(
  { children, mediaContent, alignContent, maxHeight, ...props },
  ref
) {
  return (
    <SubpageHeroSectionStyled ref={ref} maxHeight={maxHeight} {...props}>
      <BackgroundMediaWrapper>{mediaContent}</BackgroundMediaWrapper>
      <HeroPageSectionContainer alignContent={alignContent}>
        <ContentWrapper>
          <ContentBackground />
          <TextElementStyled>{children}</TextElementStyled>
        </ContentWrapper>
      </HeroPageSectionContainer>
    </SubpageHeroSectionStyled>
  )
})

export default SubpageHeroSection

const SubpageHeroSectionStyled = styled.section<Pick<SubpageHeroSectionProps, 'maxHeight'>>`
  position: relative;
  height: 80vh;
  max-height: ${({ maxHeight }) => maxHeight || '80vh'};
  margin: auto;
  width: 90vw;
  overflow: hidden;
  transition: all 0.4s ease-in;
  display: flex;
  border: 2px solid ${({ theme }) => theme.borderPrimary};
  border-radius: var(--radius-big);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.5);
`

const TextElementStyled = styled(TextElement)`
  max-width: 520px;
  justify-content: center;

  > p {
    color: ${({ theme }) => theme.textSecondary};
    font-weight: var(--fontWeight-semiBold);
    line-height: 1.3;
    z-index: 1;

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
`

const HeroPageSectionContainer = styled(PageSectionContainer)<Pick<SubpageHeroSectionProps, 'alignContent'>>`
  flex-direction: column;
  position: relative;
  display: flex;
  flex: 1;
  justify-content: ${({ alignContent }) =>
    alignContent === 'bottom' ? 'flex-end' : alignContent === 'center' ? 'center' : 'flex-start'};
`

const ContentWrapper = styled.div<Pick<SubpageHeroSectionProps, 'alignContent'>>`
  margin-right: auto;
  position: relative;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-4);
  }
`

const ContentBackground = styled.div`
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
  z-index: -1;
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
