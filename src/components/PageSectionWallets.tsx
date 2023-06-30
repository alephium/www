import styled from 'styled-components'
import { deviceBreakPoints } from '../styles/global-style'
import Button from './Button'
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
  </SectionWrapper>
)

const WalletCard = ({ title, description, screenshot, actions }: PageSectionWalletsContentType['wallets'][number]) => (
  <WalletCardStyled>
    <WalletScreenShotContainer>
      <WalletScreenshot src={screenshot.publicURL} alt="Desktop wallet screenshot" />
    </WalletScreenShotContainer>
    <WalletTextContainer>
      <WalletTitle>{title}</WalletTitle>
      <WalletDescription>{description}</WalletDescription>
    </WalletTextContainer>
    <WalletActions>
      <Button />
      <Button />
    </WalletActions>
  </WalletCardStyled>
)

export default PageSectionWallets

const SectionWrapper = styled.section`
  padding-top: var(--spacing-16);
  background-color: ${({ theme }) => theme.bgTertiary};
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

const WalletCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgPrimary};
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  border-radius: 9px;
  max-width: 400px;
  overflow: hidden;
  text-align: center;
`

const WalletScreenShotContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bgTertiary};
  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
`

const WalletScreenshot = styled.img`
  width: 100%;
  object-fit: contain;
`

const WalletTextContainer = styled.div`
  flex: 1;
  padding: var(--spacing-4);
`

const WalletTitle = styled.h2`
  margin-top: 0;
`

const WalletDescription = styled.span`
  color: ${({ theme }) => theme.textSecondary};
`

const WalletActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: var(--spacing-2);
`
