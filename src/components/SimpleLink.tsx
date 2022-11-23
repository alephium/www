import { MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'

export interface SimpleLinkProps {
  className?: string
  url?: string | undefined
  text?: string
  newTab?: boolean
  color?: string
  openModal?: (x: boolean) => void
  trackingName?: string
  children?: ReactNode
}

const SimpleLink = ({ className, children, url, newTab, text, openModal, trackingName }: SimpleLinkProps) => {
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
      href={url}
      target={(newTab && '_blank') || undefined}
      rel={(newTab && 'noopener noreferrer') || undefined}
      data-goatcounter-click={trackingName}
    >
      {children || text}
    </a>
  )
}

export default styled(SimpleLink)`
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.link)};

  svg {
    fill: ${({ theme, color }) => (color ? color : theme.link)};
  }

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`
