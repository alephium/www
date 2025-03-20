import { MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'

export interface SimpleLinkProps {
  className?: string
  url?: string | undefined | null
  text?: string
  color?: string
  openModal?: (x: boolean) => void
  trackingName?: string
  children?: ReactNode
}

const SimpleLink = ({ className, children, url, text, openModal, trackingName }: SimpleLinkProps) => {
  const handleOnClick = (event: MouseEvent) => {
    if (openModal) {
      event.preventDefault()
      openModal(true)
    }
  }

  return openModal ? (
    <span className={className} onClick={handleOnClick} data-goatcounter-click={trackingName}>
      {children || text}
    </span>
  ) : (
    <a
      className={className}
      href={url ?? undefined}
      target={url?.startsWith('/') ? undefined : '_blank'}
      rel={url?.startsWith('/') ? undefined : 'noopener noreferrer'}
      data-goatcounter-click={trackingName}
    >
      {children || text}
    </a>
  )
}

export default styled(SimpleLink)`
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.link)};
  text-decoration-style: dotted;

  svg {
    fill: ${({ theme, color }) => (color ? color : theme.link)};
  }

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`
