import { colord } from 'colord'
import styled from 'styled-components'

export interface PageSectionContainerProps {
  wide?: boolean
  narrow?: boolean
  fullHeight?: boolean
  contrasted?: boolean
  justifyContent?: 'center' | 'flex-start'
}

const PageSectionContainer = styled.div<PageSectionContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  max-width: ${({ narrow, wide }) =>
    narrow ? '680px' : wide ? 'calc(100% - calc(var(--spacing-4) * 2))' : 'var(--page-width)'};
  height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'auto')};
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  position: relative;
  background-color: ${({ contrasted, theme }) =>
    contrasted ? colord(theme.bgTertiary).lighten(0.1).toRgbString() : 'none'};
  box-sizing: border-box;
`

export default PageSectionContainer
