import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'

import TextSnippet from './TextSnippet'
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
            <TextSnippetStyled title={title} titleHierarchy="h3" subtitle={subtitle} bigSubtitle bigText>
              {children}
            </TextSnippetStyled>
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

const TextSnippetStyled = styled(TextSnippet)`
  h3 {
    font-weight: var(--fontWeight-bold);
    margin-bottom: ${(props) => (props.subtitle ? 'var(--spacing-2)' : 'var(--spacing-6)')};
    color: ${({ theme }) => theme.textPrimary};
  }

  div {
    margin-bottom: var(--spacing-10);
    color: ${({ theme }) => theme.textTetriary};
  }

  p {
    margin-bottom: var(--spacing-10);
    color: ${({ theme }) => theme.textSecondary};
  }
`

export default GridCard
