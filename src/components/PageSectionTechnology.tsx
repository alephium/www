import React, { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import PageSectionContainer from './PageSectionContainer'
import SectionTitle from './SectionTitle'
import Columns from './Columns'
import Column from './Column'
import SectionTextTeaser from './SectionTextTeaser'

import BlockflowImage from '../images/blockflow.svg'
import StackImage from '../images/stack.svg'
import LeafImage from '../images/leaf.svg'
import VmDotsImage from '../images/vm-dots.svg'
import PolwBackgroundImage from '../images/polw-background.svg'
import SmartContractImage from '../images/smart-contract.svg'
import VmsImage from '../images/vms.svg'

interface PageSectionTechnologyProps {
  className?: string
}

let PageSectionTechnology: FC<PageSectionTechnologyProps> = ({ className }) => (
  <section className={className}>
    <SectionTitleStyled title="Technology" subtitle="What makes us different" centered largeSubtitle />
    <PageSectionContainerStyled>
      <Columns gap="8.5rem">
        <CenteredColumn>
          <BlockflowImageStyled />
        </CenteredColumn>
        <Column>
          <SectionTextTeaser
            title="Blockflow: sharding on BTC’s proven foundations"
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
    <ProofOfLessWorkSubsection>
      <PageSectionContainer>
        <Columns gap="8.5rem">
          <Column>
            <SectionTextTeaser
              title="Proof of Less Work"
              content="Alephium is the first operational sharded blockchain bringing versatility, scalability, and energy efficiency to Bitcoin's proven core technologies, while offering much better performances and secure P2P smart contracts."
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
              content="Application layer, accessibility for devs etc. Vestibulum vel metus. Donec sagittis velit vel augue. Fusce in nisl vitae massa venenatis rhoncus. Praesent orci velit, lobortis eget, suscipit semper, congue eu, est. Quisque malesuada volutpat enim. Vestibulum leo sem."
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
              content="Alephium is the first operational sharded blockchain bringing versatility, scalability, and energy efficiency to Bitcoin's proven core technologies, while offering much better performances and secure P2P smart contracts."
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
  </section>
)

let BlockflowImageStyled = styled(BlockflowImage)`
  max-width: var(--width-368);
`

const SectionTitleStyled = styled(SectionTitle)`
  margin-bottom: var(--spacing-58);
`

const CenteredColumn = styled(Column)`
  display: flex;
  justify-content: center;
`

const PageSectionContainerStyled = styled(PageSectionContainer)`
  padding-bottom: var(--spacing-56);
`

const PolwBackgroundImageStyled = styled(PolwBackgroundImage)`
  position: absolute;
  right: 0;
  bottom: 0;
  top: var(--spacing-16);
  max-width: var(--width-584);
  height: auto;

  @media ${deviceBreakPoints.mobile} {
    display: none;
  }
`

const SmartContractImageStyled = styled(SmartContractImage)`
  position: absolute;
  top: calc(-1 * var(--spacing-40));
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

const ProofOfLessWorkSubsection = styled.div`
  background-color: var(--color-grey-dark);
  padding: var(--spacing-70) 0 var(--spacing-56);
  position: relative;
`

const VmsSubsection = styled.div`
  background-color: var(--color-grey-dark);
  padding: var(--spacing-60) 0;
  position: relative;
`

const SmartContractSubsection = styled.div`
  background-color: var(--color-dark-1);
  padding: var(--spacing-56) 0 var(--spacing-60);
  position: relative;
`

PageSectionTechnology = styled(PageSectionTechnology)`
  background-color: var(--color-dark-1);
  padding-top: var(--spacing-32);
`

export default PageSectionTechnology
