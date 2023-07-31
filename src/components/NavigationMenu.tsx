import styled from 'styled-components'
import { Link } from 'gatsby'

import { deviceBreakPoints } from '../styles/global-style'

import SimpleLink from './SimpleLink'
import LogoText from '../images/svgs/logo-text.svg'
import GitHubIcon from '../images/svgs/brand-icon-github.svg'
import SocialMediaIcon from './SocialMediaIcon'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import HeroLogo from './Hero/HeroLogo'

import { RiMenu3Fill } from 'react-icons/ri'
import useOnClickOutside from '../hooks/useOnClickOutside'

interface NavigationMenuProps {
  className?: string
}

const detachScrollValue = 150

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
        transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      >
        <div className="nav-item">
          <LinkStyled to="/" title="Go to homepage">
            <HeroLogoContainer>
              <HeroLogoStyled gradientIndex={1} accentFill="rgba(255, 255, 255, 0.5" />
            </HeroLogoContainer>
            <LogoTextStyled />
          </LinkStyled>
        </div>
        <NavigationItems className="nav-end" />
        <MobileMenu />
      </NavigationMenuStyled>
    </NavigationWrapper>
  )
}

const NavigationItems = ({ className }: { className?: string }) => (
  <div className={className}>
    <NavLink className="nav-item" url="https://explorer.alephium.org/" newTab trackingName="main-nav:explorer-link">
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
)

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <MobileMenuStyled ref={ref}>
      <RiMenu3Fill size={20} style={{ cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)} />
      <AnimatePresence>
        {isOpen && (
          <MobileNavContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MobileNav />
          </MobileNavContainer>
        )}
      </AnimatePresence>
    </MobileMenuStyled>
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

  @media ${deviceBreakPoints.mobile} {
    padding-right: 30px;
    padding-left: 30px;
  }
`

const NavigationMenuStyled = styled(motion.div)`
  width: calc(var(--page-width) - 100px);
  display: flex;
  justify-content: space-between;
  font-weight: var(--fontWeight-medium);
  z-index: 1;
  backdrop-filter: blur(24px);
  padding: 0 16px 0 12px;
  height: 62px;
  border-radius: 200px;
  box-shadow: 0px 5px 60px rgba(0, 0, 0, 0.5);

  .nav-end {
    display: flex;
    margin-left: var(--spacing-3);
    gap: var(--spacing-5);
    align-items: center;

    & > :last-child {
      margin-top: 5px; // Github button
    }

    @media ${deviceBreakPoints.mobile} {
      display: none;
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
  align-items: center;
  gap: 15px;
`

const LogoTextStyled = styled(LogoText)`
  height: 26px;
  fill: ${({ theme }) => theme.textPrimary};
  width: auto;
  transform: translateY(2px);
`

const HeroLogoContainer = styled.div`
  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 40px;
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroLogoStyled = styled(HeroLogo)`
  height: 26px;
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

const MobileMenuStyled = styled.div`
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  margin-right: 12px;

  @media ${deviceBreakPoints.mobile} {
    display: flex;
  }
`

const MobileNavContainer = styled(motion.div)``

const MobileNav = styled(NavigationItems)`
  background-color: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(24px);
  min-width: 150px;
  padding: 0 15px;
  border-radius: 9px;
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 0px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);

  > * {
    position: relative;
    padding: 24px 0 !important;

    &:not(:last-child):after {
      position: absolute;
      bottom: 0px;
      right: 0;
      content: '';
      height: 2px;
      width: 20px;
      background-color: ${({ theme }) => theme.textTertiary};
    }
  }
`
