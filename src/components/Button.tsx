import React, { FC } from 'react'
import styled from 'styled-components'

import Arrow from '../images/svgs/arrow-right.svg'

interface ButtonProps {
  onClick: () => void
  className?: string
}

let Button: FC<ButtonProps> = ({ onClick, className, children }) => (
  <button className={className} onClick={onClick}>
    {children}
    <Arrow className="arrow" />
  </button>
)

Button = styled(Button)`
  background-color: var(--color-blue);
  color: var(--color-white);
  border-radius: var(--radius-full);
  padding: var(--spacing-2) var(--spacing-3);
  border: 0 solid;

  /* The following rules are the same as in the ArrowedLink, maybe extract? */
  display: flex;
  align-items: center;
  font-weight: var(--fontWeight-bold);
  font-size: var(--fontSize-18);

  &:hover {
    cursor: pointer;
    filter: brightness(95%);
  }

  .arrow {
    width: 11px;
    margin-left: var(--spacing-1);
    fill: var(--color-white);
  }
`

export default Button
