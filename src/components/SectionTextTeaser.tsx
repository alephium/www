import { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import SubsectionTextHeader from './SubsectionTextHeader'
import ArrowedLink from './ArrowedLink'
import { graphql } from 'gatsby'
import { notEmpty } from '../utils/misc'

interface SectionTextTeaserProps extends Queries.SectionTextTeaserFragment {
  className?: string
  IconComponent: FC
  trackingName?: string
}

export const query = graphql`
  fragment SectionTextTeaser on MarkdownRemarkFrontmatterPageSectionTextImageAlternateContentSections {
    title
    description
    links {
      text
      url
    }
  }
`

const SectionTextTeaser: FC<SectionTextTeaserProps> = ({ className, title, description, links, trackingName }) => (
  <SectionTextTeaserStyled className={className}>
    {title && description && <SubsectionTextHeader title={title} subtitle={description} />}
    {links && (
      <Links>
        {links.filter(notEmpty).map(
          ({ text, url }) =>
            text &&
            url && (
              <ArrowedLink key={text} url={url} trackingName={`${trackingName}:${text?.replaceAll(' ', '-')}-link`}>
                {text}
              </ArrowedLink>
            )
        )}
      </Links>
    )}
  </SectionTextTeaserStyled>
)

export default SectionTextTeaser

const SectionTextTeaserStyled = styled.div`
  > .card {
    display: flex;
    gap: var(--spacing-7);
    font-size: var(--fontSize-18);
    line-height: var(--lineHeight-26);
    font-weight: var(--fontWeight-medium);
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
