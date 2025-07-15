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

const getGradient = (theme: DefaultTheme) => `
  radial-gradient(
    circle at var(--gradient-x) var(--gradient-y),
    ${theme.palette5} 15%,
    ${theme.palette4} 70%
  )
`

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
    opacity: 1;
    -webkit-background-clip: text;
    background-clip: text;
    transition: opacity 0.1s ease-out;
    pointer-events: none;
  }

  &:hover {
    color: ${({ theme }) => theme.palette4};
  }

  &:hover::before {
    opacity: 1;
    background: ${({ theme }) => getGradient(theme)};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  &:hover::after {
    background: ${({ theme }) => getGradient(theme)};
  }
`

export default styled(SimpleLinkComponent)`
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.link)};
  text-decoration: ${({ highlight }) => (highlight ? 'underline' : 'dotted')};
  display: inline-block;
  font-size: var(--fontSize-18);

  &:hover {
    cursor: pointer;
    opacity: 1;
    color: ${({ theme }) => theme.link};
    transition: all 0.1s ease-out;
  }

  ${({ highlight }) => highlight && highlightStyles}
`

const Anchor = styled.a<{ highlight?: boolean; color?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme, color }) => (color ? color : theme.link)};
  text-decoration: ${({ highlight }) => (highlight ? 'underline' : 'dotted')};

  &:hover {
    cursor: pointer;
  }

  ${({ highlight }) => highlight && highlightStyles}
`
