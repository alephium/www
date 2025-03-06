import styled from 'styled-components'
import { motion } from 'framer-motion'

import { deviceBreakPoints } from '../../../styles/global-style'
import { graphql } from 'gatsby'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
import TextCard from '../../customPageComponents/TextCard'

export const query = graphql`
  fragment HomepageIntroSection on MarkdownRemarkFrontmatterIntro {
    cards {
      title
      description
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
        Alephium is more than a blockchain - it’s a movement driven by those who refuse to compromise on security. Built
        and secured by a community of miners, developers, and innovators, Alephium embodies the core strengths of
        Proof-of-Work while pioneering energy efficiency and scalability.
      </p>
      <p>
        We're not here to follow trends - we’re here to build a secure and sustainable foundation for the future of
        finance.
      </p>
    </TextElement>

    <SubheaderContent>
      <IntroColumns variants={cardContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {cards?.map(
          (card) =>
            card &&
            card.link?.url && (
              <TextCard isAnimated url={card.link?.url} variants={cardVariants} key={card.title}>
                {card.image?.publicURL && <Image src={card.image.publicURL} alt={card.title ?? ''} />}
                <h3>{card.title}</h3>
                <p>{card.description}</p>
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

const Image = styled.img`
  width: 82px;
  height: 82px;
  padding-bottom: 30px;
`
