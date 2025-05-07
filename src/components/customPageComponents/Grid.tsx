import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

interface GridProps {
  gap?: 'large' | 'small'
  columns?: number
  isCentered?: boolean
  children?: React.ReactNode
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
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

const Grid: React.FC<GridProps> = ({ children, ...props }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <StyledGrid
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      {...props}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </StyledGrid>
  )
}

export default Grid

const StyledGrid = styled(motion.div)<GridProps>`
  ${({ isCentered, columns }) =>
    isCentered
      ? `
          display: inline-grid;
          grid-auto-flow: column;
          grid-auto-columns: 1fr;
          justify-content: center;
          margin: 0 auto;
        `
      : `
          display: grid;
          grid-template-columns: repeat(${columns || 3}, minmax(0, 1fr));
        `}
  gap: ${({ gap }) => (gap === 'small' ? 'var(--spacing-2)' : 'var(--spacing-8)')};

  @media ${deviceBreakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${deviceBreakPoints.smallMobile} {
    grid-template-columns: 1fr;
  }
`
