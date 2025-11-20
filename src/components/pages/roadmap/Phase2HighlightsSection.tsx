import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import Button from '../../Button'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'

type HighlightCategory = {
  title: string
  items: string[]
}

const highlightCategories: HighlightCategory[] = [
  {
    title: 'Core dApp Rollout',
    items: [
      'CLMM live → expanding to order book → Perps and more',
      'Codebase fully open-sourced and audited',
      'SDK and APIs to enable integrations with/by community dApps'
    ]
  },
  {
    title: 'Alignment System',
    items: [
      'Launch ALPH staking and SDK for ecosystem composability',
      'On-chain dashboards for transparency into burns, rewards, and protocol flows',
      'DAO framework'
    ]
  },
  {
    title: 'Scaling Evolution',
    items: [
      'Ongoing R&D on scalable Proof-of-Work',
      'Block time reduction for faster confirmations',
      'Support for increasingly complex and high-throughput applications without compromising decentralization or security'
    ]
  }
]

const Phase2HighlightsSection = () => (
  <SubpageSection>
    <TextElement>
      <h2>Phase Two Highlights</h2>
      <p>
        This roadmap is a guide that will evolve with adoption and market conditions, with ongoing updates for the
        community.
      </p>
    </TextElement>

    <SubheaderContent>
      <HighlightsCard>
        {highlightCategories.map((category) => (
          <div key={category.title}>
            <TextElement>
              <CategoryTitle>{category.title}</CategoryTitle>
              <HighlightsList>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </HighlightsList>
            </TextElement>
          </div>
        ))}
        <div>
          <Button secondary squared url="/news/post/from-scalable-infrastructure-to-aligned-economics/">
            More on Phase 2
          </Button>
        </div>
      </HighlightsCard>
    </SubheaderContent>
  </SubpageSection>
)

export default Phase2HighlightsSection

const HighlightsCard = styled.div`
  position: relative;
  width: 100%;
  border-radius: var(--radius-big);
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  background: ${({ theme }) => theme.background2};
  padding: var(--spacing-4) var(--spacing-5);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-3);
  }
`

const CategoryTitle = styled.h3`
  margin-top: 0;
  margin-bottom: var(--spacing-4) !important;
  color: ${({ theme }) => theme.textPrimary};
`

const HighlightsList = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: var(--spacing-2);
  padding: 0;

  li {
    position: relative;
    padding-left: var(--spacing-3);
    margin-bottom: var(--spacing-2);
    color: ${({ theme }) => theme.textPrimaryVariation};
    line-height: 1.4;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: '—';
      color: ${({ theme }) => theme.palette2};
    }
  }
`
