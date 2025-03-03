import SectionTextHeader from '../SectionTextHeader'
import { graphql } from 'gatsby'
import { notEmpty } from '../../utils/misc'

export const query = graphql`
  fragment PageSectionPartners on MarkdownRemarkFrontmatterPageSectionPartnersContent {
    titleRows
    subtitleRows
  }
`

const PageSectionPartners = (content: Queries.PageSectionPartnersFragment) => (
  <section>
    {content?.titleRows && content?.subtitleRows && (
      <SectionTextHeader
        titleRows={content.titleRows.filter(notEmpty)}
        subtitleRows={content.subtitleRows.filter(notEmpty)}
        centered
        bigSubtitle
      />
    )}
  </section>
)

export default PageSectionPartners
