import React, { FC } from 'react'
import styled, { useTheme, css } from 'styled-components'

import TextSnippet from './TextSnippet'
import ArrowedLink, { ArrowedLinkProps } from './ArrowedLink'
import Card from './Card'

interface GridCardProps {
  title: string
  subtitle: string
  link: ArrowedLinkProps
  className?: string
  ImageComponent?: FC
  backgroundImageUrl?: string
  primaryBackground?: boolean
}

let GridCard: FC<GridCardProps> = ({
  className,
  children,
  title,
  subtitle,
  link,
  primaryBackground,
  ImageComponent
}) => {
  const theme = useTheme()

  return (
    <Card className={className} bgColor={primaryBackground ? theme.bgPrimary : theme.bgSurface}>
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
        {ImageComponent && <ImageComponent />}
      </div>
    </Card>
  )
}

GridCard = styled(GridCard)`
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.backgroundImageUrl &&
    css`
      background-image: url(${props.backgroundImageUrl});
      background-repeat: no-repeat;
      background-position: center top;
      background-size: cover;
    `}

  .card-contents {
    display: flex;
    flex: 1;
    justify-content: space-between;
    height: 100%;

    > article {
      width: 65%;
      padding-right: var(--spacing-2);
      z-index: 1;
    }
  }
`

const TextSnippetStyled = styled(TextSnippet)`
  h3 {
    margin-bottom: ${(props) => (props.subtitle ? 'var(--spacing-1)' : 'var(--spacing-3)')};
    color: ${({ theme }) => theme.textPrimary};
  }

  div {
    margin-bottom: var(--spacing-5);
    color: ${({ theme }) => theme.textSecondary};
  }

  p {
    margin-bottom: var(--spacing-5);
    color: ${({ theme }) => theme.textTertiary};
  }
`

export default GridCard
