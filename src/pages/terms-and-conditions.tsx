import { graphql, useStaticQuery } from 'gatsby'

import MarkdownPage from '../templates/markdown-page'

export const pageQuery = graphql`
  query TermsAndConditionsPage {
    tc: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/terms-and-conditions.md/" } }) {
      nodes {
        html
      }
    }
  }
`

const TermsAndConditions = () => {
  const { tc } = useStaticQuery<Queries.TermsAndConditionsPageQuery>(pageQuery)

  return (
    <MarkdownPage
      seo={{
        title: 'Terms of Use | Alephium Tools',
        description:
          'Review the terms and conditions for using Alephium’s wallets, explorer, and bridge. Transparency and user control come first.'
      }}
      html={tc.nodes[0].html ?? ''}
    />
  )
}

export default TermsAndConditions
