import { FC } from 'react'
import styled from 'styled-components'

interface NumbersInfoProps {
  value?: string
  isLoading: boolean
  description: string
  className?: string
}

const NumbersInfo: FC<NumbersInfoProps> = ({ value, isLoading, description, className }) => (
  <div className={className}>
    {isLoading ? '-' : <div className="number">{value}</div>}
    <div>{description}</div>
  </div>
)

export default styled(NumbersInfo)`
  font-weight: var(--fontWeight-medium);
  color: ${({ theme }) => theme.textPrimaryVariation};

  .number {
    font-size: var(--fontSize-56);
    margin-bottom: var(--spacing-3);

    & + div {
      font-size: var(--fontSize-22);
    }
  }
`
