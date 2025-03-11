import { GatsbyImage, GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

interface GatsbyImageWrapperProps extends Omit<GatsbyImageProps, 'image'> {
  image: IGatsbyImageData | undefined
  className?: string
}

const GatsbyImageWrapper: React.FC<GatsbyImageWrapperProps> = ({ image, alt = '', className, ...props }) => {
  if (!image) return null

  return (
    <StyledGatsbyImage>
      <GatsbyImage image={image} alt={alt} className={className} {...props} />
    </StyledGatsbyImage>
  )
}

const StyledGatsbyImage = styled.div`
  /* Ensure wrapper takes full size */
  width: 100%;
  height: 100%;

  /* Enforce necessary styles that might be missing in production */
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .gatsby-image-wrapper img {
    bottom: 0;
    height: 100%;
    left: 0;
    margin: 0;
    max-width: none;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
  }
`

export default GatsbyImageWrapper
