import { FC } from 'react'
import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

interface TextSnippetProps {
  title?: string
  titleHierarchy?: 'h2' | 'h3'
  bigTitle?: boolean
  subtitle?: string
  bigSubtitle?: boolean
  smallSubtitle?: boolean
  bigText?: boolean
  className?: string
  narrowHeaderMobile?: boolean
}

let TextSnippet: FC<TextSnippetProps> = ({ className, title, titleHierarchy = 'h2', subtitle, children }) => (
  <div className={className}>
    {title && (titleHierarchy === 'h2' ? <h2>{title}</h2> : <h3>{title}</h3>)}
    {subtitle && <div className="text-subtitle">{subtitle}</div>}
    {children && <div className="text-content">{children}</div>}
  </div>
)

TextSnippet = styled(TextSnippet)`
  > h2,
  > h3 {
    font-size: ${({ bigTitle }) => (bigTitle ? 'var(--fontSize-50)' : 'var(--fontSize-28)')};
    line-height: ${({ bigTitle }) => (bigTitle ? 'var(--fontSize-50)' : 'var(--lineHeight-36)')};
    font-weight: var(--fontWeight-semiBold);
    margin: 0;
  }

  > h3 + .text-subtitle {
    padding-top: 12px;
    font-weight: var(--fontWeight-semiBold);
  }

  .text-subtitle {
    font-size: ${({ smallSubtitle, bigSubtitle }) =>
      smallSubtitle ? 'var(--fontSize-14)' : bigSubtitle ? 'var(--fontSize-24)' : 'var(--fontSize-18)'};
    line-height: ${({ smallSubtitle }) => (smallSubtitle ? 'var(--lineHeight-22)' : 'var(--lineHeight-28)')};
    color: var(--color-grey-250);
  }

  .text-content {
    font-size: ${({ bigText }) => (bigText ? 'var(--fontSize-18)' : 'inherit')};
    line-height: ${({ bigText }) => (bigText ? 'var(--lineHeight-28)' : 'var(--lineHeight-22)')};
    font-weight: var(--fontWeight-semiBold);
    color: var(--color-grey-250);
  }

  @media ${deviceBreakPoints.mobile} {
    h2,
    h3,
    .text-subtitle {
      ${({ narrowHeaderMobile }) =>
        narrowHeaderMobile &&
        css`
          width: 65%;
        `}
    }
  }
`
export default TextSnippet
