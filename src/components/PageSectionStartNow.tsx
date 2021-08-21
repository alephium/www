import React, { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { darkTheme } from '../styles/themes'
import { deviceBreakPoints } from '../styles/global-style'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import GridCard from './GridCard'

import LogoYellow from '../images/svgs/logo-yellow.svg'
import MiningImage from '../images/svgs/mining.svg'
import CodeImage from '../images/svgs/code.svg'

interface PageSectionStartNowProps {
  className?: string
}

let PageSectionStartNow: FC<PageSectionStartNowProps> = ({ className }) => (
  <section className={className}>
    <PageSectionContainer>
      <SectionHeader>
        <SectionTextHeader
          title="Start now"
          subtitle="Build and contribute."
          description="Alephium is already live. You can start building, earning, and contributing right now."
          bigSubtitle
        />
        <LogoYellow />
      </SectionHeader>
      <Grid>
        <ThemeProvider theme={darkTheme}>
          <GridCard
            title="Start mining"
            subtitle="Earn ALPH tokens"
            link={{ to: '#', text: 'Instructions', newTab: true }}
            bgColor="var(--color-grey-dark-3)"
            ImageComponent={MiningImage}
            imageWidth="14rem"
          >
            liquam dapibus ipsum vitae sem. Ut eget mauris ac nunc luctus ornare. Phasellus enim augue, rutrum tempus,
            blandit in, vehicula eu, neque. Sed consequat nunc. Proin metus. Duis at mi non tellus{' '}
          </GridCard>
        </ThemeProvider>
        <GridCard
          title="Get a grant"
          subtitle="And start building"
          link={{ to: '#', text: 'Apply for a grand', newTab: true }}
        >
          liquam dapibus ipsum vitae sem. Ut eget mauris ac nunc luctus ornare. Phasellus enim augue, rutrum tempus,
          blandit in, vehicula eu, neque. Sed consequat nunc. Proin metus. Duis at mi non tellus
        </GridCard>
        <GridCard
          title="Get a job @ Alephium"
          subtitle="We value individuals"
          link={{ to: '#', text: 'Job openings', newTab: true }}
        >
          We're based in beautiful Switzerland, but you can work from anywhere in the world.
        </GridCard>
        <ThemeProvider theme={darkTheme}>
          <GridCard
            title="Contribute to the code"
            subtitle="Code and get rewarded"
            link={{ to: 'https://github.com/alephium/alephium', text: 'To the codebase', newTab: true }}
            ImageComponent={CodeImage}
            imageWidth="6.5rem"
          >
            We would love to see your code integrated in our codebase! Contribute, and receive some unique rewards.
          </GridCard>
        </ThemeProvider>
      </Grid>
    </PageSectionContainer>
  </section>
)

PageSectionStartNow = styled(PageSectionStartNow)`
  padding-top: var(--spacing-56);
  padding-bottom: var(--spacing-56);
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textPrimary};
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-8);

  svg {
    width: var(--width-82);
    flex-shrink: 0;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr 8fr;
  grid-template-rows: repeat(2, minmax(24.5rem, auto));
  gap: var(--spacing-6);
  margin-top: var(--spacing-32);

  > div:nth-child(4n + 2) {
    grid-column: 2 / span 2;
  }

  > div:nth-child(4n + 3) {
    grid-column: 1 / span 2;
  }

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    > div:nth-child(4n + 2),
    > div:nth-child(4n + 3) {
      grid-column: auto;
    }
  }
`

export default PageSectionStartNow
