import { graphql } from 'gatsby'
import { useRef, useState } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
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
  mask-image: linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent);

  @media ${deviceBreakPoints.mobile} {
    mask-image: linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent);
  }
`

const PartnersGrid = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-4);
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
  height: 30px;
  width: auto;
  max-width: 60px;
  object-fit: contain;
  margin: 0 auto;
  filter: brightness(0);
`
