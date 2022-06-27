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

  const [currentParentSize, setCurrentParentSize] = useState<{ height: number; width: number }>({ height: 0, width: 0 })

  let t = 0

  useAnimationFrame((deltaTime) => {
    t = t + (deltaTime * 20) / 100000

    const height = parentRef?.current?.offsetHeight || 0
    const width = parentRef?.current?.offsetWidth || 0

    if (height !== currentParentSize.height) {
      setCurrentParentSize((prev) => ({ ...prev, height }))
    }

    if (width !== currentParentSize.width) {
      setCurrentParentSize((prev) => ({ ...prev, width }))
    }

    if (canvasContextRef.current) {
      canvasContextRef.current.clearRect(0, 0, width, height)
      Object.entries(waves).forEach((w) => {
        w[1].draw(canvasContextRef.current as CanvasRenderingContext2D, width, height, t)
      })
    } else {
      let ctx
      if ((ctx = canvasRef.current?.getContext('2d'))) {
        canvasContextRef.current = ctx
      }
    }
  })

  return (
    <CanvasContainer style={{ height: currentParentSize.height }}>
      <canvas id="canvas" ref={canvasRef} width={currentParentSize.width} height={currentParentSize.height} />
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
