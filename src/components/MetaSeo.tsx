import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

export interface MetaSeoProps {
  title?: string
  description?: string
  lang?: string
}

export const metaSeoQuery = graphql`
  query MetaSeoData {
    image: file(relativePath: { eq: "ogimage.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1200, layout: FIXED)
      }
    }
  }
`

const defaultTitle = 'Alephium | The Web3 you were promised'
const defaultDescription =
  'Alephium is the next generation PoW Layer 1 with smart contracts. Built for speed, security, and sustainability. Start building or join the community today.'

export const MetaSeo = ({ title, description, lang = 'en' }: MetaSeoProps) => {
  const { image } = useStaticQuery<Queries.MetaSeoDataQuery>(metaSeoQuery)

  const isTestSite = typeof window !== 'undefined' && window.location.hostname === 'www2.alephium.org'

  const metaDescription = description || defaultDescription
  const metaImageAbsoluteUrl = `https://alephium.org${image?.childImageSharp?.gatsbyImageData.images.fallback?.src}`
  const titleContent = title || defaultTitle

  const metaBase = isTestSite ? [{ property: 'robots', content: 'noindex, nofollow' }] : []

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={titleContent}
      meta={[
        ...metaBase,
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: titleContent
        },
        {
          property: `og:site_name`,
          content: titleContent
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:url`,
          content: 'https://alephium.org'
        },
        {
          property: `og:image`,
          content: metaImageAbsoluteUrl
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:creator`,
          content: 'alephium'
        },
        {
          name: `twitter:title`,
          content: titleContent
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:image`,
          content: metaImageAbsoluteUrl
        },
        {
          name: `google-site-verification`,
          content: 'Z2_Eik2H9Cwj7ZzkG79O3WurVlU0Lz4Am4AVYgzaRKY'
        }
      ]}
    />
  )
}
