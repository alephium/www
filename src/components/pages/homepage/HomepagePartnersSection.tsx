import { graphql } from 'gatsby'
import styled from 'styled-components'

import SubheaderContent from '../../customPageComponents/SubheaderContent'
import SubpageSection from '../../customPageComponents/SubpageSection'
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
  <SubpageSection>
    <TextElement isCentered>
      <h2>Our Partners</h2>
      <p>
        From legal experts to peer blockchains, advocacy groups, and local associations -{' '}
        <strong>they connect us to a larger ecosystem, strengthening our place in the decentralized world.</strong>
      </p>
    </TextElement>

    <SubheaderContent>
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
  </SubpageSection>
)

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  row-gap: 1rem;
  column-gap: 0.5rem;
  max-width: 1000px;
  margin: 0 auto;
`

const PartnerItem = styled.div`
  text-align: center;
  padding: 0.25rem;
`

const PartnerLogo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin: 0 auto;
`

const PartnerLabel = styled.div`
  font-size: var(--fontSize-18);
  margin-top: 0.25rem;
`

export default HomepagePartnersSection
