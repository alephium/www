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

    link: string

    separator: string
  }
}
