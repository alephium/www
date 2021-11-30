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

let NavigationMenu: FC<NavigationMenuProps> = ({ className }) => (
  <div className={className}>
    <div className="nav-start">
      <div className="nav-item">
        <Link to="/">
          <LogoTextStyled />
        </Link>
      </div>
    </div>
    <div className="nav-end">
      <ArrowedLink className="nav-item" url="https://explorer.alephium.org/" newTab altColor>
        Block explorer
      </ArrowedLink>
      <ArrowedLink className="nav-item" url="https://github.com/alephium" IconComponent={GitHubIcon} newTab altColor>
        See the code
      </ArrowedLink>
    </div>
  </div>
)

NavigationMenu = styled(NavigationMenu)`
  display: flex;
  justify-content: space-between;

  .nav-start .nav-item {
    font-weight: var(--fontWeight-semiBold);
    font-size: var(--fontSize-24);
  }

  .nav-end {
    display: flex;
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

    @media ${deviceBreakPoints.smallMobile} {
      padding: var(--spacing-2) 0;
    }
  }
`

const LogoTextStyled = styled(LogoText)`
  height: 1.625rem;
  fill: ${({ theme }) => theme.textPrimary};
`

export default NavigationMenu
