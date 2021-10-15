import { FC } from 'react'
import styled from 'styled-components'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ImageProps {
  altText: string
  src: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

interface ResponsiveImageProps {
  image: ImageProps
  className?: string
}

let ResponsiveImage: FC<ResponsiveImageProps> = ({ image, className }) => (
  <div className={className}>
    <picture>
      {image.src.childImageSharp.gatsbyImageData.images.sources?.map((source) => (
        <source {...source} key={source.srcSet} />
      ))}
      <img
        {...image.src.childImageSharp.gatsbyImageData.images.fallback}
        decoding="async"
        loading="lazy"
        alt={image.altText}
      />
    </picture>
  </div>
)

ResponsiveImage = styled(ResponsiveImage)`
  max-width: ${({ image }) => image.src.childImageSharp.gatsbyImageData.width}px;

  img {
    height: 100%;
    max-width: none;
    width: 100%;
    object-fit: cover;
  }
`

export default ResponsiveImage
