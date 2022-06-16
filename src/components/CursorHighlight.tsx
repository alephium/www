import { motion } from 'framer-motion'
import styled from 'styled-components'
import { PointerEvent, useState } from 'react'
import { getPointerAbsolutePositionInElement } from '../utils/pointer'

const CursorHighlight = () => {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handlePointerEnter = () => (!visible ? setVisible(true) : null)
  const handlePointerLeave = () => (visible ? setVisible(false) : null)

  const handlePointerMove = (e: PointerEvent) => {
    const position = getPointerAbsolutePositionInElement(e)

    setPosition(position)
  }

  return (
    <Container
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <HighlightContainer style={{ x: position.x, y: position.y, opacity: visible ? 1 : 0 }}>
        <Highlight />
      </HighlightContainer>
    </Container>
  )
}

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`

const HighlightContainer = styled(motion.div)`
  height: 1000px;
  width: 1000px;
`

const Highlight = styled(motion.div)`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  background: radial-gradient(rgba(255, 255, 255, 0.03) 0%, transparent 40%);
  transform: translateX(-50%) translateY(-50%);
`

export default CursorHighlight
