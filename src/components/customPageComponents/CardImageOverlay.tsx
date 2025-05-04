import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled, { DefaultTheme, useTheme } from 'styled-components'

import GatsbyImageWrapper from '../GatsbyImageWrapper'
import TextElement from './TextElement'

interface CardImageOverlayProps {
  overlayTitle: string | null
  image?: IGatsbyImageData
  rounded?: boolean
  paletteColor?: Pick<DefaultTheme, 'palette1' | 'palette2' | 'palette3' | 'palette4'>
}

const CardImageOverlay = ({ image, overlayTitle, rounded, paletteColor = 'palette1' }: CardImageOverlayProps) => {
  const theme = useTheme()

  return (
    <CardImageOverlayStyled rounded={rounded}>
      {image && (
        <ImageContainer>
          <StyledImage className="styled-image">
            <GatsbyImageWrapper
              image={image}
              alt={overlayTitle || ''}
              style={{ height: '100%' }}
              objectFit="cover"
              loading="lazy"
            />
          </StyledImage>
        </ImageContainer>
      )}
      <OverlayTitleContainer>
        <TextElement>
          <h3 style={{ color: theme[paletteColor] }}>{overlayTitle}</h3>
        </TextElement>
      </OverlayTitleContainer>
    </CardImageOverlayStyled>
  )
}

export default CardImageOverlay

const CardImageOverlayStyled = styled.div<Pick<CardImageOverlayProps, 'rounded'>>`
  position: relative;
  width: 100%;
  min-height: 140px;
  border-radius: ${({ rounded }) => (rounded ? 'var(--radius-small)' : '0')};
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgSecondary};
`

const ImageContainer = styled.div`
  position: absolute;
  top: var(--spacing-1);
  left: var(--spacing-1);
  right: var(--spacing-1);
  bottom: var(--spacing-1);
  border-radius: var(--radius-small);
  overflow: hidden;
  z-index: 0;
`

const StyledImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
`

const OverlayTitleContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 20px;
  z-index: 2;

  h3 {
    margin: 0;
    transition: color 0.3s ease;
  }
`
