import React, { FC, useState, useEffect } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { deviceSizes } from '../styles/global-style'

const Zoomer: FC = ({ children }) => {
  const zoomMargin = useZoomMargin()

  return <Zoom zoomMargin={zoomMargin}>{children}</Zoom>
}

const useZoomMargin = () => {
  const [zoomMargin, setZoomMargin] = useState(0)

  const updateZoomMargin = () => {
    setZoomMargin(window.innerWidth > deviceSizes.desktop ? 500 : window.innerWidth > deviceSizes.mobile ? 100 : 0)
  }

  useEffect(() => {
    updateZoomMargin()

    window.addEventListener('resize', updateZoomMargin)
    return () => {
      window.removeEventListener('resize', updateZoomMargin)
    }
  }, [])

  return zoomMargin
}

export default Zoomer
