module.exports = {
  siteMetadata: {
    siteUrl: 'https://alephium.org',
    title: 'Alephium: A new paradigm',
    description:
      "Alephium is a sharded L1 blockchain scaling and improving on Bitcoin's PoW  & UTXO. A highly performant, secure, and energy efficient network for DeFi & dApps.",
    social: {
      twitter: 'alephium'
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alephium`,
        short_name: `Alephium`,
        start_url: `/`,
        icon: 'src/images/favicon.ico',
        icons: []
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './src/content'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/svgs/
        }
      }
    },
    // TODO: Re-enable when CMS is correctly set up
    // {
    //   resolve: 'gatsby-plugin-netlify-cms',
    //   options: {
    //     manualInit: true,
    //     modulePath: './cms/index.ts',
    //     enableIdentityWidget: false
    //   }
    // },
    {
      resolve: 'gatsby-plugin-csp',
      options: {
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        directives: {
          'style-src': "'self' 'unsafe-inline'",
          'script-src': "'self' 'unsafe-inline' https://gc.zgo.at",
          'default-src': "'none'",
          'manifest-src': "'self'",
          'connect-src': "'self' mainnet-backend.alephium.org api.github.com",
          'img-src': "'self' data: https://alephium.goatcounter.com"
        }
      }
    }
  ]
}
