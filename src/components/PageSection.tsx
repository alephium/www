import React, { FC } from 'react'
import styled from 'styled-components'

interface PageSectionProps {
  className?: string
}

const PageSection: FC<PageSectionProps> = ({ children, className }) => {
  return (
    <section className={className}>
      <PageSectionContent>{children}</PageSectionContent>
    </section>
  )
}

const PageSectionContent = styled.div`
  max-width: var(--maxWidth-5xl);
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  height: 100%;
  position: relative;
`

export default PageSection
