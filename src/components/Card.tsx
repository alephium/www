import { FC } from 'react'
import styled from 'styled-components'
import { ArrowedLinkProps } from './ArrowedLink'

interface CardProps {
  className?: string
  borderColor?: string
  thickBorders?: boolean
  bgColor?: string
  onClick?: () => void
  link?: ArrowedLinkProps
}

let Card: FC<CardProps> = ({ className, children, onClick, link }) =>
  link ? (
    <a
      href={link.url}
      target={(link.newTab && '_blank') || undefined}
      rel={(link.newTab && 'noopener') || undefined}
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )

Card = styled(Card)`
  padding: var(--spacing-4);
  border-radius: var(--radius);
  border: ${(props) => (props.thickBorders && '2px') || '1px'} solid ${(props) => props.borderColor || 'transparent'};
  background-color: ${(props) => props.bgColor || 'transparent'};
  background-clip: padding-box;
  text-decoration: none;
`

export default Card
