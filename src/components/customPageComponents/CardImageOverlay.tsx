import styled from 'styled-components'

import TextElement from './TextElement'

interface CardImageOverlayProps {
  overlayTitle: string | null
  imageUrl?: string | null
  rounded?: boolean
}

const CardImageOverlay = ({ imageUrl, overlayTitle, rounded }: CardImageOverlayProps) => (
  <CardImageOverlayStyled style={{ backgroundImage: `url(${imageUrl})` }} rounded={rounded}>
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
  min-height: 200px;
  margin-bottom: 20px;
  border-radius: ${({ rounded }) => (rounded ? '20px' : '0')};
  overflow: hidden;
  border-radius: var(--radius);
  background-size: cover;
  background-position: center;
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
