import { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import Card from './Card'
import SubsectionTextHeader from './SubsectionTextHeader'
import ArrowedLink, { ArrowedLinkProps } from './ArrowedLink'

interface SectionTextTeaserProps {
  className?: string
  title: string
  description: string
  IconComponent: FC
  cardText: string
  links: Array<ArrowedLinkProps>
}

let SectionTextTeaser: FC<SectionTextTeaserProps> = ({
  className,
  title,
  description,
  IconComponent,
  cardText,
  links
}) => (
  <div className={className}>
    <SubsectionTextHeader title={title} subtitle={description} />
    <Card borderColor="var(--color-brown)" className="card">
      <IconComponent />
      <div>{cardText}</div>
    </Card>
    <Links>
      {links.map((link) => (
        <ArrowedLink key={link.text} {...link}>
          {link.text}
        </ArrowedLink>
      ))}
    </Links>
  </div>
)

SectionTextTeaser = styled(SectionTextTeaser)`
  > .card {
    display: flex;
    gap: var(--spacing-7);
    font-size: var(--fontSize-18);
    line-height: var(--lineHeight-26);
    font-weight: var(--fontWeight-semiBold);
    margin-top: var(--spacing-5);
    align-items: center;

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
`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-8);
  margin-top: var(--spacing-4);
`

export default SectionTextTeaser
