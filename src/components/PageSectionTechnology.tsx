import React, { FC } from 'react'
import styled from 'styled-components'

import PageSectionContainer from './PageSectionContainer'
import SectionTitle from './SectionTitle'
import Columns from './Columns'
import Column from './Column'
import SectionTextTeaser from './SectionTextTeaser'

import BlockflowImage from '../images/blockflow.svg'
import StackImage from '../images/stack.svg'

interface PageSectionTechnologyProps {
  className?: string
}

let BlockflowImageStyled = styled(BlockflowImage)`
  width: var(--width-368);
`

const SectionTitleStyled = styled(SectionTitle)`
  margin-bottom: var(--spacing-58);
`

const CenteredColumn = styled(Column)`
  display: flex;
  justify-content: center;
`

let PageSectionTechnology: FC<PageSectionTechnologyProps> = ({ className }) => (
  <section className={className}>
    <SectionTitleStyled title="Technology" subtitle="What makes us different" centered largeSubtitle />
    <PageSectionContainer>
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
    </PageSectionContainer>
  </section>
)

PageSectionTechnology = styled(PageSectionTechnology)`
  background-color: var(--color-dark-1);
  padding: var(--spacing-32) 0 var(--spacing-56);
`

export default PageSectionTechnology
