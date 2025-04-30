import { colord } from 'colord'
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

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
}

const TextElement = styled.div<TextElementProps>`
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
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
    `}
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
    }

    ${({ noHeadingsMargins }) =>
      noHeadingsMargins &&
      css`
        margin: 0;
      `}
  }

  > h1 {
    line-height: 1;
    font-family: 'Sentient';
    font-size: var(--fontSize-64);
    font-weight: var(--fontWeight-semiBold);
  }

  > h2 {
    font-family: 'Sentient';
    font-size: var(--fontSize-56);
    margin-bottom: var(--spacing-6);
    color: ${({ theme }) => theme.textPrimaryVariation};
    line-height: 1;

    small {
      font-size: inherit;
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  > h3 {
    font-family: 'InterDisplay';
    font-size: var(--fontSize-36);
    font-weight: var(--fontWeight-medium);
    margin-bottom: var(--spacing-2);

    ${({ isSmall }) =>
      isSmall &&
      css`
        font-size: var(--fontSize-24);
        line-height: var(--lineHeight-28);
      `}
  }

  > h4 {
    font-size: var(--fontSize-28);
    line-height: var(--lineHeight-36);

    ${({ isSmall }) =>
      isSmall &&
      css`
        font-size: var(--fontSize-24);
        line-height: var(--lineHeight-28);
      `}
  }

  * strong {
    color: var(--color-white);
    font-weight: inherit;
  }

  > label {
    color: ${({ theme }) => theme.textTertiary};
    font-size: var(--fontSize-16);
    font-weight: var(--fontWeight-semiBold);
    margin-bottom: var(--spacing-2);
    text-transform: uppercase;
  }

  p,
  ul {
    color: ${({ theme }) => theme.textSecondary};

    font-size: var(--fontSize-24);
    font-weight: var(--fontWeight-semiBold);
    line-height: 1.3;
    max-width: 700px;

    ${({ isCentered }) =>
      isCentered &&
      css`
        margin-left: auto;
        margin-right: auto;
      `}

    ${({ isSmall, isBodySmall }) =>
      (isSmall || isBodySmall) &&
      css`
        font-size: var(--fontSize-22);
        line-height: var(--lineHeight-28);
      `}

    > a {
      color: ${({ theme }) => theme.link};
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
    margin-top: var(--spacing-2);

    & + a {
      margin-left: var(--spacing-2);
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
