import { ReactNode } from 'react'
import styled from 'styled-components'

import TextElement, { TextElementProps } from './customPageComponents/TextElement'

interface CardTextProps extends TextElementProps {
  children: ReactNode
}

const CardText = ({ children, ...textElementProps }: CardTextProps) => (
  <CardTextStyled {...textElementProps}>{children}</CardTextStyled>
)

const CardTextStyled = styled(TextElement)`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-3);
  gap: var(--spacing-2);

  p {
    flex: 1;
    font-weight: var(--fontWeight-normal);
    font-size: var(--fontSize-18);
    line-height: 1.5;
    margin-bottom: 0;
  }

  h3 {
    margin: 0;
    position: relative;
    padding-right: var(--spacing-6);

    &:only-child {
      margin-bottom: 0;
    }
  }

  h4 {
    position: relative;
    padding-right: var(--spacing-6);

    &:only-child {
      margin-bottom: 0;
    }
  }
`

export default CardText
