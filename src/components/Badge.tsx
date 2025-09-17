import { colord } from 'colord'
import styled from 'styled-components'

interface BadgeProps {
  color: string
  compact?: boolean
}

const Badge = styled.span<BadgeProps>`
  display: inline-block;
  padding: ${({ compact }) => (compact ? '4px 6px' : '6px 8px')};
  border-radius: ${({ compact }) => (compact ? '4px' : '6px')};
  font-size: ${({ compact }) => (compact ? 'var(--fontSize-12)' : 'var(--fontSize-16)')};
  font-weight: var(--fontWeight-normal);
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
