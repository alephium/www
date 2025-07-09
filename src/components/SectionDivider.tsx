import styled, { css } from 'styled-components'

interface SectionDividerProps {
  border?: boolean
  double?: boolean
}

const SectionDivider = styled.div<SectionDividerProps>`
  ${({ border, double }) =>
    border
      ? css`
          height: 1px;
          margin-top: var(--spacing-6);
          margin-bottom: var(--spacing-6);
          background-color: ${({ theme }) => theme.borderPrimary};
          width: 100%;
        `
      : css`
          height: ${double ? 'var(--spacing-12)' : 'var(--spacing-4)'};
          width: 100%;
        `}
`

export default SectionDivider
