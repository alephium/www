import React, { FC } from 'react'
import styled from 'styled-components'

export interface SimpleLinkProps {
  className?: string
  url?: string
  text?: string
  newTab?: boolean
  color?: string
  onlyText?: boolean
  openModal?: (x: boolean) => void
}

let SimpleLink: FC<SimpleLinkProps> = ({ className, children, url = '', newTab, text, onlyText, openModal }) => {
  const handleOnClick = (event: any) => {
    if (openModal) {
      event.preventDefault()
      openModal(true)
    }
  }

  return onlyText ? (
    <span className={className}>{children || text}</span>
  ) : (
    <a
      className={className}
      href={url}
      target={(newTab && '_blank') || undefined}
      rel={(newTab && 'noopener') || undefined}
      onClick={handleOnClick}
    >
      {children || text}
    </a>
  )
}

SimpleLink = styled(SimpleLink)`
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.link)};

  &:hover {
    filter: brightness(85%);
    cursor: pointer;
  }
`

export default SimpleLink
