import { DefaultTheme } from 'styled-components'

export type ThemeType = 'light' | 'dark' | 'hackathon'

export const darkTheme: DefaultTheme = {
  name: 'dark',

  textPrimary: '#ffffff',
  textPrimaryVariation: 'rgba(255, 255, 255, 0.8)',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textTertiary: 'rgba(255, 255, 255, 0.4)',

  surface1: 'var(--color-grey-750)',
  surface2: 'var(--color-grey-900)',
  background1: 'var(--color-grey-850)',
  background2: 'var(--color-grey-900)',
  background3: 'var(--color-grey-950)',
  backgroundContrast: 'var(--color-grey-800)',

  borderPrimary: 'rgba(255, 255, 255, 0.1)',

  link: 'var(--color-white)',
  linkAlt: 'var(--color-grey-700)',

  separator: 'var(--color-grey-700)',

  palette1: '#5effb5',
  palette2: '#ffd976',
  palette3: '#7ae5ff',
  palette4: '#f5a4ff',
  palette5: '#ff89cc',
  palette6: '#ffb579'
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
  background2: '#fafafa',
  background3: '#ffffff',
  backgroundContrast: '#000000',

  borderPrimary: 'rgba(0, 0, 0, 0.1)',

  link: '#000000',
  linkAlt: 'var(--color-black)',

  separator: 'var(--color-grey-100)',

  palette1: '#4bda98',
  palette2: '#f5b529',
  palette3: '#41c6e5',
  palette4: '#de5dee',
  palette5: '#e24ea2',
  palette6: '#f69344'
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
