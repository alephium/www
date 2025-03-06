import styled from 'styled-components'
import { motion } from 'framer-motion'

import CardEngagement from '../CardEngagement'
import Column from '../Columns/Column'
import Columns from '../Columns/Columns'

import { deviceBreakPoints } from '../../styles/global-style'
import { graphql } from 'gatsby'
import { notEmpty } from '../../utils/misc'
import SubpageSection from '../customPageComponents/SubpageSection'
import TextElement from '../customPageComponents/TextElement'
import SubheaderContent from '../customPageComponents/SubheaderContent'

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
  <SubpageSection id="intro">
    {content?.titleRows && (
      <TextElement>
        <h2>{content.titleRows.filter(notEmpty).join('\n')}</h2>
        <p>{content?.subtitleRows?.filter(notEmpty).join('\n')}</p>
      </TextElement>
    )}

    <SubheaderContent>
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
    </SubheaderContent>
  </SubpageSection>
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
  display: flex;
  gap: 30px;

  @media ${deviceBreakPoints.mobile} {
    flex-wrap: wrap;
  }
`
