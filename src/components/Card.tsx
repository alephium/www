import { HTMLMotionProps, motion } from 'framer-motion'
import styled from 'styled-components'

interface CardProps extends HTMLMotionProps<'div'> {
  className?: string
  borderColor?: string
  thickBorders?: boolean
  bgColor?: string
  shadow?: boolean
  children: React.ReactNode
}

const Card = ({ className, children, ...props }: CardProps) => {
  // Removing props that should not go to the motion.div
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { borderColor, thickBorders, shadow, ...remainingProps } = props

  return (
    <motion.div className={className} {...remainingProps}>
      {children}
    </motion.div>
  )
}

export default styled(Card)`
  position: relative;
  padding: 41px 30px 25px 34px;
  border-radius: 20px;
  background-color: ${({ theme, bgColor }) => bgColor || theme.background2};
  background-clip: padding-box;
  text-decoration: none;
  overflow: hidden;
  ${({ shadow }) => shadow && 'box-shadow: 0px 22px 30px rgba(0, 0, 0, 0.47);'}
  transition: all 0.1s ease-out;
`
