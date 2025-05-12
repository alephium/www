import { colord } from 'colord'
import styled from 'styled-components'

const Badge = styled.span<{ color: string }>`
  display: inline-block;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: var(--fontSize-16);
  font-weight: var(--fontWeight-normal);
  margin-right: 8px;
  vertical-align: middle;
  line-height: 1;
  background-color: ${({ theme, color }) =>
    colord(theme[color as keyof typeof theme])
      .alpha(0.1)
      .toRgbString()};
  color: ${({ theme, color }) => theme[color as keyof typeof theme]};

  /* Add margin when badge follows text */
  h3 &:first-of-type {
    margin-left: var(--spacing-4);
  }
`

export default Badge
