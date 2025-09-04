import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export const deviceSizes = {
  smallMobile: 528,
  ipad: 768,
  mobile: 1024,
  desktop: 1920
}

export const deviceBreakPoints = {
  smallMobile: `(max-width: ${deviceSizes.smallMobile}px)`,
  ipad: `(max-width: ${deviceSizes.ipad}px)`,
  mobile: `(max-width: ${deviceSizes.mobile}px)`,
  desktop: `(max-width: ${deviceSizes.desktop}px)`
}

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  :root {
    font-size: 15px;

    @media ${deviceBreakPoints.mobile} {
      font-size: 13px;
    }

    --page-width: min(80vw, 1200px);
    --page-width-shrinked: 68rem;

    --width-16: 1rem;
    --width-38: 2.375rem;
    --width-82: 5.125rem;
    --width-120: 7.5rem;
    --width-368: 23rem;
    --width-476: 29.75rem;
    --width-488: 30.5rem;
    --width-564: 35.25rem;
    --width-584: 36.5rem;

    /* Spatial system with 8pt linear scale */
    /* Inspiration: https://www.designsystems.com/space-grids-and-layouts/ */
    --spacing-half: 0.25rem; // 4pt
    --spacing-1: 0.5rem;     // 8pt
    --spacing-2: 1rem;       // 16pt
    --spacing-3: 1.5rem;     // 24pt
    --spacing-4: 2rem;       // 32pt
    --spacing-5: 2.5rem;     // 40pt
    --spacing-6: 3rem;       // 48pt
    --spacing-7: 3.5rem;     // 56pt
    --spacing-8: 4rem;       // 64pt
    --spacing-9: 4.5rem;     // 72pt
    --spacing-10: 5rem;      // 80pt
    --spacing-11: 5.5rem;    // 88pt
    --spacing-12: 6rem;      // 96pt
    --spacing-13: 6.5rem;    // 104pt
    --spacing-14: 7rem;      // 112pt
    --spacing-15: 7.5rem;    // 120pt
    --spacing-16: 8rem;      // 128pt
 /* --spacing-17: 8.5rem;    // 136pt
    --spacing-18: 9rem;      // 144pt
    --spacing-19: 9.5rem;    // 152pt */
    --spacing-20: 10rem;     // 160pt
 /* --spacing-21: 10.5rem;   // 168pt
    --spacing-22: 11rem;     // 176pt
    --spacing-23: 11.5rem;   // 184pt */
    --spacing-24: 12rem;     // 192pt
    --spacing-25: 12.5rem;   // 200pt
 /* --spacing-26: 13rem;     // 208pt
    --spacing-27: 13.5rem;   // 216pt */
    --spacing-28: 14rem;     // 224pt
    --spacing-29: 14.5rem;   // 232pt
    --spacing-30: 15rem;     // 240pt
    --spacing-31: 15.5rem;   // 248pt
    --spacing-32: 16rem;     // 256pt
    --spacing-33: 16.5rem;   // 264pt
    --spacing-34: 17rem;     // 272pt
    --spacing-35: 17.5rem;   // 280pt

    --radius-tiny: 4px;
    --radius-small: 7px;
    --radius: 10px;
    --radius-big: 14px;
    --radius-huge: 28px;
    --radius-full: 9999px;

    --fontFamily-sans: "InterDisplay", "Geist", system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    --fontFamily-serif: "Times New Roman", Times, serif;
    --font-heading: var(--fontFamily-sans);
    --fontWeight-light: 300;
    --fontWeight-normal: 400;
    --fontWeight-medium: 500;
    --fontWeight-semiBold: 600;
    --fontWeight-bold: 700;

    /* TODO: Maybe check https://www.designsystems.com/typography-guides/ for
    inspiration in defining a typography system */
    --fontSize-14: 0.875rem;
    --fontSize-16: 1rem;
    --fontSize-18: 1.125rem;
    --fontSize-20: 1.2rem;
    --fontSize-22: 1.33rem;
    --fontSize-24: 1.5rem;
    --fontSize-26: 1.66rem;
    --fontSize-28: 1.75rem;
    --fontSize-32: 2rem;
    --fontSize-36: 2.25rem;
    --fontSize-38: 2.33rem;
    --fontSize-40: 2.5rem;
    --fontSize-42: 2.75rem;
    --fontSize-50: 3.125rem;
    --fontSize-56: 3.5rem;
    --fontSize-58: 3.75rem;
    --fontSize-60: 4.0rem;
    --fontSize-64: 4.2rem;
    --fontSize-68: 4.25rem;
    --fontSize-70: 4.375rem;
    --fontSize-72: 4.5rem;
    --fontSize-76: 4.75rem;
    --fontSize-80: 5rem;
    --lineHeight-22: 1.375rem;
    --lineHeight-26: 1.625rem;
    --lineHeight-28: 1.75rem;
    --lineHeight-32: 2.00rem;
    --lineHeight-36: 2.25rem;

    --color-white: #fff;
    --color-grey: #f5f5f5;
    --color-grey-100: #e8e8e8;
    --color-grey-200: #d2d2d2;
    --color-grey-250: #c7c7c7;
    --color-grey-300: #868686;
    --color-grey-400: #6e6e6e;
    --color-grey-500: #4a4a4a;
    --color-grey-550: #464646;
    --color-grey-600: #424242;
    --color-grey-700: #353535;
    --color-grey-750: #2c2c2c;
    --color-grey-800: #282828;
    --color-grey-850: #232323;
    --color-grey-900: #171717;
    --color-grey-950: #121212;
    --color-black: #000;
    --color-salmon: #ff5d51;
    --color-blue: #4899ff;
    --color-blue-100: #4D6DE0;;
    --color-blue-200: #1200da;
    --color-brown: #393535;

    --color-logo-yellow-light: rgb(255, 199, 59);
    --color-logo-yellow-dark: rgb(55, 55, 55);
    --color-logo-black-light: rgb(90, 90, 90);
    --color-logo-black-dark: rgb(43, 43, 43);

    --border-primary-dark: 1px solid rgb(255, 255, 255, 0.1);
    --border-primary-light: 1px solid rgb(0, 0, 0, 0.08);
  }

  body {
    background-color: ${({ theme }) => theme.background3};
    color: ${({ theme }) => theme.textPrimary};
    font-family: var(--fontFamily-sans);
  }

  b {
    font-weight: 600;
  }
`

export default GlobalStyle
