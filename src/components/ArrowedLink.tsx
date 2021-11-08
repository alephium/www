import { FC } from 'react'
import styled, { css, useTheme } from 'styled-components'

import SimpleLink from './SimpleLink'

import Arrow from '../images/svgs/arrow-right.svg'

export interface ArrowedLinkProps {
  className?: string
  IconComponent?: FC
  url?: string
  text?: string
  newTab?: boolean
  openModal?: (x: boolean) => void
  altColor?: boolean
  onlyText?: boolean
}

let ArrowedLink: FC<ArrowedLinkProps> = ({
  className,
  children,
  IconComponent,
  url,
  newTab,
  openModal,
  altColor = false,
  onlyText = false
}) => {
  const theme = useTheme()
  const color = altColor ? theme.linkAlt : theme.link

  return (
    <SimpleLink className={className} url={url} newTab={newTab} openModal={openModal} color={color} onlyText={onlyText}>
      {IconComponent && <IconComponent className="icon" />}
      {children}
      <Arrow className="arrow" />
    </SimpleLink>
  )
}

ArrowedLink = styled(ArrowedLink)`
  display: flex;
  align-items: center;
  font-weight: var(--fontWeight-medium);
  font-size: var(--fontSize-18);

  .icon {
    width: 1rem;
    margin-right: var(--spacing-1);
    fill: ${({ theme, altColor }) => (altColor ? theme.linkAlt : theme.link)};
  }

  .arrow {
    width: 11px;
    margin-left: var(--spacing-1);
    fill: ${({ theme, altColor }) => (altColor ? theme.linkAlt : theme.link)};
    ${(props) =>
      props.newTab &&
      css`
        transform: rotate(-45deg);
      `}
    transition: all 0.1s ease-out;
  }

  &:hover {
    .arrow {
      ${(props) =>
        css`
          transform: translateX(var(--spacing-half)) ${props.newTab && 'rotate(-45deg)'};
        `};
    }
  }
`

export default ArrowedLink
