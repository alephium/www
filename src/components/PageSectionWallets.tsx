import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import Button from './Button'
import TextElement from './customPageComponents/TextElement'
import GatsbyImageWrapper from './GatsbyImageWrapper'

export interface PageSectionWalletsContentType {
  title: string
  subtitle: string
  description: string
  wallets: {
    title: string
    description: string
    screenshot?: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData | null
      } | null
    } | null
    color: string
    actions: {
      title: string
      link: string
      iconUrl?: string
      disabled?: boolean
    }[]
  }[]
}

export const WalletCard = ({
  title,
  description,
  screenshot,
  actions
}: PageSectionWalletsContentType['wallets'][number]) => (
  <WalletCardStyled>
    <WalletScreenShotContainer>
      <WalletScreenshot>
        {screenshot && (
          <GatsbyImageWrapper
            image={
              screenshot?.childImageSharp?.gatsbyImageData
                ? getImage(screenshot?.childImageSharp?.gatsbyImageData)
                : undefined
            }
            alt={title}
            style={{ height: '100%' }}
            objectFit="contain"
          />
        )}
      </WalletScreenshot>
    </WalletScreenShotContainer>
    <WalletTextContainer isBodySmall>
      <WalletTitle>{title}</WalletTitle>
      <WalletDescription>{description}</WalletDescription>
    </WalletTextContainer>
    <WalletActions>
      {actions.map((a) => (
        <ActionButton key={a.title} url={a.link} trackingName={`wallets-section:${a.title}-link`} squared>
          {a.title}
        </ActionButton>
      ))}
    </WalletActions>
  </WalletCardStyled>
)

export const WalletCards = styled.div`
  display: flex;
  gap: 50px;
  padding: var(--spacing-4) 0;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    align-items: center;
  }
`

const WalletScreenShotContainer = styled.div`
  position: relative;
  display: flex;
  height: 280px;
  padding: var(--spacing-2);
  overflow: hidden;
`

const WalletScreenshot = styled.div`
  width: 100%;
  object-fit: contain;
  z-index: 1;
`

const WalletCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background2};
  backdrop-filter: blur(30px);
  border-radius: var(--radius);
  max-width: 400px;
  overflow: hidden;
`

const WalletTextContainer = styled(TextElement)`
  flex: 1;
  padding: var(--spacing-4);
  line-height: var(--lineHeight-26);
`

const WalletTitle = styled.h3`
  margin-top: 0;
  font-weight: 500;
  margin-bottom: var(--spacing-4);
`

const WalletDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
`

const WalletActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 var(--spacing-4) var(--spacing-4);
`

const ActionButton = styled(Button)``
