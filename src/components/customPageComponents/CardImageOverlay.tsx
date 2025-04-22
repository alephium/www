import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'

import GatsbyImageWrapper from '../GatsbyImageWrapper'
import TextElement from './TextElement'

interface CardImageOverlayProps {
  overlayTitle: string | null
  image?: IGatsbyImageData
  rounded?: boolean
}

const CardImageOverlay = ({ image, overlayTitle, rounded }: CardImageOverlayProps) => (
  <CardImageOverlayStyled rounded={rounded}>
    {image && (
      <GatsbyImageWrapper
        image={image}
        alt={overlayTitle || ''}
        style={{ height: '100%' }}
        objectFit="cover"
        loading="lazy"
      />
    )}
    <OverlayTitleContainer>
      <TextElement>
        <h3>{overlayTitle}</h3>
      </TextElement>
    </OverlayTitleContainer>
    <BottomGradient />
  </CardImageOverlayStyled>
)

export default CardImageOverlay

const CardImageOverlayStyled = styled.div<Pick<CardImageOverlayProps, 'rounded'>>`
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: ${({ rounded }) => (rounded ? 'var(--radius-small)' : '0')};
  overflow: hidden;
`

const OverlayTitleContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 20px;
  z-index: 1;

  h3 {
    margin: 0;
  }
`

const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
`
