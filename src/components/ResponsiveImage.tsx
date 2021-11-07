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
    <ImageContainer>
      {image.src.childImageSharp.gatsbyImageData.images.sources?.map((source) => (
        <source {...source} key={source.srcSet} />
      ))}
      <img
        {...image.src.childImageSharp.gatsbyImageData.images.fallback}
        decoding="async"
        loading="lazy"
        alt={image.altText}
      />
    </ImageContainer>
  </div>
)

ResponsiveImage = styled(ResponsiveImage)`
  max-width: ${({ image }) => image.src.childImageSharp.gatsbyImageData.width}px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.bgTertiary};
  overflow: hidden;

  img {
    height: 100%;
    max-width: none;
    width: 100%;
    object-fit: cover;
  }
`

const ImageContainer = styled.picture`
  display: flex;
`

export default ResponsiveImage
