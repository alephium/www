import { DefaultTheme } from 'styled-components'

export type ThemeType = 'light' | 'dark'

export const darkTheme: DefaultTheme = {
  name: 'dark',
  body: 'var(--color-dark)',

  textPrimary: 'var(--color-light)',
  textSecondary: 'var(--color-text-grey-light-1)',
  textTetriary: 'var(--color-text-grey-light-3)',
  textAccent: '#FFD036', // TODO: Change

  bgPrimary: 'var(--color-dark)',
  bgSecondary: 'var(--color-dark-1)',
  bgTertiary: 'var(--color-grey-dark)',

  link: 'var(--color-light)'
}

export const lightTheme: DefaultTheme = {
  name: 'light',
  body: 'var(--color-light)',

  textPrimary: 'var(--color-dark)',
  textSecondary: 'var(--color-text-grey-dark-1)',
  textTetriary: 'var(--color-grey-dark-2)',
  textAccent: 'var(--color-text-grey-dark-3)',

  bgPrimary: 'var(--color-light)',
  bgSecondary: 'var(--color-light-1)',
  bgTertiary: 'var(--color-grey-light)',

  link: 'var(--color-blue-2)'
}
