import React, { FC } from 'react'
import styled from 'styled-components'

export interface SimpleLinkProps {
  className?: string
  to?: string
  text?: string
  newTab?: boolean
  color?: string
  onClick?: (event: any) => void
}

let SimpleLink: FC<SimpleLinkProps> = ({ className, children, to = '', newTab, text, onClick }) => (
  <a
    className={className}
    href={to}
    target={(newTab && '_blank') || undefined}
    rel={(newTab && 'noopener') || undefined}
    onClick={onClick}
  >
    {children || text}
  </a>
)

SimpleLink = styled(SimpleLink)`
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.link)};

  &:hover {
    filter: brightness(85%);
  }
`

export default SimpleLink
