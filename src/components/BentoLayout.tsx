import { motion, Variants } from 'framer-motion'
import React, { useRef } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

interface BentoLayoutProps {
  children: React.ReactNode
  columns?: number
  gap?: 'small' | 'medium' | 'large'
  animateItems?: boolean
  className?: string
}

interface BentoItemProps {
  children: React.ReactNode
  colSpan?: number
  rowSpan?: number
  className?: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

export const BentoLayout: React.FC<BentoLayoutProps> = ({
  children,
  columns = 4,
  gap = 'small',
  animateItems = true,
  className
}) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <BentoContainer
      ref={ref}
      $columns={columns}
      $gap={gap}
      className={className}
      variants={animateItems ? containerVariants : undefined}
      initial={animateItems ? 'hidden' : undefined}
      whileInView={animateItems ? 'visible' : undefined}
      viewport={{ once: true, margin: '-50px' }}
    >
      {React.Children.map(children, (child, index) => (
        <BentoItemWrapper key={index} variants={animateItems ? itemVariants : undefined} custom={index}>
          {child}
        </BentoItemWrapper>
      ))}
    </BentoContainer>
  )
}

export const BentoItem: React.FC<BentoItemProps> = ({ children, colSpan = 1, rowSpan = 1, className }) => (
  <BentoItemStyled $colSpan={colSpan} $rowSpan={rowSpan} className={className}>
    {children}
  </BentoItemStyled>
)

export default BentoLayout

const BentoContainer = styled(motion.div)<{
  $columns: number
  $gap: 'small' | 'medium' | 'large'
}>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  grid-auto-rows: 1fr;
  gap: ${({ $gap }) => {
    switch ($gap) {
      case 'small':
        return 'var(--spacing-2)'
      case 'large':
        return 'var(--spacing-6)'
      default:
        return 'var(--spacing-4)'
    }
  }};
  width: 100%;

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: 1fr;
    gap: var(--spacing-3);
    grid-auto-rows: auto;
  }
`

const BentoItemWrapper = styled(motion.div)`
  display: contents;
`

const BentoItemStyled = styled(motion.div)<{
  $colSpan: number
  $rowSpan: number
}>`
  grid-column: span ${({ $colSpan }) => Math.min($colSpan, 4)};
  grid-row: span ${({ $rowSpan }) => Math.min($rowSpan, 4)};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* Ensure child elements respect the height constraint and fill the space */
  > * {
    height: 100% !important;
    width: 100% !important;
    flex: 1;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-word;
    box-sizing: border-box;
  }

  @media ${deviceBreakPoints.mobile} {
    grid-column: span 1 !important;
    grid-row: span 1 !important;

    /* On mobile, let cards fit their content instead of forcing 100% height */
    > * {
      height: auto !important;
      flex: none;
    }
  }

  @media ${deviceBreakPoints.ipad} {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }
`
