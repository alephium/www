import React, { FC } from 'react'
import styled from 'styled-components'

import Arrow from '../images/svgs/arrow-right.svg'

export interface ArrowedLinkProps {
  className?: string
  IconComponent?: FC
  to: string
  text?: string
  newTab?: boolean
}

let ArrowedLink: FC<ArrowedLinkProps> = ({ className, children, IconComponent, to, newTab }) => (
  <a
    className={className}
    href={to}
    target={(newTab && '_blank') || undefined}
    rel={(newTab && 'noopener') || undefined}
  >
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
