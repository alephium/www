import styled from 'styled-components'

interface CardImageProps {
  rounded?: boolean
}

const CardImage = styled.img<CardImageProps>`
  width: 82px;
  height: 82px;
  border-radius: ${({ rounded }) => (rounded ? 'var(--radius)' : '0')};
`

export default CardImage
