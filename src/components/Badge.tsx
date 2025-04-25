import { colord } from 'colord'
import styled from 'styled-components'

const Badge = styled.span<{ color: string }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  margin-right: 8px;
  margin-top: 4px;
  background-color: ${({ theme, color }) =>
    colord(theme[color as keyof typeof theme])
      .alpha(0.2)
      .toRgbString()};
  color: ${({ theme, color }) => theme[color as keyof typeof theme]};
`

export default Badge
