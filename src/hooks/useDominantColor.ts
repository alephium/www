import Vibrant from 'node-vibrant'
import { useEffect, useState } from 'react'

export const useDominantColor = (imageUrl?: string) => {
  const [dominantColor, setDominantColor] = useState<string>()

  useEffect(() => {
    if (!imageUrl) return

    const extractColor = async () => {
      try {
        const palette = await Vibrant.from(imageUrl).getPalette()
        // Get the most vibrant color from the palette
        const color = palette.Vibrant?.hex || palette.DarkVibrant?.hex || palette.LightVibrant?.hex
        if (color) {
          setDominantColor(color)
        }
      } catch (error) {
        console.error('Error extracting color:', error)
      }
    }

    extractColor()
  }, [imageUrl])

  return dominantColor
}
