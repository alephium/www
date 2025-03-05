import styled from 'styled-components'
import SimpleLink from '../SimpleLink'
import { ReactNode } from 'react'
import TextElement from './TextElement'

interface CardsGridProps {
  columns?: number
}

const CardsGrid = styled.div<CardsGridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, 1fr);
  gap: var(--spacing-12);
`

export default CardsGrid

interface LinkedCardProps {
  url: string
  children: ReactNode
}

export const LinkedCard = ({ children, url }: LinkedCardProps) => (
  <SimpleLink url={url}>
    <Card>{children}</Card>
  </SimpleLink>
)

interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => (
  <CardStyled>
    <TextElement size="small">{children}</TextElement>
  </CardStyled>
)

const CardStyled = styled.div`
  padding: 41px 30px 25px 34px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.bgPrimary};
  background-color: ${({ theme }) => theme.bgTertiary};
  background-clip: padding-box;
  text-decoration: none;
  box-shadow: 0px 22px 30px rgba(0, 0, 0, 0.47);
  transition: all 0.1s ease-out;
`
