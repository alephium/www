import { motion } from 'framer-motion'
import { FC } from 'react'
import styled from 'styled-components'

interface SocialMediaIconProps {
  url: string
  name: string
  ImageComponent: FC
  displayName?: boolean
  className?: string
  trackingName?: string
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({
  url,
  ImageComponent,
  name,
  displayName,
  className,
  trackingName
}) => (
  <div className={className}>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${name}`}
      data-goatcounter-click={trackingName}
    >
      <ImageComponent />
    </a>
    {displayName && <Title>{name}</Title>}
  </div>
)

const Title = styled(motion.div)`
  color: ${({ theme }) => theme.textTertiary};
  transition: all 0.1s ease-out;
  margin-top: var(--spacing-1);
  width: 100%;
  text-align: center !important;
  font-size: var(--fontSize-15);
`

export default styled(SocialMediaIcon)`
  svg {
    width: 60px;
    height: 60px;
    opacity: 0.8;

    * {
      fill: ${({ theme }) => theme.textPrimary} !important;
    }
  }

  transition: all 0.1s ease-out;

  &:hover {
    svg {
      opacity: 1;
    }

    ${Title} {
      color: ${({ theme }) => theme.textPrimary};
    }
  }
`
