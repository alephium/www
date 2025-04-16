import styled from 'styled-components'

interface CardImageProps {
  rounded?: boolean
}

const CardImage = styled.img<CardImageProps>`
  width: 82px;
  height: 82px;
`

export default CardImage
