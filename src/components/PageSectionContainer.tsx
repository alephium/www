import { colord } from 'colord'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

export interface PageSectionContainerProps {
  wide?: boolean
  extraWide?: boolean
  narrow?: boolean
  fullWidth?: boolean
  fullHeight?: boolean
  contrasted?: boolean
  justifyContent?: 'center' | 'flex-start'
  bgColor?: '1' | '2' | '3'
}

const PageSectionContainer = styled.div<PageSectionContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  width: ${({ narrow, wide, fullWidth, extraWide }) =>
    narrow ? '680px' : fullWidth ? '100%' : wide ? '80vw' : extraWide ? 'calc(100vw - 40px)' : 'var(--page-width)'};
  height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'auto')};
  margin: 0 auto;
  position: relative;
  background-color: ${({ theme, contrasted, bgColor }) =>
    contrasted
      ? colord(theme.background1).lighten(0.1).toRgbString()
      : bgColor
      ? theme[`background${bgColor}`]
      : 'none'};
  box-sizing: border-box;

  @media ${deviceBreakPoints.mobile} {
    max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '90vw')};
  }
`

export default PageSectionContainer
