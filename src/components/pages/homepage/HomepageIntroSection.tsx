import { motion } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { ReactNode, useMemo } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import Button from '../../Button'
import CardImageOverlay from '../../customPageComponents/CardImageOverlay'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextCard from '../../customPageComponents/TextCard'
import TextCardContent from '../../customPageComponents/TextCardContent'

export const homepageIntroQuery = graphql`
  query HomepageIntro {
    lightRays: file(relativePath: { eq: "light-rays.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    stream: file(relativePath: { eq: "stream.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    greenWater: file(relativePath: { eq: "green-water.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    goldStream: file(relativePath: { eq: "gold-stream.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
  }
`

interface Card {
  title: string
  description: ReactNode
  actionText: string
  image?: IGatsbyImageData
  link: {
    url: string
  }
}

const HomepageIntroSection = () => {
  const { lightRays, stream, greenWater, goldStream } = useStaticQuery<Queries.HomepageIntroQuery>(homepageIntroQuery)

  const hardcodedCards = useMemo<Card[]>(
    () => [
      {
        title: 'Get Started',
        description: (
          <>
            Learn more about <strong>Alephium</strong> and start your journey.
          </>
        ),
        actionText: 'Learn More',
        image: lightRays?.childImageSharp?.gatsbyImageData,
        link: {
          url: '/get-started'
        }
      },
      {
        title: 'Start Building',
        description: (
          <>
            Explore the <strong>documentation</strong> and start building.
          </>
        ),
        actionText: 'Start Building',
        image: stream?.childImageSharp?.gatsbyImageData,
        link: {
          url: 'https://docs.alephium.org'
        }
      },
      {
        title: 'Start Contributing',
        description: (
          <>
            Apply for a <strong>grant</strong> to develop your project on Alephium.
          </>
        ),
        actionText: 'Start Contributing',
        image: greenWater?.childImageSharp?.gatsbyImageData,
        link: {
          url: '/grants'
        }
      },
      {
        title: 'Start Mining',
        description: (
          <>
            Start mining <strong>Alephium</strong> and earn rewards.
          </>
        ),
        actionText: 'Start Mining',
        image: goldStream?.childImageSharp?.gatsbyImageData,
        link: {
          url: 'https://docs.alephium.org/mining'
        }
      }
    ],
    [
      lightRays?.childImageSharp?.gatsbyImageData,
      stream?.childImageSharp?.gatsbyImageData,
      greenWater?.childImageSharp?.gatsbyImageData,
      goldStream?.childImageSharp?.gatsbyImageData
    ]
  )

  return (
    <SubpageSection id="intro" isCentered>
      {/* <TextElement isCentered>
        <h2>
          A Network Built
          <br />
          by Visionaries
        </h2>
        <p>
          <strong>Alephium is more than a blockchain</strong> - it&apos;s a movement driven by those who refuse to
          compromise on security. Built and secured by a community of miners, developers, and innovators, Alephium
          embodies the core strengths of Proof-of-Work while pioneering energy efficiency and scalability.
        </p>
        <p>
          <strong>
            We&apos;re not here to follow trends - we&apos;re here to build a secure and sustainable foundation for the
            future of finance.
          </strong>
        </p>
      </TextElement> */}

      <SubheaderContent isCentered>
        <IntroColumns variants={cardContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {hardcodedCards.map((card) => (
            <TextCard isAnimated border variants={cardVariants} key={card.title}>
              <CardImageOverlay image={card.image} overlayTitle={card.title} />
              <TextCardContent>
                <p>{card.description}</p>
                <Button url={card.link.url} squared highlight>
                  {card.actionText}
                </Button>
              </TextCardContent>
            </TextCard>
          ))}
        </IntroColumns>
      </SubheaderContent>
    </SubpageSection>
  )
}

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
  flex: 1;
  justify-content: center;
  gap: 30px;

  @media ${deviceBreakPoints.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 var(--spacing-4);
  }

  @media ${deviceBreakPoints.ipad} {
    flex-wrap: wrap;
  }
`
