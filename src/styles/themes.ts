import { DefaultTheme } from 'styled-components'

export type ThemeType = 'light' | 'dark' | 'hackathon'

export const darkTheme: DefaultTheme = {
  name: 'dark',

  textPrimary: 'var(--color-white)',
  textPrimaryVariation: 'var(--color-grey-100)',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textTertiary: 'var(--color-grey-300)',

  bgPrimary: 'var(--color-grey-600)',
  bgSecondary: 'var(--color-grey-700)',
  bgTertiary: 'var(--color-grey-800)',
  bgSurface: 'var(--color-grey-500)',

  borderPrimary: 'var(--color-grey-400)',

  link: 'var(--color-grey-100)',
  linkAlt: 'var(--color-white)',

  separator: 'var(--color-grey-800)',

  palette1: '#2f9dff',
  palette2: '#FF9C2B',
  palette3: '#FF259D'
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

  separator: 'var(--color-grey-100)',

  palette1: '#3580ff',
  palette2: '#FF9C2B',
  palette3: '#FF259D'
}

export const hackathonTheme: DefaultTheme = {
  name: 'hackathon',

  textPrimary: 'var(--color-white)',
  textPrimaryVariation: 'var(--color-grey-100)',
  textSecondary: 'var(--color-grey-200)',
  textTertiary: 'var(--color-grey-300)',

  bgPrimary: 'var(--color-grey-800)',
  bgSecondary: 'var(--color-grey-850)',
  bgTertiary: 'var(--color-grey-950)',
  bgSurface: 'var(--color-grey-800)',

  borderPrimary: 'var(--color-grey-700)',

  link: 'var(--color-grey-100)',
  linkAlt: 'var(--color-white)',

  separator: 'var(--color-grey-800)',

  palette1: '#7afff1',
  palette2: '#ffbe2b',
  palette3: '#b73df9'
}
