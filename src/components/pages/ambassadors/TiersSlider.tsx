import { colord } from 'colord'
import styled from 'styled-components'
import AmbassadorsSectionContainer from './AmbassadorsSectionContainer'
import { H3, Paragraph } from './Texts'

interface TierContent {
  title: string
  tasks: string
  targets: string
}

const communityTiers: TierContent[] = [
  {
    title: 'Community Animator',
    tasks:
      'Participate in the community by directing other community members with questions to our FAQ like and share our posts, promoting Alephium on social media and other groups.',
    targets:
      'Regular Engagement. Guide other community members by answering known questions and escalating when necessary; i.e tagging the right person to answer it.'
  }
]

const TiersSlider = () => (
  <SliderContainer>
    <AmbassadorsSectionContainer>
      <SlidingContent>
        <CategoryCard title="Community" color="#b072c5" content={communityTiers} />
        <CategoryCard title="Content" color="#55ae7a" content={communityTiers} />
        <CategoryCard title="Outreach" color="#da8772" content={communityTiers} />
      </SlidingContent>
    </AmbassadorsSectionContainer>
  </SliderContainer>
)

interface CardProps {
  title: string
  color: string
  content: TierContent[]
}

const CategoryCard = ({ title, color, content }: CardProps) => (
  <CategoryCardStyled
    style={{
      backgroundColor: colord(color).alpha(0.2).toHex(),
      boxShadow: `0 10px 10px ${colord(color).alpha(0.1).toHex()}`
    }}
  >
    <H3>{title}</H3>
    <TierContent content={content} color={color} />
  </CategoryCardStyled>
)

const TierContent = ({ content, color }: Omit<CardProps, 'title'>) => (
  <>
    {content.map((c, i) => (
      <>
        <TierContentLabel style={{ color }}>TIER {i + 1}</TierContentLabel>
        <TierTitle style={{ color }}>{c.title}</TierTitle>
        <Paragraph>{c.tasks}</Paragraph>
      </>
    ))}
  </>
)

export default TiersSlider

const SliderContainer = styled.div`
  overflow: auto;
  width: 100%;
  padding-bottom: var(--spacing-4);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`

const SlidingContent = styled.div`
  flex: 1;
  display: flex;
  gap: var(--spacing-4);
`

const CategoryCardStyled = styled.div`
  flex: 1;
  padding: var(--spacing-2);

  width: 20vw;
  min-width: 300px;
`

const TierContentLabel = styled.label`
  font-size: 13px;
  opacity: 0.7;
  font-weight: 600;
  margin: 0;
`

const TierTitle = styled.h4`
  font-size: 19px;
  font-weight: 500;
  margin: 0;
`
