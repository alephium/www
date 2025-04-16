import 'styled-components'

import { ThemeType } from '../styles/themes'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeType

    textPrimary: string
    textPrimaryVariation: string
    textSecondary: string
    textTertiary: string

    bgPrimary: string
    bgSecondary: string
    bgTertiary: string
    bgSurface: string

    borderPrimary: string

    link: string
    linkAlt: string

    separator: string

    palette1: string
    palette2: string
    palette3: string
    palette4: string
    palette5: string
    palette6: string
  }
}
