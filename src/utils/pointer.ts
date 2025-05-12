import { PointerEvent } from 'react'

export const getPointerAbsolutePositionInElement = (e: PointerEvent) => {
  const bounds = e.currentTarget.getBoundingClientRect()

  return {
    x: e.clientX - bounds.x,
    y: e.clientY - bounds.y
  }
}

export const getPointerRelativePositionInElement = (e: React.PointerEvent) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height
  return { x, y }
}
