import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { ReactNode, useMemo } from 'react'
import { useTheme } from 'styled-components'

import BentoLayout, { BentoItem } from '../../BentoLayout'
import Card from '../../Card'
import CardImage from '../../customPageComponents/CardImage'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextCard from '../../customPageComponents/TextCard'
import TextCardContent from '../../customPageComponents/TextCardContent'
import TextElement from '../../customPageComponents/TextElement'
import GradientText from '../../GradientText'

export const homepageIntroQuery = graphql`
  query HomepageIntro {
    treasureImage: file(relativePath: { eq: "treasure.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100)
      }
    }
    mineImage: file(relativePath: { eq: "mine.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, transformOptions: { cropFocus: ENTROPY })
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
  const { treasureImage, stream, greenWater, mineImage } =
    useStaticQuery<Queries.HomepageIntroQuery>(homepageIntroQuery)

  const cardsData = useMemo<Card[]>(
    () => [
      {
        title: 'Wallets',
        description: (
          <>
            Get one of the <strong>user-friendly Alephium wallets.</strong>
          </>
        ),
        actionText: 'Wallets',
        image: treasureImage?.childImageSharp?.gatsbyImageData,
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
          url: 'https://github.com/alephium/community/blob/master/Grant%26RewardProgram.md'
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
        image: mineImage?.childImageSharp?.gatsbyImageData,
        link: {
          url: 'https://docs.alephium.org/mining'
        },
        color: theme.textPrimary
      }
    ],
    [
      treasureImage?.childImageSharp?.gatsbyImageData,
      theme.textPrimary,
      stream?.childImageSharp?.gatsbyImageData,
      greenWater?.childImageSharp?.gatsbyImageData,
      mineImage?.childImageSharp?.gatsbyImageData
    ]
  )

  return (
    <SubpageSection id="intro" overflow="visible">
      <TextElement>
        <h2>Quick start</h2>
        <p>Dive into the Alephium ecosystem 🐠</p>
      </TextElement>
      <SubheaderContent>
        <BentoLayout columns={4} animateItems={true}>
          <BentoItem colSpan={2} rowSpan={2}>
            <TextCard url={cardsData[0].link.url} border>
              <CardImage image={cardsData[0].image} />
              <TextCardContent>
                <TextElement>
                  <h4 style={{ color: cardsData[0].color }}>{cardsData[0].title}</h4>
                  <p>{cardsData[0].description}</p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </BentoItem>
          <BentoItem colSpan={1} rowSpan={1}>
            <TextCard url={cardsData[1].link.url} border>
              <TextCardContent>
                <TextElement>
                  <h4>
                    <GradientText>{cardsData[1].title}</GradientText>
                  </h4>
                  <p>{cardsData[1].description}</p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </BentoItem>
          <BentoItem colSpan={1} rowSpan={2}>
            <TextCard url={cardsData[3].link.url} border>
              <CardImage image={cardsData[3].image} zoom={{ scale: 1.5, x: 70, y: 30 }} />
              <TextCardContent>
                <TextElement>
                  <h4 style={{ color: cardsData[3].color }}>{cardsData[3].title}</h4>
                  <p>{cardsData[3].description}</p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </BentoItem>
          <BentoItem colSpan={1} rowSpan={1}>
            <TextCard url={cardsData[2].link.url} border>
              <TextCardContent>
                <TextElement>
                  <h4 style={{ color: cardsData[2].color }}>{cardsData[2].title}</h4>
                  <p>{cardsData[2].description}</p>
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
