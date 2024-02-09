import styled, { css } from 'styled-components'

export const Paragraph = styled.p`
  opacity: 0.8;
  white-space: pre-line;
  line-height: 1.6;
`

export const H3 = styled.h3<{ divider?: boolean }>`
  margin-top: var(--spacing-10);
  font-size: 28px !important;
  line-height: 1.2;
  font-weight: 400;

  ${({ divider }) =>
    divider &&
    css`
      font-size: 32px !important;
      padding-bottom: var(--spacing-2);
      border-bottom: 1px solid ${({ theme }) => theme.textTertiary};
    `}
`
