import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface TextElementProps {
  children: ReactNode
  isSmall?: boolean
  isBodySmall?: boolean
  isCentered?: boolean
  className?: string
}

const TextElement = styled.div<TextElementProps>`
  ${({ isCentered }) =>
    isCentered &&
    css`
      text-align: center;
    `}

  > h1 {
    font-size: var(--fontSize-56);
    line-height: var(--fontSize-56);
    font-weight: var(--fontWeight-medium);
  }

  > h2 {
    font-size: var(--fontSize-50);
    line-height: var(--fontSize-50);
  }

  > h3 {
    font-size: var(--fontSize-36);
    line-height: var(--lineHeight-50);

    ${({ isSmall }) =>
      isSmall &&
      css`
        font-size: var(--fontSize-24);
        line-height: var(--lineHeight-28);
      `}
  }

  > h2,
  > h3 {
    font-weight: var(--fontWeight-medium);

    margin: 0;
    white-space: pre-wrap;
  }

  > p,
  ul {
    color: var(--color-grey-250);

    font-size: var(--fontSize-24);
    line-height: var(--lineHeight-32);
    font-weight: var(--fontWeight-light);

    ${({ isSmall, isBodySmall }) =>
      (isSmall || isBodySmall) &&
      css`
        font-size: var(--fontSize-18);
        line-height: var(--lineHeight-28);
        font-weight: var(--fontWeight-normal);
      `}
  }

  > a {
    margin-right: var(--spacing-2);
    margin-top: var(--spacing-6);
  }

  > ul {
    margin: var(--spacing-4) 0;

    > li {
      margin: var(--spacing-2) 0;
    }
  }

  &:not(:first-child) {
    margin-top: var(--spacing-8);
  }
`

export default TextElement
