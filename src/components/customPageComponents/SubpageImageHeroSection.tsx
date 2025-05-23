import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from '../../styles/themes'
import GatsbyImageWrapper from '../GatsbyImageWrapper'
import SubpageHeroSection, { SubpageHeroSectionProps } from './SubpageHeroSection'

interface SubpageImageHeroSectionProps extends Omit<SubpageHeroSectionProps, 'mediaContent'> {
  children: ReactNode
  backgroundImage?: {
    readonly childImageSharp: {
      readonly gatsbyImageData: IGatsbyImageData
    } | null
  } | null
  backgroundImageAlt?: string
}

const SubpageImageHeroSection = ({
  children,
  backgroundImage,
  backgroundImageAlt = '',
  ...props
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
        {...props}
      >
        {children}
      </SubpageHeroSection>
    </ThemeProvider>
  )
}

export default SubpageImageHeroSection
