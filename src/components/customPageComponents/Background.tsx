import { ReactNode } from 'react'
import styled from 'styled-components'

interface BackgroundProps {
  children: ReactNode
  bgColor?: 'background1' | 'background2' | 'background3'
}

const Background = styled.div<BackgroundProps>`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-big);
  background-color: ${({ theme, bgColor }) => (bgColor ? theme[bgColor] : theme.background2)};
  padding: var(--spacing-6);
  max-width: var(--page-width);
  box-sizing: border-box;
`

export default Background
