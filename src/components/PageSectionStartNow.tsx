import React, { FC } from 'react'
import styled from 'styled-components'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'

import LogoYellow from '../images/svgs/logo-yellow.svg'

interface PageSectionStartNowProps {
  className?: string
}

let PageSectionStartNow: FC<PageSectionStartNowProps> = ({ className }) => (
  <section className={className}>
    <PageSectionContainerStyled>
      <SectionHeader>
        <SectionTextHeaderStyled
          title="Start now"
          subtitle="Build and contribute."
          description="Alephium is already live. You can start building, earning, and contributing right now."
          largeSubtitle
        />
        <LogoYellow />
      </SectionHeader>
    </PageSectionContainerStyled>
  </section>
)

PageSectionStartNow = styled(PageSectionStartNow)`
  padding-top: var(--spacing-56);
  padding-bottom: var(--spacing-56);
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textPrimary};
`

const SectionTextHeaderStyled = styled(SectionTextHeader)``

const PageSectionContainerStyled = styled(PageSectionContainer)``

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-8);

  svg {
    width: var(--width-82);
    flex-shrink: 0;
  }
`

export default PageSectionStartNow
