import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'
import SimpleLink, { SimpleLinkProps } from '../SimpleLink'

interface ClickableBoxProps extends SimpleLinkProps {
  align?: 'top' | 'center'
  orientation?: 'horizontal' | 'vertical'
}

const ClickableBox = (props: ClickableBoxProps) => (props.url ? <ClickableBoxStyled {...props} /> : <Box {...props} />)

export default ClickableBox

const BoxStyles = css<ClickableBoxProps>`
  position: relative;
  display: flex;
  align-items: ${({ align }) => (align === 'top' ? 'flex-start' : 'center')};
  gap: var(--spacing-4);
  background-color: ${({ theme }) => theme.background2};
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  border-radius: var(--radius);
  padding: var(--spacing-4);
  height: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.surface1};
  }

  p + p {
    margin-top: var(--spacing-2);
  }

  @media ${deviceBreakPoints.mobile} {
    text-align: center;
    padding: var(--spacing-4) var(--spacing-3);
    justify-content: center;
  }
`

const Box = styled.div<ClickableBoxProps>`
  ${BoxStyles}
`

const ClickableBoxStyled = styled(SimpleLink)<ClickableBoxProps>`
  ${BoxStyles}

  ${({ orientation }) =>
    orientation === 'vertical' &&
    css`
      flex-direction: column;
      align-items: center;
    `}
`
