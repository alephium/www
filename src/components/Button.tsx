import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import Arrow from '../images/svgs/arrow-right.svg'

interface ButtonProps {
  onClick?: () => void
  url?: string
  newTab?: boolean
  className?: string
  trackingName?: string
  disabled?: boolean
  children?: ReactNode
}

const Button = ({ onClick, className, children, url, newTab, trackingName, disabled }: ButtonProps) =>
  url ? (
    <a
      href={url}
      className={`${className} button`}
      target={(newTab && '_blank') || undefined}
      rel={(newTab && 'noopener') || undefined}
      data-goatcounter-click={trackingName}
      onClick={(e) => disabled && e.preventDefault()}
    >
      {children}
      {!disabled && <Arrow className="arrow" />}
    </a>
  ) : (
    <button
      className={`${className} button`}
      onClick={onClick}
      data-goatcounter-click={trackingName}
      disabled={disabled}
    >
      {children}
      {!disabled && <Arrow className="arrow" />}
    </button>
  )

export default styled(Button)`
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  border-radius: 9px;
  padding: 8px 12px;
  border: 0 solid;
  text-decoration: none;
  display: inline-flex;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

  /* The following rules are the same as in the ArrowedLink, maybe extract? */
  align-items: center;
  font-weight: var(--fontWeight-semiBold);
  transition: all 0.1s ease-out;

  ${({ disabled }) =>
    !disabled
      ? css`
          &:hover {
            cursor: pointer;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
            opacity: 0.7;
          }
        `
      : css`
          cursor: default;
          opacity: 0.7;
        `}

  .arrow {
    width: 11px;
    margin-left: var(--spacing-1);
    fill: inherit;

    ${(props) =>
      props.newTab &&
      css`
        transform: rotate(-45deg);
      `}
  }
`
