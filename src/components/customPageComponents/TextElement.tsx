import { colord } from 'colord'
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

export interface TextElementProps {
  children?: ReactNode
  isSmall?: boolean
  isBodySmall?: boolean
  isCentered?: boolean
  noMargin?: boolean
  className?: string
  noHeadingsMargins?: boolean
  noTextCentering?: boolean
  backgroundColor?: string
  isFootnote?: boolean
}

const TextElement = styled.div<TextElementProps>`
  position: relative;

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background: linear-gradient(to right, ${backgroundColor}, transparent);
    `};

  * {
    ${({ backgroundColor }) =>
      backgroundColor &&
      css`
        color: ${colord(backgroundColor).isLight() ? 'var(--color-black)' : 'var(--color-white)'} !important;
      `}
  }

  ${({ isCentered, noTextCentering }) =>
    isCentered &&
    !noTextCentering &&
    css`
      text-align: center;
    `};

  ${({ isCentered }) =>
    isCentered &&
    css`
      * > hr {
        background: linear-gradient(
          to right,
          transparent 25%,
          ${({ theme }) => theme.borderPrimary} 50%,
          transparent 75%
        );
      }
    `};

  ${({ noMargin }) =>
    noMargin &&
    css`
      * {
        margin: 0;
      }
    `}
  > h1,
    > h2, > h3, > h4 {
    font-weight: var(--fontWeight-medium);
    color: ${({ theme }) => theme.textPrimary};
    white-space: pre-wrap;

    &:first-child {
      margin-top: 0;
      padding-top: 0;
    }

    ${({ noHeadingsMargins }) =>
      noHeadingsMargins &&
      css`
        margin: 0;
      `}
  }

  > h1 {
    font-family: 'InterDisplay';
    line-height: 0.9;

    font-size: var(--fontSize-76);
    font-weight: var(--fontWeight-medium);

    ${({ isSmall }) =>
      isSmall &&
      css`
        font-size: var(--fontSize-50);
        line-height: 1;
      `}

    + p {
      font-size: var(--fontSize-26);
    }

    @media ${deviceBreakPoints.mobile} {
      font-size: var(--fontSize-64);
    }
  }

  > h2 {
    font-family: 'InterDisplay';
    font-size: var(--fontSize-50);
    margin-bottom: var(--spacing-4);
    font-weight: var(--fontWeight-medium);
    color: ${({ theme }) => theme.textPrimary};
    line-height: 1;

    small {
      font-size: inherit;
      color: ${({ theme }) => theme.textSecondary};
    }

    hr {
      height: 3px;
      background: linear-gradient(to right, ${({ theme }) => theme.borderPrimary}, transparent 50%);
      border: none;
    }

    @media ${deviceBreakPoints.mobile} {
      font-size: var(--fontSize-50);
    }
  }

  > h3 {
    font-family: 'InterDisplay';
    font-size: var(--fontSize-32);
    font-weight: var(--fontWeight-medium);
    margin-bottom: var(--spacing-2);

    ${({ isSmall }) =>
      isSmall &&
      css`
        font-size: var(--fontSize-24);
        line-height: var(--lineHeight-28);
      `}

    ${({ isCentered }) =>
      isCentered &&
      css`
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      `}

      ${({ isFootnote }) =>
      isFootnote &&
      css`
        font-size: var(--fontSize-18);
        line-height: var(--lineHeight-24);
      `}
  }

  > h4 {
    font-size: var(--fontSize-28);
    line-height: var(--lineHeight-36);
    font-weight: var(--fontWeight-medium);

    ${({ isSmall }) =>
      isSmall &&
      css`
        font-size: var(--fontSize-24);
        line-height: var(--lineHeight-28);
      `}
  }

  * strong {
    color: ${({ theme }) => theme.textPrimary};
    font-weight: var(--fontWeight-medium);
  }

  > label {
    color: ${({ theme }) => theme.textSecondary};
    font-size: var(--fontSize-14);
    font-weight: var(--fontWeight-medium);
    margin-bottom: var(--spacing-2);
    text-transform: uppercase;
  }

  p,
  ul {
    color: ${({ theme }) => theme.textSecondary};

    font-size: var(--fontSize-22);
    font-weight: var(--fontWeight-medium);
    line-height: 1.3;
    max-width: 700px;
    margin: 0;

    ${({ isCentered }) =>
      isCentered &&
      css`
        margin-left: auto;
        margin-right: auto;
      `}

    ${({ isSmall, isBodySmall }) =>
      (isSmall || isBodySmall) &&
      css`
        font-size: var(--fontSize-18);
        line-height: var(--lineHeight-28);
      `}

    ${({ isFootnote }) =>
      isFootnote &&
      css`
        font-size: var(--fontSize-18);
        font-weight: var(--fontWeight-normal);
        line-height: var(--lineHeight-24);
      `}

    > a {
      color: ${({ theme }) => theme.link};
    }

    &:first-child {
      padding-top: 0;
    }
  }

  /* Links inside paragraphs, lists, etc. */
  p,
  li,
  ul,
  em {
    > a {
      color: ${({ theme }) => theme.link};
    }
  }

  /* Buttons */
  > a {
    margin-top: var(--spacing-4);

    & + a {
      margin-left: var(--spacing-2);

      @media ${deviceBreakPoints.mobile} {
        margin-top: var(--spacing-1);
        margin-right: var(--spacing-1);
        margin-left: var(--spacing-1);
      }
    }
  }

  > ul {
    padding-inline-start: 0;
    padding-left: 10px;
    list-style-type: none;
    color: ${({ theme }) => theme.textPrimary};

    > li {
      position: relative;
      padding-left: 1.5em;
      margin-bottom: var(--spacing-2);

      &:before {
        content: '—';
        position: absolute;
        left: 0;
        top: 0;
        line-height: 1.3; /* Align the dash with text */
      }

      > span {
        display: block;
      }
    }
  }

  > p > img {
    max-width: 100%;
  }
`

export default TextElement
