import React, { FC } from 'react'
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

import BlockflowImage from '../images/svgs/blockflow.svg'
import StackImage from '../images/svgs/stack.svg'
import LeafImage from '../images/svgs/leaf.svg'
import VmDotsImage from '../images/svgs/vm-dots.svg'
import PolwBackgroundImage from '../images/svgs/polw-background.svg'
import SmartContractImage from '../images/svgs/smart-contract.svg'
import VmsImage from '../images/svgs/vms.svg'

interface PageSectionTechnologyProps {
  className?: string
}

let PageSectionTechnology: FC<PageSectionTechnologyProps> = ({ className }) => (
  <section className={className}>
    <SectionTextHeaderStyled title="Technology" subtitle="What makes us different" centered bigSubtitle />
    <section>
      <PageSectionContainerStyled>
        <Columns gap="8.5rem">
          <CenteredColumn>
            <BlockflowImageStyled />
          </CenteredColumn>
          <Column>
            <SectionTextTeaser
              title="Blockflow: sharding on BTC's proven foundations"
              content="Alephium is the first operational sharded blockchain bringing versatility, scalability, and energy efficiency to Bitcoin's proven core technologies, while offering much better performances and secure P2P smart contracts."
              IconComponent={StackImage}
              iconText="Merging the versatility and expressivity of Ethereum with the security of the Bitcoin technology stack."
              links={[
                { text: 'More details', to: '#' },
                { text: 'White paper', to: 'https://github.com/alephium/white-paper', newTab: true }
              ]}
            />
          </Column>
        </Columns>
      </PageSectionContainerStyled>
    </section>
    <ProofOfLessWorkSubsection>
      <PageSectionContainer>
        <Columns gap="8.5rem">
          <Column>
            <SectionTextTeaser
              title="Proof of Less Work"
              content="PoLW uses a clever combination of physical work and token economics to dynamically adjust the work required to mine new blocks, ensuring a reduced energy footprint compared to classic Nakamoto PoW mining."
              IconComponent={LeafImage}
              iconText="Blockchain ultimately depends on its sustainability."
              links={[
                { text: 'More details', to: '#' },
                { text: 'White paper', to: 'https://github.com/alephium/white-paper', newTab: true }
              ]}
            />
          </Column>
          <CenteredColumn></CenteredColumn>
        </Columns>
      </PageSectionContainer>
      <PolwBackgroundImageStyled />
    </ProofOfLessWorkSubsection>
    <SmartContractSubsection>
      <PageSectionContainer>
        <Columns gap="8.5rem">
          <CenteredColumn>
            <SmartContractImageStyled />
          </CenteredColumn>
          <Column>
            <SectionTextTeaser
              title="Smart contract design"
              content="Alephium proposes a unique approach to sharding and smart contracts on the Bitcoin technology stack while tackling energy concerns with its Proof of Less Work algorithm."
              IconComponent={StackImage}
              iconText="Merging the versatility and expressivity of Ethereum with the security of the Bitcoin technology stack."
              links={[
                { text: 'More details', to: '#' },
                { text: 'White paper', to: 'https://github.com/alephium/white-paper', newTab: true }
              ]}
            />
          </Column>
        </Columns>
      </PageSectionContainer>
    </SmartContractSubsection>
    <VmsSubsection>
      <PageSectionContainer>
        <Columns gap="8.5rem">
          <Column>
            <SectionTextTeaser
              title="Novel VM design"
              content="Most of the modern blockchain protocols have a built-in virtual machine for general computing to implement useful and complicated decentralized applications. In Alephium, we shift from a code-centric approach to a data-centric approach and enable access and parse information from data payload of UTXOs. In this way, our script system will be as powerful as a general virtual machine."
              IconComponent={VmDotsImage}
              iconText="VMs can be a big bottleneck when it comes to Blockchain performances. Not on Alephium."
              links={[{ text: 'More details', to: '#' }]}
            />
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
            title="Some numbers"
            subtitle="We're focusing on efficiency, security and scalability. We took our time to make sure we transform theory to actual technologies."
            titleColor="var(--color-dark)"
            subtitleColor="var(--color-text-grey-light-4)"
            condensed
          />
          <Columns>
            <NumbersColumn>
              <NumbersInfo className="numbers-info" number="16" description="Shards running on mainnet." />
            </NumbersColumn>
            <NumbersColumn>
              <NumbersInfo
                className="numbers-info"
                number="100MB"
                description="of RAM needed by the full node. Runs on a Raspberry-PI."
              />
            </NumbersColumn>
            <NumbersColumn>
              <NumbersInfo className="numbers-info" number="3 years" description='of "under the radar" R&D.' />
            </NumbersColumn>
          </Columns>
        </NumbersPageSectionContainer>
      </NumbersSection>
    </ThemeProvider>
  </section>
)

const NumbersPageSectionContainer = styled(PageSectionContainer)`
  max-width: var(--page-width-shrinked);
`

const NumbersColumn = styled(Column)`
  display: flex;
  align-items: center;

  .numbers-info {
    align-self: flex-start;
  }

  &:not(:first-child) {
    .numbers-info {
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
      background-color: var(--color-grey-light-1);
      flex-shrink: 0;

      @media ${deviceBreakPoints.mobile} {
        display: none;
      }
    }
  }

  &:not(:last-child) {
    .numbers-info {
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
  background-color: var(--color-grey-dark);
  padding: var(--spacing-35) 0 var(--spacing-28);
  position: relative;
`

const VmsSubsection = styled.section`
  background-color: var(--color-grey-dark);
  padding: var(--spacing-30) 0;
  position: relative;
`

const SmartContractSubsection = styled.section`
  background-color: var(--color-dark-1);
  padding: var(--spacing-28) 0 var(--spacing-30);
  position: relative;
`

const NumbersSection = styled.section`
  background-color: ${({ theme }) => theme.bgTertiary};
  padding: var(--spacing-11) 0;
`

PageSectionTechnology = styled(PageSectionTechnology)`
  background-color: var(--color-dark-1);
  padding-top: var(--spacing-16);
`

export default PageSectionTechnology
