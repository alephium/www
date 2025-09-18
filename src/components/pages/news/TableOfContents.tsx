import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { useTableOfContents } from '../../../hooks/useTableOfContents'
import { useTocIntersection } from '../../../hooks/useTocIntersection'

interface TableOfContentsProps {
  htmlContent: string
}

const TableOfContents = ({ htmlContent }: TableOfContentsProps) => {
  const tocItems = useTableOfContents(htmlContent)
  const { activeId, highlightedId, handleClick } = useTocIntersection(tocItems)
  const [isScrolledDown, setIsScrolledDown] = useState<boolean>(false)
  const tocContainerRef = useRef<HTMLDivElement>(null)
  const activeLinkRef = useRef<HTMLAnchorElement>(null)
  const isUserInteractingRef = useRef<boolean>(false)

  useEffect(() => {
    if (tocItems.length === 0) return

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
    const tocContainer = document.querySelector('[data-toc-container]') as HTMLElement
    if (!tocContainer) return

    const handleTocScroll = () => {
      const scrollTop = tocContainer.scrollTop
      setIsScrolledDown(scrollTop > 10)
    }

    tocContainer.addEventListener('scroll', handleTocScroll, { passive: true })
    handleTocScroll()

    return () => {
      tocContainer.removeEventListener('scroll', handleTocScroll)
    }
  }, [tocItems])

  useEffect(() => {
    if (!highlightedId) return

    const targetHeader = document.getElementById(highlightedId)
    if (targetHeader) {
      targetHeader.style.color = '#fbbf24'
    }
  }, [highlightedId])

  // Auto-scroll TOC when active item is out of view (but not when user is clicking)
  useEffect(() => {
    if (!activeId || !tocContainerRef.current || !activeLinkRef.current || isUserInteractingRef.current) return

    const container = tocContainerRef.current
    const activeLink = activeLinkRef.current

    const containerRect = container.getBoundingClientRect()
    const linkRect = activeLink.getBoundingClientRect()

    const isAboveView = linkRect.top < containerRect.top
    const isBelowView = linkRect.bottom > containerRect.bottom

    if (isAboveView || isBelowView) {
      // Calculate the scroll position to center the active link
      const linkOffsetTop = activeLink.offsetTop
      const containerHeight = container.clientHeight
      const linkHeight = activeLink.offsetHeight

      // Center the link in the container
      const targetScrollTop = linkOffsetTop - containerHeight / 2 + linkHeight / 2

      container.scrollTo({
        top: Math.max(0, targetScrollTop)
      })
    }
  }, [activeId])

  // Handle user interaction to prevent auto-scroll conflicts
  const handleTocClick = (id: string) => {
    isUserInteractingRef.current = true
    handleClick(id)

    // Reset the flag after a short delay to allow auto-scroll to resume
    setTimeout(() => {
      isUserInteractingRef.current = false
    }, 1000)
  }

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
    <TocWrapper>
      <TocContainer ref={tocContainerRef} data-toc-container isScrolledDown={isScrolledDown}>
        <TocTitle>Table of Contents</TocTitle>
        <TocList>
          {tocItems.map((item) => (
            <TocListItem key={item.id} level={item.level}>
              <TocLink
                ref={activeId === item.id ? activeLinkRef : null}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleTocClick(item.id)
                }}
                isActive={activeId === item.id}
              >
                {item.title}
              </TocLink>
            </TocListItem>
          ))}
        </TocList>
      </TocContainer>
    </TocWrapper>
  )
}

const TocWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: calc((100% - 700px) / 2);
  top: 0;
  bottom: 0;
  height: 100%;
`

const TocContainer = styled.div<{ isScrolledDown: boolean }>`
  position: sticky;
  top: var(--spacing-20);
  left: 32px;
  max-width: 280px;
  max-height: 60vh;
  overflow-y: auto;
  padding: 24px;
  z-index: 100;

  mask-image: ${({ isScrolledDown }) =>
    isScrolledDown
      ? `linear-gradient(to bottom, transparent 0%, black 20px, black calc(100% - 20px), transparent 100%)`
      : `linear-gradient(to bottom, black 0%, black calc(100% - 20px), transparent 100%)`};
  -webkit-mask-image: ${({ isScrolledDown }) =>
    isScrolledDown
      ? `linear-gradient(to bottom, transparent 0%, black 20px, black calc(100% - 20px), transparent 100%)`
      : `linear-gradient(to bottom, black 0%, black calc(100% - 20px), transparent 100%)`};

  @media (max-width: 1200px) {
    display: none;
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
  margin-top: var(--spacing-2);
  transition: transform 0.3s ease;
  border-left: 1px solid ${({ theme, isActive }) => (isActive ? theme.textPrimary : 'transparent')};
  padding-left: ${({ isActive }) => (isActive ? '12px' : '0')};
  margin-left: ${({ isActive }) => (isActive ? '-12px' : '0')};
  transform: ${({ isActive }) => (isActive ? 'translateX(2px)' : 'translateX(0)')};

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
    transform: translateX(2px);
  }
`

export default TableOfContents
