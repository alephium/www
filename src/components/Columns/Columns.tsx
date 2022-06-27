import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { motion, HTMLMotionProps, Variants } from 'framer-motion'

import { deviceBreakPoints } from '../../styles/global-style'

interface ColumnsProps {
  className?: string
  gap?: string
  reverse?: boolean
  animateEntry?: boolean
  children: ReactNode
}

const Columns: FC<ColumnsProps> = ({ className, animateEntry = false, ...props }, ref) => (
  <motion.div ref={() => ref} className={className} {...props} {...getAnimationProps(animateEntry)} />
)

const columnsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: '5%'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: 0.25
    }
  }
}

const getAnimationProps = (animateEntry: boolean): Omit<HTMLMotionProps<'div'>, 'animateEntry'> =>
  animateEntry
    ? {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true },
        variants: columnsVariants
      }
    : {}

export default styled(Columns)`
  display: flex;
  gap: ${(props) => props.gap || '0'};

  @media ${deviceBreakPoints.mobile} {
    flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
  }
`
