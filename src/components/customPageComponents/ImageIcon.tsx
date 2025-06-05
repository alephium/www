import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'

import GatsbyImageWrapper from '../GatsbyImageWrapper'

interface ImageIconProps {
  image?: IGatsbyImageData
  src?: string
  alt?: string
  rounded?: boolean
  size?: number
  padding?: number
  noBottomMargin?: boolean
  className?: string
}

const ImageIcon = ({ image, src, alt = '', rounded, size, padding, noBottomMargin, className }: ImageIconProps) => {
  if (!image && !src) return null

  return (
    <ImageIconContainer
      size={size}
      rounded={rounded}
      padding={padding}
      noBottomMargin={noBottomMargin}
      className={className}
    >
      {image ? (
        <GatsbyImageWrapper
          image={image}
          alt={alt}
          style={{ height: '100%', borderRadius: '6px' }}
          objectFit="cover"
          loading="lazy"
        />
      ) : (
        <img src={src} alt={alt} style={{ height: '100%', objectFit: 'cover', borderRadius: '6px' }} loading="lazy" />
      )}
    </ImageIconContainer>
  )
}

const ImageIconContainer = styled.div<{ size?: number; rounded?: boolean; padding?: number; noBottomMargin?: boolean }>`
  width: ${({ size }) => (size ? `${size}px` : '80px')};
  height: ${({ size }) => (size ? `${size}px` : '80px')};
  border-radius: ${({ rounded }) => (rounded ? 'var(--radius-small)' : '0')};
  padding: ${({ padding }) => (padding ? `${padding}px` : '0')};
  overflow: hidden;
  position: relative;
  margin-bottom: ${({ noBottomMargin }) => (noBottomMargin ? '0' : 'var(--spacing-3)')};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default ImageIcon
