import { FC } from 'react'
import styled, { useTheme, css } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

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
  narrowHeaderMobile?: boolean
  textFullWidth?: boolean
  trackingName?: string
}

const GridCard: FC<GridCardProps> = ({
  className,
  children,
  title,
  subtitle,
  link,
  primaryBackground,
  ImageComponent,
  narrowHeaderMobile,
  trackingName
}) => {
  const theme = useTheme()

  return (
    <Card className={className} bgColor={primaryBackground ? theme.bgPrimary : theme.bgSurface}>
      <div className="card-contents">
        <article>
          <div className="text-content">
            <TextSnippetStyled
              title={title}
              titleHierarchy="h3"
              subtitle={subtitle}
              narrowHeaderMobile={narrowHeaderMobile}
            >
              {children}
            </TextSnippetStyled>
          </div>
          <ArrowedLink url={link.url} trackingName={trackingName}>
            {link.text}
          </ArrowedLink>
        </article>
        {ImageComponent && <ImageComponent />}
      </div>
    </Card>
  )
}

export default styled(GridCard)`
  position: relative;
  overflow: hidden;
  border: var(--border-primary-light);

  ${({ link }) =>
    link &&
    css`
      &:hover {
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
      }
    `}

  ${({ backgroundImageUrl }) =>
    backgroundImageUrl &&
    css`
      background-image: url(${backgroundImageUrl});
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
      padding-right: var(--spacing-2);
      z-index: 1;

      ${({ textFullWidth }) =>
        !textFullWidth &&
        css`
          width: 65%;
        `}

      @media ${deviceBreakPoints.smallMobile} {
        width: 100%;
        padding-right: 0;
      }
    }
  }
`

const TextSnippetStyled = styled(TextSnippet)`
  h3 {
    margin-bottom: ${(props) => (props.subtitle ? 'var(--spacing-1)' : 'var(--spacing-4)')};
    color: ${({ theme }) => theme.textPrimary};
  }

  div {
    margin-bottom: var(--spacing-4);
    color: ${({ theme }) => theme.textSecondary};
  }

  p {
    font-size: var(--fontSize-14);
    margin-bottom: var(--spacing-5);
    color: ${({ theme }) => theme.textSecondary};
  }
`
