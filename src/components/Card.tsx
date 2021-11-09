import { FC } from 'react'
import styled from 'styled-components'

interface CardProps {
  className?: string
  borderColor?: string
  thickBorders?: boolean
  bgColor?: string
}

let Card: FC<CardProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>
}

Card = styled(Card)`
  padding: var(--spacing-4);
  border-radius: var(--radius);
  border: ${(props) => (props.thickBorders && '2px') || '1px'} solid ${(props) => props.borderColor || 'transparent'};
  background-color: ${(props) => props.bgColor || 'transparent'};
  background-clip: padding-box;
  text-decoration: none;

  transition: all 0.1s ease-out;
`

export default Card
