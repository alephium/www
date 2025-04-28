import { forwardRef, ReactNode } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'
import PageSectionContainer from '../PageSectionContainer'
import TextElement from './TextElement'
import TitleShadow from './TitleShadow'

export type SubpageHeroSectionAlignContent = 'left' | 'center' | 'bottom'

export interface SubpageHeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  mediaContent: ReactNode
  alignContent?: SubpageHeroSectionAlignContent
  maxHeight?: string
  minHeight?: string
}

const SubpageHeroSection = forwardRef<HTMLElement, SubpageHeroSectionProps>(function SubpageHeroSection(
  { children, mediaContent, alignContent, ...props },
  ref
) {
  return (
    <SubpageHeroSectionStyled ref={ref} {...props}>
      <BackgroundMediaWrapper>{mediaContent}</BackgroundMediaWrapper>
      <HeroPageSectionContainer alignContent={alignContent}>
        <ContentWrapper>
          <TitleShadow />
          <TextElementStyled>{children}</TextElementStyled>
        </ContentWrapper>
      </HeroPageSectionContainer>
    </SubpageHeroSectionStyled>
  )
})

export default SubpageHeroSection

const SubpageHeroSectionStyled = styled.section<Pick<SubpageHeroSectionProps, 'maxHeight' | 'minHeight'>>`
  position: relative;
  height: 80vh;
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || '80vh'};
  margin: auto;
  width: 90vw;
  overflow: hidden;
  transition: all 0.4s ease-in;
  display: flex;
  border-radius: var(--radius-big);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.5), inset 0px 0px 0px 2px ${({ theme }) => theme.borderPrimary};
`

const TextElementStyled = styled(TextElement)`
  max-width: 520px;
  width: fit-content;
  margin: 0 auto;
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

const BackgroundMediaWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`
