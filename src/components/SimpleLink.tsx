import { Link } from 'gatsby'
import { ReactNode } from 'react'
import styled from 'styled-components'

export interface SimpleLinkProps {
  className?: string
  url?: string | undefined | null
  text?: string
  color?: string
  trackingName?: string
  children?: ReactNode
}

const SimpleLink = ({ className, children, url, text }: SimpleLinkProps) => {
  const isInternalLink = url?.startsWith('/')

  if (!url) return null

  return isInternalLink ? (
    <Link className={className} to={url}>
      {children || text}
    </Link>
  ) : (
    <a className={className} href={url} target="_blank" rel="noopener noreferrer">
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
    cursor: pointer;
  }
`
