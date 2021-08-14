import React, { FC } from 'react'
import styled from 'styled-components'

interface CardProps {
  className?: string
}

let Card: FC<CardProps> = ({ className, children }) => <div className={className}>{children}</div>

Card = styled(Card)`
  padding: var(--spacing-7);
  border-radius: var(--radius);
  border: 2px solid transparent;
  background-color: var(--color-grey-dark);
`

export default Card
