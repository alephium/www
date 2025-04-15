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
  height: 200px;
  margin-bottom: 30px;
  border-radius: ${({ rounded }) => (rounded ? '20px' : '0')};
  overflow: hidden;
  border-radius: var(--radius);
`

const OverlayTitleContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 1;
`

const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));
`

export default CardImage
