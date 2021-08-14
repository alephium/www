import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --maxWidth-xs: 20rem;
    --maxWidth-sm: 24rem;
    --maxWidth-md: 28rem;
    --maxWidth-lg: 32rem;
    --maxWidth-2lg: 33.125rem;
    --maxWidth-xl: 36rem;
    --maxWidth-2xl: 42rem;
    --maxWidth-3xl: 48rem;
    --maxWidth-4xl: 56rem;
    --maxWidth-5xl: 82.5rem;
    --maxWidth-full: "100%";

    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-7: 1.875rem;
    --spacing-8: 2rem;
    --spacing-10: 2.5rem;
    --spacing-12: 3rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;
    --spacing-32: 8rem;

    --radius: 1rem;

    --fontFamily-sans: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --fontFamily-serif: "Times New Roman", Times, serif;
    --font-body: var(--fontFamily-serif);
    --font-heading: var(--fontFamily-sans);
    --fontWeight-normal: 400;
    --fontWeight-medium: 500;
    --fontWeight-semibold: 600;
    --fontWeight-bold: 700;
    --fontWeight-extrabold: 800;
    --fontWeight-black: 900;
    --fontSize-root: 16px;
    --lineHeight-none: 1;
    --lineHeight-tight: 1.1;
    --lineHeight-normal: 1.5;
    --lineHeight-relaxed: 1.625;

    /* 1.200 Minor Third Type Scale */
    --fontSize-0: 0.833rem;
    --fontSize-1: 1rem;
    --fontSize-2: 1.2rem;
    --fontSize-3: 1.44rem;
    --fontSize-4: 1.728rem;
    --fontSize-5: 2.074rem;
    --fontSize-6: 2.488rem;
    --fontSize-7: 2.986rem;

    --line-height-22: 1.375rem;
    --fontSize-18: 1.125rem;
    --fontSize-28: 1.75rem;

    --color-light: #fff;
    --color-dark: #000;
    --color-grey-dark: #1A1A1A;
    --color-text-grey-light-1: #808080;
    --color-text-grey-dark-1: #8F8F8D;
    --color-text-grey-light-2: #A1A1A1;
    --color-text-grey-dark-2: #6B6B6B;
    --color-salmon: #ff5d51;
    --color-blue: #1200da;
  }

  body {
    background-color: var(--color-dark);
    color: var(--color-light);
    font-family: var(--fontFamily-sans);
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
