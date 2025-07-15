import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { ReactNode, useMemo } from 'react'
import { useTheme } from 'styled-components'

import BentoLayout, { BentoItem } from '../../BentoLayout'
import Card from '../../Card'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextCard from '../../customPageComponents/TextCard'
import TextCardContent from '../../customPageComponents/TextCardContent'
import TextElement from '../../customPageComponents/TextElement'

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
        color: theme.textPrimary
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
        color: theme.textPrimary
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
        color: theme.textPrimary
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
        color: theme.textPrimary
      }
    ],
    [
      lightRays?.childImageSharp?.gatsbyImageData,
      theme.textPrimary,
      stream?.childImageSharp?.gatsbyImageData,
      greenWater?.childImageSharp?.gatsbyImageData,
      goldStream?.childImageSharp?.gatsbyImageData
    ]
  )

  return (
    <SubpageSection id="intro" overflow="visible">
      <TextElement>
        <h2>Quick start</h2>
        <p>Dive into the Alephium ecosystem 🐠</p>
      </TextElement>
      <SubheaderContent>
        <BentoLayout columns={4} gap="medium" animateItems={true}>
          <BentoItem colSpan={2} rowSpan={2}>
            <TextCard url={hardcodedCards[0].link.url} border>
              <TextCardContent>
                <TextElement>
                  <h4 style={{ color: hardcodedCards[0].color }}>{hardcodedCards[0].title}</h4>
                  <p>{hardcodedCards[0].description}</p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </BentoItem>
          <BentoItem colSpan={1} rowSpan={1}>
            <TextCard url={hardcodedCards[1].link.url} border>
              <TextCardContent>
                <TextElement>
                  <h4 style={{ color: hardcodedCards[1].color }}>{hardcodedCards[1].title}</h4>
                  <p>{hardcodedCards[1].description}</p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </BentoItem>
          <BentoItem colSpan={1} rowSpan={1}>
            <TextCard url={hardcodedCards[2].link.url} border>
              <TextCardContent>
                <TextElement>
                  <h4 style={{ color: hardcodedCards[2].color }}>{hardcodedCards[2].title}</h4>
                  <p>{hardcodedCards[2].description}</p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </BentoItem>
          <BentoItem colSpan={2} rowSpan={1}>
            <TextCard url={hardcodedCards[3].link.url} border>
              <TextCardContent>
                <TextElement>
                  <h4 style={{ color: hardcodedCards[3].color }}>{hardcodedCards[3].title}</h4>
                  <p>{hardcodedCards[3].description}</p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </BentoItem>
        </BentoLayout>
      </SubheaderContent>
    </SubpageSection>
  )
}

export default HomepageIntroSection
