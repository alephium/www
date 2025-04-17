import { graphql, useStaticQuery } from 'gatsby'

import MarkdownPage from '../templates/markdown-page'

export const pageQuery = graphql`
  query PrivacyPolicyPage {
    privacy: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/privacy-policy.md/" } }) {
      nodes {
        html
      }
    }
  }
`

const PrivacyPolicy = () => {
  const { privacy } = useStaticQuery<Queries.PrivacyPolicyPageQuery>(pageQuery)

  return (
    <MarkdownPage
      seo={{
        title: 'Privacy Policy | Alephium',
        description:
          'Learn how Alephium protects your data and respects your privacy across our website, wallets, and other services.'
      }}
      html={privacy.nodes[0].html ?? ''}
    />
  )
}

export default PrivacyPolicy
