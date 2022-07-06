/*
Copyright 2018 - 2022 The Alephium Authors
This file is part of the alephium project.

The library is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with the library. If not, see <http://www.gnu.org/licenses/>.
*/

// Inpired by https://github.com/ashiishme/react-sine-wave

import { MutableRefObject, useRef, useState } from 'react'
import styled from 'styled-components'

import useAnimationFrame from '../../hooks/useAnimationFrame'
import WaveEntity from './WaveEntity'

const Waves = ({ parentRef }: { parentRef?: MutableRefObject<HTMLDivElement | null> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContextRef = useRef<CanvasRenderingContext2D>()
  const size = useRef({ width: 0, height: 0 })
  const delta = useRef(0)
  const frame = useRef(0)
  const [, setMustResize] = useState()

  // This is a really weird hook. Any updates to state are not reflected because the callback
  // is not changed. I had to do some weird things with useRef and useState to get things to work
  // as needed. I suggest we look for a better animation frame hook in the future.
  useAnimationFrame((deltaTime) => {
    delta.current = delta.current + deltaTime / 1000.0
    frame.current = frame.current + 1

    // 60 fps / 8 ~= 8fps
    // Given the speed of the animation this is sufficient to look smooth
    if (frame.current != 8) return
    frame.current = 0

    const height = parentRef?.current?.offsetHeight || 0
    const width = parentRef?.current?.offsetWidth || 0

    if (height !== size.current.height || width !== size.current.width) {
      size.current = { width, height }
      setMustResize({})
    }

    if (canvasContextRef.current) {
      canvasContextRef.current.clearRect(0, 0, width, height)
      Object.entries(waves).forEach((w) => {
        w[1].draw(canvasContextRef.current as CanvasRenderingContext2D, width, height, delta.current / 20.0)
      })
    } else {
      let ctx
      if ((ctx = canvasRef.current?.getContext('2d'))) {
        canvasContextRef.current = ctx
      }
    }
  })

  return (
    <CanvasContainer style={{ height: `${size.current.height}px` }}>
      <canvas id="canvas" ref={canvasRef} width={size.current.width} height={size.current.height} />
    </CanvasContainer>
  )
}

const waves: [WaveEntity, WaveEntity] = [
  new WaveEntity([0.0081, 0.028, 0.015], 1, 1, ['rgba(22, 204, 244, 0.6)', 'rgba(101, 16, 248, 0.2)']),
  new WaveEntity([0.0022, 0.018, 0.005], 1, 1.2, ['rgba(244, 129, 22, 0.6)', 'rgba(101, 16, 248, 0.2)'])
]

const CanvasContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
`

export default Waves
