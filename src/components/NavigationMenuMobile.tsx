import { AnimatePresence, motion } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import { ReactNode, useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { RiTranslate2 } from 'react-icons/ri'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import { notEmpty } from '../utils/misc'
import NavigationMenuSocials from './navigation/NavigationMenuSocials'
import SimpleLink from './SimpleLink'
import TranslateComponent from './TranslateComponent'

const MobileNavigationMenu = () => {
  const data = useStaticQuery<Queries.NavigationMenuQuery>(navigationMenuQuery)
  const menuItems = data.navmenu.nodes[0]?.frontmatter?.menuItems?.filter(notEmpty)
  const socialIcons = data.navmenu.nodes[0]?.frontmatter?.socialIcons?.filter(notEmpty)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const toggleItem = (title: string) => {
    setExpandedItem((prev) => (prev === title ? null : title))
  }

  return (
    <MobileNavigationMenuStyled
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ type: 'spring', bounce: 0 }}
    >
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
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  width: 90vw;
  height: calc(100vh - 140px);
  border-radius: var(--radius-big);
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  background-color: ${({ theme }) => theme.background1};
  z-index: 10000; // Terrible way to do this, but it would require a lot of rework on all other places that use z-index
  overflow: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, ${({ theme }) => (theme.name === 'dark' ? 0.5 : 0.1)});
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
  onMenuButtonClick: () => void
  Icon: IconType
}

export const MobileNavButtons = ({ onMenuButtonClick, Icon }: ToggleMobileNavButtonProps) => (
  <MobileNavButtonsStyled>
    <Icon size={20} style={{ cursor: 'pointer' }} onClick={onMenuButtonClick} />
  </MobileNavButtonsStyled>
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

const NavLink = styled(SimpleLink)`
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textPrimaryVariation};
  font-weight: var(--fontWeight-semiBold);
  padding: 8px 0;
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }
`

const MobileNavButtonsStyled = styled.div`
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-4);
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

const MobileSubItem = styled.div``

const MobileSubItemTitle = styled.div`
  font-size: var(--fontSize-14);
  font-weight: var(--fontWeight-medium);
  color: ${({ theme }) => theme.textTertiary};
  text-transform: uppercase;
  padding: 8px 0;
`
