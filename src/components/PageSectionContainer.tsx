import styled from 'styled-components'

interface PageSectionContainerProps {
  wide?: boolean
  narrow?: boolean
}

const PageSectionContainer = styled.div<PageSectionContainerProps>`
  max-width: ${({ narrow, wide }) => (narrow ? '680px' : wide ? '100%' : 'var(--page-width)')};
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  height: 100%;
  position: relative;
`

export default PageSectionContainer
