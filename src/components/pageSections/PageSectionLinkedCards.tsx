import styled from 'styled-components'
import { motion } from 'framer-motion'

import PageSectionContainer from '../PageSectionContainer'
import CardEngagement from '../CardEngagement'
import Column from '../Columns/Column'
import Columns from '../Columns/Columns'
import SectionTextHeader from '../SectionTextHeader'

import { deviceBreakPoints } from '../../styles/global-style'
import { graphql } from 'gatsby'
import { notEmpty } from '../../utils/misc'

export const query = graphql`
  fragment PageSectionLinkedCards on MarkdownRemarkFrontmatterPageSectionLinkedCardsContent {
    titleRows
    subtitleRows
    cards {
      ...CardEngagement
    }
  }
`

const PageSectionLinkedCards = (content: Queries.PageSectionLinkedCardsFragment) => (
  <SectionContainer id="intro">
    {content?.titleRows && (
      <SectionTextHeader
        bigSubtitle
        titleRows={content.titleRows.filter(notEmpty)}
        subtitleRows={content?.subtitleRows?.filter(notEmpty)}
      />
    )}
    <PageSectionContainer>
      <IntroColumns gap="var(--spacing-32)">
        <Column>
          {content?.cards && (
            <IntroColumnContent
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {content?.cards.filter(notEmpty).map((card) => (
                <CardEngagement
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  key={card.title}
                  link={card.link}
                  trackingName={`intro-section-card:${card.title}-${card.link?.url}-link`}
                  variants={cardVariants}
                >
                  <p>{card.description}</p>
                </CardEngagement>
              ))}
            </IntroColumnContent>
          )}
        </Column>
      </IntroColumns>
    </PageSectionContainer>
  </SectionContainer>
)

export default PageSectionLinkedCards

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const SectionContainer = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: var(--spacing-8);
`

const IntroColumns = styled(Columns)`
  margin-bottom: var(--spacing-8);

  @media (max-width: 1352px) {
    gap: var(--spacing-20);
  }

  @media (max-width: 1096px) {
    gap: var(--spacing-10);
  }
`

const IntroColumnContent = styled(motion.div)`
  margin-top: var(--spacing-6);
  display: flex;
  gap: 30px;

  @media ${deviceBreakPoints.mobile} {
    flex-wrap: wrap;
  }
`
