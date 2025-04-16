import { graphql } from 'gatsby'

import CardImage from '../../customPageComponents/CardImage'
import Grid from '../../customPageComponents/Grid'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextCard from '../../customPageComponents/TextCard'
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
        From legal experts to peer blockchains, advocacy groups, and local associations - they connect us to a larger
        ecosystem, strengthening our place in the decentralized world.
      </p>
    </TextElement>

    <SubheaderContent>
      <Grid columns={4} gap="small">
        {content?.partners?.map(
          (partner) =>
            partner?.title &&
            partner?.logo?.publicURL && (
              <TextCard isCentered key={partner.title}>
                <CardImage src={partner.logo.publicURL} alt={partner.title} />
                <h4>{partner.title}</h4>
              </TextCard>
            )
        )}
      </Grid>
    </SubheaderContent>
  </SubpageSection>
)

export default HomepagePartnersSection
