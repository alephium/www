import { GatsbyImage, GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import styled, { css } from 'styled-components'

interface GatsbyImageWrapperProps extends Omit<GatsbyImageProps, 'image'> {
  image: IGatsbyImageData | undefined
  isBackground?: boolean
  className?: string
  preserveWidth?: boolean
  center?: boolean
  rounded?: boolean
  style?: React.CSSProperties
  zoom?: {
    scale?: number
    x?: number
    y?: number
  }
}

const GatsbyImageWrapper: React.FC<GatsbyImageWrapperProps> = ({
  image,
  alt = '',
  className,
  isBackground = false,
  preserveWidth = false,
  center = false,
  rounded = false,
  style,
  zoom,
  ...props
}) => {
  if (!image) return null

  return (
    <StyledGatsbyImage
      isBackground={isBackground}
      preserveWidth={preserveWidth}
      center={center}
      rounded={rounded}
      style={style}
      zoom={zoom}
    >
      <GatsbyImage image={image} alt={alt} className={className} {...props} />
    </StyledGatsbyImage>
  )
}

// This is a hack because I can't figure out why the following styles are applied in dev mode but not in production
const StyledGatsbyImage = styled.div<{
  isBackground?: boolean
  preserveWidth?: boolean
  center?: boolean
  rounded?: boolean
  zoom?: {
    scale?: number
    x?: number
    y?: number
  }
}>`
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

    > div[data-placeholder-image] {
      display: none;
    }
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
    width: ${({ preserveWidth }) => (preserveWidth ? 'auto' : '100%')};
    object-fit: cover;
    opacity: 1 !important;
    filter: brightness(${({ theme }) => (theme.name === 'dark' ? 0.9 : 1.1)});

    ${({ center }) =>
      center &&
      css`
        margin-left: auto;
        margin-right: auto;
      `}

    ${({ rounded }) =>
      rounded &&
      css`
        border-radius: 100%;
      `}

    ${({ zoom }) =>
      zoom &&
      css`
        transform: scale(${zoom.scale || 1.5}) !important;
        transform-origin: center !important;
        object-position: ${zoom.x || 30}% ${zoom.y || -30}% !important;
      `}
  }
`

export default GatsbyImageWrapper
