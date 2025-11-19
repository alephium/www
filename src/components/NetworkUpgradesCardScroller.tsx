import { useTheme } from 'styled-components'

import Badge from './Badge'
import Button from './Button'
import Card from './Card'
import CardText from './CardText'
import CardFooterButtonContainer from './common/CardFooterButtonContainer'
import CardsHorizontalScroller from './common/CardsHorizontalScroller'

const NetworkUpgradesCardScroller = () => {
  const theme = useTheme()

  return (
    <CardsHorizontalScroller cardWidth={380} cardGap={24} animateCards>
      <Card border>
        <CardText>
          <h3 style={{ color: theme.palette1, paddingRight: 0, alignItems: 'center', display: 'flex' }}>
            Leman<Badge color="palette1">March 30, 2023</Badge>
          </h3>
          <p>
            Leman, the first post-mainnet upgrade, refined Alephium&apos;s developer stack, enabling dApp creation with
            enhanced smart contracts, a stronger VM, and improved APIs, laying the groundwork for our builder ecosystem.
          </p>
        </CardText>
        <CardFooterButtonContainer>
          <Button squared secondary url="/news/post/the-leman-network-upgrade-is-live-f52c89b7dd6a">
            More on Leman upgrade
          </Button>
        </CardFooterButtonContainer>
      </Card>
      <Card border>
        <CardText>
          <h3 style={{ color: theme.palette5, paddingRight: 0, alignItems: 'center', display: 'flex' }}>
            Rhone<Badge color="palette5">Jun 12, 2024</Badge>
          </h3>
          <p>
            Then came Rhone, our first big leap forward. Block times dropped from 64 to 16 seconds, smart contracts got
            more powerful, and dApp performance improved across the board. Rhone was about making Alephium stronger,
            faster, and ready to compete with the best L1s in the space.
          </p>
        </CardText>
        <CardFooterButtonContainer>
          <Button squared secondary url="/news/post/rh-ne-network-upgrade-activated-cbeb298585fe">
            More on Rhone upgrade
          </Button>
        </CardFooterButtonContainer>
      </Card>
      <Card border>
        <CardText>
          <h3 style={{ color: theme.palette2, paddingRight: 0, alignItems: 'center', display: 'flex' }}>
            Danube<Badge color="palette2">Jul 15, 2025</Badge>
          </h3>
          <p>
            Danube marks a shift, this is where the vision of Web3 starts to feel real. Where onboarding doesn&apos;t
            require a technical manual. Where developers aren&apos;t boxed in by protocol constraints. Danube brings the
            features, UX, and dev experience that many other chains talk about - but few deliver.
          </p>
        </CardText>
        <CardFooterButtonContainer>
          <Button squared secondary url="https://x.com/alephium/status/1920780688313233634">
            More on Danube upgrade
          </Button>
        </CardFooterButtonContainer>
      </Card>
      {/*<Card border>
        <CardText>
          <h3 style={{ alignItems: 'center', display: 'flex' }}>Phase 2</h3>
          <p>
            We continue to build. The next upgrade of the Danube era will focus on strengthening Alephium&apos;s core -
            enhancing performance, expanding smart contract capabilities, and setting the stage for high-impact apps
            that showcase the true utility of ALPH.
          </p>
        </CardText>
      </Card>*/}
    </CardsHorizontalScroller>
  )
}

export default NetworkUpgradesCardScroller
