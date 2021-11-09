module.exports = {
  siteMetadata: {
    siteUrl: 'https://alephium.org', // TODO: Update to official domain
    title: 'Alephium: Blockchain v3.0',
    description:
      'A novel sharded blockchain for a secure, scalable and flexible financial ecosystem, empowered by BlockFlow algorithm and extended UTXO model.',
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
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: './cms/index.ts',
        enableIdentityWidget: false
      }
    },
    {
      resolve: 'gatsby-plugin-csp',
      options: {
        mergeScriptHashes: false,
        directives: {
          'style-src': "'self' 'unsafe-inline'",
          'script-src': "'self' https://gc.zgo.at",
          'default-src': "'none'",
          'manifest-src': "'self'"
        }
      }
    }
  ]
}
