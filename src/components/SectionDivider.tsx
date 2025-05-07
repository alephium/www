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
          background-color: ${({ theme }) => theme.separator};
          width: 100%;
        `
      : css`
          height: ${double ? 'var(--spacing-8)' : 'var(--spacing-4)'};
          width: 100%;
        `}
`

export default SectionDivider
