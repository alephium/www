import styled from 'styled-components'
import Button from './Button'

export interface TopBannerContentType {
  text: string
  linkText: string
  url: string
  color: string
}

export interface TopBannerProps {
  content: TopBannerContentType
  className?: string
}

const TopBanner = ({ content: { text, linkText, url, color }, className }: TopBannerProps) =>
  text ? (
    <TopBannerContainer className={className} style={{ backgroundColor: color }}>
      <BannerText>{text}</BannerText>
      <Button url={url} newTab trackingName="top-banner:main-link">
        {linkText}
      </Button>
    </TopBannerContainer>
  ) : null

export default TopBanner

const TopBannerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 10px;
  z-index: 10001;
  font-size: 14px;
`

const BannerText = styled.div``
