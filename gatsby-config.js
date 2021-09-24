module.exports = {
  siteMetadata: {
    siteUrl: 'https://alephium-website-in-the-works-how-cool-is-it.vercel.app', // TODO: Update to official domain
    title: 'Alephium',
    description:
      'A novel sharded blockchain for a secure, scalable and flexible financial ecosystem, empowered by BlockFlow algorithm and extended UTXO model.',
    social: {
      twitter: 'alephium'
    }
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/svgs/
        }
      }
    }
  ]
}
