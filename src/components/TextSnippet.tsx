import { HTMLMotionProps, motion } from 'framer-motion'
import { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

interface TextSnippetProps extends HTMLMotionProps<'div'> {
  title?: string
  titleHierarchy?: 'h2' | 'h3'
  bigTitle?: boolean
  subtitle?: string
  bigSubtitle?: boolean
  smallSubtitle?: boolean
  bigText?: boolean
  className?: string
  narrowHeaderMobile?: boolean
  children?: ReactNode
}

let TextSnippet: FC<TextSnippetProps> = ({ className, title, titleHierarchy = 'h2', subtitle, children, ...props }) => (
  <motion.div className={className} {...props}>
    {title && (titleHierarchy === 'h2' ? <h2>{title}</h2> : <h3>{title}</h3>)}
    {subtitle && <div className="text-subtitle">{subtitle}</div>}
    {children && <div className="text-content">{children}</div>}
  </motion.div>
)

TextSnippet = styled(TextSnippet)`
  > h2,
  > h3 {
    font-size: ${({ bigTitle }) => (bigTitle ? 'var(--fontSize-56)' : 'var(--fontSize-28)')};
    line-height: ${({ bigTitle }) => (bigTitle ? 'var(--fontSize-56)' : 'var(--lineHeight-36)')};
    margin: 0;
  }

  > h3 + .text-subtitle {
    padding-top: 12px;
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
    font-weight: var(--fontWeight-normal);
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
