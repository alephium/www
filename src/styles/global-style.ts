import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --maxWidth-xs: 20rem;
    --maxWidth-sm: 24rem;
    --maxWidth-md: 28rem;
    --maxWidth-lg: 32rem;
    --maxWidth-xl: 36rem;
    --maxWidth-2xl: 42rem;
    --maxWidth-3xl: 48rem;
    --maxWidth-4xl: 56rem;
    --maxWidth-full: "100%";

    --page-width: 82.5rem;
    --page-width-shrinked: 68rem;

    --width-38: 2.375rem;
    --width-82: 5.125rem;
    --width-120: 7.5rem;
    --width-368: 23rem;
    --width-476: 29.75rem;
    --width-488: 30.5rem;
    --width-564: 35.25rem;
    --width-584: 36.5rem;

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
    --spacing-14: 3.5rem;
    --spacing-16: 4rem;
    --spacing-18: 4.5rem;
    --spacing-20: 5rem;
    --spacing-22: 5.5rem;
    --spacing-24: 6rem;
    --spacing-32: 8rem;
    --spacing-40: 10rem;
    --spacing-48: 12rem;
    --spacing-56: 14rem;
    --spacing-58: 14.5rem;
    --spacing-60: 15rem;
    --spacing-70: 17.5rem;
    --spacing-80: 20rem;

    --radius: 1rem;
    --radius-full: 9999px;

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

    --lineHeight-22: 1.375rem;
    --lineHeight-26: 1.625rem;
    --lineHeight-36: 2.25rem;
    --fontSize-14: 0.875rem;
    --fontSize-18: 1.125rem;
    --fontSize-24: 1.5rem;
    --fontSize-28: 1.75rem;
    --fontSize-50: 3.125rem;
    --fontSize-70: 4.375rem;

    --color-light: #fff;
    --color-light-1: #f8f8f8;
    --color-text-grey-light-1: #808080;

    --color-dark: #000;
    --color-text-grey-dark-1: #8F8F8D;
    --color-text-grey-dark-3: #737373;

    --color-dark-1: #111;
    --color-grey-dark: #1A1A1A;
    --color-grey-dark-2: #343434;
    --color-grey-light: #f5f5f5;
    --color-grey-light-1: #ddd;
    --color-text-grey-light-2: #A1A1A1;
    --color-text-grey-light-3: #ccc;
    --color-text-grey-light-4: #707070;
    --color-text-grey-dark-2: #6B6B6B;
    --color-salmon: #ff5d51;
    --color-blue: #1200da;
    --color-blue-2: #479CFF;
    --color-brown: #393535;
  }

  body {
    /* TODO: Remove and use theme instead */
    background-color: var(--color-dark);
    color: var(--color-light);
    font-family: var(--fontFamily-sans);
  }
`

export const deviceSizes = {
  smallMobile: 528,
  mobile: 1024,
  desktop: 1920
}

export const deviceBreakPoints = {
  smallMobile: `(max-width: ${deviceSizes.smallMobile}px)`,
  mobile: `(max-width: ${deviceSizes.mobile}px)`,
  desktop: `(max-width: ${deviceSizes.desktop}px)`
}

export default GlobalStyle
