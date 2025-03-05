import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface TextElementProps {
  children: ReactNode
  size?: 'small' | 'large'
  align?: 'left' | 'center'
  className?: string
}

const TextElement = ({ children, className, size = 'large', align = 'left' }: TextElementProps) => (
  <TextElementStyled className={className} size={size} align={align}>
    {children}
  </TextElementStyled>
)

export default TextElement

const TextElementStyled = styled.div<TextElementProps>`
  ${({ align }) =>
    align === 'center' &&
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
  }

  > h2,
  > h3 {
    font-weight: var(--fontWeight-medium);

    margin: 0;
    white-space: pre-wrap;
  }

  > p {
    color: var(--color-grey-250);

    ${({ size }) =>
      size === 'small' &&
      css`
        font-size: var(--fontSize-18);
        line-height: var(--lineHeight-28);
        font-weight: var(--fontWeight-normal);
      `}

    ${({ size }) =>
      size === 'large' &&
      css`
        font-size: var(--fontSize-24);
        line-height: var(--lineHeight-28);
        font-weight: var(--fontWeight-light);
      `}
  }

  > a {
    margin-right: var(--spacing-2);
    margin-top: var(--spacing-6);
  }

  &:not(:first-child) {
    margin-top: var(--spacing-8);
  }
`
