import styled from 'styled-components'

interface SectionDividerProps {
  className?: string
}

const SectionDivider = ({ className }: SectionDividerProps) => <div className={className} />

export default styled(SectionDivider)`
  height: 1px;
  background-color: ${({ theme }) => theme.separator};
  width: 100%;
`
