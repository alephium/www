import { FC } from 'react'
import styled from 'styled-components'

interface SocialMediaIconProps {
  url: string
  name: string
  ImageComponent: FC
  className?: string
  trackingName?: string
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ url, ImageComponent, name, className, trackingName }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    aria-label={`Visit our ${name}`}
    data-goatcounter-click={trackingName}
  >
    <ImageComponent />
  </a>
)

export default styled(SocialMediaIcon)`
  svg {
    width: var(--width-82);
    fill: ${({ theme }) => theme.textPrimary};
  }

  transition: all 0.1s ease-out;

  &:hover {
    transform: translateY(calc(var(--spacing-half) * -1));
  }
`
