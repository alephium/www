import React, { FC } from 'react'
import styled from 'styled-components'

import ArrowedLink from './ArrowedLink'

interface TextTeaserProps {
  title: string
  subtitle?: string
  link: string
  className?: string
}

let TextTeaser: FC<TextTeaserProps> = ({ title, subtitle, children, link, className }) => (
  <article className={className}>
    <div className="text-content">
      <div className="title">{title}</div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
      <div className="content">{children}</div>
    </div>
    <ArrowedLink to="#">{link}</ArrowedLink>
  </article>
)

TextTeaser = styled(TextTeaser)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  .text-content {
    margin-bottom: var(--spacing-4);
  }

  .title {
    font-size: var(--fontSize-28);
    font-weight: var(--fontWeight-semibold);
    margin-bottom: var(--spacing-6);
  }

  .content {
    color: var(--color-text-grey-light-1);
    line-height: var(--line-height-22);
  }
`

export default TextTeaser
