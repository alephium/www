import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'

import GatsbyImageWrapper from '../GatsbyImageWrapper'

interface CardImageProps {
  image?: IGatsbyImageData
  src?: string
}

const CardImage = ({ image, src }: CardImageProps) => {
  if (!src && !image) return null

  return (
    <>
      <CardImageStyled>
        {image ? (
          <>
            <GatsbyImageWrapper
              image={image}
              style={{ height: '100%' }}
              objectFit="contain"
              loading="lazy"
              alt="Card image"
            />
          </>
        ) : (
          <img src={src} alt="Card image" style={{ objectFit: 'contain' }} />
        )}
      </CardImageStyled>
    </>
  )
}

export default CardImage

const CardImageStyled = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: var(--radius-small);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`
