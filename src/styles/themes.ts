import { DefaultTheme } from 'styled-components'

export type ThemeType = 'light' | 'dark'

export const darkTheme: DefaultTheme = {
  name: 'dark',
  body: 'var(--color-dark)',

  textPrimary: 'var(--color-light)',
  textSecondary: 'var(--color-text-grey-light-1)',
  textAccent: '#FFD036' // TODO: Change

  // link: '#53A9F5',
  // linkHighlight: '#0E82E7',

  // bgPrimary: '#212126',
  // bgSecondary: '#18191C',
  // bgHighlight: 'rgba(0, 0, 0, 0.1)',

  // borderPrimary: '#34353A',
  // borderHighlight: '#585962',

  // tooltip: 'black'
}

export const lightTheme: DefaultTheme = {
  name: 'light',
  body: 'var(--color-light)',

  textPrimary: 'var(--color-dark)',
  textSecondary: 'var(--color-text-grey-dark-1)',
  textAccent: 'var(--color-text-grey-dark-3)'

  // link: '#0E82E7',
  // linkHighlight: '#53A9F5',

  // bgPrimary: 'white',
  // bgSecondary: '#FAFAFA',
  // bgHighlight: 'rgba(0, 0, 0, 0.02)',

  // borderPrimary: '#F2F2F3',
  // borderHighlight: '#D1D1D4',

  // tooltip: 'black'
}
