import { PointerEvent } from 'react'

export const getPointerAbsolutePositionInElement = (e: PointerEvent) => {
  const bounds = e.currentTarget.getBoundingClientRect()

  return {
    x: e.clientX - bounds.x,
    y: e.clientY - bounds.y
  }
}

export const getPointerRelativePositionInElement = (e: PointerEvent) => {
  const { x: posX, y: posY } = getPointerAbsolutePositionInElement(e)

  return {
    x: posX / e.currentTarget.clientWidth,
    y: posY / e.currentTarget.clientHeight
  }
}
