import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'

import GatsbyImageWrapper from '../GatsbyImageWrapper'

interface CardImageProps {
  image?: IGatsbyImageData
  src?: string
  className?: string
  zoom?: {
    scale?: number
    x?: number
    y?: number
  }
}

const CardImage = ({ image, src, className, zoom }: CardImageProps) => {
  if (!src && !image) return null

  return (
    <>
      <CardImageStyled className={className}>
        {image ? (
          <>
            <GatsbyImageWrapper image={image} objectFit="cover" loading="lazy" alt="Card image" zoom={zoom} />
          </>
        ) : (
          <img
            src={src}
            alt="Card image"
            style={{
              objectFit: 'cover',
              transform: zoom ? `scale(${zoom.scale || 1.5})` : undefined,
              transformOrigin: 'center',
              objectPosition: zoom ? `${zoom.x || 30}% ${zoom.y || -30}%` : 'center'
            }}
          />
        )}
      </CardImageStyled>
    </>
  )
}

export default CardImage

const CardImageStyled = styled.div<{ className?: string }>`
  position: relative;
  margin: var(--spacing-1);
  border-radius: calc(var(--radius-big) - var(--spacing-1));
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`
