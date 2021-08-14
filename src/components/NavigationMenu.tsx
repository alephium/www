import React, { FC } from 'react'
import styled from 'styled-components'

import ArrowedLink from './ArrowedLink'
import GitHubIcon from '../images/brand-icon-github.svg'

interface NavigationMenuProps {
  className?: string
}

let NavigationMenu: FC<NavigationMenuProps> = ({ className }) => (
  <div className={className}>
    <div className="nav-start">
      <div className="nav-item">alephium</div>
    </div>
    <div className="nav-end">
      <ArrowedLink className="nav-item" to="https://testnet.alephium.org/">
        Block explorer
      </ArrowedLink>
      <ArrowedLink className="nav-item" to="https://github.com/alephium" IconComponent={GitHubIcon}>
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
  }

  .nav-item {
    padding: var(--spacing-6) 0;

    &:not(:last-child) {
      padding-right: var(--spacing-6);
    }

    &:not(:first-child) {
      padding-left: var(--spacing-6);
    }
  }
`

export default NavigationMenu
