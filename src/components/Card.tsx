import React, { FC } from 'react'
import styled from 'styled-components'

interface CardProps {
  className?: string
  borderColor?: string
  thickBorders?: boolean
  bgColor?: string
}

let Card: FC<CardProps> = ({ className, children }) => <div className={className}>{children}</div>

Card = styled(Card)`
  padding: var(--spacing-7);
  border-radius: var(--radius);
  border: ${(props) => (props.thickBorders && '2px') || '1px'} solid ${(props) => props.borderColor || 'transparent'};
  background-color: ${(props) => props.bgColor || 'transparent'};
  background-clip: padding-box;
`

export default Card
