import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import Arrow from '../images/svgs/arrow-right.svg'

interface ButtonProps {
  onClick?: () => void
  url?: string
  squared?: boolean
  textAlign?: 'left' | 'center'
  big?: boolean
  className?: string
  trackingName?: string
  disabled?: boolean
  children?: ReactNode
}

const Button = ({ onClick, className, children, url, trackingName, disabled, big }: ButtonProps) =>
  url ? (
    <a
      href={url}
      className={`${className} button`}
      target={(!url?.startsWith('/') && '_blank') || undefined}
      rel={(!url?.startsWith('/') && 'noopener') || undefined}
      data-goatcounter-click={trackingName}
      onClick={(e) => disabled && e.preventDefault()}
    >
      {children}
      {!disabled && <ArrowStyled className="arrow" isExternal={!url?.startsWith('/')} />}
    </a>
  ) : (
    <button
      className={`${className} button`}
      onClick={onClick}
      data-goatcounter-click={trackingName}
      disabled={disabled}
    >
      {children}
      {!disabled && <ArrowStyled className="arrow" isExternal={!url?.startsWith('/')} />}
    </button>
  )

export default styled(Button)`
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  border-radius: ${({ squared }) => (squared ? '9px' : '50px')};
  padding: 12px 20px;
  border: 0 solid;
  text-decoration: none;
  display: inline-flex;
  justify-content: ${({ textAlign }) => (textAlign === 'left' ? 'flex-start' : 'center')};

  /* The following rules are the same as in the ArrowedLink, maybe extract? */
  align-items: center;
  font-weight: var(--fontWeight-semiBold);
  font-size: ${({ big }) => (big ? 'var(--fontSize-24)' : 'var(--fontSize-20)')};
  transition: all 0.1s ease-out;

  ${({ disabled }) =>
    !disabled
      ? css`
          &:hover {
            cursor: pointer;
            background-color: rgba(255, 255, 255, 1);
          }
        `
      : css`
          cursor: default;
          opacity: 0.7;
        `}

  .arrow {
    width: ${({ big }) => (big ? '18px' : '14px')};
    margin-left: ${({ big }) => (big ? 'var(--spacing-2)' : 'var(--spacing-1)')};
    fill: inherit;
  }
`

const ArrowStyled = styled(Arrow)<{ isExternal?: boolean }>`
  ${({ isExternal }) =>
    isExternal &&
    css`
      transform: rotate(-45deg);
    `}
`
