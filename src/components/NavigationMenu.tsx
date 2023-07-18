import styled from 'styled-components'
import { Link } from 'gatsby'

import { deviceBreakPoints } from '../styles/global-style'

import SimpleLink from './SimpleLink'
import LogoText from '../images/svgs/logo-text.svg'
import GitHubIcon from '../images/svgs/brand-icon-github.svg'
import SocialMediaIcon from './SocialMediaIcon'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

interface NavigationMenuProps {
  className?: string
}

const detachScrollValue = 70

const NavigationMenu = ({ className }: NavigationMenuProps) => {
  const { scrollY } = useScroll()
  const [isDetached, setIsDetached] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > detachScrollValue && !isDetached) {
      setIsDetached(true)
    } else if (latest <= detachScrollValue && isDetached) {
      setIsDetached(false)
    }
  })

  return (
    <NavigationWrapper>
      <NavigationMenuStyled
        className={className}
        animate={{
          y: isDetached ? 30 : 0,
          backgroundColor: isDetached ? 'rgba(30, 30, 30, 0.6)' : 'rgba(30, 30, 30, 0)'
        }}
        transition={{ damping: 500 }}
      >
        <div className="nav-item">
          <LinkStyled to="/" title="Go to homepage">
            <LogoTextStyled />
          </LinkStyled>
        </div>
        <div className="nav-end">
          <NavLink
            className="nav-item"
            url="https://explorer.alephium.org/"
            newTab
            trackingName="main-nav:explorer-link"
          >
            Explorer
          </NavLink>
          <NavLink className="nav-item" url="#wallets" trackingName="main-nav:download-wallet-link">
            Get the wallet
          </NavLink>
          <NavLink
            className="nav-item"
            url="https://docs.alephium.org/dapps/getting-started/"
            newTab
            trackingName="main-nav:build-dapp-link"
          >
            Build a dApp
          </NavLink>
          <NavLink className="nav-item" url="#community" trackingName="main-nav:community">
            Community
          </NavLink>

          <GithubButton
            name="Github"
            ImageComponent={GitHubIcon}
            url="https://github.com/alephium"
            trackingName="main-nav:github-link"
          />
        </div>
      </NavigationMenuStyled>
    </NavigationWrapper>
  )
}

export default NavigationMenu

const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`

const NavigationMenuStyled = styled(motion.div)`
  width: calc(var(--page-width) - 100px);
  display: flex;
  justify-content: space-between;
  font-weight: var(--fontWeight-medium);
  z-index: 1;
  backdrop-filter: blur(24px);
  padding: 0 20px;
  height: 62px;
  border-radius: 200px;

  .nav-end {
    display: flex;
    margin-left: var(--spacing-3);
    gap: var(--spacing-5);
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
    display: flex;
    align-items: center;
    text-align: right;

    @media ${deviceBreakPoints.smallMobile} {
      padding: var(--spacing-2) 0;
    }
  }
`

const LinkStyled = styled(Link)`
  display: flex;
`

const LogoTextStyled = styled(LogoText)`
  height: 25px;
  fill: ${({ theme }) => theme.textPrimary};
  width: auto;
  transform: translateY(2px);
`

const GithubButton = styled(SocialMediaIcon)`
  svg {
    width: 30px;
    height: 30px;
  }
`

const NavLink = styled(SimpleLink)`
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }
`
