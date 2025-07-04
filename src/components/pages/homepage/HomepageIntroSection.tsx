import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { ReactNode, useMemo } from 'react'
import styled, { useTheme } from 'styled-components'

import CardsRow, { CardsRowSegment } from '../../customPageComponents/CardsRow'
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
  color: string
}

const HomepageIntroSection = () => {
  const theme = useTheme()
  const { lightRays, stream, greenWater, goldStream } = useStaticQuery<Queries.HomepageIntroQuery>(homepageIntroQuery)

  const hardcodedCards = useMemo<Card[]>(
    () => [
      {
        title: 'Wallets',
        description: (
          <>
            Get one of the <strong>user-friendly Alephium wallets.</strong>
          </>
        ),
        actionText: 'Wallets',
        image: lightRays?.childImageSharp?.gatsbyImageData,
        link: {
          url: '/wallets'
        },
        color: theme.palette3
      },
      {
        title: 'Build',
        description: (
          <>
            Explore the <strong>documentation</strong> and start building.
          </>
        ),
        actionText: 'Start Building',
        image: stream?.childImageSharp?.gatsbyImageData,
        link: {
          url: 'https://docs.alephium.org'
        },
        color: theme.palette5
      },
      {
        title: 'Contribute',
        description: (
          <>
            <strong>Apply for a grant</strong> to develop your project on Alephium.
          </>
        ),
        actionText: 'Start Contributing',
        image: greenWater?.childImageSharp?.gatsbyImageData,
        link: {
          url: '/grants'
        },
        color: theme.palette1
      },
      {
        title: 'Mine',
        description: (
          <>
            <strong>Start mining</strong> Alephium and earn rewards.
          </>
        ),
        actionText: 'Start Mining',
        image: goldStream?.childImageSharp?.gatsbyImageData,
        link: {
          url: 'https://docs.alephium.org/mining'
        },
        color: theme.palette2
      }
    ],
    [
      lightRays?.childImageSharp?.gatsbyImageData,
      theme.palette3,
      theme.palette5,
      theme.palette1,
      theme.palette2,
      stream?.childImageSharp?.gatsbyImageData,
      greenWater?.childImageSharp?.gatsbyImageData,
      goldStream?.childImageSharp?.gatsbyImageData
    ]
  )

  return (
    <SubpageSectionStyled id="intro" noTopPadding overflow="visible">
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
      <CardsRow>
        <CardsRowSegment>
          {hardcodedCards.slice(0, 2).map((card) => (
            <TextCard border url={card.link.url} variants={cardVariants} key={card.title}>
              <TextCardContent>
                <h4 style={{ color: card.color }}>{card.title}</h4>
                <p>{card.description}</p>
              </TextCardContent>
            </TextCard>
          ))}
        </CardsRowSegment>
        <CardsRowSegment>
          {hardcodedCards.slice(2, 4).map((card) => (
            <TextCard border url={card.link.url} variants={cardVariants} key={card.title}>
              <TextCardContent>
                <h4 style={{ color: card.color }}>{card.title}</h4>
                <p>{card.description}</p>
              </TextCardContent>
            </TextCard>
          ))}
        </CardsRowSegment>
      </CardsRow>
    </SubpageSectionStyled>
  )
}

export default HomepageIntroSection

const SubpageSectionStyled = styled(SubpageSection)`
  padding-top: var(--spacing-8);
`

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}
