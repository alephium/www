import { DefaultTheme } from 'styled-components'

export type ThemeType = 'light' | 'dark'

export const darkTheme: DefaultTheme = {
  name: 'dark',

  textPrimary: 'var(--color-white)',
  textPrimaryVariation: 'var(--color-grey-100)',
  textSecondary: 'var(--color-grey-200)',
  textTertiary: 'var(--color-grey-200)',

  bgPrimary: 'var(--color-black)',
  bgSecondary: 'var(--color-grey-900)',
  bgTertiary: 'var(--color-grey-800)',
  bgSurface: 'var(--color-grey-700)',

  borderPrimary: 'var(--border-primary-dark)',

  link: 'var(--color-grey-100)',
  linkAlt: 'var(--color-white)',

  separator: 'var(--color-grey-700)'
}

export const lightTheme: DefaultTheme = {
  name: 'light',

  textPrimary: 'var(--color-black)',
  textPrimaryVariation: 'var(--color-grey-600)',
  textSecondary: 'var(--color-grey-500)',
  textTertiary: 'var(--color-grey-400)',

  bgPrimary: 'var(--color-white)',
  bgSecondary: 'var(--color-grey)',
  bgTertiary: 'var(--color-grey)',
  bgSurface: 'var(--color-white)',

  borderPrimary: 'var(--border-primary-light)',

  link: 'var(--color-blue)',
  linkAlt: 'var(--color-black)',

  separator: 'var(--color-grey-100)'
}
