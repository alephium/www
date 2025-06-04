import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'

import GatsbyImageWrapper from '../GatsbyImageWrapper'

interface CardImageProps {
  image?: IGatsbyImageData
  src?: string
  className?: string
}

const CardImage = ({ image, src, className }: CardImageProps) => {
  if (!src && !image) return null

  return (
    <>
      <CardImageStyled className={className}>
        {image ? (
          <>
            <GatsbyImageWrapper
              image={image}
              style={{ height: '100%' }}
              objectFit="contain"
              objectPosition="left"
              loading="lazy"
              alt="Card image"
            />
          </>
        ) : (
          <img src={src} alt="Card image" style={{ objectFit: 'contain', objectPosition: 'left' }} />
        )}
      </CardImageStyled>
    </>
  )
}

export default CardImage

const CardImageStyled = styled.div<{ className?: string }>`
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: var(--radius-small);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`
