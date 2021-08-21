import 'styled-components'
import { ThemeType } from '../styles/themes'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeType
    body: string

    textPrimary: string
    textSecondary: string
    textTetriary: string
    textAccent: string

    link: string

    bgPrimary: string
    bgSecondary: string
    bgTertiary: string
  }
}
