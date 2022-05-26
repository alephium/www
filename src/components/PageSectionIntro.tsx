import { FC } from 'react'
import styled from 'styled-components'

import PageSectionContainer from './PageSectionContainer'
import CardEngagement from './CardEngagement'
// import Feed from './Feed'
import Column from './Columns/Column'
import Columns from './Columns/Columns'
import SectionTextHeader from './SectionTextHeader'
import { ArrowedLinkProps } from './ArrowedLink'

import { deviceBreakPoints } from '../styles/global-style'

export interface PageSectionIntroContentType {
  title: string
  subtitle: string
  cards: {
    title: string
    description: string
    link: ArrowedLinkProps
  }[]
}

interface PageSectionIntroProps {
  className?: string
  content: PageSectionIntroContentType
}

let PageSectionIntro: FC<PageSectionIntroProps> = ({ className, content }) => {
  return (
    <section className={className} id="intro">
      <PageSectionContainer>
        <IntroColumns gap="var(--spacing-32)">
          <Column>
            <SectionTextHeader title={content.title} subtitle={content.subtitle} />
            <IntroColumnContent>
              {content.cards.map((card) => (
                <CardEngagement
                  title={card.title}
                  image={card.image}
                  key={card.title}
                  link={card.link}
                  trackingName={`intro-section-card:${card.title}-${card.link.text}-link`}
                >
                  <p>{card.description}</p>
                </CardEngagement>
              ))}
            </IntroColumnContent>
          </Column>
        </IntroColumns>
      </PageSectionContainer>
    </section>
  )
}

const IntroColumns = styled(Columns)`
  @media (max-width: 1352px) {
    gap: var(--spacing-20);
  }

  @media (max-width: 1096px) {
    gap: var(--spacing-10);
  }
`

const IntroColumnContent = styled.div`
  margin-top: var(--spacing-6);
  display: grid;
  grid-template-columns: minmax(150px, 50%) minmax(150px, 50%);
  grid-template-rows: 324px;
  column-gap: 30px;
  row-gap: 30px;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    grid-template-columns: 100%;
  }
`

PageSectionIntro = styled(PageSectionIntro)`
  border-top: var(--border-primary-dark);
  padding: var(--spacing-16) 0 var(--spacing-28);
`

export default PageSectionIntro
