import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: #000;
    color: #fff;
  }
`

export const deviceSizes = {
  mobile: 1024,
  desktop: 1920
}

export const deviceBreakPoints = {
  mobile: `(max-width: ${deviceSizes.mobile}px)`,
  desktop: `(max-width: ${deviceSizes.desktop}px)`
}

export default GlobalStyle
