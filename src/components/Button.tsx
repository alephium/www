import { FC } from 'react'
import styled, { css } from 'styled-components'

import Arrow from '../images/svgs/arrow-right.svg'

interface ButtonProps {
  onClick?: () => void
  url?: string
  newTab?: boolean
  className?: string
}

let Button: FC<ButtonProps> = ({ onClick, className, children, url, newTab }) =>
  url ? (
    <a
      href={url}
      className={`${className} button`}
      target={(newTab && '_blank') || undefined}
      rel={(newTab && 'noopener') || undefined}
    >
      {children}
      <Arrow className="arrow" />
    </a>
  ) : (
    <button className={`${className} button`} onClick={onClick}>
      {children}
      <Arrow className="arrow" />
    </button>
  )

Button = styled(Button)`
  background-color: var(--color-blue-100);
  color: var(--color-white);
  border-radius: var(--radius-full);
  padding: var(--spacing-2) var(--spacing-3);
  border: 0 solid;
  text-decoration: none;
  display: inline-flex;

  /* The following rules are the same as in the ArrowedLink, maybe extract? */
  align-items: center;
  font-weight: var(--fontWeight-medium);
  font-size: var(--fontSize-18);
  transition: all 0.1s ease-out;

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
    transform: translateY(calc(var(--spacing-half) * -1));
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }

  .arrow {
    width: 11px;
    margin-left: var(--spacing-1);
    fill: var(--color-white);

    ${(props) =>
      props.newTab &&
      css`
        transform: rotate(-45deg);
      `}
  }
`

export default Button
