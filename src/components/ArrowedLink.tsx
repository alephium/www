import React, { FC } from 'react'
import styled from 'styled-components'

import SimpleLink from './SimpleLink'

import Arrow from '../images/svgs/arrow-right.svg'

export interface ArrowedLinkProps {
  className?: string
  IconComponent?: FC
  to: string
  text?: string
  newTab?: boolean
}

let ArrowedLink: FC<ArrowedLinkProps> = ({ className, children, IconComponent, to, newTab }) => (
  <SimpleLink className={className} to={to} newTab={newTab}>
    {IconComponent && <IconComponent className="icon" />}
    {children}
    <Arrow className="arrow" />
  </SimpleLink>
)

ArrowedLink = styled(ArrowedLink)`
  display: flex;
  align-items: center;
  font-weight: var(--fontWeight-semibold);
  font-size: var(--fontSize-18);

  &:hover {
    .arrow {
      transform: rotate(-45deg);
    }
  }

  .icon {
    width: 1rem;
    margin-right: var(--spacing-2);
    fill: ${({ theme }) => theme.link};
  }

  .arrow {
    width: 11px;
    margin-left: var(--spacing-2);
    transition: transform 0.2s ease;
    fill: ${({ theme }) => theme.link};
  }
`

export default ArrowedLink
