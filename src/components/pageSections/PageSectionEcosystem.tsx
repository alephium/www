import SectionTextHeader from '../SectionTextHeader'
import { graphql } from 'gatsby'
import { notEmpty } from '../../utils/misc'

export const query = graphql`
  fragment PageSectionEcosystem on MarkdownRemarkFrontmatterPageSectionEcosystemContent {
    titleRows
    subtitleRows
  }
`

const PageSectionEcosystem = (content: Queries.PageSectionEcosystemFragment) => (
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

export default PageSectionEcosystem
