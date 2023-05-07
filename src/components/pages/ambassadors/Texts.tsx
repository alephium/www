import styled, { css } from 'styled-components'

export const Paragraph = styled.p`
  opacity: 0.8;
`

export const H3 = styled.h3<{ divider?: boolean }>`
  font-size: 23px;
  margin-top: 0;
  font-weight: 300;

  ${({ divider }) =>
    divider &&
    css`
      padding-bottom: var(--spacing-2);
      border-bottom: 1px solid ${({ theme }) => theme.textTertiary};
    `}
`
