const PostBodyComponents = [<script async src="/analytics-toggle.js" key="goatcounter-script"></script>]

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents(PostBodyComponents)
}

// Remove gatsby-announcer element because it has inline styles (which we don't want due to the CSP)
export const wrapRootElement = ({ element }) => {
  element.props.children = element.props.children.props.children.filter(
    (child) => child.props.id !== 'gatsby-announcer'
  )
  return element
}

// Remove inline scripts and styles inserted by Gatsby
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
  getPostBodyComponents,
  replacePostBodyComponents
}) => {
  if (process.env.NODE_ENV !== 'production') return
  replaceHeadComponents(
    getHeadComponents().filter(
      (component) =>
        !['gatsby-image-style-script', 'gatsby-image-style-noscript', 'gatsby-image-style'].includes(component.key)
    )
  )
  replacePostBodyComponents(
    getPostBodyComponents().filter((component) => !['script-loader', 'chunk-mapping'].includes(component.key))
  )
}
