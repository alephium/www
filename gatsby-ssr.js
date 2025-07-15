const PostBodyComponents = []

export const onRenderBody = ({ setHeadComponents }) => {
  // Add no-flash script to prevent white flash during navigation
  setHeadComponents([
    <script
      key="no-flash"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Prevent white flash by setting background color immediately
            // This script runs before any CSS or React components load

            // Set default dark background
            document.documentElement.style.backgroundColor = '#000';

            const isBodyDefined = document.body

            if (isBodyDefined) {
              document.body.style.backgroundColor = '#000';
            }

            // Check for saved theme preference or default to dark
            var theme = localStorage.getItem('theme') || 'dark';

            // Apply appropriate background based on theme
            if (theme === 'light') {
              document.documentElement.style.backgroundColor = '#f2f2f2';
              if (isBodyDefined) {
                document.body.style.backgroundColor = '#f2f2f2';
              }
            } else {
              // Dark theme (default)
              document.documentElement.style.backgroundColor = '#000';
              if (isBodyDefined) {
                document.body.style.backgroundColor = '#000';
              }
            }
          })();
        `
      }}
    />
  ])
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
