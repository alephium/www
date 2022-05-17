import { FC } from 'react'
import styled from 'styled-components'

interface NumbersInfoProps {
  value: string
  isLoading: boolean
  description: string
  className?: string
}

let NumbersInfo: FC<NumbersInfoProps> = ({ value, isLoading, description, className }) => (
  <div className={className}>
    { isLoading ? '-' : <div className="number">{value}</div> }
    <div>{description}</div>
  </div>
)

NumbersInfo = styled(NumbersInfo)`
  font-weight: var(--fontWeight-semiBold);
  color: ${({ theme }) => theme.textPrimaryVariation};

  .number {
    font-size: var(--fontSize-50);
    margin-bottom: var(--spacing-3);

    & + div {
      font-size: var(--fontSize-22);
    }
  }
`

export default NumbersInfo
