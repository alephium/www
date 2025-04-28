import { useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'gatsby'
import { ReactNode, useEffect, useRef } from 'react'
import { PointerEvent } from 'react'
import styled, { css } from 'styled-components'

import Arrow from '../images/svgs/arrow-right.svg'
import { getPointerRelativePositionInElement } from '../utils/pointer'

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
  highlight?: boolean
}

const Button = ({ onClick, className, children, url, disabled, highlight, squared }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })
  const isInternalLink = url?.startsWith('/')

  const onMove = (e: PointerEvent) => {
    if (!highlight) return
    const { x: positionX, y: positionY } = getPointerRelativePositionInElement(e)
    x.set(positionX, true)
    y.set(positionY, true)
  }

  const onLeave = () => {
    if (!highlight) return
    x.set(0.5, true)
    y.set(0.5, true)
  }

  useEffect(() => {
    if (!highlight) return
    const updateGradientPosition = () => {
      if (buttonRef.current) {
        buttonRef.current.style.setProperty('--gradient-x', `${springX.get() * 100}%`)
        buttonRef.current.style.setProperty('--gradient-y', `${springY.get() * 100}%`)
      }
    }
    updateGradientPosition()
    const unsubscribeX = springX.onChange(updateGradientPosition)
    const unsubscribeY = springY.onChange(updateGradientPosition)
    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [springX, springY, highlight])

  const content = (
    <>
      {children}
      {!disabled && <ArrowStyled className="arrow" isExternal={!url?.startsWith('/')} />}
      {highlight && <GradientBorder squared={squared} />}
    </>
  )

  const sharedProps = {
    className: `${className} button`,
    onPointerMove: onMove,
    onPointerLeave: onLeave
  }

  return isInternalLink && url ? (
    <Link to={url} {...sharedProps}>
      {content}
    </Link>
  ) : url ? (
    <a
      ref={buttonRef as React.RefObject<HTMLAnchorElement>}
      href={url}
      target={(!isInternalLink && '_blank') || undefined}
      rel={(!isInternalLink && 'noopener') || undefined}
      onClick={(e) => disabled && e.preventDefault()}
      {...sharedProps}
    >
      {content}
    </a>
  ) : (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      disabled={disabled}
      {...sharedProps}
    >
      {content}
    </button>
  )
}

export default styled(Button)`
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  --gradient-x: 50%;
  --gradient-y: 50%;
  border-radius: ${({ squared }) => (squared ? '9px' : '50px')};
  padding: 12px 20px;
  border: 2px solid transparent;
  background-clip: padding-box;
  text-decoration: none;
  display: inline-flex;
  justify-content: ${({ textAlign }) => (textAlign === 'left' ? 'flex-start' : 'center')};
  position: relative;
  z-index: 0;
  overflow: hidden;

  /* The following rules are the same as in the ArrowedLink, maybe extract? */
  align-items: center;
  font-weight: var(--fontWeight-semiBold);
  font-size: ${({ big }) => (big ? 'var(--fontSize-22)' : 'var(--fontSize-20)')};
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
    width: ${({ big }) => (big ? '16px' : '14px')};
    margin-left: ${({ big }) => (big ? 'var(--spacing-2)' : 'var(--spacing-1)')};
    fill: inherit;
  }

  ${({ highlight }) =>
    highlight &&
    css`
      &:hover {
        background-color: ${({ theme }) => theme.bgPrimary};
      }

      /* show gradient border on hover */
      &:hover ${GradientBorder} {
        opacity: 1;
      }
    `}
`

// Gradient border overlay behind the button content
const GradientBorder = styled.div<{ squared?: boolean }>`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    circle at var(--gradient-x) var(--gradient-y),
    ${({ theme }) => theme.borderPrimary} 0%,
    ${({ theme }) => theme.palette2} 35%,
    ${({ theme }) => theme.palette1} 40%,
    ${({ theme }) => theme.palette4} 50%,
    ${({ theme }) => theme.palette3} 60%,
    ${({ theme }) => theme.borderPrimary} 100%
  );
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: ${({ squared }) => (squared ? 'calc(9px - 2px)' : 'calc(50px - 2px)')};
    background: rgba(255, 255, 255, 0.9);
    z-index: 0;
  }
`

const ArrowStyled = styled(Arrow)<{ isExternal?: boolean }>`
  ${({ isExternal }) =>
    isExternal &&
    css`
      transform: rotate(-45deg);
    `}
`
