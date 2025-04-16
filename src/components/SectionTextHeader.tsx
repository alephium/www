import { motion } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import useElementDistanceToTop from '../hooks/useElementDistanceToTop'
import { deviceBreakPoints } from '../styles/global-style'
import { toId } from '../utils/misc'
import TextSnippet from './TextSnippet'

interface SectionTextHeaderProps {
  titleRows: string[]
  subtitleRows?: string[]
  className?: string
  id?: string
  bigSubtitle?: boolean
  bigText?: boolean
  centered?: boolean
  sticky?: boolean
  bottomBorder?: boolean
  children?: ReactNode
}

const SectionTextHeader = ({
  className,
  id,
  titleRows,
  subtitleRows,
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
  const theme = useTheme()

  if (sticky && isHeadingDistanceFromTopOfScreenInitialized) {
    if (headingDistanceFromTopOfScreen <= 5 && !headingReachedTopOfScreen) {
      setHeadingReachedTopOfScreen(true)
    } else if (headingDistanceFromTopOfScreen > 5 && headingReachedTopOfScreen) {
      setHeadingReachedTopOfScreen(false)
    }
  }

  const borderBottom = bottomBorder && headingReachedTopOfScreen ? `1px solid rgba(255, 255, 255, 0.1)` : undefined
  const backgroundColor = headingReachedTopOfScreen ? theme.bgTertiary : 'rgba(0, 0, 0, 0)'

  return (
    <>
      <div ref={headingElementRef} id={toId(id || titleRows.join(' '))} />
      <motion.header className={className} animate={{ borderBottom, backgroundColor }}>
        <TextSnippetStyled
          title={titleRows.join('\n')}
          subtitle={subtitleRows}
          anchor={id || titleRows.join(' ')}
          bigTitle
          bigSubtitle={bigSubtitle}
          bigText={bigText}
          animate={{ scale: headingReachedTopOfScreen ? 0.7 : 1 }}
          transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
          style={{ transformOrigin: centered ? 'center' : 'left' }}
        >
          {children}
        </TextSnippetStyled>
      </motion.header>
    </>
  )
}

export default styled(SectionTextHeader)`
  position: ${({ sticky }) => (sticky ? 'sticky' : 'relative')};
  top: 0;
  right: 0;
  left: 0;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  z-index: 2000;
  display: flex;
  justify-content: center;
  padding: 0 var(--spacing-4);
  padding-top: var(--spacing-16);
  margin-bottom: var(--spacing-12);
  border-bottom: 1px solid transparent;

  @media ${deviceBreakPoints.mobile} {
    margin-bottom: var(--spacing-10);
  }

  h2 {
    color: ${({ theme }) => theme.textPrimary};
    font-weight: var(--fontWeight-medium);
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

const TextSnippetStyled = styled(TextSnippet)`
  flex: 1;
  max-width: var(--page-width);
`
