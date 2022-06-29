import { motion } from 'framer-motion'
import { FC, useRef, useState } from 'react'
import styled from 'styled-components'
import useElementDistanceToTop from '../hooks/useElementDistanceToTop'
import { deviceBreakPoints } from '../styles/global-style'

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

const SectionTextHeader: FC<SectionTextHeaderProps> = ({
  className,
  title,
  subtitle,
  bigSubtitle,
  bigText,
  sticky,
  centered,
  children
}) => {
  const headingElementRef = useRef(null)
  const headingDistanceFromTopOfScreen = useElementDistanceToTop(headingElementRef)
  const [headingReachedTopOfScreen, setHeadingReachedTopOfScreen] = useState(false)

  if (sticky) {
    if (headingDistanceFromTopOfScreen <= 0 && !headingReachedTopOfScreen) {
      setHeadingReachedTopOfScreen(true)
    } else if (headingDistanceFromTopOfScreen > 0 && headingReachedTopOfScreen) {
      setHeadingReachedTopOfScreen(false)
    }
  }

  return (
    <>
      <div ref={headingElementRef} />
      <motion.header className={className} animate={{ height: headingReachedTopOfScreen ? '100px' : 'inital' }}>
        <StyledTextSnippet
          title={title}
          subtitle={subtitle}
          bigTitle
          bigSubtitle={bigSubtitle}
          bigText={bigText}
          animate={{ scale: headingReachedTopOfScreen ? 0.7 : 1 }}
          style={{ transformOrigin: centered ? 'center' : 'left' }}
        >
          {children}
        </StyledTextSnippet>
      </motion.header>
    </>
  )
}

const StyledTextSnippet = styled(TextSnippet)`
  max-width: var(--page-width);
  flex: 1;
`

export default styled(SectionTextHeader)`
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

  @media ${deviceBreakPoints.mobile} {
    margin-bottom: var(--spacing-10);
  }

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
    color: ${({ theme }) => theme.textSecondary};
    max-width: var(--width-564);
  }
`
