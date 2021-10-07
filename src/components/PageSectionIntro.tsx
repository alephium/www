import { FC } from 'react'
import styled from 'styled-components'

import HookImage from '../images/svgs/hook.svg'
// import WalletImage from '../images/svgs/wallet.svg'
import CodeImage from '../images/svgs/code.svg'
import MiningImage from '../images/svgs/mining.svg'

import PageSectionContainer from './PageSectionContainer'
import CardEngagement from './CardEngagement'
// import Feed from './Feed'
import Column from './Column'
import Columns from './Columns'
import SectionTextHeader from './SectionTextHeader'
import { ArrowedLinkProps } from './ArrowedLink'

import { deviceBreakPoints } from '../styles/global-style'

export interface PageSectionIntroContentType {
  title: string
  subtitle: string
  cards: {
    title: string
    description: string
    link: ArrowedLinkProps
  }[]
}

interface PageSectionIntroProps {
  className?: string
  content: PageSectionIntroContentType
}

let PageSectionIntro: FC<PageSectionIntroProps> = ({ className, content }) => {
  const cards = content.cards.map((card, index) => ({
    ...card,
    image: index === 0 ? MiningImageStyled : index === 1 ? CodeImageStyled : HookImageStyled
  }))

  return (
    <section className={className} id="intro">
      <PageSectionContainer>
        <IntroColumns gap="var(--spacing-32)">
          <Column>
            <SectionTextHeader title={content.title} subtitle={content.subtitle} />
            <IntroColumnContent>
              {cards.map((card) => (
                <CardEngagement title={card.title} link={card.link} ImageComponent={card.image} key={card.title}>
                  <p>{card.description}</p>
                </CardEngagement>
              ))}
            </IntroColumnContent>
          </Column>
          {/* <Column>
          <SectionTextHeader title="Feed" subtitle="What's cooking?" />
          <IntroColumnContent>
            <Feed />
          </IntroColumnContent>
        </Column> */}
        </IntroColumns>
      </PageSectionContainer>
    </section>
  )
}

const IntroColumns = styled(Columns)`
  @media (max-width: 1352px) {
    gap: var(--spacing-20);
  }

  @media (max-width: 1096px) {
    gap: var(--spacing-10);
  }
`

const IntroColumnContent = styled.div`
  margin-top: var(--spacing-6);
  display: flex;
  gap: var(--spacing-2);

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
  }
`

PageSectionIntro = styled(PageSectionIntro)`
  padding: var(--spacing-16) 0 var(--spacing-28);
`

const MiningImageStyled = styled(MiningImage)`
  width: 10rem;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
`

// To be used once we want to show a wallet card in the intro section
// const WalletImageStyled = styled(WalletImage)`
//   width: 4.5rem;
//   height: auto;
//   position: absolute;
//   top: -0.5rem;
//   left: 0;
// `

const CodeImageStyled = styled(CodeImage)`
  width: 5.2rem;
  height: auto;
  position: absolute;
  top: var(--spacing-4);
  left: 0;
`

const HookImageStyled = styled(HookImage)`
  width: 5rem;
  height: auto;
  position: absolute;
  top: -4px;
  left: 0;
`

export default PageSectionIntro
