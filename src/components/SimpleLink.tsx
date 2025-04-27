import { Link } from 'gatsby'
import { ReactNode } from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri'
import styled from 'styled-components'

export interface SimpleLinkProps {
  className?: string
  url?: string | undefined | null
  text?: string
  color?: string
  trackingName?: string
  children?: ReactNode
  showArrow?: boolean
}

const SimpleLink = ({ className, children, url, text, showArrow }: SimpleLinkProps) => {
  const isInternalLink = url?.startsWith('/')

  if (!url) return null

  return isInternalLink ? (
    <Link className={className} to={url}>
      {children || text}
    </Link>
  ) : (
    <Anchor className={className} href={url} target="_blank" rel="noopener noreferrer">
      {children || text}
      {showArrow && <RiArrowRightUpLine />}
    </Anchor>
  )
}

export default styled(SimpleLink)`
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.link)};
  text-decoration-style: dotted;

  svg {
    fill: ${({ theme, color }) => (color ? color : theme.textSecondary)};
  }

  &:hover {
    cursor: pointer;
  }
`

const Anchor = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`
