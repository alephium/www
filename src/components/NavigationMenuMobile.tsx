import { AnimatePresence, motion } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import { ReactNode, useState } from 'react'
import { IconType } from 'react-icons'
import { RiTranslate2 } from 'react-icons/ri'
import { RiArrowDropDownLine, RiArrowDropUpLine, RiCloseLine } from 'react-icons/ri'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import { notEmpty } from '../utils/misc'
import NavigationMenuSocials from './navigation/NavigationMenuSocials'
import SimpleLink from './SimpleLink'
import TranslateComponent from './TranslateComponent'

interface MobileNavigationMenuProps {
  onCloseClick: () => void
}

const MobileNavigationMenu = ({ onCloseClick }: MobileNavigationMenuProps) => {
  const data = useStaticQuery<Queries.NavigationMenuQuery>(navigationMenuQuery)
  const menuItems = data.navmenu.nodes[0]?.frontmatter?.menuItems?.filter(notEmpty)
  const socialIcons = data.navmenu.nodes[0]?.frontmatter?.socialIcons?.filter(notEmpty)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggleItem = (title: string) => {
    setExpandedItem((prev) => (prev === title ? null : title))
  }

  return (
    <MobileNavigationMenuStyled initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <NavigationWrapper isHidden={false} floating={false}>
        <NavigationMenuStyled>
          <ToggleMobileNavButton onClick={onCloseClick} Icon={RiCloseLine} />
        </NavigationMenuStyled>
      </NavigationWrapper>

      <MobileMenuItems>
        {menuItems?.map(
          ({ title, items }) =>
            title && (
              <MobileMenuExpandableItem
                key={title}
                title={title}
                onItemToggle={toggleItem}
                isExpanded={expandedItem === title}
              >
                {items?.map(
                  (item) =>
                    item?.title && (
                      <MobileSubItem key={item.title}>
                        {item?.link ? (
                          <NavLink url={item.link} text={item.title} />
                        ) : (
                          <MobileSubItemTitle>{item.title}</MobileSubItemTitle>
                        )}
                      </MobileSubItem>
                    )
                )}
              </MobileMenuExpandableItem>
            )
        )}

        <MobileMenuExpandableItem title="translate" onItemToggle={toggleItem} isExpanded={expandedItem === 'translate'}>
          <TranslateComponent />
        </MobileMenuExpandableItem>

        {socialIcons && (
          <MobileMenuItem>
            <NavigationMenuSocials enabledItems={socialIcons} />
          </MobileMenuItem>
        )}
      </MobileMenuItems>
    </MobileNavigationMenuStyled>
  )
}

export default MobileNavigationMenu

const MobileNavigationMenuStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background1};
  z-index: 10000; // Terrible way to do this, but it would require a lot of rework on all other places that use z-index
  overflow: auto;
`

interface MobileMenuExpandableItemProps {
  title: string
  children: ReactNode
  onItemToggle: (title: string) => void
  isExpanded?: boolean
}

const MobileMenuExpandableItem = ({
  title,
  children,
  onItemToggle,
  isExpanded = false
}: MobileMenuExpandableItemProps) => {
  const theme = useTheme()

  return (
    <MobileMenuItem>
      <MobileMenuItemTitle onClick={() => onItemToggle(title)}>
        {title === 'translate' ? <RiTranslate2 color={theme.textSecondary} size={20} /> : title}
        <MobileMenuItemArrow>{isExpanded ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</MobileMenuItemArrow>
      </MobileMenuItemTitle>
      <AnimatePresence>
        {isExpanded && (
          <MobileSubItems
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </MobileSubItems>
        )}
      </AnimatePresence>
    </MobileMenuItem>
  )
}

interface ToggleMobileNavButtonProps {
  onClick: () => void
  Icon: IconType
}

export const ToggleMobileNavButton = ({ onClick, Icon }: ToggleMobileNavButtonProps) => (
  <ToggleMobileNavButtonStyled onClick={onClick}>
    <Icon size={20} style={{ cursor: 'pointer' }} />
  </ToggleMobileNavButtonStyled>
)

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

const NavigationWrapper = styled.div<{ isHidden: boolean; floating: boolean }>`
  position: static;
  margin-bottom: -100px;
  padding-right: 30px;
  padding-left: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`

const NavigationMenuStyled = styled.div`
  width: var(--page-width);
  display: flex;
  justify-content: center;
  font-weight: var(--fontWeight-medium);
  z-index: 1;
  padding: 0 30px;
  height: 62px;
`

const NavLink = styled(SimpleLink)`
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textPrimaryVariation};
  font-weight: var(--fontWeight-semiBold);

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }
`

const ToggleMobileNavButtonStyled = styled.div`
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  padding-right: 30px;
  margin-right: -30px;

  @media ${deviceBreakPoints.ipad} {
    display: flex;
  }
`

const MobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  margin-top: 100px;
`

const MobileMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const MobileMenuItemTitle = styled.div`
  font-size: var(--fontSize-24);
  font-weight: var(--fontWeight-semiBold);
  color: ${({ theme }) => theme.textPrimary};
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    color: ${({ theme }) => theme.textPrimaryVariation};
  }
`

const MobileMenuItemArrow = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textPrimaryVariation};
`

const MobileSubItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 10px;
  overflow: hidden;
`

const MobileSubItem = styled.div`
  padding: 8px 0;
`

const MobileSubItemTitle = styled.div`
  font-size: var(--fontSize-14);
  font-weight: var(--fontWeight-medium);
  color: ${({ theme }) => theme.textTertiary};
  text-transform: uppercase;
`
