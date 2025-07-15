import './src/styles/typography.css'

// Prevent white flash during client-side navigation
export const onClientEntry = () => {
  // Set background color immediately when the client-side app loads
  const theme = localStorage.getItem('theme') || 'dark'
  const backgroundColor = theme === 'light' ? '#f2f2f2' : '#000'

  document.documentElement.style.backgroundColor = backgroundColor

  const isBodyDefined = document.body

  if (isBodyDefined) {
    document.body.style.backgroundColor = backgroundColor
  }

  // Listen for theme changes and update background immediately
  const originalSetItem = localStorage.setItem
  localStorage.setItem = function (key, value) {
    if (key === 'theme') {
      const backgroundColor = value === 'light' ? '#f2f2f2' : '#000'
      document.documentElement.style.backgroundColor = backgroundColor
      if (isBodyDefined) {
        document.body.style.backgroundColor = backgroundColor
      }
    }
    originalSetItem.apply(this, arguments)
  }
}
