import { graphql } from 'gatsby'

export const heroImageFragment = graphql`
  fragment HeroImage on File {
    childImageSharp {
      gatsbyImageData(
        width: 1920
        layout: CONSTRAINED
        transformOptions: { fit: COVER, cropFocus: CENTER }
        quality: 80
      )
    }
  }
`
