import React, { FC } from 'react'
import styled from 'styled-components'

import ArrowedLink, { ArrowedLinkProps } from './ArrowedLink'

interface CardTextTeaserProps {
  title: string
  subtitle?: string
  link: ArrowedLinkProps
  className?: string
}

let CardTextTeaser: FC<CardTextTeaserProps> = ({ title, subtitle, children, link, className }) => (
  <article className={className}>
    <div className="text-content">
      <div className="title">{title}</div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
      <div className="content">{children}</div>
    </div>
    <ArrowedLink to={link.to} newTab={link.newTab}>
      {link.text}
    </ArrowedLink>
  </article>
)

CardTextTeaser = styled(CardTextTeaser)`
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
    margin-bottom: ${(props) => (props.subtitle ? 'var(--spacing-2)' : 'var(--spacing-6)')};
  }

  .subtitle {
    color: var(--color-text-grey-light-3);
    font-size: var(--fontSize-14);
    margin-bottom: var(--spacing-3);
  }

  .content {
    color: var(--color-text-grey-light-1);
    line-height: var(--line-height-22);
  }
`

export default CardTextTeaser
