import { forwardRef, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'
import TextElement from './TextElement'

export type SubpageHeroSectionAlignContent = 'left' | 'center' | 'bottom'

export interface SubpageHeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  mediaContent: ReactNode
  alignContent?: SubpageHeroSectionAlignContent
  bottomMargin?: boolean
  minHeight?: string
  split?: boolean
  wide?: boolean
}

const SubpageHeroSection = forwardRef<HTMLElement, SubpageHeroSectionProps>(function SubpageHeroSection(
  { children, alignContent, split, ...props },
  ref
) {
  return (
    <SubpageHeroSectionStyled ref={ref} split={split} {...props}>
      <BackgroundMediaWrapper split={split}>{props.mediaContent}</BackgroundMediaWrapper>
      <HeroPageSectionContainer alignContent={alignContent} split={split}>
        <ContentWrapper alignContent={alignContent} split={split}>
          <TextElementStyled split={split} isCentered={alignContent === 'center'}>
            {children}
          </TextElementStyled>
        </ContentWrapper>
      </HeroPageSectionContainer>
    </SubpageHeroSectionStyled>
  )
})

export default SubpageHeroSection

const SubpageHeroSectionStyled = styled.section<SubpageHeroSectionProps>`
  position: relative;
  height: ${({ split, minHeight }) => (split ? minHeight || '75vh' : 'auto')};
  min-height: ${({ split, minHeight }) => (split ? 'unset' : minHeight || '75vh')};
  margin: auto;
  margin-bottom: ${({ bottomMargin }) => (bottomMargin ? 'var(--spacing-10)' : '0')};
  width: ${({ wide }) => (wide ? '80vw' : 'var(--page-width)')};
  overflow: hidden;
  display: flex;
  align-items: stretch;
  border-radius: var(--radius-huge);
  gap: ${({ split }) => (split ? 'var(--spacing-4)' : '0')};
  flex-direction: row-reverse;

  &::before {
    content: '';
    position: absolute;
    opacity: ${({ split }) => (split ? 0 : 1)};
    inset: 0;
    // border: 3px solid ${({ theme }) => theme.borderPrimary};
    border-radius: var(--radius-huge);
    backdrop-filter: saturate(300%) brightness(1.1);
    -webkit-backdrop-filter: saturate(300%) brightness(1.1);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: xor;
    z-index: 2;
  }

  @media ${deviceBreakPoints.mobile} {
    gap: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.background1};
    padding: var(--spacing-2);
    flex-direction: column;
    height: auto;
    min-height: ${({ minHeight }) => minHeight || '75vh'};
    width: 90vw;
  }
`

const TextElementStyled = styled(TextElement)<Pick<SubpageHeroSectionProps, 'split'>>`
  max-width: 520px;
  width: fit-content;
  margin: ${({ split }) => (split ? 'var(--spacing-4) var(--spacing-10)' : '0 auto')};
  justify-content: center;

  > p {
    color: ${({ theme }) => theme.textSecondary};
    font-size: var(--fontSize-22);
    font-weight: var(--fontWeight-medium);
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
    height: 4px;
    background-color: ${({ theme }) => theme.textPrimary};
    margin: var(--spacing-5) 0 0;
    border: none;
  }
`

const HeroPageSectionContainer = styled.div<Pick<SubpageHeroSectionProps, 'alignContent' | 'split'>>`
  flex-direction: column;
  position: relative;
  display: flex;
  flex: 1;
  justify-content: ${({ alignContent }) =>
    alignContent === 'bottom' ? 'flex-end' : alignContent === 'center' ? 'center' : 'flex-start'};
  height: ${({ split }) => (split ? '100%' : 'auto')};
  align-self: stretch;
  border-radius: var(--radius-huge);
  background-color: ${({ theme, split }) => (split ? theme.background1 : 'transparent')};

  ${({ split }) =>
    split &&
    css`
      flex: 1.5;
      margin-left: 0;
    `}

  @media ${deviceBreakPoints.mobile} {
    width: 100%;
    margin-left: 0;
    height: auto;
  }
`

const ContentWrapper = styled.div<Pick<SubpageHeroSectionProps, 'alignContent' | 'split'>>`
  margin-right: ${({ alignContent }) => (alignContent === 'center' ? 'initial' : 'auto')};
  position: relative;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 5%;
  ${({ alignContent }) =>
    alignContent === 'center' &&
    css`
      margin: auto;
    `}

  display: flex;
  flex-direction: column;
  z-index: 2;

  ${({ split }) =>
    split &&
    css`
      margin: auto;
      align-items: center;
      text-align: center;
      justify-content: center;
    `}

  @media ${deviceBreakPoints.mobile} {
    width: 100%;
    box-sizing: border-box;
    padding: var(--spacing-6) 0;
  }
`

const BackgroundMediaWrapper = styled.div<Pick<SubpageHeroSectionProps, 'split'>>`
  position: ${({ split }) => (split ? 'relative' : 'absolute')};
  top: 0;
  left: 0;
  width: ${({ split }) => (split ? 'calc(50% - var(--spacing-3))' : '100%')};
  height: 100%;
  z-index: 1;
  overflow: hidden;
  align-self: stretch;
  border-radius: var(--radius-huge);

  ${({ split }) =>
    split &&
    css`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      > * {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--radius-huge);
      }

      @media ${deviceBreakPoints.mobile} {
        width: 100%;
        max-height: 300px;
        border-radius: calc(var(--radius-huge) - var(--spacing-2));
      }
    `}
`
