import styled from 'styled-components'

interface SectionDividerProps {
  border?: boolean
}

const SectionDivider = styled.div<SectionDividerProps>`
  ${({ border }) =>
    border
      ? `
    height: 1px;
    background-color: ${({ theme }) => theme.separator};
    width: 100%;
  `
      : `
    height: var(--spacing-4);
    width: 100%;
  `}
`

export default SectionDivider
