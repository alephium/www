import styled from 'styled-components'
import { deviceBreakPoints } from '../styles/global-style'
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
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 20px;
  z-index: 10001;
  font-size: 14px;

  @media ${deviceBreakPoints.mobile} {
    padding-right: 30px;
    padding-left: 30px;
  }

  @media ${deviceBreakPoints.smallMobile} {
    padding-right: 20px;
    padding-left: 20px;
  }
`

const BannerText = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: black;

  @media ${deviceBreakPoints.smallMobile} {
    font-size: 13px;
  }
`
