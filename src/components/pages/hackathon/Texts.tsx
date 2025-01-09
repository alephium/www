import styled, { css } from 'styled-components'

export const Paragraph = styled.p`
  white-space: pre-line;
  line-height: 1.6;
`

export const H3 = styled.h3<{ divider?: boolean }>`
  margin-top: var(--spacing-10);
  font-size: 32px !important;
  line-height: 1.2;
  font-weight: 400;

  ${({ divider }) =>
    divider &&
    css`
      font-size: 34px !important;
      padding-top: var(--spacing-2);
    `}
`
