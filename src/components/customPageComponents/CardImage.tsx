import styled from 'styled-components'

interface CardImageProps {
  rounded?: boolean
  size?: number
}

const CardImage = styled.img<CardImageProps>`
  width: ${({ size }) => (size ? `${size}px` : '80px')};
  height: ${({ size }) => (size ? `${size}px` : '80px')};
  border-radius: ${({ rounded }) => (rounded ? 'var(--radius-small)' : '0')};
`

export default CardImage
