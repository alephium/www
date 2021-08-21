import React, { FC } from 'react'
import styled from 'styled-components'

interface TextSnippetProps {
  title?: string
  titleHierarchy?: 'h2' | 'h3'
  bigTitle?: boolean
  subtitle?: string
  bigSubtitle?: boolean
  smallSubtitle?: boolean
  bigText?: boolean
  className?: string
}

let TextSnippet: FC<TextSnippetProps> = ({ className, title, titleHierarchy = 'h2', subtitle, children }) => (
  <div className={className}>
    {title && (titleHierarchy === 'h2' ? <h2>{title}</h2> : <h3>{title}</h3>)}
    {subtitle && <div>{subtitle}</div>}
    {children && <p>{children}</p>}
  </div>
)

TextSnippet = styled(TextSnippet)`
  h2,
  h3 {
    font-size: ${({ bigTitle }) => (bigTitle ? 'var(--fontSize-50)' : 'var(--fontSize-28)')};
    line-height: ${({ bigTitle }) => (bigTitle ? 'var(--fontSize-50)' : 'var(--lineHeight-36)')};
    font-weight: var(--fontWeight-semibold);
    margin: 0;
  }

  div {
    font-size: ${({ smallSubtitle, bigSubtitle }) =>
      smallSubtitle ? 'var(--fontSize-14)' : bigSubtitle ? 'var(--fontSize-24)' : 'var(--fontSize-18)'};
    line-height: ${({ smallSubtitle }) => (smallSubtitle ? 'var(--lineHeight-22)' : 'var(--lineHeight-26)')};
  }

  p {
    font-size: ${({ bigText }) => (bigText ? 'var(--fontSize-18)' : 'inherit')};
    line-height: ${({ bigText }) => (bigText ? 'var(--lineHeight-26)' : 'var(--lineHeight-22)')};
  }
`
export default TextSnippet
