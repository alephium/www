;(function () {
  // Prevent white flash by setting background color immediately
  // This script runs before any CSS or React components load

  // Set default dark background
  document.documentElement.style.backgroundColor = '#000'
  document.body.style.backgroundColor = '#000'

  // Check for saved theme preference or default to dark
  var theme = localStorage.getItem('theme') || 'dark'

  // Apply appropriate background based on theme
  if (theme === 'light') {
    document.documentElement.style.backgroundColor = '#f2f2f2'
    document.body.style.backgroundColor = '#f2f2f2'
  } else {
    // Dark theme (default)
    document.documentElement.style.backgroundColor = '#000'
    document.body.style.backgroundColor = '#000'
  }

  // Remove this script after it runs
  var script = document.currentScript
  if (script && script.parentNode) {
    script.parentNode.removeChild(script)
  }
})()
