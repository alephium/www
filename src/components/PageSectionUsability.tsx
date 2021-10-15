import { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import Button from './Button'
import Columns from './Columns'
import TextSnippet from './TextSnippet'
import { ArrowedLinkProps } from './ArrowedLink'
import Zoomer from './Zoomer'
import ResponsiveImage, { ImageProps } from './ResponsiveImage'

import BirdsImage from './styleable-images/ImageBirds'
import YellowMountainsImage from './styleable-images/ImageYellowMountains'

export interface PageSectionUsabilityContentType {
  title: string
  subtitle: string
  description: string
  button: ArrowedLinkProps
  images: ImageProps[]
}

interface PageSectionUsabilityProps {
  className?: string
  content: PageSectionUsabilityContentType
}

let PageSectionUsability: FC<PageSectionUsabilityProps> = ({ className, content }) => (
  <section className={className}>
    <SectionTextHeaderStyled title={content.title} subtitle={content.subtitle} centered bigSubtitle />
    <PageSectionContainerStyled>
      <CenteredContent>
        <TextSnippetStyled bigText>{content.description}</TextSnippetStyled>
        <Button url={content.button.url} newTab={content.button.newTab}>
          {content.button.text}
        </Button>
      </CenteredContent>
      <ImagesColumns>
        {content.images.map((image) => {
          return (
            <Zoomer key={image.altText}>
              <ResponsiveImage image={image} />
            </Zoomer>
          )
        })}
      </ImagesColumns>
    </PageSectionContainerStyled>
    <YellowMountainsImageStyled />
    <BirdsImageStyled />
  </section>
)

PageSectionUsability = styled(PageSectionUsability)`
  padding-top: var(--spacing-28);
  padding-bottom: var(--spacing-28);
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textPrimary};
  position: relative;

  @media ${deviceBreakPoints.mobile} {
    padding-bottom: 0;
  }
`

const PageSectionContainerStyled = styled(PageSectionContainer)`
  z-index: 1;
`

const SectionTextHeaderStyled = styled(SectionTextHeader)`
  margin-bottom: var(--spacing-10);
  z-index: 1;
`

const CenteredContent = styled.div`
  text-align: center;
  max-width: var(--width-476);
  margin: auto;

  .button {
    margin: var(--spacing-8) auto 0;
  }
`

const TextSnippetStyled = styled(TextSnippet)`
  color: ${({ theme }) => theme.textTertiary};
`

const BirdsImageStyled = styled(BirdsImage)`
  position: absolute;
  top: var(--spacing-24);
  height: auto;
`

const ImagesColumns = styled(Columns)`
  margin-top: var(--spacing-20);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--spacing-4);

  @media ${deviceBreakPoints.ipad} {
    grid-template-columns: 1fr;
  }
`

const YellowMountainsImageStyled = styled(YellowMountainsImage)`
  position: absolute;
  height: auto;
  width: auto;
  bottom: -2px;
  left: 0;
  right: 0px;

  @media ${deviceBreakPoints.mobile} {
    bottom: -152px;
  }

  @media ${deviceBreakPoints.smallMobile} {
    bottom: -80px;
  }
`

export default PageSectionUsability
