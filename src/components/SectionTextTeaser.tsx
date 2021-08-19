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
    <Card>
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
  .links {
    display: flex;
  }
`

export default SectionTextTeaser
