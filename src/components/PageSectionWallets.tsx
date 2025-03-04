import { colord } from 'colord'
import { motion } from 'framer-motion'
import { useState } from 'react'
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
    color: string
    actions: {
      title: string
      link: string
      iconUrl?: string
      disabled?: boolean
    }[]
  }[]
}

interface PageSectionTextImageAlternateProps {
  className?: string
  content: PageSectionWalletsContentType
}

const PageSectionWallets = ({
  content: { title, subtitle, description, wallets }
}: PageSectionTextImageAlternateProps) => (
  <SectionWrapper>
    <StyledSectionTextHeader id="wallets" title={title} subtitle={subtitle} bigSubtitle bigText centered />
    <CenteredDescription>
      <span>{description}</span>
    </CenteredDescription>
    <WalletCards>
      {wallets.map((w) => (
        <WalletCard key={w.title} {...w}></WalletCard>
      ))}
    </WalletCards>
    <ParallaxBackground>
      <GradientBubble speed={-10} positionPercentage={[5, 5]} scale={2} blur={10} gradientVariant={2} />
      <GradientBubble speed={-5} positionPercentage={[0, 20]} scale={1} blur={10} gradientVariant={1} />
      <GradientBubble speed={-20} positionPercentage={[80, 30]} scale={2} blur={15} gradientVariant={4} />
      <GradientBubble speed={-2} positionPercentage={[90, 80]} scale={2} blur={10} gradientVariant={3} />
      <GradientBubble speed={30} positionPercentage={[80, 10]} scale={6} blur={20} gradientVariant={1} />
      <GradientBubble speed={20} positionPercentage={[0, 90]} scale={6} blur={20} gradientVariant={0} />
    </ParallaxBackground>
  </SectionWrapper>
)

const WalletCard = ({
  title,
  description,
  screenshot,
  color,
  actions
}: PageSectionWalletsContentType['wallets'][number]) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <WalletCardStyled onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <WalletScreenShotContainer
        style={{
          backgroundColor: colord(color)
            .alpha(isHovered ? 0.1 : 0.05)
            .toHex()
        }}
      >
        <WalletScreenshot
          src={screenshot.publicURL}
          alt="Desktop wallet screenshot"
          animate={{ scale: isHovered ? 1.04 : 1 }}
        />
      </WalletScreenShotContainer>
      <WalletTextContainer>
        <WalletTitle>{title}</WalletTitle>
        <WalletDescription>{description}</WalletDescription>
      </WalletTextContainer>
      <WalletActions>
        {actions.map((a) => (
          <ActionButton key={a.title} url={a.link} trackingName={`wallets-section:${a.title}-link`}>
            {a.title}
          </ActionButton>
        ))}
      </WalletActions>
    </WalletCardStyled>
  )
}

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

const WalletScreenShotContainer = styled.div`
  position: relative;
  display: flex;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
  height: 280px;
  padding: var(--spacing-2);
  overflow: hidden;
`

const WalletScreenshot = styled(motion.img)`
  width: 100%;
  object-fit: contain;
  z-index: 1;
`

const WalletCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgPrimary};
  backdrop-filter: blur(30px);
  border-radius: 20px;
  max-width: 400px;
  overflow: hidden;
  text-align: center;
`

const WalletTextContainer = styled.div`
  flex: 1;
  padding: var(--spacing-4);
  line-height: var(--lineHeight-26);
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

const ActionButton = styled(Button)``

const ParallaxBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`
