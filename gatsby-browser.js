import './src/styles/typography.css'

import { darkTheme, lightTheme } from './src/styles/themes'

// Theme background3 color mapping
const getThemeBackgroundColor = (theme) => {
  const themeMap = {
    light: lightTheme,
    dark: darkTheme
  }
  const selectedTheme = themeMap[theme] || darkTheme
  return selectedTheme.background3
}

// Prevent white flash during client-side navigation
export const onClientEntry = () => {
  // Set background color immediately when the client-side app loads
  const theme = localStorage.getItem('theme') || 'dark'
  const backgroundColor = getThemeBackgroundColor(theme)

  document.documentElement.style.backgroundColor = backgroundColor

  const isBodyDefined = document.body

  if (isBodyDefined) {
    document.body.style.backgroundColor = backgroundColor
  }

  // Listen for theme changes and update background immediately
  const originalSetItem = localStorage.setItem
  localStorage.setItem = function (key, value) {
    if (key === 'theme') {
      const backgroundColor = getThemeBackgroundColor(value)
      document.documentElement.style.backgroundColor = backgroundColor
      if (isBodyDefined) {
        document.body.style.backgroundColor = backgroundColor
      }
    }
    originalSetItem.apply(this, arguments)
  }
}
