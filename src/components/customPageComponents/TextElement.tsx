import { ReactNode } from 'react'
import styled from 'styled-components'

interface TextElementProps {
  children: ReactNode
  className?: string
}

const TextElement = ({ children, className }: TextElementProps) => (
  <TextElementStyled className={className}>{children}</TextElementStyled>
)

export default TextElement

const TextElementStyled = styled.div`
  > h2,
  > h3 {
    font-size: var(--fontSize-36);
    line-height: var(--lineHeight-50);
    margin: 0;
    font-weight: var(--fontWeight-medium);
    white-space: pre-wrap;
  }

  > p {
    font-size: inherit;
    line-height: var(--lineHeight-22);
    font-weight: var(--fontWeight-normal);
    color: var(--color-grey-250);
  }
`
