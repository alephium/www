import { FC, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import { lightTheme } from '../styles/themes'

import PageSectionContainer from './PageSectionContainer'
import SectionTextHeader from './SectionTextHeader'
import Columns from './Columns/Columns'
import Column from './Columns/Column'
import SectionTextTeaser from './SectionTextTeaser'
import SubsectionTextHeader from './SubsectionTextHeader'
import NumbersInfo from './NumbersInfo'
import ModalBlockFlow from './ModalBlockFlow'
import ModalPoLW from './ModalPoLW'
import ModalSmartContract from './ModalSmartContract'
import ModalVms from './ModalVms'
import { ArrowedLinkProps } from './ArrowedLink'

import BGGradientSrc from '../images/top-gradient.svg'
import BlockflowImageSrc from '../images/blockflow.svg'
import PoLWImageSrc from '../images/polw-background.svg'
import SmartContractImageSrc from '../images/smart-contract.svg'
import VmsImageSrc from '../images/vms.svg'
import StackImage from '../images/svgs/stack.svg'
import LeafImage from '../images/svgs/leaf.svg'
import VmDotsImage from '../images/svgs/vm-dots.svg'
import IllustrationColumn from './Columns/IllustrationColumn'

export interface PageSectionTechnologyContentType {
  title: string
  subtitle: string
  blockFlowSection: PageSectionTechnologySubsectionProps
  polwSection: PageSectionTechnologySubsectionProps
  smartContractSection: PageSectionTechnologySubsectionProps
  vmsSection: PageSectionTechnologySubsectionProps
  numbersSection: {
    title: string
    subtitle: string
    columns: {
      number: string
      description: string
    }[]
  }
}

interface PageSectionTechnologySubsectionProps {
  title: string
  description: string
  cardText: string
  links: ArrowedLinkProps[]
}

interface PageSectionTechnologyProps {
  className?: string
  content: PageSectionTechnologyContentType
}

let PageSectionTechnology: FC<PageSectionTechnologyProps> = ({ className, content }) => {
  const [isBlockFlowModalOpen, setIsBlockFlowModalOpen] = useState(false)
  const [isPoLWModalOpen, setIsPoLWModalOpen] = useState(false)
  const [isSmartContractModalOpen, setIsSmartContractModalOpen] = useState(false)
  const [isVmsModalOpen, setIsVmsModalOpen] = useState(false)

  const blockFlowSectionContent = content.blockFlowSection
  const smartContractSectionContent = content.smartContractSection
  const polwSectionContent = content.polwSection
  const vmsSectionContent = content.vmsSection
  const numbersSectionContent = content.numbersSection
  blockFlowSectionContent.links[0] = { ...blockFlowSectionContent.links[0], openModal: setIsBlockFlowModalOpen }
  polwSectionContent.links[0] = { ...polwSectionContent.links[0], openModal: setIsPoLWModalOpen }
  smartContractSectionContent.links[0] = {
    ...smartContractSectionContent.links[0],
    openModal: setIsSmartContractModalOpen
  }
  vmsSectionContent.links[0] = { ...vmsSectionContent.links[0], openModal: setIsVmsModalOpen }

  const columnsProps = {
    gap: '4.5rem'
  }

  return (
    <SectionContainer className={className}>
      <TopGradient />
      <SectionTextHeaderStyled title={content.title} subtitle={content.subtitle} centered bigSubtitle />
      <section>
        <PageSectionContainerStyled>
          <Columns {...columnsProps}>
            <IllustrationColumn>
              <BlockflowImage src={BlockflowImageSrc} alt="Blockflow" />
            </IllustrationColumn>
            <Column>
              <SectionTextTeaser
                {...blockFlowSectionContent}
                IconComponent={StackImage}
                trackingName="technology-section"
              />
            </Column>
          </Columns>
        </PageSectionContainerStyled>
      </section>
      <ProofOfLessWorkSubsection>
        <IllustrationColumn>
          <PolwBackgroundImage src={PoLWImageSrc} alt="Proof of Less Work" />
        </IllustrationColumn>
        <PageSectionContainer>
          <Columns {...columnsProps}>
            <Column>
              <SectionTextTeaser {...polwSectionContent} IconComponent={LeafImage} trackingName="technology-section" />
            </Column>
            <Column />
          </Columns>
        </PageSectionContainer>
      </ProofOfLessWorkSubsection>
      <SmartContractSubsection>
        <PageSectionContainer>
          <Columns {...columnsProps}>
            <IllustrationColumn>
              <SmartContractImage src={SmartContractImageSrc} alt="Smart contract" />
            </IllustrationColumn>
            <Column>
              <SectionTextTeaser
                {...smartContractSectionContent}
                IconComponent={StackImage}
                trackingName="technology-section"
              />
            </Column>
          </Columns>
        </PageSectionContainer>
      </SmartContractSubsection>
      <VmsSubsection>
        <PageSectionContainer>
          <Columns {...columnsProps} reverse>
            <Column>
              <SectionTextTeaser {...vmsSectionContent} IconComponent={VmDotsImage} trackingName="technology-section" />
            </Column>
            <IllustrationColumn>
              <VmsImage src={VmsImageSrc} alt="VMs" />
            </IllustrationColumn>
          </Columns>
        </PageSectionContainer>
      </VmsSubsection>
      <ThemeProvider theme={lightTheme}>
        <NumbersSection>
          <NumbersPageSectionContainer>
            <SubsectionTextHeaderStyled
              title={numbersSectionContent.title}
              subtitle={numbersSectionContent.subtitle}
              condensed
            />
            <Columns>
              {numbersSectionContent.columns.map((columnContent) => (
                <NumbersColumn key={columnContent.number}>
                  <NumbersInfo {...columnContent} />
                </NumbersColumn>
              ))}
            </Columns>
          </NumbersPageSectionContainer>
        </NumbersSection>
      </ThemeProvider>
      <ModalBlockFlow isOpen={isBlockFlowModalOpen} setIsOpen={setIsBlockFlowModalOpen} />
      <ModalPoLW isOpen={isPoLWModalOpen} setIsOpen={setIsPoLWModalOpen} />
      <ModalSmartContract isOpen={isSmartContractModalOpen} setIsOpen={setIsSmartContractModalOpen} />
      <ModalVms isOpen={isVmsModalOpen} setIsOpen={setIsVmsModalOpen} />
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  position: relative;
`

const NumbersPageSectionContainer = styled(PageSectionContainer)`
  max-width: var(--page-width-shrinked);
`

const NumbersColumn = styled(Column)`
  display: flex;
  align-items: center;

  > div {
    align-self: flex-start;
  }

  &:not(:first-child) {
    > div {
      padding-left: var(--spacing-9);

      @media ${deviceBreakPoints.mobile} {
        padding-left: 0;
        padding-top: var(--spacing-9);
      }
    }

    &:before {
      content: '';
      display: block;
      width: 2px;
      height: var(--spacing-9);
      background-color: ${({ theme }) => theme.separator};
      flex-shrink: 0;

      @media ${deviceBreakPoints.mobile} {
        display: none;
      }
    }
  }

  &:not(:last-child) {
    > div {
      padding-right: var(--spacing-9);

      @media ${deviceBreakPoints.mobile} {
        padding-right: 0;
      }
    }
  }
`

const TopGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 5%;
  background-image: url(${BGGradientSrc});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  background-position-y: top;
  border-top: var(--border-primary-dark);
`

const SubsectionTextHeaderStyled = styled(SubsectionTextHeader)`
  margin-bottom: var(--spacing-10);
`

const BlockflowImage = styled.img`
  width: 70%;

  @media ${deviceBreakPoints.mobile} {
    width: 50%;
  }
`

const SectionTextHeaderStyled = styled(SectionTextHeader)`
  margin-bottom: var(--spacing-20);

  @media ${deviceBreakPoints.mobile} {
    max-width: var(--page-width);
    margin: 0 auto var(--spacing-10);
    padding: 0 var(--spacing-4);
  }
`

const PageSectionContainerStyled = styled(PageSectionContainer)`
  padding-bottom: var(--spacing-20);

  @media ${deviceBreakPoints.mobile} {
    padding-bottom: var(--spacing-10);
  }
`

const PolwBackgroundImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: var(--width-584);
  height: auto;

  @media ${deviceBreakPoints.mobile} {
    position: relative;
    transform: rotate(90deg) scaleY(-1) translateX(-20%);
    width: 30%;
  }
`

const SmartContractImage = styled.img`
  width: 70%;

  @media ${deviceBreakPoints.mobile} {
    width: 50%;
  }
`

const VmsImage = styled.img`
  width: 70%;

  @media ${deviceBreakPoints.mobile} {
    width: 50%;
  }
`

const ProofOfLessWorkSubsection = styled.section`
  background-color: ${({ theme }) => theme.bgPrimary};
  padding: var(--spacing-20) 0;
  position: relative;
  overflow: hidden;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-5) 0 var(--spacing-5);
  }
`

const VmsSubsection = styled.section`
  background-color: ${({ theme }) => theme.bgPrimary};
  padding: var(--spacing-20) 0;
  position: relative;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-5) 0 var(--spacing-12);
  }
`

const SmartContractSubsection = styled.section`
  background-color: ${({ theme }) => theme.bgPrimary};
  padding: var(--spacing-20) 0;
  position: relative;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-5) 0 var(--spacing-14);
  }
`

const NumbersSection = styled.section`
  border-bottom: var(--border-primary-light);
  background-color: ${({ theme }) => theme.bgPrimary};
  padding: var(--spacing-11) 0;
`

PageSectionTechnology = styled(PageSectionTechnology)`
  background-color: ${({ theme }) => theme.bgPrimary};
  padding-top: var(--spacing-16);
`

export default PageSectionTechnology
