import { motion } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'
import styled from 'styled-components'
import useElementDistanceToTop from '../hooks/useElementDistanceToTop'
import { deviceBreakPoints } from '../styles/global-style'
import { toId } from '../utils/misc'

import TextSnippet from './TextSnippet'

interface SectionTextHeaderProps {
  className?: string
  title: string
  subtitle: string
  bigSubtitle?: boolean
  bigText?: boolean
  centered?: boolean
  sticky?: boolean
  bottomBorder?: boolean
  children?: ReactNode
}

const SectionTextHeader = ({
  className,
  title,
  subtitle,
  bigSubtitle,
  bigText,
  sticky,
  centered,
  bottomBorder = true,
  children
}: SectionTextHeaderProps) => {
  const headingElementRef = useRef(null)
  const headingDistanceFromTopOfScreen = useElementDistanceToTop(headingElementRef)
  const [headingReachedTopOfScreen, setHeadingReachedTopOfScreen] = useState(false)
  const isHeadingDistanceFromTopOfScreenInitialized = headingDistanceFromTopOfScreen !== undefined

  if (sticky && isHeadingDistanceFromTopOfScreenInitialized) {
    if (headingDistanceFromTopOfScreen <= 0 && !headingReachedTopOfScreen) {
      setHeadingReachedTopOfScreen(true)
    } else if (headingDistanceFromTopOfScreen > 0 && headingReachedTopOfScreen) {
      setHeadingReachedTopOfScreen(false)
    }
  }

  const borderBottom = bottomBorder && headingReachedTopOfScreen ? `1px solid rgba(255, 255, 255, 0.1)` : undefined

  return (
    <>
      <div ref={headingElementRef} id={toId(title)} />
      <motion.header className={className} animate={{ borderBottom }}>
        <StyledTextSnippet
          title={title}
          subtitle={subtitle}
          bigTitle
          bigSubtitle={bigSubtitle}
          bigText={bigText}
          animate={{ scale: headingReachedTopOfScreen ? 0.7 : 1 }}
          transition={{ stiffness: 30 }}
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
  z-index: 2000;
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  padding: 0 var(--spacing-4);
  border-bottom: 1px solid transparent;

  @media ${deviceBreakPoints.mobile} {
    margin-bottom: var(--spacing-10);
  }

  h2 {
    color: ${({ theme }) => theme.textPrimary};
    font-weight: var(--fontWeight-semiBold);
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
