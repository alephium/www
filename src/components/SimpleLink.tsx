import { useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'gatsby'
import { ReactNode, useEffect, useRef } from 'react'
import { PointerEvent } from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri'
import styled, { css, DefaultTheme } from 'styled-components'

import { getPointerRelativePositionInElement } from '../utils/pointer'

export interface SimpleLinkProps {
  className?: string
  url?: string | undefined | null
  text?: string
  color?: string
  trackingName?: string
  children?: ReactNode
  showArrow?: boolean
  highlight?: boolean
}

interface SimpleLinkComponentProps extends SimpleLinkProps {
  theme: DefaultTheme
}

const SimpleLinkComponent = ({
  className,
  children,
  url,
  text,
  showArrow,
  highlight,
  color
}: SimpleLinkComponentProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const isInternalLink = url?.startsWith('/')

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springConfig = { stiffness: 200, damping: 20 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (!highlight || !linkRef.current) return
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
    if (!highlight || !linkRef.current) return
    const currentRef = linkRef.current
    const updateGradientPosition = () => {
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
      if (currentRef) {
        currentRef.style.removeProperty('--gradient-x')
        currentRef.style.removeProperty('--gradient-y')
      }
    }
  }, [highlight, springX, springY])

  if (!url) return null

  const content = children || text

  const eventHandlers = {
    onPointerMove: highlight ? onMove : undefined,
    onPointerLeave: highlight ? onLeave : undefined,
    'data-content': highlight ? content : undefined
  }

  return isInternalLink ? (
    <Link className={className} to={url} innerRef={linkRef as any} {...eventHandlers}>
      {content}
    </Link>
  ) : (
    <Anchor
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      ref={linkRef}
      highlight={highlight}
      color={color}
      {...eventHandlers}
    >
      {content}
      {showArrow && <RiArrowRightUpLine />}
    </Anchor>
  )
}

const highlightStyles = css<SimpleLinkProps>`
  --gradient-x: 50%;
  --gradient-y: 50%;
  position: relative;

  &::before {
    content: attr(data-content);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at var(--gradient-x) var(--gradient-y),
      ${({ theme }) => theme.palette4} 0%,
      ${({ theme }) => theme.palette1} 35%,
      ${({ theme }) => theme.palette2} 40%,
      ${({ theme }) => theme.textPrimary} 50%,
      ${({ theme }) => theme.palette1} 60%,
      ${({ theme }) => theme.palette4} 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    opacity: 0.3;
    transition: opacity 0.1s ease-out;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: radial-gradient(
      circle at var(--gradient-x) var(--gradient-y),
      ${({ theme }) => theme.palette4} 0%,
      ${({ theme }) => theme.palette1} 35%,
      ${({ theme }) => theme.palette2} 40%,
      ${({ theme }) => theme.textPrimary} 50%,
      ${({ theme }) => theme.palette1} 60%,
      ${({ theme }) => theme.palette4} 100%
    );
    opacity: 0.7;
    transition: opacity 0.1s ease-out;
    pointer-events: none;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }

  &:hover svg {
    fill: currentColor;
    color: transparent;
  }
`

export default styled(SimpleLinkComponent)`
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.link)};
  text-decoration-style: dotted;
  display: inline-block;

  svg {
    fill: ${({ theme, color }) => (color ? color : theme.textPrimary)};
    vertical-align: middle;
  }

  &:hover {
    cursor: pointer;
  }

  ${({ highlight }) => highlight && highlightStyles}
`

const Anchor = styled.a<{ highlight?: boolean; color?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.link)};
  text-decoration-style: dotted;

  svg {
    fill: ${({ theme, color }) => (color ? color : theme.textPrimary)};
  }

  &:hover {
    cursor: pointer;
  }

  ${({ highlight }) => highlight && highlightStyles}
`
