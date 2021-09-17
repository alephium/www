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
          <img src={WalletSecurityCheckImage} width="345" height="575" alt="Wallet security check screen" />
        </ImageColumn>
        <ImageColumn>
          <img src={WalletHiThereImage} width="384" height="637" alt="Wallet hi there screen" />
        </ImageColumn>
        <ImageColumn>
          <img src={WalletEverythingIsReadyImage} width="345" height="575" alt="Wallet everything is ready screen" />
        </ImageColumn>
      </ImagesColumns>
      <ImageSwiperStyled />
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

  button {
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
  align-items: center;
  margin-top: var(--spacing-20);
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
  margin-top: var(--spacing-20);

  @media ${deviceBreakPoints.mobile} {
    display: block;
  }
`

export default PageSectionUsability
