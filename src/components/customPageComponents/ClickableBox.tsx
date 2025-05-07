import styled, { css } from 'styled-components'

import SimpleLink, { SimpleLinkProps } from '../SimpleLink'

interface ClickableBoxProps extends SimpleLinkProps {
  align?: 'top' | 'center'
}

const ClickableBox = (props: ClickableBoxProps) => (props.url ? <ClickableBoxStyled {...props} /> : <Box {...props} />)

export default ClickableBox

const BoxStyles = css<ClickableBoxProps>`
  position: relative;
  display: flex;
  align-items: ${({ align }) => (align === 'top' ? 'flex-start' : 'center')};
  gap: var(--spacing-4);
  background-color: ${({ theme }) => theme.surface2};
  border-radius: var(--radius);
  padding: var(--spacing-4);
  &:hover {
    background-color: ${({ theme }) => theme.surface1};
  }

  p + p {
    margin-top: var(--spacing-2);
  }
`

const Box = styled.div<ClickableBoxProps>`
  ${BoxStyles}
`

const ClickableBoxStyled = styled(SimpleLink)<ClickableBoxProps>`
  ${BoxStyles}
`
