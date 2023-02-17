import { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { deviceBreakPoints } from '../styles/global-style'

import ArrowedLink from './ArrowedLink'
import LogoText from '../images/svgs/logo-text.svg'
import GitHubButton from 'react-github-btn'

interface NavigationMenuProps {
  className?: string
}

const NavigationMenu: FC<NavigationMenuProps> = ({ className }) => (
  <div className={className}>
    <div className="nav-start">
      <div className="nav-item">
        <LinkStyled to="/" title="Go to homepage">
          <LogoTextStyled />
        </LinkStyled>
      </div>
    </div>
    <div className="nav-end">
      <ArrowedLink
        className="nav-item"
        url="https://explorer.alephium.org/"
        newTab
        altColor
        trackingName="main-nav:explorer-link"
      >
        Explorer
      </ArrowedLink>
      <ArrowedLink
        className="nav-item"
        url="https://github.com/alephium/desktop-wallet/releases/latest/"
        newTab
        altColor
        trackingName="main-nav:download-wallet-link"
      >
        Get the wallet
      </ArrowedLink>
      <ArrowedLink
        className="nav-item"
        url="https://docs.alephium.org/dapps/getting-started/"
        newTab
        altColor
        trackingName="main-nav:build-dapp-link"
      >
        Build a dApp
      </ArrowedLink>
      <GitHubButton
        href="https://github.com/alephium/alephium"
        data-color-scheme="no-preference: dark; light: light; dark: dark;"
        data-size="large"
        data-show-count="true"
        data-icon="octicon-star"
        aria-label="Star alephium on GitHub"
      >
        Github
      </GitHubButton>
    </div>
  </div>
)

const LinkStyled = styled(Link)`
  display: flex;
`

export default styled(NavigationMenu)`
  display: flex;
  justify-content: space-between;

  .nav-start .nav-item {
    font-weight: var(--fontWeight-semiBold);
    font-size: var(--fontSize-24);
  }

  .nav-end {
    display: flex;
    margin-left: var(--spacing-3);
    gap: var(--spacing-6);
    align-items: center;

    & > :last-child {
      margin-top: 5px; // Github button
    }

    @media ${deviceBreakPoints.smallMobile} {
      flex-direction: column;
      gap: 0;
      align-items: flex-end;

      & > :last-child {
        margin-top: 12px; // Github button
      }
    }
  }

  .nav-item {
    padding: var(--spacing-3) 0;
    display: flex;
    align-items: center;
    line-height: var(--lineHeight-26);
    text-align: right;

    @media ${deviceBreakPoints.smallMobile} {
      padding: var(--spacing-2) 0;
    }
  }
`

const LogoTextStyled = styled(LogoText)`
  height: 1.625rem;
  fill: ${({ theme }) => theme.textPrimary};
  width: auto;
`
