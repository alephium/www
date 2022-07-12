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
  trackingName?: string
  link?: boolean
  tipbox?: boolean
}

const SectionTextTeaser: FC<SectionTextTeaserProps> = ({
  className,
  title,
  description,
  IconComponent,
  cardText,
  links,
  trackingName,
  link,
  tipbox
}) => (
  <div className={className}>
    <SubsectionTextHeader title={title} subtitle={description} />
    {tipbox && (
      <Card borderColor="var(--color-brown)" className="card">
        <IconComponent />
        <div>{cardText}</div>
      </Card>
    )}
    {link && (
      <Links>
        {links.map((link) => (
          <ArrowedLink
            key={link.text}
            {...link}
            trackingName={`${trackingName}:${link.text?.replaceAll(' ', '-')}-link`}
          >
            {link.text}
          </ArrowedLink>
        ))}
      </Links>
    )}
  </div>
)

export default styled(SectionTextTeaser)`
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
