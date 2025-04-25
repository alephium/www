import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'

import GatsbyImageWrapper from '../GatsbyImageWrapper'

interface CardImageProps {
  image?: IGatsbyImageData
  alt?: string
  rounded?: boolean
  size?: number
}

const CardImage = ({ image, alt = '', rounded, size }: CardImageProps) => {
  if (!image) return null

  return (
    <CardImageContainer size={size} rounded={rounded}>
      <GatsbyImageWrapper
        image={image}
        alt={alt}
        style={{ height: '100%', width: '100%' }}
        objectFit="cover"
        loading="lazy"
      />
    </CardImageContainer>
  )
}

const CardImageContainer = styled.div<{ size?: number; rounded?: boolean }>`
  width: ${({ size }) => (size ? `${size}px` : '80px')};
  height: ${({ size }) => (size ? `${size}px` : '80px')};
  border-radius: ${({ rounded }) => (rounded ? 'var(--radius-small)' : '0')};
  margin-bottom: var(--spacing-4);
  overflow: hidden;
`

export default CardImage
