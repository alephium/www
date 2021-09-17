import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import Card from './Card'
import SubsectionTextHeader from './SubsectionTextHeader'
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
    <SubsectionTextHeader title={title} subtitle={content} />
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
  > .card {
    display: flex;
    gap: var(--spacing-7);
    font-size: var(--fontSize-18);
    line-height: var(--lineHeight-26);
    font-weight: var(--fontWeight-medium);
    margin-top: var(--spacing-5);

    @media ${deviceBreakPoints.smallMobile} {
      flex-direction: column;
      gap: var(--spacing-3);
    }

    svg {
      width: var(--width-38);
      flex-shrink: 0;
      fill: ${({ theme }) => theme.textPrimary};
    }
  }

  .links {
    display: flex;
    gap: var(--spacing-8);
    margin-top: var(--spacing-4);
  }
`

export default SectionTextTeaser
