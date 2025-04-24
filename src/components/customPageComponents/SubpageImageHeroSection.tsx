import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from '../../styles/themes'
import GatsbyImageWrapper from '../GatsbyImageWrapper'
import SubpageHeroSection from './SubpageHeroSection'

interface SubpageImageHeroSectionProps {
  children: ReactNode
  backgroundImage?: {
    readonly childImageSharp: {
      readonly gatsbyImageData: IGatsbyImageData
    } | null
  } | null
  backgroundImageAlt?: string
  maxHeight?: string
}

const SubpageImageHeroSection = ({
  children,
  backgroundImage,
  maxHeight,
  backgroundImageAlt = ''
}: SubpageImageHeroSectionProps) => {
  const imageData = backgroundImage?.childImageSharp?.gatsbyImageData
  const image = imageData ? getImage(imageData) : undefined

  return (
    <ThemeProvider theme={darkTheme}>
      <SubpageHeroSection
        mediaContent={
          backgroundImage && (
            <GatsbyImageWrapper image={image} alt={backgroundImageAlt} style={{ height: '100%' }} objectFit="cover" />
          )
        }
        maxHeight={maxHeight}
      >
        {children}
      </SubpageHeroSection>
    </ThemeProvider>
  )
}

export default SubpageImageHeroSection
