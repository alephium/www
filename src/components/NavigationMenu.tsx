import styled, { css, useTheme } from 'styled-components'
import { Link } from 'gatsby'

import { deviceBreakPoints } from '../styles/global-style'

import SimpleLink from './SimpleLink'
import LogoText from '../images/svgs/logo-text.svg'
import GitHubIcon from '../images/svgs/brand-icon-github.svg'
import SocialMediaIcon from './SocialMediaIcon'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'
import { RiTranslate2 } from 'react-icons/ri'

import HeroLogo from './Hero/HeroLogo'

import { RiMenu3Fill, RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import useOnClickOutside from '../hooks/useOnClickOutside'
import TranslateComponent from './TranslateComponent'

interface NavigationMenuProps {
  topOffset?: number
  className?: string
}

const detachScrollValue = 65

const NavigationMenu = ({ topOffset, className }: NavigationMenuProps) => {
  const { scrollY } = useScroll()
  const [isDetached, setIsDetached] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > detachScrollValue && !isDetached) {
      setIsDetached(true)
    } else if (latest <= detachScrollValue && isDetached) {
      setIsDetached(false)
    }
  })

  const initialTop = topOffset || 0

  return (
    <NavigationWrapper>
      <NavigationMenuStyled
        className={className}
        animate={{
          y: isDetached ? 30 : initialTop,
          backgroundColor: isDetached ? 'rgba(30, 30, 30, 0.6)' : 'rgba(30, 30, 30, 0)',
          boxShadow: isDetached ? '0px 5px 60px rgba(0, 0, 0, 0.5)' : 'none'
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

const NavigationItems = ({ className }: { className?: string }) => {
  const theme = useTheme()

  return (
    <div className={className}>
      <NavigationDrawer
        title="Essentials"
        items={[
          { title: 'Wallets', url: '#wallets' },
          { title: 'Bridge', url: 'https://bridge.alephium.org/', isNew: true, isExternal: true },
          { title: 'Explorer', url: 'https://explorer.alephium.org/', isExternal: true }
        ]}
      />
      <NavLink className="nav-item" url="#ecosystem" trackingName="main-nav:Ecosystem">
        Ecosystem
      </NavLink>
      <NavLink className="nav-item" url="#community" trackingName="main-nav:community">
        Community
      </NavLink>
      <NavLink
        className="nav-item"
        url="https://docs.alephium.org/dapps/"
        newTab
        trackingName="main-nav:build-dapp-link"
      >
        Build a dApp
      </NavLink>
      <NavigationDrawer
        Icon={<RiTranslate2 color={theme.textSecondary} size={20} />}
        Content={<TranslateComponent />}
      />

      <GithubButton
        name="Github"
        ImageComponent={GitHubIcon}
        url="https://github.com/alephium"
        trackingName="main-nav:github-link"
      />
    </div>
  )
}

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

interface NavigationDrawerProps {
  title?: string
  Icon?: ReactNode
  items?: { title: string; url: string; isNew?: boolean; isExternal?: boolean }[]
  Content?: ReactNode
  className?: string
}

const NavigationDrawer = ({ title, Icon, items, Content, className }: NavigationDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setIsOpen(false))

  const handleTitleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DrawerWrapper className={className} ref={ref}>
      <DrawerTitleWrapper onClick={handleTitleClick}>
        {items && items.findIndex((i) => i.isNew) !== -1 && (
          <NewItemBubble>
            <NewItemBubbleEcho
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
            />
          </NewItemBubble>
        )}
        {title ? <DrawerTitle>{title}</DrawerTitle> : Icon ? Icon : null}
        <DrawerCarretWrapper>{isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</DrawerCarretWrapper>
      </DrawerTitleWrapper>
      <AnimatePresence>
        {isOpen && (
          <Drawer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {items
              ? items.map((item, index) => (
                  <DrawerItem key={item.title}>
                    <NavLink key={index} url={item.url} text={item.title} newTab={item.isExternal} />
                    {item.isNew && <NewBubble>New</NewBubble>}
                  </DrawerItem>
                ))
              : Content || null}
          </Drawer>
        )}
      </AnimatePresence>
    </DrawerWrapper>
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

  @media ${deviceBreakPoints.ipad} {
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

  .nav-end {
    display: flex;
    margin-left: var(--spacing-3);
    gap: var(--spacing-5);
    align-items: center;

    & > :last-child {
      margin-top: 5px; // Github button
    }

    @media ${deviceBreakPoints.ipad} {
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

const LinkStyle = css`
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }
`

const NavLink = styled(SimpleLink)`
  ${LinkStyle};
`

const MobileMenuStyled = styled.div`
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  margin-right: 12px;

  @media ${deviceBreakPoints.ipad} {
    display: flex;
  }
`

const MobileNavContainer = styled(motion.div)``

const MobileNav = styled(NavigationItems)`
  background-color: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(24px);
  min-width: 150px;
  border-radius: 20px;
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  right: 0px;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.9);

  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 18px 12px !important;

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
    }
  }
`

const DrawerCarretWrapper = styled.div`
  height: 100%;
  width: 22px;
  display: flex;
  > * {
    width: 100%;
    height: 100%;
    ${LinkStyle};
  }
`

const DrawerTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    cursor: pointer;

    * {
      color: ${({ theme }) => theme.textPrimary};
    }
  }
`

const NewItemBubble = styled.span`
  position: relative;
  background-color: ${({ theme }) => theme.palette1};
  height: 8px;
  width: 8px;
  margin-right: 8px;
  margin-top: 2px;
  border-radius: 50%;
`

const NewItemBubbleEcho = styled(motion.div)`
  scale: 1;
  position: absolute;
  background-color: ${({ theme }) => theme.palette1};
  height: 8px;
  width: 8px;
  border-radius: 50%;
`

const DrawerWrapper = styled.div`
  position: relative;
`

const DrawerTitle = styled.span`
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textSecondary};
`

const Drawer = styled(motion.div)`
  position: absolute;
  top: calc(100% + 30px);
  left: -50%;
  right: 0;
  min-width: 200px;
  background-color: rgba(30, 30, 30, 0.8);
  border-radius: 20px;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  backdrop-filter: blur(24px);

  @media ${deviceBreakPoints.ipad} {
    top: 100%;
    min-width: 140px;
  }
`

const NewBubble = styled.div`
  padding: 3px 6px;
  color: white;
  background-color: ${({ theme }) => theme.palette1};
  border-radius: 20px;
  font-size: var(--fontSize-14);
`

const DrawerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
  }
`
