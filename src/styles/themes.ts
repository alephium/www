import { colord } from 'colord'
import { DefaultTheme } from 'styled-components'

export type ThemeType = 'light' | 'dark' | 'hackathon'

export const darkTheme: DefaultTheme = {
  name: 'dark',

  textPrimary: '#f5f5f7',
  textPrimaryVariation: 'rgba(255, 255, 255, 0.8)',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textTertiary: 'rgba(255, 255, 255,  0.4)',

  surface1: 'var(--color-grey-750)',
  surface2: 'var(--color-grey-900)',
  background1: 'var(--color-grey-850)',
  background2: 'var(--color-grey-900)',
  background3: 'var(--color-grey-950)',
  backgroundContrast: 'var(--color-grey-800)',

  borderPrimary: 'rgba(255, 255, 255, 0.075)',

  link: '#66a4fa',
  linkAlt: 'var(--color-grey-700)',

  separator: 'var(--color-grey-700)',

  palette1: '#89ffc4',
  palette2: '#ffc48b',
  palette3: '#6b8dff',
  palette4: '#faa0f9',
  palette5: '#ff8a97',
  palette6: '#7efbff'
}

export const lightTheme: DefaultTheme = {
  name: 'light',

  textPrimary: '#000000',
  textPrimaryVariation: 'var(--color-grey-700)',
  textSecondary: 'var(--color-grey-500)',
  textTertiary: 'var(--color-grey-400)',

  surface1: 'var(--color-white)',
  surface2: '#FBFAF8',
  background1: '#ffffff',
  background2: '#fdfdfd',
  background3: '#f5f5f5',
  backgroundContrast: '#000000',

  borderPrimary: 'rgba(0, 0, 0, 0.06)',

  link: '#1485ea',
  linkAlt: 'var(--color-black)',

  separator: 'var(--color-grey-100)',

  palette1: '#5ade94',
  palette2: '#ffca42',
  palette3: '#7bb7ff',
  palette4: '#ff89c6',
  palette5: '#ff8fa3',
  palette6: '#a1e9ff'
}

export const hackathonTheme: DefaultTheme = {
  name: 'hackathon',

  textPrimary: 'var(--color-white)',
  textPrimaryVariation: 'var(--color-grey-100)',
  textSecondary: 'var(--color-grey-200)',
  textTertiary: 'var(--color-grey-300)',

  surface1: 'var(--color-grey-800)',
  surface2: 'var(--color-grey-850)',
  background1: 'var(--color-grey-950)',
  background2: '#000000',
  background3: 'white',
  backgroundContrast: 'var(--color-grey-800)',

  borderPrimary: 'var(--color-grey-700)',

  link: 'var(--color-grey-100)',
  linkAlt: 'var(--color-white)',

  separator: 'var(--color-grey-800)',

  palette1: '#7afff1',
  palette2: '#ffbe2b',
  palette3: '#b73df9',
  palette4: '#FF259D',
  palette5: '#e7409f',
  palette6: '#FF259D'
}

// Utilities

export const getComputedColor = (cssVar: string): string => {
  // If it's not a CSS variable, return as is
  if (!cssVar.startsWith('var(--')) {
    return cssVar
  }

  // Extract the variable name
  const varName = cssVar.match(/var\(--([^)]+)\)/)?.[1]
  if (!varName) return cssVar

  // Get the computed value
  const computedValue = getComputedStyle(document.documentElement).getPropertyValue(`--${varName}`).trim()

  return computedValue
}

export const getColordColor = (cssVar: string) => {
  const computedColor = getComputedColor(cssVar)
  return colord(computedColor)
}
