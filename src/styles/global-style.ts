import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
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
    --spacing-32: 8rem;
    --spacing-40: 10rem;
    --spacing-48: 12rem;
    --spacing-50: 12.5rem;
    --spacing-56: 14rem;
    --spacing-58: 14.5rem;
    --spacing-60: 15rem;
    --spacing-70: 17.5rem;
    --spacing-80: 20rem;

    /* Spatial system with 8pt linear scale */
    /* Inspiration: https://www.designsystems.com/space-grids-and-layouts/ */
    --spatial-8-half: 0.25rem; // 4pt
    --spatial-8-1: 0.5rem;     // 8pt
    --spatial-8-2: 1rem;       // 16pt
    --spatial-8-3: 1.5rem;     // 24pt
    --spatial-8-4: 2rem;       // 32pt
    --spatial-8-5: 2.5rem;     // 40pt
    --spatial-8-6: 3rem;       // 48pt
    --spatial-8-7: 3.5rem;     // 56pt
    --spatial-8-8: 4rem;       // 64pt
    --spatial-8-9: 4.5rem;     // 72pt
    --spatial-8-10: 5rem;      // 80pt
    --spatial-8-11: 5.5rem;    // 88pt
    --spatial-8-12: 6rem;      // 96pt
    --spatial-8-13: 6.5rem;    // 104pt
    --spatial-8-14: 7rem;      // 112pt
    --spatial-8-15: 7.5rem;    // 120pt
    --spatial-8-16: 8rem;      // 128pt
    --spatial-8-17: 8.5rem;    // 136pt
    --spatial-8-18: 9rem;      // 144pt
    --spatial-8-19: 9.5rem;    // 152pt
    --spatial-8-20: 10rem;     // 160pt
    --spatial-8-21: 10.5rem;   // 168pt
    --spatial-8-22: 11rem;     // 176pt
    --spatial-8-23: 11.5rem;   // 184pt
    --spatial-8-24: 12rem;     // 192pt
    --spatial-8-25: 12.5rem;   // 200pt
    --spatial-8-26: 13rem;     // 208pt
    --spatial-8-27: 13.5rem;   // 216pt
    --spatial-8-28: 14rem;     // 224pt
    --spatial-8-29: 14.5rem;   // 232pt
    --spatial-8-30: 15rem;     // 240pt

    --radius: 1rem;
    --radius-full: 9999px;

    --fontFamily-sans: Inter, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    --fontFamily-serif: "Times New Roman", Times, serif;
    --font-heading: var(--fontFamily-sans);
    --fontWeight-normal: 400;
    --fontWeight-medium: 500;
    --fontWeight-bold: 600;

    /* TODO: Maybe check https://www.designsystems.com/typography-guides/ for
    inspiration in defining a typography system */
    --fontSize-14: 0.875rem;
    --fontSize-18: 1.125rem;
    --fontSize-24: 1.5rem;
    --fontSize-28: 1.75rem;
    --fontSize-50: 3.125rem;
    --fontSize-70: 4.375rem;
    --lineHeight-22: 1.375rem;
    --lineHeight-26: 1.625rem;
    --lineHeight-36: 2.25rem;

    --color-light: #fff;
    --color-light-1: #f8f8f8;
    --color-text-grey-light-1: #808080;
    --color-dark: #000;
    --color-text-grey-dark-1: #8F8F8D;
    --color-text-grey-dark-3: #737373;
    --color-dark-1: #111;
    --color-grey-dark: #1A1A1A;
    --color-grey-dark-2: #343434;
    --color-grey-dark-3: #262626;
    --color-grey-light: #f5f5f5;
    --color-grey-light-1: #ddd;
    --color-text-grey-light-2: #A1A1A1;
    --color-text-grey-light-3: #ccc;
    --color-text-grey-light-4: #707070;
    --color-salmon: #ff5d51;
    --color-blue: #1200da;
    --color-blue-2: #479CFF;
    --color-brown: #393535;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    /* TODO: Remove colors and use theme instead */
    background-color: var(--color-dark);
    color: var(--color-light);
    font-family: var(--fontFamily-sans);
  }

  main {
    overflow: hidden;
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
