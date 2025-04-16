import { ElementType, ReactNode } from 'react'
import styled, { css, useTheme } from 'styled-components'

import Arrow from '../images/svgs/arrow-right.svg'
import SimpleLink from './SimpleLink'

export interface ArrowedLinkProps {
  className?: string
  IconComponent?: ElementType
  url?: string
  text?: string
  openModal?: (x: boolean) => void
  altColor?: boolean
  onlyText?: boolean
  emoji?: string
  trackingName?: string
  children?: ReactNode
}

const ArrowedLink = ({
  className,
  children,
  IconComponent,
  url,
  openModal,
  altColor = false,
  emoji,
  trackingName
}: ArrowedLinkProps) => {
  const theme = useTheme()
  const color = altColor ? theme.linkAlt : theme.link

  return (
    <SimpleLinkStyled
      className={className}
      url={url}
      openModal={openModal}
      color={color}
      trackingName={trackingName}
      altColor={altColor}
      emoji={emoji}
      isExternal={!url?.startsWith('/')}
    >
      {IconComponent && <IconComponent className="icon" />}
      {children}
      {(emoji && <span className="arrow emoji">{emoji}</span>) || <Arrow className="arrow" />}
    </SimpleLinkStyled>
  )
}

export default ArrowedLink

const SimpleLinkStyled = styled(SimpleLink)<Pick<ArrowedLinkProps, 'altColor' | 'emoji'> & { isExternal?: boolean }>`
  display: flex;
  align-items: center;
  font-weight: var(--fontWeight-semiBold);
  font-size: var(--fontSize-20);

  .icon {
    width: 1rem;
    margin-right: var(--spacing-1);
    fill: ${({ theme, altColor }) => (altColor ? theme.linkAlt : theme.link)};
  }

  .arrow {
    width: 14px;
    margin-left: var(--spacing-1);
    fill: ${({ theme, altColor }) => (altColor ? theme.linkAlt : theme.link)};
    ${({ isExternal, emoji }) =>
      isExternal &&
      !emoji &&
      css`
        transform: rotate(-45deg);
      `}
    transition: all 0.1s ease-out;
  }

  &:hover {
    .arrow {
      ${(props) =>
        !props.emoji
          ? css`
              transform: translateX(var(--spacing-half)) ${props.isExternal && 'rotate(-45deg)'};
            `
          : css`
              transform: translateY(calc(var(--spacing-half) * -1));
            `};
    }

    .emoji {
    }
  }
`
