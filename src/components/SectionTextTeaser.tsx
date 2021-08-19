import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

import Card from './Card'
import ArrowedLink, { ArrowedLinkProps } from './ArrowedLink'

interface SectionTextTeaserProps {
  className?: string
  title: string
  content: string
  IconComponent: FC
  iconText: string
  links: Array<ArrowedLinkProps>
}

let SectionTextTeaser: FC<SectionTextTeaserProps> = ({ className, title, content, IconComponent, iconText, links }) => (
  <div className={className}>
    <h3>{title}</h3>
    <div>{content}</div>
    <Card borderColor="var(--color-brown)">
      <IconComponent />
      <div>{iconText}</div>
    </Card>
    <div className="links">
      {links.map(({ to, text }) => (
        <ArrowedLink to={to}>{text}</ArrowedLink>
      ))}
    </div>
  </div>
)

SectionTextTeaser = styled(SectionTextTeaser)`
  svg {
    width: var(--width-38);
  }

  .links {
    display: flex;
    gap: var(--spacing-16);
    margin-top: var(--spacing-8);
  }
`

export default SectionTextTeaser
