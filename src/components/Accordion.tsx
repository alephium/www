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
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
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
  border: 1px solid ${({ theme }) => theme.separator};
  border-radius: var(--radius);
  margin-bottom: var(--spacing-4);
  overflow: hidden;
`

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-4);
  background-color: ${({ theme }) => theme.bgPrimary};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.bgSurface};
  }
`

const AccordionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: var(--fontWeight-medium);
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
  padding: var(--spacing-4);
  background-color: ${({ theme }) => theme.bgPrimary};
`
