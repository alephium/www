import React, { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import ArrowedLink from './ArrowedLink'
import GitHubIcon from '../images/svgs/brand-icon-github.svg'

interface NavigationMenuProps {
  className?: string
}

let NavigationMenu: FC<NavigationMenuProps> = ({ className }) => (
  <div className={className}>
    <div className="nav-start">
      <div className="nav-item">alephium</div>
    </div>
    <div className="nav-end">
      <ArrowedLink className="nav-item" to="https://testnet.alephium.org/" newTab>
        Block explorer
      </ArrowedLink>
      <ArrowedLink className="nav-item" to="https://github.com/alephium" IconComponent={GitHubIcon} newTab>
        See the code
      </ArrowedLink>
    </div>
  </div>
)

NavigationMenu = styled(NavigationMenu)`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  .nav-start .nav-item {
    font-weight: var(--fontWeight-bold);
    font-size: var(--fontSize-2);
  }

  .nav-end {
    display: flex;
    gap: var(--spacing-12);

    @media ${deviceBreakPoints.smallMobile} {
      flex-direction: column;
      gap: 0;
      align-items: flex-end;
    }
  }

  .nav-item {
    padding: var(--spacing-6) 0;
  }
`

export default NavigationMenu
