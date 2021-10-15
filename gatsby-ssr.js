// const React = require('react')

const PostBodyComponents = [<script async src="/analytics-toggle.js" key="goatcounter-script"></script>]

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
