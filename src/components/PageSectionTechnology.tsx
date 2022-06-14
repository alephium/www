import { ComponentProps, FC, useState } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import PageSectionContainer from './PageSectionContainer'
import SectionTextHeader from './SectionTextHeader'
import Columns from './Columns/Columns'
import Column from './Columns/Column'
import SectionTextTeaser from './SectionTextTeaser'
import ModalBlockFlow from './ModalBlockFlow'
import ModalPoLW from './ModalPoLW'
import ModalSmartContract from './ModalSmartContract'
import ModalVms from './ModalVms'
import { ArrowedLinkProps } from './ArrowedLink'
import { motion, Variants } from 'framer-motion'

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
  minimal?: boolean
}

let PageSectionTechnology: FC<PageSectionTechnologyProps> = ({ className, content, minimal }) => {
  const [isBlockFlowModalOpen, setIsBlockFlowModalOpen] = useState(false)
  const [isPoLWModalOpen, setIsPoLWModalOpen] = useState(false)
  const [isSmartContractModalOpen, setIsSmartContractModalOpen] = useState(false)
  const [isVmsModalOpen, setIsVmsModalOpen] = useState(false)

  const blockFlowSectionContent = content.blockFlowSection
  const smartContractSectionContent = content.smartContractSection
  const polwSectionContent = content.polwSection
  const vmsSectionContent = content.vmsSection
  if (!minimal) {
    blockFlowSectionContent.links[0] = { ...blockFlowSectionContent.links[0], openModal: setIsBlockFlowModalOpen }
    polwSectionContent.links[0] = { ...polwSectionContent.links[0], openModal: setIsPoLWModalOpen }
    smartContractSectionContent.links[0] = {
      ...smartContractSectionContent.links[0],
      openModal: setIsSmartContractModalOpen
    }
    vmsSectionContent.links[0] = { ...vmsSectionContent.links[0], openModal: setIsVmsModalOpen }
  }

  const columnsProps: Omit<ComponentProps<typeof Columns>, 'children'> = {
    gap: '4.5rem',
    animateEntry: true
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
            <Column vertialCenter>
              <SectionTextTeaser
                {...blockFlowSectionContent}
                IconComponent={StackImage}
                trackingName="technology-section:blockflow"
                link={!minimal}
                tipbox={!minimal}
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
            <Column vertialCenter>
              <SectionTextTeaser
                {...polwSectionContent}
                IconComponent={LeafImage}
                trackingName="technology-section:polw"
                link={!minimal}
                tipbox={!minimal}
              />
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
            <Column vertialCenter>
              <SectionTextTeaser
                {...smartContractSectionContent}
                IconComponent={StackImage}
                trackingName="technology-section:smart-contract"
                link={!minimal}
                tipbox={!minimal}
              />
            </Column>
          </Columns>
        </PageSectionContainer>
      </SmartContractSubsection>
      <VmsSubsection>
        <PageSectionContainer>
          <Columns {...columnsProps} reverse>
            <Column vertialCenter>
              <SectionTextTeaser
                {...vmsSectionContent}
                IconComponent={VmDotsImage}
                trackingName="technology-section:vm"
                link={!minimal}
                tipbox={!minimal}
              />
            </Column>
            <IllustrationColumn>
              <VmsImage src={VmsImageSrc} alt="VMs" />
            </IllustrationColumn>
          </Columns>
        </PageSectionContainer>
      </VmsSubsection>
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

const TopGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  background-image: url(${BGGradientSrc});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  background-position-y: top;
  box-shadow: 0 -30px 50px rgba(0, 0, 0, 0.7);
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
  padding-bottom: var(--spacing-10);

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
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: var(--spacing-10) 0;
  position: relative;
  overflow: hidden;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-5) 0 var(--spacing-5);
  }
`

const VmsSubsection = styled.section`
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: var(--spacing-10) 0;
  position: relative;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-5) 0 var(--spacing-10);
  }
`

const SmartContractSubsection = styled.section`
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: var(--spacing-10) 0;
  position: relative;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-5) 0 var(--spacing-14);
  }
`

PageSectionTechnology = styled(PageSectionTechnology)`
  background-color: ${({ theme }) => theme.bgSecondary};
  padding-top: var(--spacing-16);
`

export default PageSectionTechnology
