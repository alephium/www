import styled from 'styled-components'

import TextElement from './TextElement'

interface CardImageProps {
  overlayTitle?: string | null
  imageUrl?: string | null
  rounded?: boolean
}

const CardImage = ({ imageUrl, overlayTitle }: CardImageProps) => (
  <CardImageStyled style={{ backgroundImage: `url(${imageUrl})` }}>
    {overlayTitle && (
      <OverlayTitleContainer>
        <TextElement>
          <h3>{overlayTitle}</h3>
        </TextElement>
      </OverlayTitleContainer>
    )}
    {overlayTitle && <BottomGradient />}
  </CardImageStyled>
)

const CardImageStyled = styled.div<CardImageProps>`
  position: relative;
  width: 100%;
  min-height: 200px;
  margin-bottom: 30px;
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
`

const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
`

export default CardImage
