import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

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
    <Card borderColor="var(--color-brown)" className="card">
      <IconComponent />
      <div>{iconText}</div>
    </Card>
    <div className="links">
      {links.map(({ to, text, newTab }) => (
        <ArrowedLink key={text} to={to} newTab={newTab}>
          {text}
        </ArrowedLink>
      ))}
    </div>
  </div>
)

SectionTextTeaser = styled(SectionTextTeaser)`
  h3 {
    font-size: var(--fontSize-28);
    line-height: var(--line-height-36);
    font-weight: var(--fontWeight-semibold);
    margin-top: 0;

    & + div {
      color: var(--color-text-grey-light-1);
      font-size: var(--line-height-18);
      line-height: var(--line-height-26);
      margin-bottom: var(--spacing-10);
    }
  }

  > .card {
    display: flex;
    gap: var(--spacing-14);
    font-size: var(--fontSize-18);
    line-height: var(--line-height-26);
    font-weight: var(--fontWeight-semibold);

    @media ${deviceBreakPoints.smallMobile} {
      flex-direction: column;
      gap: var(--spacing-6);
    }

    svg {
      width: var(--width-38);
      flex-shrink: 0;
    }
  }

  .links {
    display: flex;
    gap: var(--spacing-16);
    margin-top: var(--spacing-8);
  }
`

export default SectionTextTeaser
