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

  borderPrimary: 'rgba(255, 255, 255, 0.08)',

  link: 'var(--color-white)',
  linkAlt: 'var(--color-grey-700)',

  separator: 'var(--color-grey-700)',

  palette1: '#4eb1ff',
  palette2: '#ffb85f',
  palette3: '#5e5dff',
  palette4: '#ac55ff',
  palette5: '#ff80a1',
  palette6: '#ffbc70'
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

  borderPrimary: 'rgba(0, 0, 0, 0.08)',

  link: '#000000',
  linkAlt: 'var(--color-black)',

  separator: 'var(--color-grey-100)',

  palette1: '#469df9',
  palette2: '#ffa42b',
  palette3: '#3e4bf7',
  palette4: '#a378ff',
  palette5: '#ff6b96',
  palette6: '#ffa055'
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
