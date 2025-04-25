import { DefaultTheme } from 'styled-components'

export type ThemeType = 'light' | 'dark' | 'hackathon'

export const darkTheme: DefaultTheme = {
  name: 'dark',

  textPrimary: 'var(--color-white)',
  textPrimaryVariation: 'rgba(255, 255, 255, 0.9)',
  textSecondary: 'rgba(255, 255, 255, 0.65)',
  textTertiary: 'rgba(255, 255, 255, 0.4)',

  bgPrimary: 'var(--color-grey-700)',
  bgSecondary: 'var(--color-grey-800)',
  bgTertiary: 'var(--color-grey-850)',
  bgSurface: 'rgba(255, 255, 255, 0.015)',

  borderPrimary: 'rgba(255, 255, 255, 0.05)',

  link: 'var(--color-grey-100)',
  linkAlt: 'var(--color-white)',

  separator: 'var(--color-grey-700)',

  palette1: '#6EE2AC',
  palette2: '#FCCF7D',
  palette3: '#3FD2FF',
  palette4: '#c974ff',
  palette5: '#ff7bc6',
  palette6: '#ffa45e'
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
  palette3: '#FF259D',
  palette4: '#BE60F9',
  palette5: '#ff7bc6',
  palette6: '#FF259D'
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
  palette3: '#b73df9',
  palette4: '#FF259D',
  palette5: '#e7409f',
  palette6: '#FF259D'
}
