import styled, { css } from 'styled-components'

interface SectionDividerProps {
  border?: boolean
  double?: boolean
  pageWidth?: boolean
}

const SectionDivider = styled.div<SectionDividerProps>`
  ${({ border, double, pageWidth }) =>
    border
      ? css`
          height: 1px;
          margin-top: var(--spacing-6);
          margin-bottom: var(--spacing-6);
          background-color: ${({ theme }) => theme.borderPrimary};
          width: ${pageWidth ? 'var(--page-width)' : '100%'};
          margin-left: auto;
          margin-right: auto;
        `
      : css`
          height: ${double ? 'var(--spacing-12)' : 'var(--spacing-4)'};
          width: 100%;
        `}
`

export default SectionDivider
