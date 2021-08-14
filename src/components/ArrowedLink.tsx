import React, { FC } from 'react'
import styled from 'styled-components'

import Arrow from '../images/arrow-right.svg'

interface ArrowedLinkProps {
  className?: string
  IconComponent?: FC
  to: string
}

let ArrowedLink: FC<ArrowedLinkProps> = ({ className, children, IconComponent, to }) => (
  <a className={className} href={to} target="_blank" rel="noopener">
    {IconComponent && <IconComponent className="icon" />}
    {children}
    <Arrow className="arrow" />
  </a>
)

ArrowedLink = styled(ArrowedLink)`
  display: flex;
  align-items: center;
  font-weight: var(--fontWeight-semibold);
  font-size: var(--fontSize-18);
  text-decoration: none;
  color: var(--color-light);

  &:hover {
    .arrow {
      transform: rotate(-45deg);
    }
  }

  .icon {
    width: 1rem;
    margin-right: var(--spacing-2);
  }

  .arrow {
    width: 11px;
    margin-left: var(--spacing-2);
    transition: transform 0.2s ease;
  }
`

export default ArrowedLink
