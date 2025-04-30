import { graphql } from 'gatsby'
import styled from 'styled-components'

import SubheaderContent from '../../customPageComponents/SubheaderContent'
import TextElement from '../../customPageComponents/TextElement'

export const query = graphql`
  fragment HomepagePartnersSection on MarkdownRemarkFrontmatterPartnersSection {
    partners {
      title
      logo {
        publicURL
      }
    }
  }
`

const HomepagePartnersSection = (content: Queries.HomepagePartnersSectionFragment) => (
  <SubheaderContent isCentered>
    <TextElement isCentered>
      <label>Trusted by</label>
    </TextElement>

    <PartnersGrid>
      {content?.partners?.map(
        (partner) =>
          partner?.title &&
          partner?.logo?.publicURL && (
            <PartnerItem key={partner.title}>
              <PartnerLogo src={partner.logo.publicURL} alt={partner.title} loading="lazy" />
              <PartnerLabel>{partner.title}</PartnerLabel>
            </PartnerItem>
          )
      )}
    </PartnersGrid>
  </SubheaderContent>
)

const PartnersGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: var(--pageWidth);
  margin: 0 auto;
  overflow-x: auto;
  padding: 1rem 0;
`

const PartnerItem = styled.div`
  text-align: center;
  padding: 0.25rem;
`

const PartnerLogo = styled.img`
  width: 100px;
  height: 48px;
  object-fit: contain;
  margin: 0 auto;
`

const PartnerLabel = styled.div`
  font-size: var(--fontSize-14);
  max-width: 120px;
  overflow-wrap: break-word;
  margin-top: var(--spacing-3);
  color: ${({ theme }) => theme.textTertiary};
`

export default HomepagePartnersSection
