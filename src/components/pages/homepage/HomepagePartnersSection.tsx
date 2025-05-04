import { graphql } from 'gatsby'
import { useRef, useState } from 'react'
import styled from 'styled-components'

import SubheaderContent from '../../customPageComponents/SubheaderContent'
import TextElement from '../../customPageComponents/TextElement'

export const query = graphql`
  fragment HomepagePartnersSection on MarkdownRemarkFrontmatterPartnersSection {
    partners {
      title
      url
      logo {
        publicURL
      }
    }
  }
`

const HomepagePartnersSection = (content: Queries.HomepagePartnersSectionFragment) => {
  const gridRef = useRef<HTMLDivElement>(null)
  const [showLeftGradient, setShowLeftGradient] = useState(true)
  const [showRightGradient, setShowRightGradient] = useState(true)

  const handleScroll = () => {
    if (gridRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = gridRef.current
      setShowLeftGradient(scrollLeft > 0)
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  return (
    <SubheaderContent isCentered>
      <TextElement isCentered>
        <label>Trusted by</label>
      </TextElement>

      <PartnersGridContainer>
        <PartnersGrid ref={gridRef} onScroll={handleScroll}>
          {content?.partners?.map(
            (partner) =>
              partner?.title &&
              partner?.logo?.publicURL && (
                <PartnerItem key={partner.title} href={partner.url || '#'} target="_blank" rel="noopener noreferrer">
                  <PartnerLogo src={partner.logo.publicURL} alt={partner.title} loading="lazy" />
                </PartnerItem>
              )
          )}
        </PartnersGrid>
        <GradientOverlay position="left" visible={showLeftGradient} />
        <GradientOverlay position="right" visible={showRightGradient} />
      </PartnersGridContainer>
    </SubheaderContent>
  )
}

export default HomepagePartnersSection

const PartnersGridContainer = styled.div`
  position: relative;
  width: var(--page-width);
  display: flex;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
`

const PartnersGrid = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-6);
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  overscroll-behavior-x: contain;
  overscroll-behavior-y: none;
`

const PartnerItem = styled.a`
  text-align: center;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;
  position: relative;
  padding: 3px 0;

  &:hover {
    transform: translateY(-2px);
  }
`

const PartnerLogo = styled.img`
  height: 38px;
  width: auto;
  max-width: 80px;
  object-fit: contain;
  margin: 0 auto;
`

const GradientOverlay = styled.div<{ position: 'left' | 'right'; visible: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  pointer-events: none;
  z-index: 1;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.1s ease;
  background: linear-gradient(to ${({ position }) => position}, transparent, ${({ theme }) => theme.background3});
  ${({ position }) => position}: 0;
`
