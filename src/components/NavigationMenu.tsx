import styled, { css, useTheme } from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { deviceBreakPoints } from '../styles/global-style'

import SimpleLink from './SimpleLink'
import LogoText from '../images/svgs/logo-text.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useRef, useState, useEffect } from 'react'
import { RiTranslate2 } from 'react-icons/ri'

import HeroLogo from './Hero/HeroLogo'

import { RiMenu3Fill, RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import useOnClickOutside from '../hooks/useOnClickOutside'
import TranslateComponent from './TranslateComponent'
import { notEmpty } from '../utils/misc'
import NavigationMenuSocials from './navigation/NavigationMenuSocials'

interface NavigationMenuProps {
  topOffset?: number
  className?: string
}

const NavigationMenu = ({ topOffset, className }: NavigationMenuProps) => (
  <NavigationWrapper>
    <NavigationMenuStyled
      className={className}
    >
      <div className="nav-item">
        <LinkStyled to="/" title="Go to homepage">
          <LogoTextStyled />
        </LinkStyled>
      </div>
      <NavigationItems className="nav-end" />
      <MobileMenu />
    </NavigationMenuStyled>
  </NavigationWrapper>
)

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
      <NavigationDrawer Icon={<RiTranslate2 color={theme.textSecondary} size={20} />}>
        <TranslateComponent />
      </NavigationDrawer>

      {socialIcons && <NavigationMenuSocials enabledItems={socialIcons} />}
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
        <DrawerCarretWrapper>{isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</DrawerCarretWrapper>
      </DrawerTitleWrapper>
      <AnimatePresence>
        {isOpen && (
          <Drawer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {children}
          </Drawer>
        )}
      </AnimatePresence>
    </DrawerWrapper>
  )
}

export default NavigationMenu

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

const NavigationWrapper = styled.div`
  position: fixed;
  top: 30px;
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

const NavigationMenuStyled = styled.div`
  width: var(--page-width);
  display: flex;
  justify-content: center;
  font-weight: var(--fontWeight-medium);
  z-index: 1;
  backdrop-filter: blur(100px);
  padding: 0 30px;
  height: 62px;
  border-radius: 200px;

  .nav-end {
    display: flex;
    margin-left: var(--spacing-3);
    gap: var(--spacing-5);
    align-items: center;
    justify-content: center;
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
  gap: 20px;
  justify-content: center;
  display: flex;
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
  flex: 1;

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
  min-width: 250px;
  background-color: rgba(30, 30, 30, 1);
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

const DrawerItem = styled.div<{ isLink: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;

  > * {
    padding: 12px 18px;
    width: 100%;
  }

  ${({ isLink }) =>
    !isLink &&
    css`
      &:not(:first-child) {
        border-top: 1px solid ${({ theme }) => theme.borderPrimary};
      }
    `}
`

const DrawerItemTitle = styled.div`
  text-transform: uppercase;
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textTertiary};
  padding-top: 24px;
`
