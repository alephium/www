import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useTableOfContents } from '../../../hooks/useTableOfContents'

interface TableOfContentsProps {
  htmlContent: string
}

const TableOfContents = ({ htmlContent }: TableOfContentsProps) => {
  const tocItems = useTableOfContents(htmlContent)
  const [activeId, setActiveId] = useState<string>('')
  const [highlightedId, setHighlightedId] = useState<string>('')

  // Update the HTML content with IDs when tocItems change
  useEffect(() => {
    if (tocItems.length === 0) return

    // Find the article content and add IDs to headers
    const articleElement = document.querySelector('article')
    if (!articleElement) return

    articleElement.style.scrollPaddingTop = '120px'
    document.documentElement.style.scrollPaddingTop = '120px'
    document.body.style.scrollPaddingTop = '120px'

    const headers = articleElement.querySelectorAll('h2, h3')
    headers.forEach((header, index) => {
      const tocItem = tocItems[index]
      if (tocItem && !header.id) {
        header.id = tocItem.id
        // Add a data attribute to identify which headers we can highlight
        header.setAttribute('data-toc-header', 'true')
      }
    })

    return () => {
      if (articleElement) {
        articleElement.style.scrollPaddingTop = ''
      }
      document.documentElement.style.scrollPaddingTop = ''
      document.body.style.scrollPaddingTop = ''
    }
  }, [tocItems])

  useEffect(() => {
    if (tocItems.length === 0) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      let closestSectionId = ''
      let closestDistance = Infinity

      // Find the header closest to the top of the screen
      for (let i = 0; i < tocItems.length; i++) {
        const element = document.getElementById(tocItems[i].id)
        if (element) {
          const elementTop = element.offsetTop
          const distance = Math.abs(elementTop - scrollPosition)

          // Prefer headers that are at or above the scroll position
          if (elementTop <= scrollPosition && distance < closestDistance) {
            closestDistance = distance
            closestSectionId = tocItems[i].id
          }
        }
      }

      // If no header is above the scroll position, find the closest one overall
      if (!closestSectionId) {
        for (let i = 0; i < tocItems.length; i++) {
          const element = document.getElementById(tocItems[i].id)
          if (element) {
            const distance = Math.abs(element.offsetTop - scrollPosition)
            if (distance < closestDistance) {
              closestDistance = distance
              closestSectionId = tocItems[i].id
            }
          }
        }
      }

      if (closestSectionId && closestSectionId !== activeId) {
        setActiveId(closestSectionId)
      }
    }

    let scrollTimeout: NodeJS.Timeout | null = null
    const debouncedScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      scrollTimeout = setTimeout(handleScroll, 50)
    }

    window.addEventListener('scroll', debouncedScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', debouncedScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [tocItems, activeId])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      setTimeout(() => {
        setHighlightedId(id)

        setTimeout(() => {
          setHighlightedId('')
        }, 1000)
      }, 800)

      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Apply highlight styling directly to DOM elements
  useEffect(() => {
    if (!highlightedId) return

    // Find the specific header by ID instead of using data attribute
    const targetHeader = document.getElementById(highlightedId)
    if (targetHeader) {
      targetHeader.style.color = '#fbbf24'
    }
  }, [highlightedId])

  useEffect(
    () => () => {
      if (highlightedId) {
        const targetHeader = document.getElementById(highlightedId)
        if (targetHeader) {
          targetHeader.style.color = ''
        }
      }
    },
    [highlightedId]
  )

  if (tocItems.length === 0) return null

  return (
    <TocContainer>
      <TocTitle>Table of Contents</TocTitle>
      <TocList>
        {tocItems.map((item) => (
          <TocListItem key={item.id} level={item.level}>
            <TocLink
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                handleClick(item.id)
              }}
              isActive={activeId === item.id}
            >
              {item.title}
            </TocLink>
          </TocListItem>
        ))}
      </TocList>
    </TocContainer>
  )
}

const TocContainer = styled.div`
  position: fixed;
  top: var(--spacing-20);
  left: 32px;
  max-width: 280px;
  max-height: 60vh;
  overflow-y: auto;
  padding: 24px;
  z-index: 100;

  @media (max-width: 1200px) {
    display: none; // Hide on smaller screens to avoid clutter
  }
`

const TocTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const TocList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const TocListItem = styled.li<{ level: number }>`
  margin: 0;
  padding-left: ${({ level }) => (level === 3 ? '16px' : '0')};
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`

const TocLink = styled.a<{ isActive: boolean }>`
  display: block;
  color: ${({ theme, isActive }) => (isActive ? theme.textPrimary : theme.textSecondary)};
  text-decoration: none;
  font-size: 14px;
  line-height: 1.4;
  padding: 2px 0;
  transition: color 0.2s ease;
  border-left: 1px solid ${({ theme, isActive }) => (isActive ? theme.textPrimary : 'transparent')};
  padding-left: ${({ isActive }) => (isActive ? '12px' : '0')};
  margin-left: ${({ isActive }) => (isActive ? '-12px' : '0')};

  &:hover {
    color: ${({ theme }) => theme.textPrimaryVariation};
  }
`

export default TableOfContents
