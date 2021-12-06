import { FC, MouseEvent } from 'react'
import styled from 'styled-components'

export interface SimpleLinkProps {
  className?: string
  url?: string
  text?: string
  newTab?: boolean
  color?: string
  openModal?: (x: boolean) => void
}

let SimpleLink: FC<SimpleLinkProps> = ({ className, children, url = '', newTab, text, openModal }) => {
  const handleOnClick = (event: MouseEvent) => {
    if (openModal) {
      event.preventDefault()
      openModal(true)
    }
  }

  return (
    <a
      className={className}
      href={url}
      target={(newTab && '_blank') || undefined}
      rel={(newTab && 'noopener noreferrer') || undefined}
      onClick={handleOnClick}
    >
      {children || text}
    </a>
  )
}

SimpleLink = styled(SimpleLink)`
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

export default SimpleLink
