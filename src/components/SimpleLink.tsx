import React, { FC } from 'react'
import styled from 'styled-components'

export interface SimpleLinkProps {
  className?: string
  to: string
  text?: string
  newTab?: boolean
  color?: string
}

let SimpleLink: FC<SimpleLinkProps> = ({ className, children, to, newTab, text }) => (
  <a
    className={className}
    href={to}
    target={(newTab && '_blank') || undefined}
    rel={(newTab && 'noopener') || undefined}
  >
    {children || text}
  </a>
)

SimpleLink = styled(SimpleLink)`
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.link)};
`

export default SimpleLink
