// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
        fs: false,
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^netlify-identity-widget$/
      })
    ]
  })
}
