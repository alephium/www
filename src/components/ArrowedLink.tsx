import React, { FC } from 'react'
import styled, { css } from 'styled-components'

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
  font-weight: var(--fontWeight-medium);
  font-size: var(--fontSize-18);

  .icon {
    width: 1rem;
    margin-right: var(--spacing-1);
    fill: ${({ theme }) => theme.link};
  }

  .arrow {
    width: 11px;
    margin-left: var(--spacing-1);
    fill: ${({ theme }) => theme.link};
    ${(props) =>
      props.newTab &&
      css`
        transform: rotate(-45deg);
      `}
  }
`

export default ArrowedLink
