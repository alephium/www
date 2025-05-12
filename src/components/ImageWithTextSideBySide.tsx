import { FC } from 'react'
import styled, { css } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

interface ImageWithTextSideBySideProps {
  image: string
  imageAlt: string
  imageOnRight?: boolean
  className?: string
}

const ImageWithTextSideBySide: FC<ImageWithTextSideBySideProps> = ({ image, imageAlt, className, children }) => (
  <div className={className}>
    <img src={image} alt={imageAlt} />
    <div>{children}</div>
  </div>
)

export default styled(ImageWithTextSideBySide)`
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
  margin-top: var(--spacing-2);

  @media ${deviceBreakPoints.smallMobile} {
    flex-direction: column;
    gap: var(--spacing-2);
    margin-top: var(--spacing-4);
  }

  img {
    width: 30%;

    ${({ imageOnRight }) =>
      imageOnRight &&
      css`
        order: 1;
      `}

    @media ${deviceBreakPoints.smallMobile} {
      width: 50%;
      order: 0;
    }
  }
`
