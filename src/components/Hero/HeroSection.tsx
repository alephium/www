import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

export default styled.section`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  ${({ theme }) => css`
    background: linear-gradient(black 0%, black 40%, ${theme.bgSecondary}) 100%;
  `};
  transition: all 0.4s ease-in;
  display: flex;

  .navigation-menu-wrapper {
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: var(--fontSize-70);
    color: ${({ theme }) => theme.textPrimary};
    font-weight: var(--fontWeight-bold);

    @media ${deviceBreakPoints.smallMobile} {
      font-size: var(--fontSize-36);
    }
  }

  .contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    z-index: 1;

    .text-content {
      @media ${deviceBreakPoints.mobile} {
        color: ${({ theme }) => theme.textPrimary};
      }
    }
  }

  .hero-image-container {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;

    .hero-image {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 100%;
      top: 0;
    }

    @media ${deviceBreakPoints.mobile} {
      filter: brightness(0.5);
    }
  }
`
