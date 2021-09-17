import React, { FC } from 'react'
import styled from 'styled-components'

interface SocialMediaIconProps {
  url: string
  ImageComponent: FC
  className?: string
}

let SocialMediaIcon: FC<SocialMediaIconProps> = ({ url, ImageComponent, className }) => (
  <a href={url} target="_blank" rel="noopener" className={className}>
    <ImageComponent />
  </a>
)

SocialMediaIcon = styled(SocialMediaIcon)`
  svg {
    width: var(--width-120);
    fill: ${({ theme }) => theme.textPrimary};
  }
`

export default SocialMediaIcon
