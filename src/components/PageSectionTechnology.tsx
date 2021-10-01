import React, { FC, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import { lightTheme } from '../styles/themes'

import PageSectionContainer from './PageSectionContainer'
import SectionTextHeader from './SectionTextHeader'
import Columns from './Columns'
import Column from './Column'
import SectionTextTeaser from './SectionTextTeaser'
import SubsectionTextHeader from './SubsectionTextHeader'
import NumbersInfo from './NumbersInfo'
import ModalBlockFlow from './ModalBlockFlow'
import ModalPoLW from './ModalPoLW'
import ModalSmartContract from './ModalSmartContract'
import ModalVms from './ModalVms'
import { ArrowedLinkProps } from './ArrowedLink'

import BlockflowImage from '../images/svgs/blockflow.svg'
import StackImage from '../images/svgs/stack.svg'
import LeafImage from '../images/svgs/leaf.svg'
import VmDotsImage from '../images/svgs/vm-dots.svg'
import PolwBackgroundImage from '../images/svgs/polw-background.svg'
import SmartContractImage from '../images/svgs/smart-contract.svg'
import VmsImage from '../images/svgs/vms.svg'

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
    gap: '8.5rem'
  }

  return (
    <section className={className}>
      <SectionTextHeaderStyled title={content.title} subtitle={content.subtitle} centered bigSubtitle />
      <section>
        <PageSectionContainerStyled>
          <Columns {...columnsProps}>
            <CenteredColumn>
              <BlockflowImageStyled />
            </CenteredColumn>
            <Column>
              <SectionTextTeaser {...blockFlowSectionContent} IconComponent={StackImage} />
            </Column>
          </Columns>
        </PageSectionContainerStyled>
      </section>
      <ProofOfLessWorkSubsection>
        <PageSectionContainer>
          <Columns {...columnsProps}>
            <Column>
              <SectionTextTeaser {...polwSectionContent} IconComponent={LeafImage} />
            </Column>
            <CenteredColumn></CenteredColumn>
          </Columns>
        </PageSectionContainer>
        <PolwBackgroundImageStyled />
      </ProofOfLessWorkSubsection>
      <SmartContractSubsection>
        <PageSectionContainer>
          <Columns {...columnsProps}>
            <CenteredColumn>
              <SmartContractImageStyled />
            </CenteredColumn>
            <Column>
              <SectionTextTeaser {...smartContractSectionContent} IconComponent={StackImage} />
            </Column>
          </Columns>
        </PageSectionContainer>
      </SmartContractSubsection>
      <VmsSubsection>
        <PageSectionContainer>
          <Columns {...columnsProps}>
            <Column>
              <SectionTextTeaser {...vmsSectionContent} IconComponent={VmDotsImage} />
            </Column>
            <CenteredColumn>
              <VmsImageStyled />
            </CenteredColumn>
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
    </section>
  )
}

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

const SubsectionTextHeaderStyled = styled(SubsectionTextHeader)`
  margin-bottom: var(--spacing-10);
`

let BlockflowImageStyled = styled(BlockflowImage)`
  max-width: var(--width-368);
`

const SectionTextHeaderStyled = styled(SectionTextHeader)`
  margin-bottom: var(--spacing-29);
`

const CenteredColumn = styled(Column)`
  display: flex;
  justify-content: center;
`

const PageSectionContainerStyled = styled(PageSectionContainer)`
  padding-bottom: var(--spacing-28);
`

const PolwBackgroundImageStyled = styled(PolwBackgroundImage)`
  position: absolute;
  right: 0;
  bottom: 0;
  top: var(--spacing-8);
  max-width: var(--width-584);
  height: auto;

  @media ${deviceBreakPoints.mobile} {
    display: none;
  }
`

const SmartContractImageStyled = styled(SmartContractImage)`
  position: absolute;
  top: calc(-1 * var(--spacing-20));
  left: 0;
  max-width: var(--width-488);
  height: auto;

  @media ${deviceBreakPoints.mobile} {
    position: relative;
    top: 0;
  }
`

const VmsImageStyled = styled(VmsImage)`
  max-width: var(--width-488);
`

const ProofOfLessWorkSubsection = styled.section`
  background-color: ${({ theme }) => theme.bgTertiary};
  padding: var(--spacing-35) 0 var(--spacing-28);
  position: relative;
`

const VmsSubsection = styled.section`
  background-color: ${({ theme }) => theme.bgTertiary};
  padding: var(--spacing-30) 0;
  position: relative;
`

const SmartContractSubsection = styled.section`
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: var(--spacing-28) 0 var(--spacing-30);
  position: relative;
`

const NumbersSection = styled.section`
  background-color: ${({ theme }) => theme.bgTertiary};
  padding: var(--spacing-11) 0;
`

PageSectionTechnology = styled(PageSectionTechnology)`
  background-color: ${({ theme }) => theme.bgSecondary};
  padding-top: var(--spacing-16);
`

export default PageSectionTechnology
