import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

export interface SeoProps {
  title?: string
  description?: string
  lang?: string
  image?: any
}

const Seo = ({ title, description, lang = 'en', image: metaImage }: SeoProps) => {
  const { site, image } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
            }
          }
        }
        image: file(relativePath: { eq: "social-media-banner.png" }) {
          publicURL
        }
      }
    `
  )

  const isTestSite = typeof window !== 'undefined' && window.location.hostname === 'www2.alephium.org'

  const metaDescription = description || site.siteMetadata.description
  const metaImageAbsoluteUrl = `${site.siteMetadata.siteUrl}${image.publicURL}`
  const titleContent = title || site.siteMetadata.title

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
          content: site.siteMetadata.siteUrl
        },
        {
          property: `og:image`,
          content: metaImageAbsoluteUrl
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``
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

export default Seo
