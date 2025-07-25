import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import styled from 'styled-components'

import TextElement from './customPageComponents/TextElement'

interface AccordionProps {
  title: string
  children: React.ReactNode
  className?: string
}

const Accordion = ({ title, children, className }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AccordionContainer className={className}>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIcon>{isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</AccordionIcon>
      </AccordionHeader>
      <AnimatePresence>
        {isOpen && (
          <AccordionContent
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <AccordionInner>
              <TextElement isBodySmall>{children}</TextElement>
            </AccordionInner>
          </AccordionContent>
        )}
      </AnimatePresence>
    </AccordionContainer>
  )
}

export default Accordion

const AccordionContainer = styled.div`
  border-radius: var(--radius-small);
  overflow: hidden;
`

const AccordionHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-1) var(--spacing-3);
  background-color: ${({ theme, isOpen }) => (isOpen ? theme.background1 : theme.background2)};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.surface1};
  }
`

const AccordionTitle = styled.h3`
  font-size: var(--fontSize-22);
`

const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.5rem;
`

const AccordionContent = styled(motion.div)`
  overflow: hidden;
`

const AccordionInner = styled.div`
  padding: var(--spacing-2) var(--spacing-3);
  background-color: ${({ theme }) => theme.surface1};

  * {
    font-weight: var(--fontWeight-medium) !important;
    color: ${({ theme }) => theme.textPrimary} !important;
  }
`
