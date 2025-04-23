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
}

const TextElement = styled.div<TextElementProps>`
  ${({ isCentered }) =>
    isCentered &&
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
  > h2,
  > h3,
  > h4 {
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
    font-family: 'Sentient';
    font-size: var(--fontSize-60);
    font-weight: var(--fontWeight-semiBold);
  }

  > h2 {
    font-family: 'Sentient';
    font-size: var(--fontSize-56);
    line-height: 1.2;
    margin-bottom: var(--spacing-6);
  }

  > h3 {
    font-family: 'Sentient';
    font-size: var(--fontSize-38);
    line-height: 1.2;
    font-weight: var(--fontWeight-normal);

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

  p,
  ul {
    color: ${({ theme }) => theme.textSecondary};

    font-size: var(--fontSize-24);
    font-weight: var(--fontWeight-semiBold);
    line-height: 1.3;
    max-width: 600px;

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
    margin: var(--spacing-4) 0;

    > li {
      margin: var(--spacing-2) 0;
    }
  }

  > p > img {
    max-width: 100%;
  }
`

export default TextElement
