const PostBodyComponents = [<script async src="/analytics-toggle.js" key="goatcounter-script"></script>]

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents(PostBodyComponents)
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
  replacePostBodyComponents(getPostBodyComponents().filter((component) => !['chunk-mapping'].includes(component.key)))
}
