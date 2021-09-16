import React, { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import Button from './Button'
import Columns from './Columns'
import Column from './Column'
import ImageSwiper from './ImageSwiper'
import TextSnippet from './TextSnippet'

import BirdsImage from '../images/svgs/birds.svg'
import YellowMountainsImage from '../images/svgs/yellow-mountains.svg'
import WalletHiThereImage from '../images/wallet-hi-there.png'
import WalletSecurityCheckImage from '../images/wallet-security-check.png'
import WalletEverythingIsReadyImage from '../images/wallet-everything-is-ready.png'

interface PageSectionUsabilityProps {
  className?: string
}

let PageSectionUsability: FC<PageSectionUsabilityProps> = ({ className }) => (
  <section className={className}>
    <SectionTextHeaderStyled title="Usability" subtitle="Designed for humans." centered bigSubtitle />
    <PageSectionContainerStyled>
      <CenteredContent>
        <TextSnippetStyled bigText>
          Our wallet is only the first step. We want to make blockchain accessible to anyone. Technology and complexity
          should be out of the way while remaining accessible.
        </TextSnippetStyled>
        <Button onClick={() => alert('Not implemented yet, the sadness...')}>Get the wallet</Button>
      </CenteredContent>
      <ImagesColumns>
        <ImageColumn>
          <img src={WalletSecurityCheckImage} alt="Wallet security check screen" />
        </ImageColumn>
        <ImageColumn>
          <img src={WalletHiThereImage} alt="Wallet hi there screen" />
        </ImageColumn>
        <ImageColumn>
          <img src={WalletEverythingIsReadyImage} alt="Wallet everything is ready screen" />
        </ImageColumn>
      </ImagesColumns>
      <ImageSwiperStyled />
    </PageSectionContainerStyled>
    <YellowMountainsImageStyled />
    <BirdsImageStyled />
  </section>
)

PageSectionUsability = styled(PageSectionUsability)`
  padding-top: var(--spacing-56);
  padding-bottom: var(--spacing-56);
  background-color: ${({ theme }) => theme.body};
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
  margin-bottom: var(--spacing-20);
  z-index: 1;
`

const CenteredContent = styled.div`
  text-align: center;
  max-width: var(--width-476);
  margin: auto;

  button {
    margin: var(--spacing-16) auto 0;
  }
`

const TextSnippetStyled = styled(TextSnippet)`
  color: ${({ theme }) => theme.textAccent};
`

const BirdsImageStyled = styled(BirdsImage)`
  position: absolute;
  top: var(--spacing-48);
  height: auto;
`

const ImagesColumns = styled(Columns)`
  align-items: center;
  margin-top: var(--spacing-40);
  position: relative;

  @media ${deviceBreakPoints.mobile} {
    display: none;
  }
`

const ImageColumn = styled(Column)`
  display: flex;
  justify-content: center;
`

const YellowMountainsImageStyled = styled(YellowMountainsImage)`
  position: absolute;
  height: auto;
  width: auto;

  /* TODO: Temporary values */
  bottom: -262px;
  left: -62px;
  right: -30px;

  @media ${deviceBreakPoints.mobile} {
    bottom: -152px;
  }

  @media ${deviceBreakPoints.smallMobile} {
    bottom: -80px;
  }
`

const ImageSwiperStyled = styled(ImageSwiper)`
  display: none;
  margin-top: var(--spacing-40);

  @media ${deviceBreakPoints.mobile} {
    display: block;
  }
`

export default PageSectionUsability
