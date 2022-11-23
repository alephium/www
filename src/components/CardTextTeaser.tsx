import { FC, ReactNode } from 'react'
import styled from 'styled-components'

import TextSnippet from './TextSnippet'

interface CardTextTeaserProps {
  title: string
  subtitle?: string
  className?: string
  children?: ReactNode
}

const CardTextTeaser = ({ title, subtitle, children, className }: CardTextTeaserProps) => (
  <article className={className}>
    <TextSnippetStyled
      className="text-content"
      title={title}
      titleHierarchy="h3"
      subtitle={subtitle}
      smallSubtitle
      bigText
    >
      {children}
    </TextSnippetStyled>
  </article>
)

export default styled(CardTextTeaser)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`

const TextSnippetStyled = styled(TextSnippet)`
  margin-bottom: var(--spacing-2);

  h3 {
    font-size: var(--fontSize-24);
    margin-bottom: ${(props) => (props.subtitle ? 'var(--spacing-1)' : 'var(--spacing-3)')};
    color: ${({ theme }) => theme.textPrimary};
  }

  div {
    color: ${({ theme }) => theme.textPrimaryVariation};
    margin-bottom: var(--spacing-1);
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
  }
`
