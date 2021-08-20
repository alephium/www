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
  background-color: var(--color-blue-2);
  color: var(--color-light);
  border-radius: var(--radius-full);
  padding: var(--spacing-4) var(--spacing-6);
  border: 0 solid;

  /* The following rules are the same as in the ArrowedLink, maybe extract? */
  display: flex;
  align-items: center;
  font-weight: var(--fontWeight-semibold);
  font-size: var(--fontSize-18);

  &:hover {
    cursor: pointer;

    .arrow {
      transform: rotate(-45deg);
    }
  }

  .arrow {
    width: 11px;
    margin-left: var(--spacing-2);
    transition: transform 0.2s ease;
    fill: var(--color-light);
  }
`

export default Button
