import 'react-medium-image-zoom/dist/styles.css'

import { ReactNode, useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'

import { deviceSizes } from '../styles/global-style'

interface ZoomerProps {
  children: ReactNode
}

const Zoomer = ({ children }: ZoomerProps) => {
  const zoomMargin = useZoomMargin()

  return <Zoom zoomMargin={zoomMargin}>{children}</Zoom>
}

const useZoomMargin = () => {
  const [zoomMargin, setZoomMargin] = useState(0)

  const updateZoomMargin = () => {
    setZoomMargin(window.innerWidth > deviceSizes.desktop ? 200 : window.innerWidth > deviceSizes.mobile ? 100 : 0)
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
