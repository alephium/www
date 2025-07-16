import { createContext, useContext, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { darkTheme, lightTheme, ThemeType } from '../styles/themes'

interface ThemeContextType {
  theme: ThemeType
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('dark')

  /*
  const [mounted, setMounted] = useState(false)

   useEffect(() => {
    const saved = window.localStorage.getItem('theme') as ThemeType | null
    setTheme(saved ?? 'dark')
    setMounted(true)

    // listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      const newT: ThemeType = e.matches ? 'dark' : 'light'
      setTheme(newT)
      window.localStorage.setItem('theme', newT)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, []) */

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    window.localStorage.setItem('theme', next)
  }

  // if (!mounted) return null // avoid SSR hydration mismatch

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
