import styled from 'styled-components'
import { deviceBreakPoints } from '../styles/global-style'
import Button from './Button'
import GradientBubble from './GradientBubble'
import SectionTextHeader from './SectionTextHeader'

export interface PageSectionWalletsContentType {
  title: string
  subtitle: string
  description: string
  wallets: {
    title: string
    description: string
    screenshot: { publicURL: string }
    actions: {
      title: string
      link: string
      color: string
      iconUrl?: string
      disabled?: boolean
    }[]
  }[]
}

interface PageSectionTechnologyProps {
  className?: string
  content: PageSectionWalletsContentType
}

const PageSectionWallets = ({ content: { title, subtitle, description, wallets } }: PageSectionTechnologyProps) => (
  <SectionWrapper>
    <StyledSectionTextHeader id="wallets" title={title} subtitle={subtitle} bigSubtitle bigText sticky centered />
    <CenteredDescription>
      <span>{description}</span>
    </CenteredDescription>
    <WalletCards>
      {wallets.map((w) => (
        <WalletCard key={w.title} {...w}></WalletCard>
      ))}
    </WalletCards>
    <ParallaxBackground>
      <GradientBubble speed={-10} positionPercentage={[5, 5]} scale={2} blur={10} />
      <GradientBubble speed={-5} positionPercentage={[0, 20]} scale={1} blur={10} />
      <GradientBubble speed={-20} positionPercentage={[80, 30]} scale={2} blur={15} />
      <GradientBubble speed={-2} positionPercentage={[90, 80]} scale={2} blur={10} />
      <GradientBubble speed={30} positionPercentage={[80, 10]} scale={6} blur={20} />
      <GradientBubble speed={20} positionPercentage={[0, 90]} scale={6} blur={20} />
    </ParallaxBackground>
  </SectionWrapper>
)

const WalletCard = ({ title, description, screenshot, actions }: PageSectionWalletsContentType['wallets'][number]) => (
  <WalletCardStyled>
    <WalletScreenShotContainer>
      <ScreenshotHighlightGradient />
      <WalletScreenshot src={screenshot.publicURL} alt="Desktop wallet screenshot" />
    </WalletScreenShotContainer>
    <WalletTextContainer>
      <WalletTitle>{title}</WalletTitle>
      <WalletDescription>{description}</WalletDescription>
    </WalletTextContainer>
    <WalletActions>
      {actions.map((a) => (
        <ActionButton key={a.title} url={a.link} color={a.color} newTab disabled={a.disabled}>
          {a.title}
        </ActionButton>
      ))}
    </WalletActions>
  </WalletCardStyled>
)

export default PageSectionWallets

const SectionWrapper = styled.section`
  position: relative;
  padding-top: var(--spacing-16);
  padding-bottom: var(--spacing-16);
  background-color: ${({ theme }) => theme.bgTertiary};
  z-index: 0;
`

const StyledSectionTextHeader = styled(SectionTextHeader)`
  margin-bottom: var(--spacing-8);
`

const CenteredDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--spacing-8);
  color: ${({ theme }) => theme.textTertiary};

  text-align: center;
  font-size: var(--fontSize-18);
  line-height: var(--lineHeight-26);

  span {
    width: 40%;
    max-width: 500px;
    min-width: 260px;
  }
`

const WalletCards = styled.div`
  display: flex;
  gap: 50px;
  padding: var(--spacing-4);
  justify-content: center;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    align-items: center;
  }
`

const ScreenshotHighlightGradient = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 60%;
  z-index: 0;
  transition: all 0.5s ease-out;
`

const WalletScreenShotContainer = styled.div`
  position: relative;
  display: flex;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
  height: 280px;
  padding: var(--spacing-2);
  overflow: hidden;
`

const WalletScreenshot = styled.img`
  width: 100%;
  object-fit: contain;
  z-index: 1;
  transition: all 0.1s ease-out;
`

const WalletCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  backdrop-filter: blur(30px);
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  border-radius: 9px;
  max-width: 400px;
  overflow: hidden;
  text-align: center;

  &:hover {
    &:nth-child(1) ${ScreenshotHighlightGradient} {
      background: radial-gradient(at bottom, rgba(153, 0, 255, 0.3) 0%, rgba(153, 0, 255, 0) 70%);
    }

    &:nth-child(2) ${ScreenshotHighlightGradient} {
      background: radial-gradient(at bottom, rgba(255, 94, 0, 0.3) 0%, rgba(255, 94, 0, 0) 70%);
    }

    &:nth-child(3) ${ScreenshotHighlightGradient} {
      background: radial-gradient(at bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
    }

    ${WalletScreenshot} {
      transform: scale(1.1);
    }
  }
`

const WalletTextContainer = styled.div`
  flex: 1;
  padding: var(--spacing-4);
`

const WalletTitle = styled.h2`
  margin-top: 0;
  font-weight: 500;
  margin-bottom: var(--spacing-4);
`

const WalletDescription = styled.span`
  color: ${({ theme }) => theme.textSecondary};
`

const WalletActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: var(--spacing-4);
`

const ActionButton = styled(Button)<{ color: string }>`
  background-color: ${({ theme }) => theme.bgSurface};

  svg > * {
    fill: ${({ color }) => color};
  }
`

const ParallaxBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`
