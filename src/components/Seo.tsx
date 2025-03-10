import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import SocialMediaBannerImage from '../images/social-media-banner.png'

export interface SeoProps {
  title?: string
  description?: string
  lang?: string
  image?: any
}

const Seo = ({ title, description, lang = 'en', image: metaImage }: SeoProps) => {
  const { site } = useStaticQuery(
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
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImageAbsoluteUrl = `${site.siteMetadata.siteUrl}${SocialMediaBannerImage}`
  const titleContent = title || site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={titleContent}
      meta={[
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
        }
      ]}
    />
  )
}

export default Seo
