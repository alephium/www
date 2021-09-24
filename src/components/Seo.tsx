import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import SocialMediaBannerImage from '../images/social-media-banner.png'

interface SeoProps {
  title?: string
  description?: string
  lang?: string
}

const Seo: FC<SeoProps> = ({ title, description, lang = 'en' }) => {
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

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title || site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:site_name`,
          content: title
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
          content: title
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
