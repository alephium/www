import { colord } from 'colord'
import styled from 'styled-components'

export interface PageSectionContainerProps {
  wide?: boolean
  narrow?: boolean
  fullWidth?: boolean
  fullHeight?: boolean
  contrasted?: boolean
  justifyContent?: 'center' | 'flex-start'
}

const PageSectionContainer = styled.div<PageSectionContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  max-width: ${({ narrow, wide, fullWidth }) =>
    narrow ? '680px' : fullWidth ? 'calc(100% - calc(var(--spacing-4) * 2))' : wide ? '90vw' : 'var(--page-width)'};
  height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'auto')};
  margin: 0 auto;
  position: relative;
  background-color: ${({ theme, contrasted }) =>
    contrasted ? colord(theme.background1).lighten(0.1).toRgbString() : 'none'};
  box-sizing: border-box;
`

export default PageSectionContainer
