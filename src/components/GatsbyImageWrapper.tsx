import { GatsbyImage, GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import styled, { css } from 'styled-components'

interface GatsbyImageWrapperProps extends Omit<GatsbyImageProps, 'image'> {
  image: IGatsbyImageData | undefined
  isBackground?: boolean
  className?: string
}

const GatsbyImageWrapper: React.FC<GatsbyImageWrapperProps> = ({
  image,
  alt = '',
  className,
  isBackground = false,
  ...props
}) => {
  if (!image) return null

  return (
    <StyledGatsbyImage isBackground={isBackground}>
      <GatsbyImage image={image} alt={alt} className={className} {...props} />
    </StyledGatsbyImage>
  )
}

// This is a hack because I can't figure out why the following styles are applied in dev mode but not in production
const StyledGatsbyImage = styled.div<{ isBackground?: boolean }>`
  width: 100%;
  height: 100%;

  ${({ isBackground }) =>
    isBackground &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    `}

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
    opacity: 1 !important;
  }
`

export default GatsbyImageWrapper
