import { motion } from 'framer-motion'
import { FC, useRef, useState } from 'react'
import styled from 'styled-components'
import useElementTop from '../hooks/useElementTop'

import TextSnippet from './TextSnippet'

interface SectionTextHeaderProps {
  className?: string
  title: string
  subtitle: string
  bigSubtitle?: boolean
  bigText?: boolean
  centered?: boolean
  sticky?: boolean
}

let SectionTextHeader: FC<SectionTextHeaderProps> = ({
  className,
  title,
  subtitle,
  bigSubtitle,
  bigText,
  sticky,
  centered,
  children
}) => {
  const elementRef = useRef(null)
  const elementTop = useElementTop(elementRef)

  const [isAtTop, setIsAtTop] = useState(false)

  if (elementTop === 0 && sticky && !isAtTop) {
    setIsAtTop(true)
  } else if (elementTop > 0 && sticky && isAtTop) {
    setIsAtTop(false)
  }

  return (
    <motion.header className={className} ref={elementRef} animate={{ height: isAtTop ? '100px' : 'inital' }}>
      <StyledTextSnippet
        title={title}
        subtitle={subtitle}
        bigTitle
        bigSubtitle={bigSubtitle}
        bigText={bigText}
        animate={{ scale: isAtTop ? 0.7 : 1 }}
        style={{ transformOrigin: centered ? 'center' : 'left' }}
      >
        {children}
      </StyledTextSnippet>
    </motion.header>
  )
}

const StyledTextSnippet = styled(TextSnippet)`
  max-width: var(--page-width);
  flex: 1;
`

SectionTextHeader = styled(SectionTextHeader)`
  position: ${({ sticky }) => (sticky ? 'sticky' : 'initial')};
  top: 0;
  right: 0;
  left: 0;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  background-color: rgba(15, 15, 15, 0.8);
  z-index: 2000;
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  padding: 0 var(--spacing-4);

  h2 {
    color: ${({ theme }) => theme.textPrimary};
    margin: 0;

    & + div {
      margin-top: var(--spacing-2);
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  p {
    font-size: var(--fontSize-18);
    margin-top: var(--spacing-5);
    margin-bottom: 0;
    color: ${({ theme }) => theme.textTertiary};
    max-width: var(--width-564);
  }
`

export default SectionTextHeader
