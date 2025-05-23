import { AnimatePresence, motion } from 'framer-motion'
import { graphql, Link, useStaticQuery } from 'gatsby'
import throttle from 'lodash/throttle'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { RiTranslate2 } from 'react-icons/ri'
import { RiMenu3Fill } from 'react-icons/ri'
import styled, { css, useTheme } from 'styled-components'

import useOnClickOutside from '../hooks/useOnClickOutside'
import LogoText from '../images/svgs/logo-text.svg'
import { deviceBreakPoints } from '../styles/global-style'
import { notEmpty } from '../utils/misc'
import NavigationMenuSocials from './navigation/NavigationMenuSocials'
import MobileNavigationMenu, { ToggleMobileNavButton } from './NavigationMenuMobile'
import SimpleLink from './SimpleLink'
import TranslateComponent from './TranslateComponent'

interface NavigationMenuProps {
  floating?: boolean
  className?: string
}

const NavigationMenu = ({ className, floating = true }: NavigationMenuProps) => {
  const lastScrollY = useRef(0)
  const scrollThreshold = useRef(0)

  const [isHidden, setIsHidden] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 100)

      const scrollDelta = currentScrollY - lastScrollY.current

      if (currentScrollY < 10 || currentScrollY < lastScrollY.current) {
        setIsHidden(false)
        scrollThreshold.current = 0
      } else if (scrollDelta > 0) {
        if (scrollThreshold.current > 50) {
          setIsHidden(true)
        }
        scrollThreshold.current += scrollDelta
      }

      lastScrollY.current = currentScrollY
    }, 50)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <NavigationWrapper isHidden={isHidden} floating={floating} scrolled={scrolled}>
        <NavigationMenuStyled className={className}>
          <div className="nav-item">
            <LinkStyled to="/" title="Go to homepage">
              <LogoTextStyled />
            </LinkStyled>
          </div>
          <NavigationItems className="nav-end" />
          <ToggleMobileNavButton onClick={() => setIsMobileNavOpen(true)} Icon={RiMenu3Fill} />
        </NavigationMenuStyled>
      </NavigationWrapper>
      <AnimatePresence>
        {isMobileNavOpen && <MobileNavigationMenu onCloseClick={() => setIsMobileNavOpen(false)} />}
      </AnimatePresence>
      <NavigationTopSpacing />
    </>
  )
}

export default NavigationMenu

const NavigationTopSpacing = styled.div`
  width: 100%;
  height: max(8vh, 70px);
`

const NavigationItems = ({ className }: { className?: string }) => {
  const theme = useTheme()
  const data = useStaticQuery<Queries.NavigationMenuQuery>(navigationMenuQuery)

  const menuItems = data.navmenu.nodes[0]?.frontmatter?.menuItems?.filter(notEmpty)
  const socialIcons = data.navmenu.nodes[0]?.frontmatter?.socialIcons?.filter(notEmpty)

  return (
    <div className={className}>
      <MenuItems>
        {menuItems?.map(
          ({ title, items }) =>
            title &&
            items && (
              <NavigationDrawer key={title} title={title}>
                {items.map(
                  (item, index) =>
                    item &&
                    item.title && (
                      <DrawerItem key={item.title} isLink={!!item.link}>
                        {item.link ? (
                          <NavLink key={index} url={item.link} text={item.title} />
                        ) : (
                          <DrawerItemTitle key={index}>{item.title}</DrawerItemTitle>
                        )}
                      </DrawerItem>
                    )
                )}
              </NavigationDrawer>
            )
        )}
      </MenuItems>
      {/*<ThemeToggle />*/}
      <NavigationDrawer Icon={<RiTranslate2 color={theme.textSecondary} size={20} />}>
        <TranslateComponent />
      </NavigationDrawer>

      {socialIcons && <NavigationMenuSocials enabledItems={socialIcons} />}
    </div>
  )
}

interface NavigationDrawerProps {
  title?: string
  Icon?: ReactNode
  children?: ReactNode
  className?: string
}

const NavigationDrawer = ({ title, Icon, className, children }: NavigationDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setIsOpen(false))

  const handleTitleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DrawerWrapper className={className} ref={ref}>
      <DrawerTitleWrapper onClick={handleTitleClick}>
        {title ? <DrawerTitle>{title}</DrawerTitle> : Icon ? Icon : null}
      </DrawerTitleWrapper>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Drawer>{children}</Drawer>
          </motion.div>
        )}
      </AnimatePresence>
    </DrawerWrapper>
  )
}

export const navigationMenuQuery = graphql`
  query NavigationMenu {
    navmenu: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/navigation-menu.md/" } }) {
      nodes {
        frontmatter {
          menuItems {
            title
            items {
              title
              link
            }
          }
          socialIcons
        }
      }
    }
  }
`

const NavigationWrapper = styled.div<{ isHidden: boolean; floating: boolean; scrolled: boolean }>`
  position: fixed;
  top: ${({ isHidden }) => (isHidden ? '-100px' : 0)};
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  z-index: 10000;
  transition: top 0.3s ease-in-out;
  backdrop-filter: blur(100px) brightness(${({ scrolled }) => (scrolled ? '30%' : '100%')});
  border-bottom: 1px solid ${({ theme, scrolled }) => (scrolled ? theme.borderPrimary : 'transparent')};

  ${({ floating }) =>
    !floating &&
    css`
      position: absolute;
    `}

  @media ${deviceBreakPoints.ipad} {
    padding-right: 30px;
    padding-left: 30px;
  }
`

const NavigationMenuStyled = styled.div`
  width: var(--page-width);
  display: flex;
  font-weight: var(--fontWeight-medium);
  z-index: 1;
  padding: 0 30px;

  .nav-end {
    display: flex;
    margin-left: var(--spacing-3);
    gap: var(--spacing-5);
    align-items: center;
    flex: 1;

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

const MenuItems = styled.div`
  flex: 1;
  gap: var(--spacing-4);
  display: flex;
  margin-left: var(--spacing-6);
  padding-top: 4px;
`

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
`

const LogoTextStyled = styled(LogoText)`
  height: 24px;
  fill: ${({ theme }) => theme.textPrimary};
  width: auto;
  transform: translateY(2px);
`

const LinkStyle = css`
  font-size: var(--fontSize-16);
  font-weight: var(--fontWeight-medium);
  color: ${({ theme }) => theme.textPrimaryVariation};
`

const NavLink = styled(SimpleLink)`
  ${LinkStyle};
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

const DrawerWrapper = styled.div`
  position: relative;
`

const DrawerTitle = styled.span`
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textPrimaryVariation};
`

const Drawer = styled(motion.div)`
  position: absolute;
  top: calc(100% + 20px);
  left: -50%;
  right: 0;
  min-width: 250px;
  background-color: ${({ theme }) => theme.background1};
  border-radius: var(--radius-small);
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  backdrop-filter: blur(24px);
  padding-bottom: 8px;

  @media ${deviceBreakPoints.ipad} {
    top: 100%;
    min-width: 140px;
  }
`

const DrawerItem = styled.div<{ isLink: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;

  > * {
    padding: 12px 18px;
    width: 100%;
  }
`

const DrawerItemTitle = styled.div`
  text-transform: uppercase;
  font-size: var(--fontSize-14);
  color: ${({ theme }) => theme.textTertiary};
  padding-top: 20px;
`
