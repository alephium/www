import { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { deviceBreakPoints } from '../styles/global-style'

import ArrowedLink from './ArrowedLink'
import GitHubIcon from '../images/svgs/brand-icon-github.svg'
import LogoText from '../images/svgs/logo-text.svg'

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
        url="https://docs.alephium.org/"
        newTab
        altColor
        trackingName="main-nav:wiki-link"
      >
        Docs
      </ArrowedLink>
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
        IconComponent={() => <div style={{ paddingRight: 6 }}>👛</div>}
        trackingName="main-nav:download-wallet-link"
      >
        Get the wallet
      </ArrowedLink>
      <ArrowedLink
        className="nav-item"
        url="https://github.com/alephium"
        IconComponent={GitHubIcon}
        newTab
        altColor
        trackingName="main-nav:github-link"
      >
        See the code
      </ArrowedLink>
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

    @media ${deviceBreakPoints.smallMobile} {
      flex-direction: column;
      gap: 0;
      align-items: flex-end;
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
