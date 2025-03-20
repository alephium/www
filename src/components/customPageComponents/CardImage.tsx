import styled from 'styled-components'

interface CardImageProps {
  rounded?: boolean
}

const CardImage = styled.img<CardImageProps>`
  width: 82px;
  height: 82px;
  margin-bottom: 30px;
  border-radius: ${({ rounded }) => (rounded ? '20px' : '0')};
`

export default CardImage
