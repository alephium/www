import styled from 'styled-components'

interface PageSectionContainerProps {
  wide?: boolean
}

const PageSectionContainer = styled.div<PageSectionContainerProps>`
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  height: 100%;
  position: relative;
`

export default PageSectionContainer
