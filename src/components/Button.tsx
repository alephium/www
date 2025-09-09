import { colord } from 'colord'
import { useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'gatsby'
import { ReactNode, RefObject, useEffect, useRef } from 'react'
import { PointerEvent } from 'react'
import styled, { css, DefaultTheme } from 'styled-components'

import Arrow from '../images/svgs/arrow-right.svg'
import { getPointerRelativePositionInElement } from '../utils/pointer'

interface ButtonProps {
  onClick?: () => void
  url?: string
  squared?: boolean
  secondary?: boolean
  textAlign?: 'left' | 'center'
  big?: boolean
  className?: string
  trackingName?: string
  disabled?: boolean
  children?: ReactNode
  highlight?: boolean
  invert?: boolean
}

const Button = ({ onClick, className, children, url, disabled, highlight, squared, secondary }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const anchorRef = useRef<HTMLAnchorElement | Link<any>>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })
  const isInternalLink = url?.startsWith('/')

  const onMove = (e: PointerEvent) => {
    if (!highlight || disabled) return
    const { x: positionX, y: positionY } = getPointerRelativePositionInElement(e)
    x.set(positionX, true)
    y.set(positionY, true)
  }

  const onLeave = () => {
    if (!highlight || disabled) return
    x.set(0.5, true)
    y.set(0.5, true)
  }

  useEffect(() => {
    if (!highlight || disabled) return
    const updateGradientPosition = () => {
      const currentRef = buttonRef.current || anchorRef.current
      if (currentRef) {
        currentRef.style.setProperty('--gradient-x', `${springX.get() * 100}%`)
        currentRef.style.setProperty('--gradient-y', `${springY.get() * 100}%`)
      }
    }
    updateGradientPosition()
    const unsubscribeX = springX.onChange(updateGradientPosition)
    const unsubscribeY = springY.onChange(updateGradientPosition)
    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [springX, springY, highlight, disabled])

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
    <Link to={url} ref={anchorRef as RefObject<Link<any>>} {...sharedProps}>
      {content}
    </Link>
  ) : url ? (
    <a
      ref={anchorRef as RefObject<HTMLAnchorElement>}
      href={url}
      target={(!isInternalLink && '_blank') || undefined}
      rel={(!isInternalLink && 'noopener') || undefined}
      onClick={(e) => disabled && e.preventDefault()}
      {...sharedProps}
    >
      {content}
    </a>
  ) : (
    <button ref={buttonRef} onClick={onClick} disabled={disabled} {...sharedProps}>
      {content}
    </button>
  )
}

const getGradient = (theme: DefaultTheme) => `
  radial-gradient(
    circle at var(--gradient-x) var(--gradient-y),
    ${theme.palette5} 25%,
    ${theme.palette4} 100%
  )
`

const getBorderRadius = (squared?: boolean) => (squared ? '9px' : '50px')
const getInnerBorderRadius = (squared?: boolean) => (squared ? 'calc(12px - 5px)' : 'calc(50px - 5px)')

const GradientBorder = styled.div<{ squared?: boolean }>`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: ${({ theme }) => getGradient(theme)};
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: -1;
  opacity: 0;

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: ${({ squared }) => getInnerBorderRadius(squared)};
    background: ${({ theme }) => theme.textPrimary};

    z-index: 0;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
    z-index: 1;
  }
`

const ArrowStyled = styled(Arrow)<{ isExternal?: boolean }>`
  ${({ isExternal }) =>
    isExternal &&
    css`
      transform: rotate(-45deg);
    `}
`

const StyledButton = styled(Button)`
  background-color: ${({ theme, invert, secondary }) =>
    invert ? theme.background1 : secondary ? colord(theme.textPrimary).alpha(0.1).toHex() : theme.textPrimary};
  color: ${({ theme, invert, secondary }) =>
    invert ? theme.textPrimary : secondary ? theme.textPrimary : colord(theme.textPrimary).invert().toHex()};
  --gradient-x: 50%;
  --gradient-y: 50%;
  border-radius: ${({ squared }) => getBorderRadius(squared)};
  padding: 12px 20px;
  background-clip: padding-box;
  text-decoration: none;
  display: inline-flex;
  justify-content: ${({ textAlign }) => (textAlign === 'left' ? 'flex-start' : 'center')};
  position: relative;
  z-index: 0;

  align-items: center;
  font-weight: var(--fontWeight-semiBold);
  font-size: ${({ big }) => (big ? 'var(--fontSize-22)' : 'var(--fontSize-18)')};
  transition: all 0.1s ease-out;

  &:hover {
    filter: saturate(140%);
  }

  ${({ disabled }) =>
    !disabled
      ? css`
          &:hover {
            cursor: pointer;
            transform: translateY(-2px);
          }
        `
      : css`
          cursor: default;
        `}

  .arrow {
    width: ${({ big }) => (big ? '16px' : '14px')};
    margin-left: ${({ big }) => (big ? 'var(--spacing-2)' : 'var(--spacing-1)')};
    fill: ${({ theme, secondary }) => (secondary ? theme.textPrimary : colord(theme.textPrimary).invert().toHex())};
  }

  ${({ highlight }) =>
    highlight &&
    css`
      &:hover {
        &::after {
          opacity: 0.5;
          transform: scale(1.02);
        }
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: ${({ theme }) => getGradient(theme)};
        filter: blur(7px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: -2;
        transform: translateY(0) scale(1);
      }

      &:hover ${GradientBorder} {
        opacity: 1;
      }
    `}
`

export default StyledButton
