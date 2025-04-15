import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import Button from '../../Button'
import CardImage from '../../customPageComponents/CardImage'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextCard from '../../customPageComponents/TextCard'
import TextElement from '../../customPageComponents/TextElement'

export const query = graphql`
  fragment HomepageIntroSection on MarkdownRemarkFrontmatterIntro {
    cards {
      title
      description
      actionText
      image {
        publicURL
      }
      link {
        url
      }
    }
  }
`

const HomepageIntroSection = ({ cards }: Queries.HomepageIntroSectionFragment) => (
  <SubpageSection id="intro">
    <TextElement>
      <h2>A Network Built by Visionaries</h2>
      <p>
        <strong>Alephium is more than a blockchain</strong> - it’s a movement driven by those who refuse to compromise
        on security. Built and secured by a community of miners, developers, and innovators, Alephium embodies the core
        strengths of Proof-of-Work while pioneering energy efficiency and scalability.
      </p>
      <p>
        We're not here to follow trends -{' '}
        <strong>we’re here to build a secure and sustainable foundation for the future of finance.</strong>
      </p>
    </TextElement>

    <SubheaderContent>
      <IntroColumns variants={cardContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {cards?.map(
          (card) =>
            card &&
            card.link?.url && (
              <TextCard isAnimated variants={cardVariants} key={card.title}>
                <CardImage imageUrl={card.image?.publicURL} overlayTitle={card.title} />
                <p>{card.description}</p>
                <Button url={card.link?.url} squared textAlign="center">
                  {card.actionText}
                </Button>
              </TextCard>
            )
        )}
      </IntroColumns>
    </SubheaderContent>
  </SubpageSection>
)

export default HomepageIntroSection

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

const IntroColumns = styled(motion.div)`
  display: flex;
  gap: 30px;

  @media ${deviceBreakPoints.mobile} {
    flex-wrap: wrap;
  }
`
