// const React = require('react')

const PostBodyComponents = [
  <script
    dangerouslySetInnerHTML={{
      __html: `if (window.location.host !== 'alephium.org') window.goatcounter = {no_onload: true}`
    }}
    key="goatcounter-config"
  />,
  <script
    data-goatcounter="https://alephium.goatcounter.com/count"
    async
    src="https://gc.zgo.at/count.js"
    key="goatcounter-script"
  ></script>
]

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents(PostBodyComponents)
}

// Remove gatsby-announcer element because it has inline styles (which we don't want due to the CSP)
exports.wrapRootElement = ({ element }) => {
  console.log(element.props.children.props.children)
  element.props.children = element.props.children.props.children.filter(
    (child) => child.props.id !== 'gatsby-announcer'
  )
  return element
}
