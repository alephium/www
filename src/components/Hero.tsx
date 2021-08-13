import React, { FC } from 'react'
import styled from 'styled-components'

import PageSection from './PageSection'
import NavigationMenu from './NavigationMenu'
import Logo from '../images/logo.svg'

interface HeroProps {
  className?: string
}

let Hero: FC<HeroProps> = ({ className }) => {
  return (
    <PageSection className={className}>
      <div className="navigation-menu-wrapper">
        <NavigationMenu />
      </div>
      <div className="contents">
        <div>
          <Logo className="logo" />
          <h1>Blockchain v3.0</h1>
          <div className="subtitle">
            Alephium is the first operational sharded blockchain bringing versatility, scalability, and energy
            efficiency to Bitcoin's proven core technologies, while offering much better performances and secure P2P
            smart contracts.
          </div>
        </div>
      </div>
    </PageSection>
  )
}

Hero = styled(Hero)`
  height: 100vh;

  .navigation-menu-wrapper {
    position: relative;
  }

  h1 {
    font-size: var(--fontSize-7);
  }

  .contents {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logo {
    width: 6rem;
  }

  .subtitle {
    max-width: var(--maxWidth-xl);
    color: var(--color-text-grey-light-1);
    line-height: var(--lineHeight-relaxed);
  }
`

export default Hero
