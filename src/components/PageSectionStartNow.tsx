import { FC } from 'react'
import styled, { ThemeProvider, useTheme } from 'styled-components'
import LazyLoad from 'react-lazyload'

import { darkTheme, lightTheme } from '../styles/themes'
import { deviceBreakPoints } from '../styles/global-style'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import GridCard from './GridCard'
import { ArrowedLinkProps } from './ArrowedLink'

import Logo from '../images/svgs/logo.svg'
import ImageMining from './styleable-images/ImageMining'
import ImageCode from './styleable-images/ImageCode'
import ImageGreyMountains from './styleable-images/ImageGreyMountains'
import GenevaImage from '../images/geneva.jpg'

export interface PageSectionStartNowContentType {
  title: string
  subtitle: string
  description: string
  cards: {
    title: string
    subtitle: string
    description: string
    link: ArrowedLinkProps
  }[]
}

interface PageSectionStartNowProps {
  className?: string
  content: PageSectionStartNowContentType
}

let PageSectionStartNow: FC<PageSectionStartNowProps> = ({ className, content }) => {
  const theme = useTheme()
  const firstCard = content.cards[0]
  const secondCard = content.cards[1]
  const thirdCard = content.cards[2]
  const forthCard = content.cards[3]

  return (
    <section className={className}>
      <PageSectionContainer>
        <SectionHeader>
          <SectionTextHeader title={content.title} subtitle={content.subtitle} bigSubtitle>
            <p>{content.description}</p>
          </SectionTextHeader>
          <LogoStyled />
        </SectionHeader>
        <Grid>
          <ThemeProvider theme={theme === darkTheme ? lightTheme : darkTheme}>
            <GridCard
              title={firstCard.title}
              subtitle={firstCard.subtitle}
              link={firstCard.link}
              ImageComponent={MiningImageComponent}
            >
              <p>{firstCard.description}</p>
            </GridCard>
          </ThemeProvider>
          <GridCard
            title={secondCard.title}
            subtitle={secondCard.subtitle}
            link={secondCard.link}
            ImageComponent={GreyMountainsImageStyled}
          >
            <p>{secondCard.description}</p>
          </GridCard>
          <LazyLoad>
            <GridCard
              title={thirdCard.title}
              subtitle={thirdCard.subtitle}
              link={thirdCard.link}
              backgroundImageUrl={GenevaImage}
            >
              <p>{thirdCard.description}</p>
            </GridCard>
          </LazyLoad>
          <ThemeProvider theme={theme === darkTheme ? lightTheme : darkTheme}>
            <GridCard
              title={forthCard.title}
              subtitle={forthCard.subtitle}
              link={forthCard.link}
              ImageComponent={CodeImageStyled}
              primaryBackground
              narrowHeaderMobile
            >
              <p>{forthCard.description}</p>
            </GridCard>
          </ThemeProvider>
        </Grid>
      </PageSectionContainer>
    </section>
  )
}

PageSectionStartNow = styled(PageSectionStartNow)`
  padding-top: var(--spacing-28);
  padding-bottom: var(--spacing-28);
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textPrimary};
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-4);

  svg {
    width: var(--width-82);
    flex-shrink: 0;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr 8fr;
  grid-template-rows: repeat(2, minmax(24.5rem, auto));
  gap: var(--spacing-3);
  margin-top: var(--spacing-16);

  > div:nth-child(4n + 2) {
    grid-column: 2 / span 2;
  }

  > div:nth-child(4n + 3) {
    grid-column: 1 / span 2;
  }

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    > div:nth-child(4n + 2),
    > div:nth-child(4n + 3) {
      grid-column: auto;
    }
  }
`

const ImageContainer = styled.div`
  width: 35%;
  position: relative;
  margin: calc(-1 * var(--spacing-4)) calc(-1 * var(--spacing-4)) calc(-1 * var(--spacing-4)) 0;
  overflow: visible;
`

const MiningImageStyled = styled(ImageMining)`
  width: 14rem;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: auto 0;

  @media ${deviceBreakPoints.smallMobile} {
    left: -5rem;
  }
`

const MiningImageComponent = () => (
  <ImageContainer>
    <MiningImageStyled />
  </ImageContainer>
)

const CodeImageStyled = styled(ImageCode)`
  width: 6.25rem;
  height: auto;
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);

  @media ${deviceBreakPoints.smallMobile} {
    width: 5rem;
  }
`

const GreyMountainsImageStyled = styled(ImageGreyMountains)`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: -2px;
`

const LogoStyled = styled(Logo)`
  .dark {
    fill: var(--color-logo-yellow-dark);
  }

  .light {
    fill: var(--color-logo-yellow-light);
  }
`

export default PageSectionStartNow
