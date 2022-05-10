import { FC } from 'react'
import styled, { ThemeProvider, useTheme } from 'styled-components'

import { darkTheme, lightTheme, oppositeThemeOf } from '../styles/themes'
import { deviceBreakPoints } from '../styles/global-style'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import GridCard from './GridCard'
import { ArrowedLinkProps } from './ArrowedLink'

import Logo from '../images/svgs/logo-dark.svg'
import ImageMining from './styleable-images/ImageMining'
import ImageCode from './styleable-images/ImageCode'
import ImageGreyMountains from './styleable-images/ImageGreyMountains'

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
          <SectionTextHeader title={content.title} subtitle={content.subtitle} bigSubtitle bigText>
            <p>{content.description}</p>
          </SectionTextHeader>
          <Logo />
        </SectionHeader>
        <Grid>
          <ThemeProvider theme={oppositeThemeOf(theme)}>
            <GridCard
              title={firstCard.title}
              subtitle={firstCard.subtitle}
              link={firstCard.link}
              primaryBackground
              ImageComponent={MiningImageComponent}
              trackingName={`start-now-section:mining-card:${firstCard.link.text?.replaceAll(' ', '-')}-link`}
            >
              <p>{firstCard.description}</p>
            </GridCard>
          </ThemeProvider>
          <GridCard
            title={secondCard.title}
            subtitle={secondCard.subtitle}
            link={secondCard.link}
            ImageComponent={GreyMountainsImageStyled}
            trackingName={`start-now-section:smart-contract-card:${secondCard.link.text?.replaceAll(' ', '-')}-link`}
          >
            <p>{secondCard.description}</p>
          </GridCard>
          <GridCard
            title={thirdCard.title}
            subtitle={thirdCard.subtitle}
            link={thirdCard.link}
            textFullWidth
            trackingName={`start-now-section:career-card:${thirdCard.link.text?.replaceAll(' ', '-')}-link`}
          >
            <p>{thirdCard.description}</p>
          </GridCard>
          <ThemeProvider theme={oppositeThemeOf(theme)}>
            <GridCard
              title={forthCard.title}
              subtitle={forthCard.subtitle}
              link={forthCard.link}
              ImageComponent={CodeImageStyled}
              primaryBackground
              narrowHeaderMobile
              trackingName={`start-now-section:open-source-card:${forthCard.link.text?.replaceAll(' ', '-')}-link`}
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
  padding-top: var(--spacing-20);
  padding-bottom: var(--spacing-20);
  background-color: ${({ theme }) => theme.bgPrimary};
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

  > *:nth-child(4n + 2) {
    grid-column: 2 / span 2;
  }

  > *:nth-child(4n + 3) {
    grid-column: 1 / span 2;
  }

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    > *:nth-child(4n + 2),
    > *:nth-child(4n + 3) {
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

export default PageSectionStartNow
