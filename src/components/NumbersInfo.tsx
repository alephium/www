import { FC } from 'react'
import styled from 'styled-components'

import GradientText from './GradientText'

interface NumbersInfoProps {
  value?: string
  isLoading: boolean
  description: string
  className?: string
}

const NumbersInfo: FC<NumbersInfoProps> = ({ value, isLoading, description, className }) => (
  <div className={className}>
    {isLoading ? (
      '-'
    ) : (
      <NumberContainer className="number">
        <GradientText>{value}</GradientText>
      </NumberContainer>
    )}
    <DescriptionContainer>{description}</DescriptionContainer>
  </div>
)

export default NumbersInfo

const NumberContainer = styled.div`
    font-size: var(--fontSize-80);
    margin-bottom: var(--spacing-1);
    color: ${({ theme }) => theme.textPrimary};
  }
`

const DescriptionContainer = styled.div`
  font-size: var(--fontSize-24);
  color: ${({ theme }) => theme.textTertiary};
`
