import React, { FC } from 'react'
import styled, { ThemeConsumer, useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import ArrowedLink, { ArrowedLinkProps } from './ArrowedLink'
import Card from './Card'

interface GridCardProps {
  title: string
  subtitle: string
  link: ArrowedLinkProps
  className?: string
  bgColor?: string
  ImageComponent?: FC
  imageWidth?: string
}

let GridCard: FC<GridCardProps> = ({ className, children, title, subtitle, link, bgColor, ImageComponent }) => {
  const theme = useTheme()

  return (
    <Card className={className} bgColor={bgColor || theme.bgPrimary}>
      <div className="card-contents">
        <article>
          <div className="text-content">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <div className="content">{children}</div>
          </div>
          <ArrowedLink to={link.to} newTab={link.newTab}>
            {link.text}
          </ArrowedLink>
        </article>
        {ImageComponent && (
          <div className="image-container">
            <ImageComponent />
          </div>
        )}
      </div>
    </Card>
  )
}

// TODO: Similar code with CardEngagement and CardTextTeaser, maybe merge?
GridCard = styled(GridCard)`
  .title {
    font-size: var(--fontSize-28);
    font-weight: var(--fontWeight-semibold);
    margin-bottom: ${(props) => (props.subtitle ? 'var(--spacing-2)' : 'var(--spacing-6)')};
    color: ${({ theme }) => theme.textPrimary};
  }

  .subtitle {
    font-size: var(--fontSize-24);
    margin-bottom: var(--spacing-10);
    color: ${({ theme }) => theme.textTetriary};
  }

  .content {
    font-size: var(--fontSize-18);
    line-height: var(--lineHeight-26);
    margin-bottom: var(--spacing-10);
    color: ${({ theme }) => theme.textSecondary};
  }

  .card-contents {
    display: flex;
    flex: 1;
    justify-content: space-between;
    height: 100%;

    > article {
      width: 65%;
      padding-right: var(--spacing-4);
    }
  }

  .image-container {
    width: 35%;
    position: relative;
    margin: calc(-1 * var(--spacing-7)) calc(-1 * var(--spacing-7)) calc(-1 * var(--spacing-7)) 0;
    overflow: hidden;

    svg {
      height: auto;
      position: absolute;
      width: ${(props) => props.imageWidth || '5rem'};
      bottom: 0;
      left: 0;
      margin: auto 0;
    }
  }
`

export default GridCard
