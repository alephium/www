import { colord } from 'colord'
import styled from 'styled-components'

interface PageSectionContainerProps {
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
  max-width: ${({ narrow, wide }) => (narrow ? '680px' : wide ? '100%' : 'var(--page-width)')};
  height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'auto')};
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  position: relative;
  background-color: ${({ contrasted, theme }) =>
    contrasted ? colord(theme.bgTertiary).lighten(0.05).toRgbString() : 'none'};
`

export default PageSectionContainer
