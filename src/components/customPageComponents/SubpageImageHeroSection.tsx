import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ReactNode } from 'react'
import { ThemeProvider, useTheme } from 'styled-components'

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
  split,
  ...props
}: SubpageImageHeroSectionProps) => {
  const imageData = backgroundImage?.childImageSharp?.gatsbyImageData
  const image = imageData ? getImage(imageData) : undefined
  const theme = useTheme()

  return (
    <ThemeProvider theme={backgroundImage && !split ? darkTheme : theme}>
      <SubpageHeroSection
        mediaContent={
          backgroundImage && (
            <ThemeProvider theme={theme}>
              <GatsbyImageWrapper image={image} alt={backgroundImageAlt} style={{ height: '100%' }} objectFit="cover" />
            </ThemeProvider>
          )
        }
        split={split}
        {...props}
      >
        {children}
      </SubpageHeroSection>
    </ThemeProvider>
  )
}

export default SubpageImageHeroSection
