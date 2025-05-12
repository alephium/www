import 'styled-components'

import { ThemeType } from '../styles/themes'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeType

    textPrimary: string
    textPrimaryVariation: string
    textSecondary: string
    textTertiary: string

    surface1: string
    surface2: string
    background1: string
    background2: string
    background3: string
    backgroundContrast: string

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
