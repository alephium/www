import React, { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import PageSectionContainer from './PageSectionContainer'
import NavigationMenu from './NavigationMenu'
import TextSnippet from './TextSnippet'

import Logo from '../images/svgs/logo.svg'
import NetworkImage from '../images/svgs/network.svg'

interface PageSectionHeroProps {
  className?: string
}

let PageSectionHero: FC<PageSectionHeroProps> = ({ className }) => {
  return (
    <section className={className}>
      <PageSectionContainer>
        <div className="navigation-menu-wrapper">
          <NavigationMenu />
        </div>
        <div className="contents">
          <div>
            <Logo className="logo" />
            <h1>Blockchain v3.0</h1>
            <TextSnippetStyled bigText>
              Alephium is the first operational sharded blockchain bringing versatility, scalability, and energy
              efficiency to Bitcoin's proven core technologies, while offering much better performances and secure P2P
              smart contracts.
            </TextSnippetStyled>
          </div>
        </div>
      </PageSectionContainer>
      <NetworkImage className="network-image" />
    </section>
  )
}

PageSectionHero = styled(PageSectionHero)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  .navigation-menu-wrapper {
    position: relative;
  }

  h1 {
    font-size: var(--fontSize-70);

    @media ${deviceBreakPoints.smallMobile} {
      font-size: var(--fontSize-50);
    }
  }

  .contents {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logo {
    width: 6rem;

    @media ${deviceBreakPoints.smallMobile} {
      width: 3rem;
    }
  }

  .network-image {
    position: absolute;
    top: -60px;
    right: -85px;
    width: auto;
    z-index: -1;

    @media ${deviceBreakPoints.mobile} {
      top: -160px;
      width: 50rem;
    }

    @media ${deviceBreakPoints.smallMobile} {
      display: none;
    }
  }
`

const TextSnippetStyled = styled(TextSnippet)`
  max-width: var(--maxWidth-xl);
  color: var(--color-text-grey-light-1);
`

export default PageSectionHero
