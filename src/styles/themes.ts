import { DefaultTheme } from 'styled-components'

export type ThemeType = 'light' | 'dark' | 'hackathon'

export const darkTheme: DefaultTheme = {
  name: 'dark',

  textPrimary: 'var(--color-white)',
  textPrimaryVariation: 'rgba(255, 255, 255, 0.9)',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textTertiary: 'rgba(255, 255, 255, 0.4)',

  surface1: 'var(--color-grey-700)',
  surface2: 'var(--color-grey-800)',
  background1: 'var(--color-grey-900)',
  background2: 'var(--color-grey-950)',
  backgroundContrast: 'var(--color-grey-800)',

  borderPrimary: 'rgba(255, 255, 255, 0.1)',

  link: 'var(--color-white)',
  linkAlt: 'var(--color-grey-700)',

  separator: 'var(--color-grey-700)',

  palette1: '#6dffbc',
  palette2: '#ffd68c',
  palette3: '#8de9ff',
  palette4: '#f7b5ff',
  palette5: '#ff89cc',
  palette6: '#ffb77d'
}

export const lightTheme: DefaultTheme = {
  name: 'light',

  textPrimary: '#1D1D1E',
  textPrimaryVariation: 'var(--color-grey-600)',
  textSecondary: 'var(--color-grey-500)',
  textTertiary: 'var(--color-grey-400)',

  surface1: 'var(--color-white)',
  surface2: '#FBFAF8',
  background1: '#F3F1EA',
  background2: '#E5E3DC',
  backgroundContrast: 'var(--color-grey-100)',

  borderPrimary: 'var(--border-primary-light)',

  link: 'var(--color-blue)',
  linkAlt: 'var(--color-black)',

  separator: 'var(--color-grey-100)',

  palette1: '#6dffbc',
  palette2: '#ffd68c',
  palette3: '#8de9ff',
  palette4: '#f7b5ff',
  palette5: '#ff89cc',
  palette6: '#ffb77d'
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
